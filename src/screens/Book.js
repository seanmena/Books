import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useUserAuth } from "../components/UserAuthContext";
import { db } from "../firebase";
import "./Book.css";

const Book = () => {
  const user = useUserAuth();
  var uid = user.user.uid;

  let API_URL = "https://www.googleapis.com/books/v1/volumes";

  const booksCollectionRef = collection(db, "Books");

  // const [bookState, setBookState] = useState("");

  const [books, setBooks] = useState({ items: [] });
  const [searchTerm, setSearhTerm] = useState("");

  const onInputChange = (e) => {
    setSearhTerm(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetchBooks();
  };

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
    console.log(result.data);
  };

  return (
    <div className="search-hero">
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>
            <h1 className="title">Search for your book!</h1>
            <input
              className="search-bar"
              type="search"
              placeholder="The Lightning Thief, Life of pi, etc.."
              value={searchTerm}
              onChange={onInputChange}
            ></input>
            <button className="submit-btn" type="submit">
              GO
            </button>
          </label>
        </form>

        <ul>
          {books.items.map((book, index) => {
            let title = book.volumeInfo.title;
            let author = book.volumeInfo.authors && book.volumeInfo.authors[0];
            let image = `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;

            const handleClick = async (e) => {
              console.log(title + author);

              try {
                await addDoc(booksCollectionRef, {
                  Uid: uid,
                  Title: title,
                  Author: author,
                  Img: image,
                });
              } catch (e) {
                console.log("error reading", e);
              }
              alert("added to my books");
            };

            return (
              <li key={index}>
                <div className="book-cont">
                  <img
                    className="book-img"
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />

                  <div className="lil-div">
                    <h3 className="book-title">{book.volumeInfo.title} </h3>
                    <p className="book-author">{book.volumeInfo.authors} </p>
                    <p className="book-desc">
                      {book.volumeInfo.description}
                      <button onClick={handleClick} className="add">
                        Add to "My Books"
                      </button>
                    </p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Book;
