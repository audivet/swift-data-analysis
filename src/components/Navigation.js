import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>

      {/* Basics Dropdown - Placed prominently after Home */}
      <li className="dropdown">
        <Link to="/basics/">Basics</Link>
        <ul className="dropdown-content">
          <li><Link to="/basic-statistics-mathematics/">Basic Statistics and Mathematics</Link></li>
          <li><Link to="/microsoft-excel-curriculum/">Microsoft Excel Curriculum</Link></li>
          <li><Link to="/microsoft-excel-data-manipulation/">Excel: Data Manipulation</Link></li>
          <li><Link to="/microsoft-excel-pivot-tables/">Excel: Pivot Tables</Link></li>
          <li><Link to="/microsoft-excel-formulas-functions/">Excel: Formulas and Functions</Link></li>
        </ul>
      </li>

      <li><Link to="/learn-with-swift/">Learn with Swift</Link></li>
      <li><Link to="/learn-with-python/">Learn with Python</Link></li>
    </ul>
  </nav>
);

export default Navbar;