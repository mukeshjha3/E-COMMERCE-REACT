import React from "react";
import "./NewCollection.css";
import new_collections from "../Data/new_collections";
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((element, index) => {
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

export default NewCollection;
