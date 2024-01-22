import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CalendarComponent from '../calendarComponent';
import '@testing-library/jest-dom';

describe('CalendarComponent', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CalendarComponent />
      </MemoryRouter>,
    );
  });

  test('renders calendar component', () => {
    const calendarContainer = screen.getByTestId('calendar-container');
    expect(calendarContainer).toBeInTheDocument();
  });

  test('renders custom calendar tile', () => {
    const customCalendarTiles = screen.getAllByTestId('custom-calendar-tile');
    expect(customCalendarTiles.length).toBeGreaterThan(0);
  });

  test('renders custom calendar tile with event', () => {
    const events = [
      {
        courseName: 'Introduction to Programming',
        instructorName: 'John Doe',
        date: 'January 20, 2024',
      },
    ];

    events.forEach((event) => {
      const courseNameElement = screen.getByText(event.courseName);
      const instructorNameElement = screen.getByText(event.instructorName);
      const dateElement = screen.getByLabelText(event.date);
      expect(dateElement).toBeInTheDocument();
      expect(instructorNameElement).toBeInTheDocument();
      expect(courseNameElement).toBeInTheDocument();
    });
  });
});
