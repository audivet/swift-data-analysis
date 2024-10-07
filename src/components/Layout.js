import React from "react";
import Navigation from "./Navigation";  // Ensure this file is correctly named and imported
import "./layout.css";  // Ensure this CSS file exists in the same folder

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navigation />
      <main className="layout-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;