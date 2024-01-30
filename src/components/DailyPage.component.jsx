import PropTypes from 'prop-types';
import DayHeader from './header/DayHeader.component';
import '../App.css';

const defaultDate = new Date(); // today
const DailyPage = ({ date = defaultDate }) => {
  return (
    <main className={`daily-page letter-page`}>
      <header className="daily-header bg-red-400">
        <DayHeader date={date} />
      </header>
      <h1>Daily Page</h1>
    </main>
  );
};

DailyPage.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default DailyPage;
