// FILEPATH: /home/aweaver/react/andy-calendar/src/tests/GoalList.test.jsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GoalList from '../components/GoalList.component';

describe('GoalList', () => {
  it('renders a list of goals', () => {
    const goals = ['Goal 1', 'Goal 2', 'Goal 3'];
    render(<GoalList goals={goals} />);

    // Check if the list is present
    const goalList = screen.getByTestId('goal-list');
    expect(goalList).toBeInTheDocument();

    // Check if each goal is present in the document
    goals.forEach((goal) => {
      expect(screen.getByText(goal)).toBeInTheDocument();
    });
  });

  it('does not render when there are no goals', () => {
    render(<GoalList goals={[]} />);
    const goalList = screen.queryByTestId('goal-list');
    expect(goalList).toBeNull();
  });
});
