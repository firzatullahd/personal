import React from "react";
import GlobalStyle from "./GlobalStyle";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
    </>
  );
}
