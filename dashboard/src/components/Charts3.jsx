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
      "names": "ABCDEFGhijkl",
      "__v": 0
  },
  {
      "_id": "66a26c2a7b490471f9934dd5",
      "names": "abhinay",
      "password": "12345678",
      "phone": 7017004485,
      "address": "cgottiiii",
      "country": "USA",
      "state": "Alabama",
      "city": "Birmingham",
      "district": "District 1",
      "pincode": 2345665432,
      "__v": 0
  },
  {
      "_id": "66a26e837b490471f9934dd9",
      "names": "eeeeeeee",
      "password": "3456778888",
      "phone": 978675656453,
      "address": "jhuehuee",
      "country": "USA",
      "state": "Alabama",
      "city": "Birmingham",
      "district": "District 1",
      "pincode": 35203,
      "__v": 0
  },
  // India
  {
      "_id": "66a4a068dac02207a391ca07",
      "names": "ttttttt",
      "password": "234567",
      "phone": 9876544,
      "address": "hjufhefef",
      "country": "India",
      "state": "Alaska",
      "city": "Anchorage",
      "district": "District 1",
      "pincode": 1111111,
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
  // Russia
  {
      "_id": "66a4a068dac02207a391ca09",
      "names": "irina",
      "password": "112233",
      "phone": 7917005678,
      "address": "moscow street",
      "country": "Russia",
      "state": "Moscow",
      "city": "Moscow",
      "district": "District B",
      "pincode": 101000,
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
  const countryCounts = {};

  // Count the number of users per country
  data.forEach(entry => {
    const country = entry.country.trim();
    if (!countryCounts[country]) {
      countryCounts[country] = 0;
    }
    countryCounts[country]++;
  });

  // Prepare data for the chart
  const labels = Object.keys(countryCounts);
  const datasetData = Object.values(countryCounts);

  return {
    labels,
    datasets: [{
      label: 'Number of Users',
      data: datasetData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
};

// Generate chart data for all entries
const chartData = convertToChartData(sampleData);

const AnalyticsChart3 = () => (
  <div>
    <h2>Total Users per Country</h2>
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
            text: 'Total Number of Users per Country'
          }
        },
      }}
    />
  </div>
);

export default AnalyticsChart3;
