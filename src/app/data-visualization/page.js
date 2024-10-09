import React from 'react';
import .* from '.*/layout';

const DataVisualization = () => (
  <Layout>
    <h1 className="text-4xl font-bold">Data Visualization with Swift</h1>
    <p className="mt-4 text-lg">
      Data Visualization is the process of transforming data into graphical representations to make it easier to understand and interpret. 
      In this section, you will learn how to create stunning visualizations using Swift.
    </p>

    <h2 className="text-2xl font-semibold mt-6">Why Data Visualization?</h2>
    <ul className="list-disc list-inside mt-4">
      <li>Helps in understanding complex data</li>
      <li>Improves decision-making by presenting data visually</li>
      <li>Enhances storytelling with data</li>
      <li>Used in various industries including finance, healthcare, and more</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-6">Creating Visualizations with Swift</h2>
    <p className="mt-4">
      Swift offers powerful libraries for creating visualizations. Here’s an example of how to create a simple bar chart using Swift:
    </p>

    <pre className="bg-gray-100 p-4 rounded mt-4">
      <code>
        {`import SwiftUI

struct BarChart: View {
    var body: some View {
        VStack {
            Text("Sales Data")
                .font(.title)
            HStack {
                VStack {
                    Text("Q1")
                    Rectangle().fill(Color.blue).frame(width: 20, height: 100)
                }
                VStack {
                    Text("Q2")
                    Rectangle().fill(Color.blue).frame(width: 20, height: 150)
                }
                VStack {
                    Text("Q3")
                    Rectangle().fill(Color.blue).frame(width: 20, height: 200)
                }
                VStack {
                    Text("Q4")
                    Rectangle().fill(Color.blue).frame(width: 20, height: 170)
                }
            }
        }
    }
}`}
      </code>
    </pre>

    <p className="mt-4">
      This is a basic example to help you understand how to start with data visualization in Swift. As you progress, you’ll be able to create more complex and dynamic visualizations.
    </p>
  </Layout>
);

export default DataVisualization;

