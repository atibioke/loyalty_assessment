import { useNavigate } from 'react-router';
import "./style.css";

const CardItem = ({ name, authors, isbn, released, publisher, index}) => {
  let navigate = useNavigate();
  const handleClick =  (index) => {

    navigate(`/book/${index+1}`);

  };

  return (
    <div className="card-item-container" onClick={() => handleClick(index)}>
      <div className="card-details-container">
        <div className="card-paragraph">
          <header className="card-title">{name}</header>
          <div className="card-details">{authors}</div>
          <div className="card-details">isbn: {isbn}</div>
          <div className="card-details">Publisher: {publisher}</div>

          {/* <div className="card-details card-detail">
            {content.split("[")[0]}
          </div> */}
        </div>

        <div>
          <div className="third-section">
            <div className="card-items">
              {/* <a href={url} className="more-details">
                Read full story
              </a> */}

              {/* <div>
                <span
                  className="bookmark"
                  onClick={() => setBookmark(!bookmark)}
                >
                  <img
                    src="/bookmark-logo.png"
                    className={bookmark ? "bookmark-img" : ""}
                    alt="bookmark-logo"
                  />{" "}
                  Add to bookmarks
                </span>
              </div> */}

              <div>
                <span className="time-container">
                 
                  
                  {new Date(released).getDate() }/{new Date(released).getMonth() + 1} /{new Date(released).getFullYear()} 
                
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
