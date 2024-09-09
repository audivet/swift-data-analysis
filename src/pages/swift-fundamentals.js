import * as React from "react";
import Layout from "../components/layout";

const SwiftFundamentals = () => (
  <Layout>
    <h1>Swift Fundamentals</h1>
    <p>Dive deeper into the fundamentals of Swift, the powerful programming language by Apple. In this section, you will learn about core concepts essential for building robust applications in Swift.</p>

    <h2>Key Concepts</h2>
    <ul>
      <li><strong>Variables and Constants:</strong> Understand how to declare and use variables and constants effectively.</li>
      <li><strong>Data Types:</strong> Learn about different data types available in Swift and how to use them.</li>
      <li><strong>Control Flow:</strong> Master control flow statements like if-else, switch, and loops.</li>
    </ul>

    <h2>Variables & Constants</h2>
    <p>
      In Swift, variables and constants allow you to store and manipulate data. Constants cannot change once set, while variables can be updated as needed.
    </p>

    <h3>Example Code:</h3>
    <pre>
      {`let constantValue = 10  // This value cannot be changed
var variableValue = 20  // This value can be changed

variableValue = 30  // Updating the variable`}
    </pre>

    <p>
      In the example above:
      <ul>
        <li><code>let constantValue = 10</code>: Declares a constant that cannot be changed.</li>
        <li><code>var variableValue = 20</code>: Declares a variable that can be updated later.</li>
      </ul>
    </p>

    <h2>Test Your Knowledge</h2>
    <p>Which of the following is a constant in Swift?</p>
    <ul>
      <li>A. <code>let myConstant = 100</code></li>
      <li>B. <code>var myVariable = 100</code></li>
    </ul>
  </Layout>
);

export default SwiftFundamentals;
