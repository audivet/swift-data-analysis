import React from "react";
import Navigation from "./navigation";  // Correct lowercase import
import "./layout.css";  // Ensure the file is named correctly and exists

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