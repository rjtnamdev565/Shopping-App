import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product"
import products from "../Components/Assets/products";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    return cart;
  };
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = products.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.new_price;
          }
        }
        return totalAmount;
      };
    
      const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            totalItem += cartItems[item];;
          }
        }
        return totalItem;
      };
    
      const addToCart = (itemId) => {
        console.log("item",itemId)
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log("item",cartItems)
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
     
      };
    
      const contextValue = {products, getTotalCartItems, cartItems, addToCart, removeFromCart, getTotalCartAmount };

    return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
      );
}
export default ShopContextProvider;