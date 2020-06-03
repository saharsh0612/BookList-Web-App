//Book class, represents a book
class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class: handles UI tasks
class UI {
    static displayBook() {
        const storedBooks = [
            {
                title: 'Book one',
                author: 'John Doe',
                isbn: '1234'
            },

            {
                title: 'Book two',
                author: 'Jamey Lannister',
                isbn: '4321'
            }
        ];

        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

//Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBook);

//Event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) =>{

    //prevent actual submit
    e.preventDefault();

    //get form values
    const title = document.querySelector('#title').value;
    const title = document.querySelector('#author').value;
    const title = document.querySelector('#isbn').value;
    

    //initiate book
    const book = new Book(title, author, isbn);
    
    Console.log(book)
});