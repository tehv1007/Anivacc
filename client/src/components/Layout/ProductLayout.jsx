import { Outlet } from "react-router-dom";
import Container from "./Container/Container";
import Header from "../Feature/Header";

export default function ProductLayout() {
  return (
    <>
      <Header imgUrl={"/images/1609298615_3.png"} />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
