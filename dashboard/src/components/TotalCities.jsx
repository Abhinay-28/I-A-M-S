import React, { useState, useEffect } from 'react';

const TotalCities = ({ data }) => {
  const [totalCities, setTotalCities] = useState(0);

  useEffect(() => {
    let count = 0;

    if (data && typeof data === 'object') {
      console.log('Data:', data);

      Object.values(data).forEach(states => {
        if (states && typeof states === 'object') {
          console.log('States:', states);

          Object.values(states).forEach(cities => {
            if (cities && typeof cities === 'object') {
              console.log('Cities:', cities);
              count += Object.keys(cities).length;
            }
          });
        }
      });
    }

    console.log('Total Count:', count);

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
      setTotalCities(Math.floor(increment));
    }, 10);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div>
      <h2>Total Number of Cities</h2>
      <div style={{ fontSize: '2rem', fontWeight: 'bold',position:'relative',left:'331px' }}>{totalCities}</div>
    </div>
  );
};

export default TotalCities;