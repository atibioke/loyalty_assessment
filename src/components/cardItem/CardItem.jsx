import { useNavigate } from "react-router";
import "./style.css";

const CardItem = ({ name, authors, isbn, released, publisher, index }) => {
  let navigate = useNavigate();
  const handleClick = (index) => {
    navigate(`/book/${index + 1}`);
  };

  return (
    <div className="card-item-container" onClick={() => handleClick(index)}>
      <div className="card-details-container">
        <div className="card-paragraph">
          <header className="card-title">{name}</header>
            <div className="book-img-cover">
            <img className="card-image" src="/book-covers.jpg" alt="books we have to offer" />
               </div>

          {/* <div className="card-details">{authors}</div>
          <div className="card-details">isbn: {isbn}</div>
          <div className="card-details">Publisher: {publisher}</div> */}
        </div>

        <div>
          <div className="third-section">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
