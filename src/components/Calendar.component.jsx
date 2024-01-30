import PropTypes from 'prop-types';

const CalendarComponent = ({ view, date, onDateSelect }) => {
  // Implement the logic to display calendar based on
  // the view(monthly, yearly)
  return (
    <div className={`calendar calendar-${view}`}>
      {
        (console.log('view', view),
        console.log('date', date),
        console.log('onDateSelect', onDateSelect))
      }
    </div>
  );
};

CalendarComponent.propTypes = {
  view: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onDateSelect: PropTypes.func.isRequired,
};

export default CalendarComponent;
