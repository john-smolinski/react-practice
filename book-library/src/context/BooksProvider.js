import { useEffect, useState } from "react";
import { BooksContext } from "./BooksContext";

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((result) => result.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <BooksContext.Provider value={books}>{children}</BooksContext.Provider>
  );
};
