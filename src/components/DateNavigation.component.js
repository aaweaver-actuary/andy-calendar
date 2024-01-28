import PropTypes from 'prop-types';

const DateNavigation = ({ currentDate, onDateChange }) => {
  return (
    <div className="date-navigation">
      {/* Implement navigation logic */}
      <button onClick={() => onDateChange(/* logic for previous date */)}>
        Previous
      </button>
      <span>{currentDate.toLocaleDateString()}</span>
      <button onClick={() => onDateChange(/* logic for next date */)}>
        Next
      </button>
    </div>
  );
};

DateNavigation.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DateNavigation;
