import React, { createContext, useState } from "react";

export type cartItem = {
  count: number;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const PreOrderContext = createContext<any | undefined>(undefined);

export default function PreOrderProvider({ children }: CartProviderProps) {
  const [preOrderCart, setPreOrderCart] = useState<any>([]);

  const handleAddToPreOrderCart = (product: any, sizeIndex?: number) => {
    const res = preOrderCart.find(
      (item: any) =>
        item.id == product.id &&
        item.selectedSize == product.size[sizeIndex as number]
    );
    if (res) {
      return "Item Already In The Pre Orders";
    } else if (
      sizeIndex !== -1 &&
      sizeIndex != undefined &&
      product.size.includes(product.size[sizeIndex as number])
    ) {
      setPreOrderCart((prev: any) => {
        return [
          ...prev,
          {
            ...product,
            count: 1,
            selectedSize: product.size[sizeIndex as number],
          },
        ];
      });
      return "Item added to Pre Orders";
    }
  };
  const handleDeleteFromPreOrderCart = (
    productId: number,
    selectedSize: string
  ) => {
    if (confirm("Are you want to delete it?")) {
      const updatedProducts = preOrderCart.filter(
        (product: any) =>
          !(product.id == productId && product.selectedSize == selectedSize)
      );
      setPreOrderCart(updatedProducts);
      alert("Item deleted successfully...");
    }
  };
  const handleDeleteProduct = (productId: number, selectedSize: string) => {
    const updatedProducts = preOrderCart.filter(
      (product: any) =>
        !(product.id == productId && product.selectedSize == selectedSize)
    );
    setPreOrderCart(updatedProducts);
  };

  return (
    <PreOrderContext.Provider
      value={{
        preOrderCart,
        setPreOrderCart,
        handleAddToPreOrderCart,
        handleDeleteFromPreOrderCart,
        handleDeleteProduct,
      }}
    >
      {children}
    </PreOrderContext.Provider>
  );
}
