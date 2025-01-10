import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

export default function BookDetails() {
  const { bookId } = useParams();
  const books = useContext(BooksContext);

  const book = books.find((b) => b.id === parseInt(bookId));

  // simple logging for training - not relavant to the component operation
  useEffect(() => {
    console.log("bookId = " + bookId);
    console.log("book = " + book);
  });
  if (!book) {
    return (
      <div>
        <h1>Book Not Found</h1>
      </div>
    );
  }
  return (
    <div>
      <h2>{book.title}</h2>
      <h4>by {book.author}</h4>
      <p>{book.description}</p>
    </div>
  );
}
