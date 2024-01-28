import Day from './Day.component';
import PropTypes from 'prop-types';

const WeeklySpreadPage = ({ startDate, endDate }) => {
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
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedEndDate = endDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const weekDates = getDatesForWeek(startDate, endDate);

  return (
    <div data-testid="weekly-spread-page">
      <h2>{`${formattedStartDate} - ${formattedEndDate}`}</h2>
      {weekDates.map((date, index) => (
        <Day key={index} date={date} tasks={'tasks'} goals={'goals'} />
      ))}
    </div>
  );
};

WeeklySpreadPage.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
};

export default WeeklySpreadPage;
