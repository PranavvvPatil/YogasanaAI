import React, { createContext, useState } from "react";

export type cartItem = {
  count: number;
};

export type CartContextType = {
  cart: any;
  setCart: any;
  handleAddToCart: any;
  handleDeleteFromCart: any;
  handleDeleteProduct: any;
};
type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<any>([]);

  const handleAddToCart = (product: any, sizeIndex?: number) => {
    const res = cart.find(
      (item: any) =>
        item.id == product.id &&
        item.selectedSize == product.size[sizeIndex as number]
    );
    if (res) {
      return "Item Already In The Cart";
    } else if (
      sizeIndex !== -1 &&
      sizeIndex != undefined &&
      product.size.includes(product.size[sizeIndex as number])
    ) {
      setCart((prev: any) => {
        return [
          ...prev,
          {
            ...product,
            count: 1,
            selectedSize: product.size[sizeIndex as number],
          },
        ];
      });
      return "Added to your Cart";
    }
  };
  const handleDeleteFromCart = (productId: number, selectedSize: string) => {
    if (confirm("Are you want to delete it?")) {
      const updatedProducts = cart.filter(
        (product: any) =>
          !(product.id == productId && product.selectedSize == selectedSize)
      );
      setCart(updatedProducts);
      alert("Item deleted successfully...");
    }
  };
  const handleDeleteProduct = (productId: number, selectedSize: string) => {
    const updatedProducts = cart.filter(
      (product: any) =>
        !(product.id == productId && product.selectedSize == selectedSize)
    );
    setCart(updatedProducts);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleDeleteFromCart,
        handleDeleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
