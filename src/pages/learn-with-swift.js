import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const LearnWithSwift = () => (
  <Layout>
    <h1>Learn with Swift</h1>
    <ul>
      <li><Link to="/swift-fundamentals/">Swift Fundamentals</Link></li>
      <li><Link to="/data-visualization/">Data Visualization</Link></li>
      <li><Link to="/machine-learning/">Machine Learning</Link></li>
      <li><Link to="/financial-analysis/">Financial Analysis</Link></li>
    </ul>
  </Layout>
);

export default LearnWithSwift;
