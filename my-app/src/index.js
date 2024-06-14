import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// function Greeting() {
//     return (<h2>My First Component</h2>)
    
// }

import { books } from './books.js';
import Book from './Book';
function BookList() {
    return (
      <>
        <h1>amazon best sellers</h1>
        <section className='booklist'>
          {books.map((book) => {
            return <Book {...book} key={book.id} />;
          })}
        </section>
      </>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greeting/>)
root.render(<BookList />);