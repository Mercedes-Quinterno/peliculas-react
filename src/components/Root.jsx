//Página principal, se usará el Framework MUI (Material UI), por eso están las importaciones de Box y Grid


import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"; //Esto debe ser siempre visible, por eso está fuera de las "Routes"
import Footer from "./Footer";//Footer, debe ser siempre visible, por eso se pone fuera de las "Routes"

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;