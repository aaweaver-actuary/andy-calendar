import TaskList from './TaskList.component';
import GoalList from './GoalList.component';
import PropTypes from 'prop-types';

const Day = ({ date, tasks, goals }) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div data-testid={`day-${date.getDate()}`}>
      <h3>{formattedDate}</h3>
      <TaskList tasks={tasks} />
      <GoalList goals={goals} />
      {
        (console.log('date', date),
        console.log('tasks', tasks),
        console.log('goals', goals))
      }
    </div>
  );
};

Day.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Day;
