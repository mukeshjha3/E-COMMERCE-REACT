import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const { addtoCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="product-image-main"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star-icon1" />
          <img src={star_icon} alt="star-icon2" />
          <img src={star_icon} alt="star-icon3" />
          <img src={star_icon} alt="star-icon4" />
          <img src={star_dull_icon} alt="star-dull-icon" />
          <p>{122}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          pariatur cupiditate dolores numquam quae! Reiciendis fugit praesentium
          cupiditate aliquam suscipit ad magni molestiae dolor quos!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>Small</div>
            <div>Medium</div>
            <div>Large</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addtoCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category} , T-Shirts, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
