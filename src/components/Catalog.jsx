import { useEffect, useState } from "react";
import { getAllBooks } from "../services/bookService";
import BookCard from "./BookCard";

export default function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(books => setBooks(books));
  }, []);


  return (


    <div id="templatemo_content_right">
      {Object.values(books).map(b => <BookCard key={b._id} book={b} bookState={{books, setBooks}} />)}
    </div>
  );
}
