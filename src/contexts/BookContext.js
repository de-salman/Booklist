import React, { createContext, useState } from 'react';
const {v1 : uuid} = require('uuid')

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'alcamest', author: 'paulo', id: 1 },
        { title: 'meenakshi', author: 'narayani', id: 2 }
    ]);
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id:uuid() }]);
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;