import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const MicrosoftExcelFormulasFunctions = () => (
  <Layout>
    <Helmet>
      <title>Microsoft Excel - Formulas and Functions | Data Analytics</title>
      <meta name="description" content="Learn Excel formulas and functions, including basic arithmetic, conditional logic, lookups, and text manipulation." />
      <meta name="keywords" content="Excel formulas, Excel functions, VLOOKUP, IF statements, Excel text functions" />
    </Helmet>

    <h1>Module 2: Formulas and Functions</h1>
    <p><strong>Duration:</strong> 2 Weeks</p>
    <p>Master Excel formulas and functions to perform calculations, automate tasks, and manipulate data efficiently.</p>

    <section>
      <h2>Topics Covered:</h2>
      <ul>
        <li>Basic Formulas: PEMDAS, absolute vs. relative references</li>
        <li>Essential Functions: SUM, AVERAGE, MIN, MAX, COUNT</li>
        <li>Lookup Functions: VLOOKUP, HLOOKUP, INDEX, MATCH</li>
        <li>Logical Functions: IF statements, AND/OR, nested IFs</li>
        <li>Text Functions: CONCATENATE, LEFT, RIGHT, MID, TRIM</li>
        <li>Date and Time Functions: TODAY, NOW, DATEDIF</li>
      </ul>
    </section>

    <section>
      <h2>Basic Formulas</h2>
      <p>Understand how to create and edit basic formulas in Excel, including order of operations (PEMDAS) and working with absolute and relative references.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/create-a-formula">Microsoft: Create a Formula in Excel</a></li>
        <li><a href="https://www.excel-easy.com/functions/formulas.html">Excel Easy: Basic Formulas</a></li>
        <li><a href="https://www.youtube.com/watch?v=vt9cy0Z-8uE">YouTube: Excel Basic Formulas by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Essential Functions</h2>
      <p>Learn essential Excel functions such as SUM, AVERAGE, MIN, MAX, and COUNT to perform basic arithmetic operations and statistical calculations.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/using-functions">Microsoft: Using Functions in Excel</a></li>
        <li><a href="https://www.excel-easy.com/functions.html">Excel Easy: Essential Functions</a></li>
        <li><a href="https://www.youtube.com/watch?v=s2D7L2mQ8OQ">YouTube: Excel Essential Functions by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Lookup Functions</h2>
      <p>Understand how to use lookup functions like VLOOKUP, HLOOKUP, and advanced combinations like INDEX and MATCH to retrieve data from tables.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/vlookup-function">Microsoft: VLOOKUP Function</a></li>
        <li><a href="https://www.excel-easy.com/functions/vlookup.html">Excel Easy: VLOOKUP</a></li>
        <li><a href="https://www.youtube.com/watch?v=c8PzH1Ai0yY">YouTube: VLOOKUP Explained by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Logical Functions</h2>
      <p>Learn to use logical functions like IF, AND, OR, and nested IFs to apply conditional logic to your data.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/if-function">Microsoft: IF Function</a></li>
        <li><a href="https://www.excel-easy.com/functions/if-function.html">Excel Easy: IF Function</a></li>
        <li><a href="https://www.youtube.com/watch?v=s6kQ2xgdf8s">YouTube: IF Statements by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Text Functions</h2>
      <p>Explore text functions like CONCATENATE, LEFT, RIGHT, MID, and TRIM to manipulate and clean text data within Excel.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/concatenate-function">Microsoft: CONCATENATE Function</a></li>
        <li><a href="https://www.excel-easy.com/functions/concatenate.html">Excel Easy: Text Functions</a></li>
        <li><a href="https://www.youtube.com/watch?v=I_sHTp7ohHU">YouTube: Text Functions by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Date and Time Functions</h2>
      <p>Work with date and time functions like TODAY, NOW, and DATEDIF to calculate dates and perform time-based operations.</p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://support.microsoft.com/en-us/excel/date-and-time-functions">Microsoft: Date and Time Functions</a></li>
        <li><a href="https://www.excel-easy.com/functions/date-time-functions.html">Excel Easy: Date and Time Functions</a></li>
        <li><a href="https://www.youtube.com/watch?v=zpDRghCkImw">YouTube: Date and Time Functions by ExcelIsFun</a></li>
      </ul>
    </section>

    <section>
      <h2>Assignments</h2>
      <ul>
        <li><strong>Exercise 1:</strong> Create a sales summary using SUM and AVERAGE functions.</li>
        <li><strong>Exercise 2:</strong> Implement VLOOKUP to retrieve product prices from a separate table.</li>
        <li><strong>Exercise 3:</strong> Develop an IF statement to categorize sales performance (e.g., “Good”, “Average”, “Poor”).</li>
        <li><strong>Exercise 4:</strong> Use CONCATENATE and TEXT functions to format customer names.</li>
      </ul>
    </section>

    <section>
      <h3>Practice Resources</h3>
      <ul>
        <li><a href="https://www.contextures.com/xlSampleData01.html">Sample Dataset from Contextures</a></li>
        <li><a href="https://www.excel-easy.com/vba/examples/functions.html">Excel Easy: Formulas and Functions Exercises</a></li>
      </ul>
    </section>

  </Layout>
);

export default MicrosoftExcelFormulasFunctions;
