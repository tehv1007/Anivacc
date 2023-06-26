import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import OnlineService from "./FixComponent/OnlineService";

export default function RootLayout({ cart, setCart, setLangCode }) {
  return (
    <>
      <NavBar setLangCode={setLangCode} />
      <Outlet />
      <Cart cart={cart} setCart={setCart} />
      <Footer />
      <OnlineService />
    </>
  );
}
