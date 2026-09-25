# 📚 Book Tracker Application

A full-stack web application that helps users **track and manage the books they have read**. The application allows users to add, view, update, and delete book records while storing the information in a PostgreSQL database.

## 🚀 Features

* ➕ Add new books
* 📖 View all tracked books
* ✏️ Update existing book details
* 🗑️ Delete books
* 📅 Store the date a book was read
* ⭐ Add a rating for each book
* 📝 Add personal notes
* 💾 Persistent data storage using PostgreSQL
* 📱 Responsive and clean user interface

## 🛠️ Technologies Used

* **Frontend:** HTML, CSS, EJS
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Templating:** EJS

## 📂 Project Structure

```text
Book-Tracker/
│
├── public/
│   └── styles.css
│
├── views/
│   ├── index.ejs
│   └── add-book.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

> File and folder names may vary depending on your final project structure.

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Book-Tracker
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Up PostgreSQL

Create a PostgreSQL database for the application.

Example:

```sql
CREATE DATABASE book_tracker;
```

Create the required books table according to the fields used by the application, such as:

```sql
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    read_date DATE,
    rating INTEGER,
    notes TEXT
);
```

### 5. Configure Database Connection

Update the PostgreSQL connection details in your Node.js application.

For example:

```javascript
const db = new pg.Client({
    user: "your_username",
    host: "localhost",
    database: "book_tracker",
    password: "your_password",
    port: 5432
});
```

**Do not upload real database passwords or other credentials to GitHub.**

### 6. Start the Application

```bash
node index.js
```

Then open the application in your browser at:

```text
http://localhost:3000
```

## 🔄 How It Works

1. The user opens the Book Tracker application.
2. Existing books are retrieved from PostgreSQL.
3. The user can add a new book with its reading information.
4. Book details can be updated when required.
5. Unwanted records can be deleted.
6. All changes are stored in the PostgreSQL database.

## 🎯 Project Objective

The main objective of this project is to build a practical **CRUD-based full-stack web application** while gaining hands-on experience with **Node.js, Express.js, EJS, and PostgreSQL**.

## 📚 What I Learned

* Building server-side applications with Node.js and Express.js
* Working with PostgreSQL databases
* Performing CRUD operations
* Connecting a backend application with a relational database
* Using EJS for dynamic web pages
* Handling routes and form submissions
* Structuring a full-stack web application
* Creating a responsive user interface with CSS

## 👨‍💻 Author

**Himanshu**

B.Tech Computer Science Engineering Student

Interested in **Full Stack Development and AI-integrated applications**.
