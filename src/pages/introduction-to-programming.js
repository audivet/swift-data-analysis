import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const IntroductionToProgramming = () => (
  <Layout>
    <Helmet>
      <title>Introduction to Programming | Data Analytics</title>
      <meta
        name="description"
        content="Learn the fundamentals of programming with Python and Swift, focusing on logic, variables, loops, and conditionals."
      />
      <meta
        name="keywords"
        content="Introduction to programming, Python, Swift, variables, loops, conditionals"
      />
      
      {/* Open Graph Meta Tags for better SEO and social sharing */}
      <meta property="og:title" content="Introduction to Programming | Data Analytics" />
      <meta property="og:description" content="Learn the fundamentals of programming with Python and Swift." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-site-url.com/introduction-to-programming" />
      <meta property="og:image" content="https://your-site-url.com/images/programming-og-image.jpg" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Introduction to Programming | Data Analytics" />
      <meta name="twitter:description" content="Learn the fundamentals of programming with Python and Swift." />
      <meta name="twitter:image" content="https://your-site-url.com/images/programming-twitter-image.jpg" />

      {/* Structured Data using JSON-LD */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Introduction to Programming",
            "description": "Learn the fundamentals of programming with Python and Swift.",
            "provider": {
              "@type": "Organization",
              "name": "Data Analytics Fundamentals",
              "sameAs": "https://your-site-url.com"
            }
          }
        `}
      </script>
    </Helmet>

    <main>
      <header>
        <h1>Introduction to Programming</h1>
      </header>

      <article>
        <p>This module introduces you to programming, focusing on Python and Swift, two languages popular in data analytics and app development.</p>

        {/* Topics Covered */}
        <section aria-labelledby="topics-covered">
          <h2 id="topics-covered">Topics Covered</h2>
          <ul>
            <li>Programming Logic and Flow</li>
            <li>Variables and Data Types</li>
            <li>Conditionals (If-Else Statements)</li>
            <li>Loops (For, While Loops)</li>
            <li>Functions</li>
          </ul>
        </section>

        {/* Resources */}
        <section aria-labelledby="resources">
          <h2 id="resources">Resources</h2>
          <ul>
            <li>
              <a href="https://www.codecademy.com/learn/learn-python-3" target="_blank" rel="noopener noreferrer">
                Codecademy: Learn Python 3 (Free and Paid Versions)
              </a>
            </li>
            <li>
              <a href="https://swift.org/documentation/" target="_blank" rel="noopener noreferrer">
                Official Swift Documentation (Free Resource)
              </a>
            </li>
            <li>
              <a href="https://www.learnpython.org/" target="_blank" rel="noopener noreferrer">
                LearnPython.org (Free Python Tutorials)
              </a>
            </li>
            <li>
              <a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer">
                Automate the Boring Stuff with Python (Free Online Book)
              </a>
            </li>
          </ul>
        </section>

        {/* Additional Free Resources */}
        <section aria-labelledby="additional-free-resources">
          <h2 id="additional-free-resources">Additional Free Resources</h2>
          <ul>
            <li>
              <a href="https://www.coursera.org/learn/python" target="_blank" rel="noopener noreferrer">
                Coursera: Programming for Everybody (University of Michigan - Free Audit)
              </a>
            </li>
            <li>
              <a href="https://swiftbysundell.com/basics/" target="_blank" rel="noopener noreferrer">
                Swift by Sundell - Basics of Swift (Free Resource)
              </a>
            </li>
          </ul>
        </section>

        {/* Practice and Projects */}
        <section aria-labelledby="practice-and-projects">
          <h2 id="practice-and-projects">Practice and Projects</h2>
          <ul>
            <li>Build a simple calculator using Python or Swift</li>
            <li>Write a program to manage a to-do list</li>
            <li>Create a number guessing game using loops and conditionals</li>
          </ul>
        </section>
      </article>
    </main>
  </Layout>
);

export default IntroductionToProgramming;