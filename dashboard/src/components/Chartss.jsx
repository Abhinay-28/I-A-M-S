import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Sample data
const sampleData = [
  {
    "_id": "66ac6f39158c00d9fc0110ce",
    "country": "India",
    "state": "Andhra Pradesh",
    "district": "District X",
    "__v": 0
},
{
    "_id": "66ac6f5d158c00d9fc0110d7",
    "country": "India",
    "state": "Andhra Pradesh",
    "district": "District Y",
    "__v": 0
},
{
    "_id": "66ac6f75158c00d9fc0110e0",
    "country": "USA",
    "state": "Alaska",
    "district": "District 1",
    "__v": 0
},
{
    "_id": "66ac6f82158c00d9fc0110e2",
    "country": "USA",
    "state": "Alabama",
    "district": "District 2",
    "__v": 0
},
{
    "_id": "66ac6fa4158c00d9fc0110e4",
    "country": "Russia",
    "state": "Saint Petersburg",
    "district": "District a",
    "__v": 0
},
{
    "_id": "66ac6fb8158c00d9fc0110ed",
    "country": "Germany",
    "state": "North Rhine-Westphalia",
    "district": "District Y",
    "__v": 0
},
{
    "_id": "66ac6fc6158c00d9fc0110ef",
    "country": "Russia",
    "state": "Moscow Oblast",
    "district": "District b",
    "__v": 0
}
];

// Convert the data to chart format
const convertToChartData = (data) => {
  const stateCounts = {};

  // Count the number of entries per state
  data.forEach(entry => {
    const state = entry.state.trim(); // Trim spaces
    stateCounts[state] = (stateCounts[state] || 0) + 1;
  });

  // Extract labels and data for the chart
  const labels = Object.keys(stateCounts);
  const counts = Object.values(stateCounts);

  return {
    labels,
    datasets: [
      {
        label: 'Number of Entries',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      }
    ]
  };
};

// Generate chart data
const chartData = convertToChartData(sampleData);

const AnalyticsChart = () => (
  <div>
    <h2>Entries per State</h2>
    <Bar
      data={chartData}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Number of Entries per State'
          }
        },
      }}
    />
  </div>
);

export default AnalyticsChart;
