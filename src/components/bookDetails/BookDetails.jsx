import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navabar/Navbar";
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

            <div className="detail-container">
              <p>Name: {bookDetails.name}</p>
              <p>Authors: {bookDetails.authors}</p>
              <p>Publisher: {bookDetails.publisher}</p>
              <p>Country: {bookDetails.country}</p>
              <p>Num Of Pages: {bookDetails.numberOfPages}</p>
              <p>isbn: {bookDetails.isbn}</p>
              <p>Characters: {bookDetails.characters.length}</p>
              <p>Media Type: {bookDetails.mediaType}</p>

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
