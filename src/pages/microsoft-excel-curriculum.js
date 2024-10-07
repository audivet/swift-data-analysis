import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const MicrosoftExcelCurriculum = () => (
  <Layout>
    <Helmet>
      <title>Microsoft Excel Curriculum | Data Analytics</title>
      <meta
        name="description"
        content="Learn the fundamentals of Microsoft Excel through modules focused on data manipulation, formulas, pivot tables, and data visualization."
      />
      <meta
        name="keywords"
        content="Microsoft Excel, data manipulation, formulas, pivot tables, data visualization"
      />
    </Helmet>

    <h1>Microsoft Excel Curriculum</h1>
    <p>This section is divided into five key modules, each focusing on essential Excel skills.</p>

    {/* Module 1: Data Manipulation */}
    <section>
      <h2>Module 1: Data Manipulation</h2>
      <p>Duration: 1 Week</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Sorting Data</li>
        <li>Filtering Data</li>
        <li>Organizing Data</li>
        <li>Data Formatting</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://www.coursera.org/learn/excel-essentials" target="_blank" rel="noopener noreferrer">
            Coursera: Excel Skills for Business: Essentials by Macquarie University
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/learning/excel-2019-essential-training" target="_blank" rel="noopener noreferrer">
            LinkedIn Learning: Excel 2019 Essential Training
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/excel" target="_blank" rel="noopener noreferrer">
            Microsoft: Sort and Filter in Excel
          </a>
        </li>
        <li>
          <a href="https://excelpracticeonline.com" target="_blank" rel="noopener noreferrer">
            Excel Practice Online (Free Exercises)
          </a>
        </li>
        <li>
          <a href="https://www.excel-easy.com/data-analysis/sorting-filtering.html" target="_blank" rel="noopener noreferrer">
            Excel-Easy: Sorting and Filtering Tutorial
          </a>
        </li>
      </ul>
    </section>

    {/* Module 2: Formulas and Functions */}
    <section>
      <h2>Module 2: Formulas and Functions</h2>
      <p>Duration: 2 Weeks</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Basic Formulas</li>
        <li>Essential Functions (SUM, AVERAGE, COUNT, MIN/MAX)</li>
        <li>Lookup Functions (VLOOKUP, HLOOKUP, INDEX, MATCH)</li>
        <li>Logical Functions (IF, AND, OR, Nested IFs)</li>
        <li>Text Functions (CONCATENATE, LEFT, RIGHT, MID, TRIM)</li>
        <li>Date and Time Functions (TODAY, NOW, DATEDIF)</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://www.coursera.org/learn/intermediate-excel" target="_blank" rel="noopener noreferrer">
            Coursera: Excel Skills for Business: Intermediate I by Macquarie University
          </a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/microsoft-excel-beginner-to-advanced" target="_blank" rel="noopener noreferrer">
            Udemy: Microsoft Excel - Excel from Beginner to Advanced
          </a>
        </li>
        <li>
          <a href="https://exceljet.net" target="_blank" rel="noopener noreferrer">
            Excel Jet: SUM, AVERAGE, VLOOKUP, IF Functions
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/excel" target="_blank" rel="noopener noreferrer">
            Microsoft: Use IF, AND, OR in Excel
          </a>
        </li>
        <li>
          <a href="https://openstax.org/books/business-statistics/pages/3-key-excel-functions-for-data-analysis" target="_blank" rel="noopener noreferrer">
            OpenStax: Key Excel Functions for Data Analysis (Free PDF)
          </a>
        </li>
      </ul>
    </section>

    {/* Module 3: Pivot Tables */}
    <section>
      <h2>Module 3: Pivot Tables</h2>
      <p>Duration: 1 Week</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Creating Pivot Tables</li>
        <li>Configuring Pivot Tables</li>
        <li>Summarizing Data (Aggregation Functions)</li>
        <li>Analyzing Data with Pivot Tables</li>
        <li>Pivot Charts</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://www.coursera.org/learn/excel-intermediate" target="_blank" rel="noopener noreferrer">
            Coursera: Excel Skills for Business: Intermediate II by Macquarie University
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/learning/excel-pivottables-essential-training" target="_blank" rel="noopener noreferrer">
            LinkedIn Learning: Excel PivotTables Essential Training
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/excel" target="_blank" rel="noopener noreferrer">
            Microsoft: Create a PivotTable to Analyze Worksheet Data
          </a>
        </li>
        <li>
          <a href="https://contextures.com" target="_blank" rel="noopener noreferrer">
            Contextures: Free Pivot Table Tutorials (PDF)
          </a>
        </li>
      </ul>
    </section>

    {/* Module 4: Basic Data Visualization */}
    <section>
      <h2>Module 4: Basic Data Visualization</h2>
      <p>Duration: 1 Week</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Creating Charts and Graphs</li>
        <li>Selecting Appropriate Chart Types</li>
        <li>Customizing Visuals for Clarity</li>
        <li>Advanced Chart Techniques (Combination Charts, Sparklines)</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://www.coursera.org/learn/excel-data-visualization" target="_blank" rel="noopener noreferrer">
            Coursera: Data Visualization with Excel by PwC
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/learning/excel-advanced-charts" target="_blank" rel="noopener noreferrer">
            LinkedIn Learning: Excel: Advanced Charts
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/excel" target="_blank" rel="noopener noreferrer">
            Microsoft: Create Charts in Excel
          </a>
        </li>
        <li>
          <a href="https://www.microsoft.com/en-us/research/publication/data-visualization-handbook/" target="_blank" rel="noopener noreferrer">
            Microsoft Research: Data Visualization Handbook (Free PDF)
          </a>
        </li>
      </ul>
    </section>

    {/* Module 5: Data Analysis Tools (Optional) */}
    <section>
      <h2>Module 5: Data Analysis Tools (Optional)</h2>
      <p>Duration: 1 Week</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Data Analysis ToolPak</li>
        <li>What-If Analysis (Goal Seek, Scenario Manager)</li>
        <li>Solver Add-In (Optimization Techniques)</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://www.linkedin.com/learning/excel-advanced-data-analysis" target="_blank" rel="noopener noreferrer">
            LinkedIn Learning: Excel: Advanced Data Analysis
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/excel" target="_blank" rel="noopener noreferrer">
            Microsoft: Use the Data Analysis ToolPak
          </a>
        </li>
        <li>
          <a href="https://trumpexcel.com/excel-analysis-toolpak/" target="_blank" rel="noopener noreferrer">
            Trump Excel: How to Use Analysis ToolPak
          </a>
        </li>
      </ul>
    </section>

  </Layout>
);

export default MicrosoftExcelCurriculum;