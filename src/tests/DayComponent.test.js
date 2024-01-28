import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Day from '../components/Day.component';

describe('Day', () => {
  it('renders with the correct date, tasks, and goals', () => {
    const date = new Date(2024, 0, 28);
    const tasks = ['Task 1', 'Task 2'];
    const goals = ['Goal 1', 'Goal 2'];

    render(<Day date={date} tasks={tasks} goals={goals} />);

    expect(screen.getByText('January 28, 2024')).toBeInTheDocument();
    expect(screen.getByTestId('task-list')).toBeInTheDocument();
    expect(screen.getByTestId('goal-list')).toBeInTheDocument();
  });
});
