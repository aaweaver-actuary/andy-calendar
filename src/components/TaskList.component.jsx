import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => {
  return (
    <ul data-testid="task-list">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskList;
