// TaskListComponent.test.js

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskListComponent from '../components/TaskListComponent';

describe('TaskListComponent', () => {
  it('renders a list of tasks', () => {
    const tasks = ['Task 1', 'Task 2'];
    render(<TaskListComponent tasks={tasks} />);
    tasks.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});
