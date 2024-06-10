import React, { useEffect, useState } from "react";
import "../App.css";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className='bookshelf-list'>
        {bookshelf.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          bookshelf.map((book, index) => (
            <div className='bookshelf-card' key={index}>
              <h3>Book Title: {book.title}</h3>
              <p>Edition Count: {book.edition_count}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookshelfPage;
