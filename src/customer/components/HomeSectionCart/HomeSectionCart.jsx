import React from "react";
import "./HomeSectionCart.css";

function HomeSectionCart({ props }) {
  return (
    
      <div className="home-section-card">
      <div>
        <div className="image-container">
          <img
            src={props.imageUrl}
            className="card-image"
            alt={props.title}
          />
        </div>
        <div className="card-content">
          <h3 className="brand-name">{props.brand}</h3>
          <p className="product-title">
            {props.title}
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default HomeSectionCart;
