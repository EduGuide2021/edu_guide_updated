import React from "react";
import "./Card.css";
function Card({ title, imageUrl }) {
  return (
    <div className="card-container" align="center">
     <p className="card-text">{title}</p> 
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      {/* <div className="card-title" align='center"'>
        
        <br></br>
      </div> */}
      cio
    </div>
  );
}

export default Card;
