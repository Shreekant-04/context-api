import { createContext, useContext, useState } from "react";

const Context = createContext();
function PostProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(shoe) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === shoe.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === shoe.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...shoe, quantity: 1 }];
      }
    });
  }

  function updateCart(name, quantity) {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Context.Provider
      value={{
        cartItems,
        addToCart,
        updateCart,
        total,
      }}
    >
      {children}
    </Context.Provider>
  );
}
function useShoe() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useShoe must be used within a PostProvider");
  }
  return context;
}

export { useShoe, PostProvider };
