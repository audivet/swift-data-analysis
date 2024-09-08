import React from "react";
import { Link } from "gatsby";

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/learn-with-swift/">Learn with Swift</Link></li>
      <li><Link to="/learn-with-python/">Learn with Python</Link></li>
    </ul>
  </nav>
);

export default Navigation;
