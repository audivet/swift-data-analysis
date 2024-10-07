import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const MicrosoftExcelPivotTables = () => (
  <Layout>
    <Helmet>
      <title>Microsoft Excel - Pivot Tables | Data Analytics</title>
      <meta name="description" content="Learn how to create and use Pivot Tables in Excel to summarize, analyze, and visualize large datasets." />
      <meta name="keywords" content="Excel Pivot Tables, data analysis, Excel charts, data summarization" />
    </Helmet>

    <h1>Module 3: Pivot Tables</h1>
    <p><strong>Duration:</strong> 1 Week</p>
    <p>Master the art of summarizing and analyzing large datasets efficiently with Pivot Tables in Excel.</p>

    <section>
      <h2>Topics Covered</h2>
      <ul>
        <li>Creating Pivot Tables</li>
        <li>Configuring Pivot Tables</li>
        <li>Summarizing Data</li>
        <li>Analyzing Data with Pivot Tables</li>
        <li>Pivot Charts</li>
      </ul>
    </section>

    <section>
      <h2>Creating Pivot Tables</h2>
      <p>Learn how to create a Pivot Table from a dataset, choose the right data range, and begin summarizing data efficiently.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/create-pivottables-excel">Microsoft: Create a PivotTable in Excel</a></li>
        <li><a href="https://www.excel-easy.com/data-analysis/pivot-tables.html">Excel Easy: Pivot Tables</a></li>
        <li><a href="https://www.youtube.com/watch?v=Rqh9OYY3n1A">YouTube: Pivot Tables Explained by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Configuring Pivot Tables</h2>
      <p>Understand how to configure your Pivot Table by adding fields to Rows, Columns, Values, and Filters. Learn grouping techniques for effective data organization.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/group-data-pivot-tables">Microsoft: Group Data in PivotTables</a></li>
        <li><a href="https://www.excel-easy.com/data-analysis/grouping.html">Excel Easy: Grouping Data in Pivot Tables</a></li>
        <li><a href="https://www.youtube.com/watch?v=OQNBz6SpfA0">YouTube: Grouping Data in PivotTables by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Summarizing Data</h2>
      <p>Explore various aggregation functions such as Sum, Count, and Average to summarize data in Pivot Tables. Learn about custom calculations.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/summarize-data-pivot-table">Microsoft: Summarize Data in PivotTables</a></li>
        <li><a href="https://www.excel-easy.com/data-analysis/pivot-table-summary-functions.html">Excel Easy: Summary Functions</a></li>
        <li><a href="https://www.youtube.com/watch?v=j2WgYw1OZ6Y">YouTube: Summarizing Data in Pivot Tables by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Analyzing Data with Pivot Tables</h2>
      <p>Learn advanced techniques like sorting and filtering within Pivot Tables, using slicers and timelines for interactive filtering, and creating calculated fields.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/use-slicers-pivot-table">Microsoft: Use Slicers in a Pivot Table</a></li>
        <li><a href="https://www.excel-easy.com/data-analysis/slicers.html">Excel Easy: Slicers in Pivot Tables</a></li>
        <li><a href="https://www.youtube.com/watch?v=Fj0bT9lt27o">YouTube: Using Slicers and Calculated Fields in PivotTables by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Pivot Charts</h2>
      <p>Visualize your data by creating Pivot Charts from your Pivot Tables. Learn to customize charts for better data clarity.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/create-pivot-charts">Microsoft: Create PivotCharts in Excel</a></li>
        <li><a href="https://www.excel-easy.com/data-analysis/pivot-charts.html">Excel Easy: Pivot Charts</a></li>
        <li><a href="https://www.youtube.com/watch?v=0Z2q5JS9RQc">YouTube: Pivot Charts Explained by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Assignments</h2>
      <ul>
        <li><strong>Exercise 1:</strong> Build a Pivot Table to analyze monthly sales data by product and region.</li>
        <li><strong>Exercise 2:</strong> Create a Pivot Chart to visualize sales trends over time.</li>
        <li><strong>Exercise 3:</strong> Use slicers to filter the Pivot Table for specific regions or products.</li>
      </ul>
      <h3>Practice Resources</h3>
      <ul>
        <li><a href="https://www.contextures.com/xlSampleData01.html">Sample Dataset from Contextures</a></li>
        <li><a href="https://www.excel-easy.com/data-analysis/pivot-tables.html">Excel Easy: Pivot Table Exercises</a></li>
      </ul>
    </section>
  </Layout>
);

export default MicrosoftExcelPivotTables;