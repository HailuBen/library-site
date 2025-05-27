const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const addBook = document.getElementById("submit");

function Book(title, author, pages, read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

bookList = new BookList()