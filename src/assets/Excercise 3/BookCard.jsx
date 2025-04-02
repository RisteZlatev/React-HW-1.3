import React from "react";

const BookCard = ({title, author, genre, available}) =>{
    return(
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{genre}</p>
            <p>{available ? 'Available' : "Checked out"}</p>
        </div>
    )
}

export default BookCard;