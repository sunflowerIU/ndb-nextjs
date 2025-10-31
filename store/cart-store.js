import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      cartOpen: false,

      //setters
      incrementItem: (id) =>
        set((state) => {
          const updatedCart = state.cartItems.map((item) => {
            if (item.id === id) {
              if (!(item.quantity < item.stock - 3)) {
                return {
                  ...item,
                  quantity: item.quantity,
                };
              }

              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else return item;
          });

          return { cartItems: updatedCart };
        }),
      decrementItem: (id) =>
        set((state) => {
          const updatedCart = state.cartItems
            .map((item) => {
              if (item.id === id) {
                if (item.quantity <= 1) {
                  return null;
                } else
                  return {
                    ...item,
                    quantity: item.quantity - 1,
                  };
              } else return item;
            })
            .filter(Boolean);

          return { cartItems: updatedCart };
        }),
      deleteItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),

      addToCart: (product) =>
        set((state) => {
          //check if item  exists already
          const existedAlready = state.cartItems.find(
            (item) => item.id === product.id,
          );

          //dont do anything
          if (existedAlready) {
            return { cartItems: state.cartItems };
          }

          //add to cart
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          };
        }),

      setCartOpen: (boolean) => set((state) => ({ cartOpen: boolean })),
    }),
    { name: "cart-storage" },
  ),
);
