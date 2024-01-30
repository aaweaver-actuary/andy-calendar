import PropTypes from 'prop-types';

const GoalList = ({ goals }) => {
  return (
    <ul data-testid="goal-list">
      {goals.map((goal, index) => (
        <li key={index}>{goal}</li>
      ))}
    </ul>
  );
};

GoalList.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoalList;
