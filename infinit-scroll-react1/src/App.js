import React, { useState, useRef, useCallback } from 'react';
import useBookSearch from './useBookSearch';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, books, hasMore, error } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBook = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entry => {
        if (entry[0].isIntersecting && hasMore) {
          setPageNumber(p => p + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      <input type="text" onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBook} key={book}>
              {book}
            </div>
          );
        } else {
          return <div key={book}>{book}</div>;
        }
      })}
      <div>{loading && 'Loading.....'}</div>
      <div>{error && 'Error.....'}</div>
    </>
  );
}

export default App;
