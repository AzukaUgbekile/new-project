import React from "react";
import MyNavLink from "./MyNavLink";

function ErrorPage() {
  return (
    <div>
      <MyNavLink />
      <h1>An error occured</h1>
      <p>Could not find the page</p>
    </div>
  );
}

export default ErrorPage;
