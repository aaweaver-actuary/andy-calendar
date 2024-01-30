import PropTypes from 'prop-types';
import DayHeader from './header/DayHeader.component';
import WeekHeader from './header/WeekHeader.component';
import MonthHeader from './header/MonthHeader.component';
import YearHeader from './header/YearHeader.component';
import WeeklyReflectionHeader from './header/WeeklyReflectionHeader.component';
import MonthlyReflectionHeader from './header/MonthlyReflectionHeader.component';
import YearlyPlanningHeader from './header/YearlyPlanningHeader.component';

const Header = ({ headerType }) => {
  switch (headerType) {
    case 'day':
      return <DayHeader />;
    case 'week':
      return <WeekHeader />;
    case 'month':
      return <MonthHeader />;
    case 'year':
      return <YearHeader />;
    case 'weeklyReflection':
      return <WeeklyReflectionHeader />;
    case 'monthlyReflection':
      return <MonthlyReflectionHeader />;
    case 'yearlyPlanning':
      return <YearlyPlanningHeader />;
    default:
      <DayHeader />;
  }
};

Header.propTypes = {
  headerType: PropTypes.string.isRequired,
};

export default Header;
