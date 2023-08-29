import React from 'react';

const useCustomChart = (data) => {
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

/*   const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const month = payload[0].payload.month;
      return (
        <div className="custom-tooltip">
          <p>{month}</p>
        </div>
      );
    }

    return null;
  }; */

  return { getRandomColor,  };
};

export default useCustomChart;