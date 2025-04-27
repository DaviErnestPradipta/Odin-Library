const form = document.querySelector('.book-form');
const bookGrid = document.querySelector('.book-grid');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const isRead = document.getElementById('is-read').checked;

    // Create a new book card
    const card = document.createElement('div');
    card.classList.add('book-card');
    
    card.innerHTML = `
        <h3>"${title}"</h3>
        <p><strong>Author: </strong> ${author}</p>
        <p><strong>Pages: </strong> ${pages}</p>
        <p><strong>Status: </strong> ${isRead ? 'Read' : 'Not Read Yet'}</p>
    `;

    bookGrid.appendChild(card);
    form.reset();
});