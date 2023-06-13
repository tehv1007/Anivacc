import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import OnlineService from "./FixComponent/OnlineService";

export default function RootLayout({ cart, setCart }) {
  return (
    <>
      <NavBar />
      <Outlet />
      <Cart cart={cart} setCart={setCart} />
      <Footer />
      <OnlineService />
    </>
  );
}
