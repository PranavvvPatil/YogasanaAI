import { useContext } from "react";
import { PreOrderContext } from "../contexts/PreOrderProvider";

// Custom hook for managing the cart
export const usePreOrder = () => {
  const context = useContext(PreOrderContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
