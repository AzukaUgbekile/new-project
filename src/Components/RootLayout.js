import React from "react";
//import MyAppBar from "./MyAppBar";
import { Outlet } from "react-router-dom";
import MyNavLink from "./MyNavLink";

function RootLayout() {
  return (
    <>
      <MyNavLink />
      <Outlet />
    </>
  );
}

export default RootLayout;
