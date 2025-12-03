import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container, Main } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
