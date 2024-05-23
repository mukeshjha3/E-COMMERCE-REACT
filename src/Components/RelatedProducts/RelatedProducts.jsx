import React from "react";
import "./RelatedProduct.css";
import data_product from "../Data/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
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

export default RelatedProducts;
