class Book {
    constructor(id, title, author, pages, isRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.bookGrid = document.querySelector('.book-grid');
        this.form = document.querySelector('.book-form');
        this.initializeForm();
    }

    initializeForm() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('title').value.trim();
            const author = document.getElementById('author').value.trim();
            const pages = document.getElementById('pages').value.trim();
            const isRead = document.getElementById('is-read').checked;

            if (!title || !author || !pages) {
                alert('Please fill in all fields.');
                return;
            }

            const bookId = crypto.randomUUID();
            const newBook = new Book(bookId, title, author, pages, isRead);
            this.addBook(newBook);
            this.form.reset();
        });
    }

    addBook(book) {
        this.books.push(book);
        this.renderBook(book);
    }

    removeBook(bookId) {
        this.books = this.books.filter(book => book.id !== bookId);
    }

    renderBook(book) {
        const card = document.createElement('div');
        card.classList.add('book-card');

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = `"${book.title}"`;

        const bookAuthor = document.createElement('p');
        bookAuthor.innerHTML = `<strong>Author: </strong> ${book.author}`;

        const bookPages = document.createElement('p');
        bookPages.innerHTML = `<strong>Pages: </strong> ${book.pages}`;

        const bookStatus = document.createElement('p');
        bookStatus.innerHTML = `<strong>Status: </strong> ${book.isRead ? 'Yes' : 'No'}`;

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle';
        toggleButton.addEventListener('click', () => {
            book.toggleReadStatus();
            bookStatus.innerHTML = `<strong>Status: </strong> ${book.isRead ? 'Yes' : 'No'}`;
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            this.removeBook(book.id);
            card.remove();
        });

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookStatus);
        card.appendChild(toggleButton);
        card.appendChild(deleteButton);

        this.bookGrid.appendChild(card);
    }
}

// Initialize the library
const library = new Library();