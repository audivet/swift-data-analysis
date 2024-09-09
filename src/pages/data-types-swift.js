import * as React from "react";
import Layout from "../components/layout";

const DataTypesSwift = () => (
  <Layout>
    <h1>Data Types in Swift</h1>
    <p>
      Swift is a statically-typed language, meaning every variable must have a specific data type.
      These types define what kind of values the variable can hold.
    </p>
    <h2>Key Data Types</h2>
    <ul>
      <li><strong>Int:</strong> Stores integer numbers. Example: <code>let myInt: Int = 42</code></li>
      <li><strong>Double:</strong> Stores decimal numbers. Example: <code>let myDouble: Double = 3.14</code></li>
      <li><strong>String:</strong> Stores text values. Example: <code>let myString: String = "Hello, World!"</code></li>
      <li><strong>Bool:</strong> Stores true or false values. Example: <code>let isTrue: Bool = true</code></li>
    </ul>
    <h2>Type Safety and Inference</h2>
    <p>
      Swift enforces type safety, meaning you cannot assign a value of one type to a variable of another.
      It also uses type inference, which allows the compiler to determine the data type of a variable based on the value assigned.
    </p>
    <h3>Example Code:</h3>
    <pre>
      {`let myNumber = 10  // Inferred as Int
let myText = "Hello"  // Inferred as String
let isSwiftFun = true  // Inferred as Bool`}
    </pre>

    <h2>Test Your Knowledge</h2>
    <p>Which data type would you use to store a decimal number in Swift?</p>
    <ul>
      <li>A. <code>Int</code></li>
      <li>B. <code>Double</code></li>
      <li>C. <code>String</code></li>
      <li>D. <code>Bool</code></li>
    </ul>
  </Layout>
);

export default DataTypesSwift;
