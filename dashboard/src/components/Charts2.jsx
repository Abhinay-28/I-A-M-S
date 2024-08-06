// src/components/AnalyticsChart2.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Sample data
const sampleData = [
  // USA
  {
    "_id": "669f7a371f3aca3fb399fea9",
    "country": "USA",
    "state": "Texas",
    "district": "District 1",
    "pincode": 345678,
    "names": "Peter",
    "__v": 0
  },
  {
    "_id": "66a26c2a7b490471f9934dd5",
    "names": "abhinay",
    "password": "12345678",
    "phone": 7017004485,
    "address": "Parth",
    "country": "USA",
    "state": "Alabama",
    "city": "Birmingham",
    "district": "District 1",
    "pincode": 2345665432,
    "__v": 0
  },
  {
    "_id": "66a26e837b490471f9934dd9",
    "names": "Arun",
    "password": "3456778888",
    "phone": 978675656453,
    "address": "jack",
    "country": "USA",
    "state": "Alabama",
    "city": "Birmingham",
    "district": "District 1",
    "pincode": 35203,
    "__v": 0
  },
  {
    "_id": "66a4a068dac02207a391ca07",
    "names": "Bob",
    "password": "234567",
    "phone": 9876544,
    "address": "harry",
    "country": "India",
    "state": "Alaska",
    "city": "Anchorage",
    "district": "District 1",
    "pincode": 1111111,
    "__v": 0
  },
  // India
  {
    "_id": "66acf1560e44612030843a02",
    "names": "Priyank",
    "password": "priyank1234",
    "phone": 9878678945,
    "address": "XYZABC",
    "country": "India",
    "state": "Andhra Pradesh",
    "city": "Guntur",
    "district": "District Y",
    "pincode": 234455,
    "__v": 0
  },
  // Russia
  {
    "_id": "66ac7ce7158c00d9fc0111f9",
    "names": "abhinay",
    "password": "aabbxx",
    "phone": 9876544321,
    "address": "XYZ",
    "country": "Russia",
    "state": "Moscow Oblast",
    "city": "Moscow",
    "district": "District 1",
    "pincode": 1234556,
    "__v": 0
  },
  {
    "_id": "66a4a068dac02207a391ca09",
    "names": "irina",
    "password": "112233",
    "phone": 7917005678,
    "address": "moscow street",
    "country": "Russia",
    "state": "Saint Petersburg",
    "city": "Saint Petersburg",
    "district": "District B",
    "pincode": 101000,
    "__v": 0
  },
  // Germany
  {
    "_id": "66a4a068dac02207a391ca08",
    "names": "michael",
    "password": "678901",
    "phone": 4917001234,
    "address": "berlin street",
    "country": "Germany",
    "state": "Berlin",
    "city": "Berlin",
    "district": "District A",
    "pincode": 10115,
    "__v": 0
  },
  // Australia
  {
    "_id": "66a4a068dac02207a391ca10",
    "names": "jack",
    "password": "445566",
    "phone": 6147009876,
    "address": "sydney road",
    "country": "Australia",
    "state": "New South Wales",
    "city": "Sydney",
    "district": "District C",
    "pincode": 2000,
    "__v": 0
  }
];

// Convert the data to chart format
const convertToChartData = (data) => {
  const personStateCounts = {};

  // Count the number of entries per state for each person
  data.forEach(entry => {
    const personName = entry.names.trim();
    const state = entry.state.trim();
    if (!personStateCounts[personName]) {
      personStateCounts[personName] = {};
    }
    personStateCounts[personName][state] = (personStateCounts[personName][state] || 0) + 1;
  });

  // Prepare data for the chart
  const labels = [];
  const datasets = [];

  Object.keys(personStateCounts).forEach((personName, index) => {
    Object.keys(personStateCounts[personName]).forEach(state => {
      if (!labels.includes(state)) {
        labels.push(state);
      }
    });

    const data = labels.map(state => personStateCounts[personName][state] || 0);
    datasets.push({
      label: personName,
      data,
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`,
      borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
      borderWidth: 1
    });
  });

  return {
    labels,
    datasets
  };
};

// Generate chart data for all entries
const chartData = convertToChartData(sampleData);

const AnalyticsChart2 = () => (
  <div>
    <h2>Entries per State for Each Person</h2>
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
            text: 'Number of Entries per State for Each Person'
          }
        },
      }}
    />
  </div>
);

export default AnalyticsChart2;



// src/components/AnalyticsChart2.js

