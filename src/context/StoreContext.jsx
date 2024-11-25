import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null) 


// context is used to share data like objects, state, functions without passing props.
// here the value is null

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
    }


    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        // Here we are we are using for in loop because the cart item is an object and this for loop will iterate over object and it will provide the item one by one and this item is key value of the cartItems.
        for(const item in cartItems) {
            if (cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price*cartItems[item];
            }  
        }
        return totalAmount;
    }

    const contextValue = {
       food_list, 
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;