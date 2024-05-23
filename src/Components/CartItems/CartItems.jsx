import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icons from "../Assests/cart_cross_icon.png";

const CartItems = () => {

  const { all_product, cartItems, addtoCart, removeFromCart,getTotalCartAmount } = useContext(ShopContext);


  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((element) => {
        if (cartItems[element.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img
                  className="cartitems-product-icon"
                  src={element.image}
                  alt="element-image"
                />
                <p>{element.name}</p>
                <p>${element.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[element.id]}
                </button>
                <p>${element.new_price * cartItems[element.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  onClick={() => {
                    removeFromCart(element.id);
                  }}
                  src={remove_icons}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter Your PromoCode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
