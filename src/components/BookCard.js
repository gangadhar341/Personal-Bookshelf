import React from "react";
import "../App.css";
const BookCard = ({ book, onAddToBookshelf }) => {
  const { title, author_name } = book;

  return (
    <div className='book-card'>
      <h3>{title}</h3>
      <p>{author_name && author_name.join(", ")}</p>
      <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
