const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const addBookButton = document.getElementById("submit");
const bookItemDiv = document.getElementById('book-item'); 

const bookListArr = []; 

addBookButton.addEventListener('click', function(){
    console.log("hi! You clicked Add Book");

    validateBookForm();
    displayBook();
    console.log();

})

function Book(title, author, pages, read, bookId) {
    if (!new.target) {
        throw Error("WARNING: 'new' operator NOT USED to call the constructor!");
    }
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.bookId=bookId;

    this.bookInfo=function(){
        let readCheck;
        if (!read){
            readCheck = 'Not read,'
        } else{
            readCheck = 'Have read,'
        }
        
        return this.title+', '+this.author+', '+this.pages+' pages, '+readCheck+' ID: '+this.bookId;
        //console.log(` ${this.title}' by '${this.author}', '${this.pages}' pages, '${readCheck} `);

    }
}

function validateBookForm(){
    // Check if input fields are empty & warn
    let titleInput = document.forms['bookForm'].title;
    let authorInput = document.forms['bookForm'].author;
    if (!titleInput.checkValidity() || !authorInput.checkValidity()) {
        alert("A field is empty. Please provide the Title and Author.");
    } else {
        console.log("ur valid type sh hahaaa");
    }
    if (bookListArr.length >= 10) {
        alert("You can only add up to 10 books.");
        return;
    }
}

function addBookToArray(book) {
    for (let i = 0; i < bookListArr.length; i++) {
        if (!bookListArr[i]) { // Check for empty slot
            bookListArr[i] = book; // Add the book object
            console.log(`Book added at index ${i}`);
            return;
        }
    }
    console.log('The book list is full! Unable to add the book.');
}

function displayBook(book){
    // STRUCTURE: bookListContainer<> bookItemDiv<> bookInfoContainer<>

    const bookListContainer = document.querySelector(".book-list-container");
    const bookItemDiv = document.createElement('div');  // book info parent div (outer dashed border)
    bookItemDiv.classList.add('book-item');
    bookListContainer.appendChild(bookItemDiv);  

    const bookInfoContainer = document.createElement('div');    //holds title, author, pages
    bookInfoContainer.classList.add('book-info-container');
    bookItemDiv.appendChild(bookInfoContainer);
    
    const bookTitleH3 = document.createElement('h3');
    const bookAuthorH3 = document.createElement('h3');
    const bookPagesPara = document.createElement('p');
    bookTitleH3.classList.add('book-title');
    bookAuthorH3.classList.add('book-author');
    bookPagesPara.classList.add('book-pages');
    bookInfoContainer.appendChild(bookTitleH3);
    bookInfoContainer.appendChild(bookAuthorH3);
    bookInfoContainer.appendChild(bookPagesPara);
    bookTitleH3.textContent = book.title;
    bookAuthorH3.textContent = book.author;
    bookPagesPara.textContent = book.pages;

    // favourite, delete button & read checkbox
    const bookBtnContainer = document.createElement('div');
    bookBtnContainer.classList.add('book-btn-container');
    bookItemDiv.appendChild(bookBtnContainer);

    const favBookBtn = document.createElement('button');
    const delBookBtn = document.createElement('button');
    favBookBtn.classList.add('fav-book-btn');
    delBookBtn.classList.add('delete-book-btn');
    bookBtnContainer.appendChild(favBookBtn);
    bookBtnContainer.appendChild(delBookBtn);

    const favBtnImg = document.createElement('img').src="img/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
    const delBtnImg = document.createElement('img').src="img/star_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
    //add alt text
    favBookBtn.setAttribute("Star shaped button to set book from book list as favourite.");
    delBookBtn.setAttribute("Trash can shaped button to remove book from book list.");
    favBtnImg.classList.add('filter-yellow');
    delBtnImg.classList.add('filter-red');


}




const book1 = new Book('The Stranger', 'Albert Camus', 261, true, 8256162);
console.log(book1.bookInfo());

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(this.name)
//   };
// }
// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
// const player3 = new Player('abeve', 'O');
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'
// console.log(player3.name); // 'abeve'