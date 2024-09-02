import React from "react";
import Navigation from "./navigation";
import "./layout.css";  // Ensure this line is present

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
