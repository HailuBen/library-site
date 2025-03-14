const bookTitle = document.getElementById('book');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const bookAdd = document.getElementById('submit');

const bookListArr = new Array(10);  //book list array with max size of 10 items

bookAdd.addEventListener("click", function(){
    validateForm();
    const book3 = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'read');
    addBookToArray(book3);
    console.log(bookListArr);
});
 
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You have not used 'new' operator to call the constructor!");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.returnBookInfo = function() {
        return this.title+"\n"+this.author+"\n"+this.pages+"\n"+this.read
    };
}

function validateForm(){
    let bookValue = document.forms["bookForm"]["book"].value;
    let authorValue = document.forms["bookForm"]["author"].value;
    if (bookValue == ""){
        alert("Please enter the book's title.");
    } else if (authorValue == "") {
        alert("Please enter the book's author.");
    }
}

function addBookToArray(book){
    for (let i = 0; i < bookListArr.length; i++) {
        if (!bookListArr[i]) { // Check for empty slot
            bookListArr[i] = book; // Add the book object
            console.log(`Book added at index ${i}`);
            return;
        }
    }
    console.log('The book list is full! Unable to add the book.');
}

const book1 = new Book('A Gentleman in Moscow', 'Amor Towles', '462', 'Not read');
addBookToArray(book1);
console.log(book1.returnBookInfo());

//Object.getPrototypeOf(book1) === Book.prototype;
//Object.getPrototypeOf(Book.prototype) === Object.prototype; // true
// Output may slightly differ based on the browser
//book1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }

//Add a separate function to the script (not inside the constructor) that can: 
//  take some arguments, 
//  create a book from those arguments, and
//  store the new book object into an array

//const book2 = new Book();
// console.log(book2.bookInfo());
//console.log(bookTitle.innerHTML);
