import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async (query) => {
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <SearchBar onSearch={handleSearch} />

      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book.volumeInfo} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
