// components/BookCard.js
import React from 'react';

function BookCard({ book }) {
  return (
    <div className="book-card">
      {book.imageLinks?.thumbnail && (
        <img src={book.imageLinks.thumbnail} alt={book.title} />
      )}
      <h3>{book.title}</h3>
      <p>{book.authors?.join(', ')}</p>
      {book.previewLink && (
        <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
          Preview
        </a>
      )}
    </div>
  );
}

export default BookCard;
