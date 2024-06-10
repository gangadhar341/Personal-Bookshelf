import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "../components/BookList";
import { toast } from "react-toastify";
import "../App.css";

const BookSearchPage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  // Fetch books with a default query when the component mounts
  useEffect(() => {
    const fetchInitialBooks = async () => {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=bestsellers&limit=10&page=1`
      );
      setBooks(response.data.docs);
    };
    fetchInitialBooks();
  }, []);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length > 2) {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      setBooks(response.data.docs);
    } else {
      setBooks([]);
    }
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    if (!bookshelf.some((item) => item.key === book.key)) {
      bookshelf.push(book);
      localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
      toast.success("Book added to bookshelf!");
    } else {
      toast.warn("Book is already in the bookshelf.");
    }
  };

  return (
    <div>
      <div className='search-container'>
        <h1>Search by book name:</h1>
        <input
          type='text'
          value={query}
          onChange={handleSearch}
          placeholder="Type a book's name"
        />
        <button
          className='bookshelf-button'
          onClick={() => (window.location.href = "/bookshelf")}
        >
          My Bookshelf
        </button>
      </div>
      <BookList books={books} onAddToBookshelf={addToBookshelf} />
    </div>
  );
};

export default BookSearchPage;
