import { createContext, useState } from "react";

const Cart = createContext(null);
export default function CartContext({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  console.log(cart);

  return (
    <Cart.Provider value={{ cart: cart, setCart: setCart }}>
      {children}
    </Cart.Provider>
  );
}
