import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopeContext = createContext();

const ShopeContextProvider = (props) => {
    const [cartitems, setCartItems] = useState({}); // State to hold cart items

    const addToCart = (productId)=>{
        setCartItems((prevCartItems)=>({
            ...prevCartItems,
            [productId]: (prevCartItems[productId] || 0) +1,
        }))
    }

    // Function to calculate the total cart amount
    const getTotalCartAmount = () => {
        return all_product.reduce((total, product) => {
            return total + (cartitems[product.id] || 0) * product.new_price;
        }, 0);
    };

    // Function to remove an item from the cart
    const removeFromCart = (id) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[id];
            return updatedCart;
        });
    };

    const contextValue = { all_product, cartitems,addToCart, getTotalCartAmount, removeFromCart };

    return (
        <ShopeContext.Provider value={contextValue}>
            {props.children}
        </ShopeContext.Provider>
    );
};

export default ShopeContextProvider;
