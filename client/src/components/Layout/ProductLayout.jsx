import { Outlet } from "react-router-dom";
import Container from "./Container/Container";
import Header from "../Feature/Header";

export default function ProductLayout() {
  return (
    <>
      <Header imgUrl={"/images/background/banner2.jpg"} />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
