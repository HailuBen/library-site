function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You have not used 'new' operator to call the constructor!");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.bookInfo = function() {
        return this.title+"\n"+this.author+"\n"+this.pages+"\n"+this.read
    };
}

const book1 = new Book('A Gentleman in Moscow', 'Amor Towles', '462', 'Not read');
console.log(book1.bookInfo());

Object.getPrototypeOf(book1) === Book.prototype;
Object.getPrototypeOf(Book.prototype) === Object.prototype; // true
// Output may slightly differ based on the browser
book1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
