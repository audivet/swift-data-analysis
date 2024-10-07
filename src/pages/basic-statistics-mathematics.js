import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const BasicStatisticsMathematics = () => (
  <Layout>
    <Helmet>
      <title>Basic Statistics and Mathematics | Data Analytics</title>
      <meta
        name="description"
        content="Learn basic statistics and mathematics concepts essential for data analysis, including mean, median, probability, and hypothesis testing."
      />
      <meta
        name="keywords"
        content="basic statistics, data analysis, mathematics, probability, hypothesis testing"
      />
    </Helmet>

    <h1>Basic Statistics and Mathematics</h1>

    <section>
      <h2>Module 1: Descriptive Statistics</h2>
      <p>Duration: 1 Week</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Mean, Median, Mode</li>
        <li>Variance and Standard Deviation</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://www.khanacademy.org/math/statistics-probability/descriptive-statistics">Khan Academy: Descriptive Statistics</a></li>
        <li><a href="/path/to/Statistics-Essentials-Dummies.pdf" target="_blank" rel="noopener noreferrer">"Statistics for Dummies" (Copyrighted PDF)</a></li>
      </ul>
    </section>

    <section>
      <h2>Module 2: Probability Concepts</h2>
      <p>Duration: 1 Week</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Basic Probability</li>
        <li>Probability Distributions (e.g., Normal Distribution)</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://www.edx.org/course/introduction-to-probability">edX: Introduction to Probability by Harvard University</a></li>
        <li><a href="/path/to/Math--Bertsekas_Tsitsiklis_Introduction_to_probability.pdf" target="_blank" rel="noopener noreferrer">Introduction to Probability by Bertsekas & Tsitsiklis (Copyrighted PDF)</a></li>
      </ul>
    </section>

    <section>
      <h2>Module 3: Inferential Statistics</h2>
      <p>Duration: 2 Weeks</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Sampling Methods</li>
        <li>Hypothesis Testing</li>
        <li>Confidence Intervals</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://www.coursera.org/learn/inferential-statistics">Coursera: Inferential Statistics by University of Amsterdam</a></li>
        <li><a href="/path/to/another-PDF-file.pdf" target="_blank" rel="noopener noreferrer">Hypothesis Testing PDF (Copyrighted)</a></li>
      </ul>
    </section>

    <section>
      <h2>Copyrighted Resources Notice</h2>
      <p>
        Please note that some of the PDFs and resources linked in this module are copyrighted materials. These are provided for educational purposes only, and any reproduction, distribution, or transmission is strictly prohibited without the author's consent. Please adhere to all copyright guidelines.
      </p>
    </section>
  </Layout>
);

export default BasicStatisticsMathematics;