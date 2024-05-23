import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icons from "../Components/Assests/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt="category-banner"
      />
      <div className="shopcategory-indexSort">
        <p>
          <span> Showing 1-12 </span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icons} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((element, index) => {
          if (element.category === props.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
