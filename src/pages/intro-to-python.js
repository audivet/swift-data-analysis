import * as React from "react";
import Layout from "../components/layout";
import QuizComponent from "../components/QuizComponent";

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
    questionText: "Which company developed Python?",
    answerOptions: [
      { answerText: "Microsoft", isCorrect: false },
      { answerText: "Apple", isCorrect: false },
      { answerText: "Google", isCorrect: false },
      { answerText: "Python Software Foundation", isCorrect: true },
    ],
  },
  // Add more questions below in the same format
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
];


const IntroToPython = () => (
  <Layout>
    <h1>Introduction to Python</h1>
    <p>Welcome to the Python section. In this section, you'll learn the basics of Python programming and its use in data analysis.</p>
    <h2>Test Your Knowledge</h2>
    <QuizComponent questions={questions} />
  </Layout>
);

export default IntroToPython;
