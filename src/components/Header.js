import React from 'react';

const Header = ({ toggleTheme, darkMode }) => {
  return (
    <header className="app-header">
      <h1>Book Finder</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? ' Light Mode' : ' Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
