import React from "react";
import Navbar from "../Navbar/";
import Container from "../Responsive/Container";

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <main style={{ marginTop: "50px" }}>{children}</main>
    </Container>
  );
}
