import React, { useState } from "react";
import BookCard from "./BookCard";

const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        available: true,
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        available: false,
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Science Fiction",
        available: true,
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        available: true,
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        available: false,
    },
];

const BookLibrary = () => {
    const [filter, setFilter] = useState('all');

    const filteredBooks = books.filter(book =>
        filter === 'all' ? true : book.available
    );

    return(
        <div>
            <h2>My Book Library</h2>
            <div>
                <button onClick={() => setFilter('all')}>All Books</button>
                <button onClick={() => setFilter('available')}>Available Books</button>
            </div>
            <div>
                {filteredBooks.map(book => (
                    <BookCard key={book.id} {...book}/>
                ))}
            </div>
        </div>
    )
}

export default BookLibrary;