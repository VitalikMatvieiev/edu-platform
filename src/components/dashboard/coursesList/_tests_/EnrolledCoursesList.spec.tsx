import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { EnrolledCoursesList } from '../coursesList';

describe('EnrolledCoursesList Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <EnrolledCoursesList />
      </MemoryRouter>,
    );
  });

  test('should render 4 course cards', async () => {
    expect(screen.getAllByRole('card-grid')).toHaveLength(4);
  });
});
