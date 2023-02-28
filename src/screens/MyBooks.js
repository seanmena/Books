import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../components/UserAuthContext";
import { db } from "../firebase";
import "./MyBooks.css";

const MyBooks = () => {
  var user = useUserAuth();
  var uid = user.user.uid;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (uid) {
      const q = query(collection(db, "Books"), where("Uid", "==", uid));

      const getBooks = async () => {
        const data = await getDocs(q);
        setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getBooks();
    }
  }, [uid]);

  return (
    <div>
      <h1 className="mybooks">Search and save your books here!</h1>
      {books.map((book, index) => {
        return (
          <div key={index} className="book-container">
            <img src={book.Img} className="book-img" alt="book cover"></img>
            <h1 className="mybook-title">{book.Title}</h1>
            <p className="mybook-author">{book.Author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MyBooks;
