const form = document.querySelector('.book-form');
const bookGrid = document.querySelector('.book-grid');
const books = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const isRead = document.getElementById('is-read').checked;
    const bookId = crypto.randomUUID();

    const newBook = {
        id: bookId,
        title: title,
        author: author,
        pages: pages,
        isRead: isRead
    };

    books.push(newBook)

    const card = document.createElement('div');
    card.classList.add('book-card');

    const bookTitle = document.createElement('h3');
    bookTitle.textContent = `"${title}"`;

    const bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = `<strong>Author: </strong> ${author}`;

    const bookPages = document.createElement('p');
    bookPages.innerHTML = `<strong>Pages: </strong> ${pages}`;

    const bookStatus = document.createElement('p');
    bookStatus.innerHTML = `<strong>Status: </strong> ${isRead ? 'Yes' : 'No'}`;

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle';
    toggleButton.addEventListener('click', () => {
        const bookIndex = books.findIndex(book => book.id === bookId);
        if (bookIndex !== -1) {
            books[bookIndex].isRead = !books[bookIndex].isRead;
            bookStatus.innerHTML = `<strong>Status: </strong> 
            ${books[bookIndex].isRead ? 'Yes' : 'No'}`;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        const bookIndex = books.findIndex(book => book.id === bookId);
        if (bookIndex !== -1) {
            books.splice(bookIndex, 1);
        }
        card.remove();
    });

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(toggleButton);
    card.appendChild(deleteButton);

    bookGrid.appendChild(card);

    form.reset();
});