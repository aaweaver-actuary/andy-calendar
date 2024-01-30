import PropTypes from 'prop-types';
import PrevDayButton from './buttons/PrevDayButton.component';
import NextDayButton from './buttons/NextDayButton.component';

const DateNavigation = ({ currentDate }) => {
  const date = new Date(currentDate);
  const dayOfWeek = date
    .toLocaleString('default', { weekday: 'long' })
    .toUpperCase();
  const dayNumber = date.getDate();

  return (
    <div
      className={`
      flex flex-row items-center justify-center
    `}
    >
      <PrevDayButton />
      <div
        className={`
        flex flex-col items-center justify-center
      `}
      >
        <h1
          className={`
          text-4xl font-bold
        `}
        >
          {dayNumber}
        </h1>
        <h2
          className={`
          text-2xl font-bold
        `}
        >
          {dayOfWeek}
        </h2>
      </div>
      <NextDayButton />
    </div>
  );
};

DateNavigation.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
};

export default DateNavigation;
