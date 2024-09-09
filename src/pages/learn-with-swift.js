import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const LearnWithSwift = () => (
  <Layout>
    <h1>Learn with Swift</h1>
    <ul>
      <li><Link to="/intro-to-swift/">Intro to Swift</Link></li>
      <li><Link to="/swift-fundamentals/">Swift Fundamentals</Link></li>
      <li><Link to="/data-types-swift/">Data Types in Swift</Link></li> {/* New link added */}
      <li><Link to="/data-visualization/">Data Visualization</Link></li>
      <li><Link to="/machine-learning/">Machine Learning</Link></li>
      <li><Link to="/financial-analysis-swift/">Financial Analysis with Swift</Link></li>
    </ul>
  </Layout>
);

export default LearnWithSwift;
