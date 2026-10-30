
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  // Cart State + LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("novix");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Save Cart
  useEffect(() => {
    localStorage.setItem("novix", JSON.stringify(cart));
  }, [cart]);

  // Add To Cart
  const addtocart = (item) => {
    setCart((prev) => {
      const existingProduct = prev.find(
        (product) => product.id === item.id
      );

      if (existingProduct) {
        return prev.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Remove Item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Total Price
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  // Cart Count
  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        setCart,
        addtocart,
        removeItem,
        total,
        cartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
