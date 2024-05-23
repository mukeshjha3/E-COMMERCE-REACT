import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionobx-nav-box">Description</div>
        <div className="descriptionobx-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero
          laboriosam facilis, eveniet reprehenderit perspiciatis, quae
          consequatur laudantium voluptates, distinctio esse ab nam veniam
          alias?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          commodi voluptatem ipsa quo a quos!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
