"use client"
import { Product } from "@/models/product.interface";
import { FC, ReactNode, createContext, useState } from "react";

interface CartItemsContext {
  cartItems: Product[];
  setCartItems: (cartItems: Product[]) => void;
}

export const CartItemsContext = createContext<CartItemsContext>({
  cartItems: [],
  setCartItems: (items: Product[]) => {}
});

export const CartItemsProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    return (
      <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </CartItemsContext.Provider>
    );
  };