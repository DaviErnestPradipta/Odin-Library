const form = document.querySelector('.book-form');
const bookGrid = document.querySelector('.book-grid');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const isRead = document.getElementById('is-read').checked;

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
        bookStatus.innerHTML = `<strong>Status: </strong> 
        ${(bookStatus.innerHTML.includes('Yes')) ? 'No' : 'Yes'}`
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        card.remove();
    });

    // Add everything into the card
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(toggleButton);
    card.appendChild(deleteButton);

    // Add the card to the grid
    bookGrid.appendChild(card);

    // Reset the form
    form.reset();
});