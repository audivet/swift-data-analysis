import React from 'react';
import .* from '.*/layout';

const IntroToSwift = () => (
  <Layout>
    <h1 className="text-4xl font-bold">Introduction to Swift</h1>
    <p className="mt-4 text-lg">
      Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS, and beyond. Whether you&apos;re an experienced developer or just getting started, Swift makes it easy to write software that&apos;s incredibly fast and safe by design.
    </p>

    <h2 className="text-2xl font-semibold mt-6">Why Learn Swift?</h2>
    <ul className="list-disc list-inside mt-4">
      <li>Modern and clean syntax</li>
      <li>Type-safe language that reduces errors</li>
      <li>Swift is fast, easy to use, and open source</li>
      <li>Backed by a strong community and used in industry-leading apps</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-6">Basic Syntax</h2>
    <p className="mt-4">
      Let&apos;s start with some basic syntax in Swift. Here&apos;s how you declare variables, constants, and basic control flow:
    </p>
    <h3 className="text-xl font-semibold mt-4">Variables and Constants</h3>
    <pre className="bg-gray-100 p-4 rounded mt-4">
      <code>
        {`var str = "Hello, Swift"
        let pi = 3.14159`}
      </code>
    </pre>
  </Layout>
);

export default IntroToSwift;

