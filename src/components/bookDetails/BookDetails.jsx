import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import { increase, decrease } from "../../features/counterSlice";
import { useDispatch } from "react-redux";

const BookDetails = () => {
  const dispatch = useDispatch();
  const [bookDetails, setBookDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { bookId } = useParams();
  const url = `https://www.anapioficeandfire.com/api/books/${bookId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBookDetails(data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <Navbar />
      <div className="outter-container">
        <h1>{loading ? "loading..." : ""}</h1>
        {!loading && (
          <div className="book-details-container">
            <div>
              <img className="book-image" src="/book-covers.jpg" alt="book" />
            </div>

            <div className="details-container">
              <p>
                {" "}
                <span>Name: </span>
                {bookDetails.name}
              </p>
              <p>
                {" "}
                <span>Authors: </span> {bookDetails.authors}
              </p>
              <p>
                <span>Publisher: </span> {bookDetails.publisher}
              </p>
              <p>
                <span>Country: </span> {bookDetails.country}
              </p>
              <p>
                <span>Num Of Pages: </span> {bookDetails.numberOfPages}
              </p>
              <p>
                <span> isbn: </span> {bookDetails.isbn}
              </p>
              <p>
                <span>Characters: </span> {bookDetails.characters.length}
              </p>
              <p>
                <span>Year: </span>
                {new Date(bookDetails.released).getDate()}/
                {new Date(bookDetails.released).getMonth() + 1}/
                {new Date(bookDetails.released).getFullYear()}
              </p>
              <p>
                <span> Media Type: </span> {bookDetails.mediaType}
              </p>
            

              <div className="add-to-cart">
                <button className="l-btn" onClick={() => dispatch(decrease())}>
                  -
                </button>
                <p>add to cart</p>
                <button className="r-btn" onClick={() => dispatch(increase())}>
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
