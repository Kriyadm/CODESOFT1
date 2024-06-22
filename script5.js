// JavaScript for interaction
document.addEventListener('DOMContentLoaded', function () {
    const addBookForm = document.getElementById('addBookForm');
    const checkoutReturnForm = document.getElementById('checkoutReturnForm');
    const bookListContainer = document.getElementById('bookList');

    // Array to store added books (for demonstration purposes)
    let books = [];

    addBookForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = this.title.value;
        const author = this.author.value;
        const isbn = this.isbn.value;

        // Simulate adding book to the library (in real application, this would be an AJAX request)
        const newBook = {
            title,
            author,
            isbn,
            available: true
        };

        books.push(newBook);
        displayBooks();
        this.reset();
    });

    checkoutReturnForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const titleOrIsbn = this.titleOrIsbn.value.trim();

        // Find book by title or ISBN
        const bookIndex = books.findIndex(book => book.title === titleOrIsbn || book.isbn === titleOrIsbn);

        if (bookIndex !== -1) {
            const book = books[bookIndex];

            if (book.available) {
                book.available = false;
                alert(`Book "${book.title}" checked out successfully.`);
            } else {
                book.available = true;
                alert(`Book "${book.title}" returned successfully.`);
            }

            displayBooks();
        } else {
            alert('Book not found in the library.');
        }

        this.reset();
    });

    function displayBooks() {
        bookListContainer.innerHTML = '';

        books.forEach((book, index) => {
            const availability = book.available ? 'Available' : 'Not Available';
            const cardClass = book.available ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600';

            const bookHtml = `
                <div class="card p-4 mb-4 ${cardClass} fade-in">
                    <h3 class="font-semibold">${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>ISBN: ${book.isbn}</p>
                    <p class="availability">Availability: ${availability}</p>
                </div>
            `;
            bookListContainer.innerHTML += bookHtml;
        });
    }

    // Initial display of books
    displayBooks();
});
