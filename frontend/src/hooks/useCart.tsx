import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

// Custom hook for managing the cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
