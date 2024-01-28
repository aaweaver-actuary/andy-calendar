// WeeklySpreadPage.js updated with abstracted components

import React from 'react';
import DayComponent from './DayComponent';

const WeeklySpreadPage = ({ startDate, endDate }) => 
  // Function to generate an array of dates for the week
  const getDatesForWeek = (start, end) => {
    let dates = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  // Format the start and end dates to a readable format
  const formattedStartDate = startDate.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  const formattedEndDate = endDate.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const weekDates = getDatesForWeek(startDate, endDate);

  return (
    <div data-testid="weekly-spread-page">
      <h2>{`${formattedStartDate} - ${formattedEndDate}`}</h2>
      {weekDates.map((date, index) => (
        <DayComponent 
          key={index} 
          date={date} 
          tasks={/* tasks for this date */} 
          goals={/* goals for this date */}
        />
      ))}
    </div>
  );
};

export default WeeklySpreadPage;