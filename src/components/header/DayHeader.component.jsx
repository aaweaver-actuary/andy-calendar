import PropTypes from 'prop-types';
// import DateNavigation from '../DateNavigation.component';
// import CalendarNavigation from '../CalendarNavigation.component';

const defaultDate = new Date(); // today

const DayHeader = ({ date = defaultDate }) => {
  return (
    <>
      <h1>{date.month}</h1>
      {/* <DateNavigation currentDate={date} /> */}
      {/* <CalendarNavigation currentDate={date} /> */}
    </>
  );
};

DayHeader.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default DayHeader;
