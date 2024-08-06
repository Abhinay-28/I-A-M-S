import React, { useState, useEffect } from 'react';

// Component to display the total number of unique states with incremental animation
const TotalStates = ({ data }) => {
  const [totalStates, setTotalStates] = useState(0);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      // Create a set to store unique state names
      const uniqueStates = new Set();

      data.forEach(item => {
        if (item && item.state) {
          uniqueStates.add(item.state.toUpperCase()); // To handle case sensitivity
        }
      });

      const count = uniqueStates.size;

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
        setTotalStates(Math.floor(increment));
      }, 10);

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <div>
      <h2>Total Number of Unique States</h2>
      <div style={{ fontSize: '2rem', fontWeight: 'bold',position:'relative', left:'347px' }}>{totalStates}</div>
    </div>
  );
};

export default TotalStates;
