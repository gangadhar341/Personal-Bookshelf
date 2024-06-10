import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSearchPage from "./pages/BookSearchPage.js";
import BookshelfPage from "./pages/BookShelfPage.js";

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/bookshelf' element={<BookshelfPage />} />
        <Route exact path='/' element={<BookSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
