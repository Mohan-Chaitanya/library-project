const library = [];

var books = [];

function bookLoop(arr) {
    for (i = 0; i < arr.length; i++) {
        let bookRack = document.createElement('div');
        bookRack.setAttribute('id', 'bookShelf');

        let titleDiv = document.createElement('div');
        titleDiv.innerHTML = 'Title: ' + arr[i].title;

        let authorDiv = document.createElement('div');
        authorDiv.innerHTML = 'Author: ' + arr[i].author;

        let pagesDiv = document.createElement('div');
        pagesDiv.innerHTML = 'Pages: ' + arr[i].pages;

        let statusDiv = document.createElement('div');
        statusDiv.innerHTML = 'Read this book? ' + arr[i].status;

        var removeButton = document.createElement('button');
        removeButton.setAttribute('id', 'btnRemove');
        let bookRemove = document.createTextNode('Remove');
        removeButton.appendChild(bookRemove);
        bookRack.appendChild(titleDiv);
        bookRack.appendChild(authorDiv);
        bookRack.appendChild(pagesDiv);
        bookRack.appendChild(statusDiv);
        bookRack.appendChild(removeButton);
        // bookRack.style.border = '1px solid black';
        // bookRack.style.margin = '1rem';
        document.getElementById('container').appendChild(bookRack);
        removeButton.addEventListener('click', removeFunction);
    }
    books = [];
}

var userBookObj = {};

function userBook(val1, val2, val3, val4) {
    userBookObj['title'] = val1;
    userBookObj['author'] = val2;
    userBookObj['pages'] = val3;
    userBookObj['status'] = val4;
    books.push(userBookObj);
    bookLoop(books);
    let clone = { ...this.userBookObj };
    library.push(clone);

}

function removeFunction() {
    this.parentElement.remove();
}

function displayForm() {
    let formAppear = document.getElementById('bookForm');
    formAppear.style.display = 'flex';
}

function submitForm() {
    var newBook = document.getElementById('bookTitle').value;
    var newAuthor = document.getElementById('bookAuthor').value;
    var totalPages = document.getElementById('bookPages').value;
    var bookStatus = document.getElementById('readStatus').value;
    userBook(newBook, newAuthor, totalPages, bookStatus);
    console.log(newBook, newAuthor, totalPages, bookStatus);
    document.querySelector('.addBook').reset();
    let formAppear = document.getElementById('bookForm');
    formAppear.style.display = 'none';
}