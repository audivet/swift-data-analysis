import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/intro-to-swift/">Introduction to Swift</Link></li>
      <li><Link to="/data-visualization/">Data Visualization</Link></li>
      <li><Link to="/machine-learning/">Machine Learning</Link></li>
      <li><Link to="/financial-analysis/">Financial Analysis</Link></li>
    </ul>
  </nav>
);

export default Navigation;
