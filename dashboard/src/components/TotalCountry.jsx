import React, { useState, useEffect } from 'react';

// Component to display the total number of unique countries with incremental animation
const TotalCountries = ({ data }) => {
  const [totalCountries, setTotalCountries] = useState(0);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      // Create a set to store unique country names
      const uniqueCountries = new Set();

      data.forEach(item => {
        if (item && item.country) {
          uniqueCountries.add(item.country.toUpperCase()); // To handle case sensitivity
        }
      });

      const count = uniqueCountries.size;

      // Incremental animation
      let increment = 0;
      const duration = 1000; // Duration in milliseconds
      const incrementStep = count / (duration / 10); // Calculate increment step

      const interval = setInterval(() => {
        increment += incrementStep;
        if (increment >= count) {
          increment = count;
          clearInterval(interval);
        }
        setTotalCountries(Math.floor(increment));
      }, 10);

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <div>
      <h2>Total Number of Unique Countries</h2>
      <div style={{ fontSize: '2rem', fontWeight: 'bold',position:'relative',left:'340px' }}>{totalCountries}</div>
    </div>
  );
};

export default TotalCountries;
