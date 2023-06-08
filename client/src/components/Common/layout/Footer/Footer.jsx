import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "../../components/Container";
import FooterTop from "./FooterTop";
import FooterOption from "./FooterOption";
import CopyRight from "./CopyRight";

export default function Footer() {
  return (
    <footer className="pt-7 text-[#444444]">
      <Container>
        <FooterTop />
        <FooterOption />
        <CopyRight />
      </Container>
    </footer>
  );
}
