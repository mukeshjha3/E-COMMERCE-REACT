import React from "react";
import "./Popular.css";
import data_product from "../Data/data";
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((element, index) => {
          return (
            <Item
              key={index}
              id={element.id}
              name={element.name}
              image={element.image}
              new_price={element.new_price}
              old_price={element.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
