"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartContext = createContext();
const initialState = {
  cartItems:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems")) || []
      : [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addToCart": {
      const newItem = action.payload;

      //check if item  exists already
      const existedAlready = state.cartItems.find(
        (item) => item.id === newItem.id,
      );

      //dont do anything
      if (existedAlready) {
        return { ...state };
      }

      //add to cart
      const updatedCart = [...state.cartItems, { ...newItem, quantity: 1 }];

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    //increment
    case "incrementItem": {
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    //decrement
    case "decrementItem": {
      const updatedCart = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
            if (item.quantity <= 1) {
              return null;
            } else {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
          } else {
            return item;
          }
        })
        .filter(Boolean);

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    //delete item
    case "deleteItem": {
      const filteredCart = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );

      return {
        ...state,
        cartItems: filteredCart,
      };
    }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cartItems } = state;
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  //calculate total price
  useEffect(() => {
    const total = cartItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  //set to local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function calculateQuantityById(id) {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        cartOpen,
        setCartOpen,
        totalPrice,
        dispatch,
        calculateQuantityById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("context out of range");
  return context;
}

export { CartProvider, useCart };
