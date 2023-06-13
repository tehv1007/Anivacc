import { Outlet } from "react-router-dom";
import Container from "./Container/Container";
import SideBar from "../../pages/Products/components/SideBar";
import Header from "../Feature/Header";

export default function ProductLayout() {
  return (
    <>
      <Header imgUrl={"/images/1609298615_3.png"} />
      <Container>
        <div className="w-full lg:grid lg:grid-cols-4 lg:gap-7 relative">
          <Outlet />
          <SideBar />
        </div>
      </Container>
    </>
  );
}
