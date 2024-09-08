import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const LearnWithPython = () => (
  <Layout>
    <h1>Learn with Python</h1>
    <ul>
      <li><Link to="/intro-to-python/">Intro to Python</Link></li>
      <li><Link to="/data-visualization-python/">Data Visualization with Python</Link></li>
      <li><Link to="/data-manipulation-python/">Data Manipulation with Python</Link></li>
      <li><Link to="/machine-learning-python/">Machine Learning with Python</Link></li>
      <li><Link to="/financial-analysis-python/">Financial Analysis with Python</Link></li> {/* This is the added link */}
      <li><Link to="/python-fundamentals/">Python Fundamentals</Link></li>
    </ul>
  </Layout>
);

export default LearnWithPython;
