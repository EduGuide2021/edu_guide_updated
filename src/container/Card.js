import React from "react";
import "./Card.css";
function Card({ title, imageUrl, footer }) {
  return (
    <div className="card-container" align="center">
     <p className="card-text">{title}</p> 
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      {/* <div className="card-title" align='center"'>
        
        <br></br>
      </div> */}
      <div align="right">
      <strong className="card-footer-text">{footer}</strong>
      </div>
    </div>
  );
}

export default Card;
