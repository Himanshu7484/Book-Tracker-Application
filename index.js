import bodyParser from 'body-parser';
import express from 'express';
import pg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Handle ES modules __dirname issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === DATABASE CONNECTION ===
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'book_tracer',
  password: 'Deep#2007', 
  port: 5432,
});
db.connect()
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch(err => console.error('❌ DB connection error:', err));

// === MIDDLEWARE ===
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, 'views'));

// === ROUTES ===

// 🏠 Home Page — Show all books
app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM books ORDER BY id ASC');
    const books = result.rows;
    res.render('index.ejs', { books });
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).send('Error retrieving books from database');
  }
});

// ➕ Add Book Form Page
app.get('/add', (req, res) => {
  res.render('add-book.ejs');
});

// 📘 Handle Book Submission
app.post('/add', async (req, res) => {
  const { title, author, finished_date, rating, notes } = req.body;
  const query =
    'INSERT INTO books (title, author, finished_date, rating, notes) VALUES ($1, $2, $3, $4, $5)';
  const values = [title, author, finished_date, parseInt(rating), notes];

  try {
    await db.query(query, values);
    console.log('✅ Book added successfully');
    res.redirect('/');
  } catch (err) {
    console.error('❌ Error adding book:', err);
    res.status(500).send('Error adding book to database');
  }
});

// 🗑 Delete Book
app.post('/delete/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    await db.query('DELETE FROM books WHERE id = $1', [bookId]);
    console.log('🗑 Book deleted');
    res.redirect('/');
  } catch (err) {
    console.error('❌ Error deleting book:', err);
    res.status(500).send('Error deleting book');
  }
});

// === SERVER START ===
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
