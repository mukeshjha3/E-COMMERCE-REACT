import { createContext, useState } from "react";
import all_product from "../Components/Data/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addtoCart = (itemId) => {
    setCartItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = all_product.find((product) => product.id === Number(item));
        if (iteminfo) {
          totalAmount += iteminfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems =() =>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = { all_product, cartItems, addtoCart, removeFromCart, getTotalCartAmount,getTotalCartItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
