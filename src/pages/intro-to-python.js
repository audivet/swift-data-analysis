// src/pages/intro-to-python.js

import React from "react"
import Layout from "../components/layout"  // Updated to lowercase
import Seo from "../components/seo"        // Updated to lowercase
import QuizComponent from "../components/QuizComponent"

// Define your quiz questions
const questions = [
  {
    questionText: "What is Python primarily used for?",
    answerOptions: [
      { answerText: "Web Development", isCorrect: false },
      { answerText: "Data Analysis", isCorrect: true },
      { answerText: "Mobile App Development", isCorrect: false },
      { answerText: "Game Development", isCorrect: false },
    ],
  },
  {
    questionText: "Which organization oversees the development of Python?",
    answerOptions: [
      { answerText: "Microsoft", isCorrect: false },
      { answerText: "Apple", isCorrect: false },
      { answerText: "Google", isCorrect: false },
      { answerText: "Python Software Foundation", isCorrect: true },
    ],
  },
  {
    questionText: "What is the extension of a Python file?",
    answerOptions: [
      { answerText: ".py", isCorrect: true },
      { answerText: ".js", isCorrect: false },
      { answerText: ".java", isCorrect: false },
      { answerText: ".html", isCorrect: false },
    ],
  },
  {
    questionText: "Which data structure does Python use for key-value pairs?",
    answerOptions: [
      { answerText: "List", isCorrect: false },
      { answerText: "Tuple", isCorrect: false },
      { answerText: "Dictionary", isCorrect: true },
      { answerText: "Set", isCorrect: false },
    ],
  },
]

const IntroToPython = () => (
  <Layout>
    <Seo
      title="Introduction to Python"
      description="Learn the basics of Python programming for data analytics."
    />
    <h1>Introduction to Python</h1>
    <p>
      Welcome to the Python programming module. This section will guide you through
      the fundamentals of Python, essential for data analysis.
    </p>
    
    <h2>Topics Covered</h2>
    <ul>
      <li>Python Basics</li>
      <li>Data Structures</li>
      <li>Control Flow</li>
      <li>Functions and Modules</li>
      <li>Working with Libraries (e.g., Pandas, NumPy)</li>
    </ul>
    
    <h2>Resources</h2>
    <ul>
      <li><a href="https://docs.python.org/3/tutorial/">Official Python Tutorial</a></li>
      <li><a href="https://www.learnpython.org/">Learn Python</a></li>
      <li><a href="https://www.codecademy.com/learn/learn-python-3">Codecademy Python Course</a></li>
      <li><a href="https://realpython.com/">Real Python</a></li>
      <li><a href="https://www.pythonforbeginners.com/">Python for Beginners</a></li>
      <li><a href="https://pandas.pydata.org/docs/">Pandas Documentation</a></li>
    </ul>
    
    <h2>Exercise: Basic Python Script</h2>
    <p>Write a Python script that prints "Hello, Data Analyst!" to the console.</p>
    <pre>
{`# Example Python Script
def greet():
    print("Hello, Data Analyst!")

greet()
`}
    </pre>
    
    <h2>Exercise: Data Structures in Python</h2>
    <p>
      Create a Python script that demonstrates the use of different data structures:
      List, Tuple, Dictionary, and Set.
    </p>
    <pre>
{`# Example Python Script for Data Structures

# List
fruits = ["Apple", "Banana", "Cherry"]
print("List:", fruits)

# Tuple
colors = ("Red", "Green", "Blue")
print("Tuple:", colors)

# Dictionary
person = {"name": "Alice", "age": 25}
print("Dictionary:", person)

# Set
unique_numbers = {1, 2, 3, 4, 5}
print("Set:", unique_numbers)
`}
    </pre>
    
    {/* Quiz Component placed after exercises */}
    <h2>Test Your Knowledge</h2>
    <QuizComponent questions={questions} />
    
    {/* Add more content, exercises, and resources as needed */}
  </Layout>
)

export default IntroToPython