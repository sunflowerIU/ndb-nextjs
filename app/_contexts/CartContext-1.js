"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(product) {
    const { id, image, name, price, type } = product;
    const newProduct = { id, image, name, price, type, quantity: 1 };

    setCartItems((prevItems) => [...prevItems, newProduct]);
  }
  function calculateQuantityById(id) {
    const quantity = cartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    return quantity;
  }

  function incrementItem(id) {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  }
  function decrementItem(id) {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        cartOpen,
        setCartOpen,
        calculateQuantityById,
        incrementItem,
        decrementItem,
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
