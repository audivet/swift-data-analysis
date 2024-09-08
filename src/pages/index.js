import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "./index.css"; // For custom styling

const IndexPage = () => (
  <Layout>
    <div className="homepage-container">
      <h1>Welcome to the Data Analysis Hub</h1>
      <p>Choose a learning path to get started:</p>
      <div className="homepage-options">
        <div className="section-container">
          <Link to="/learn-with-swift/">
            <button className="swift-button">Learn with Swift</button>
          </Link>
        </div>
        <div className="section-container">
          <Link to="/learn-with-python/">
            <button className="python-button">Learn with Python</button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
