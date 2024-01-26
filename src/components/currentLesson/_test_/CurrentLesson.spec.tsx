import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CurrentLesson from '../CurrentLesson';
import '@testing-library/jest-dom';

describe('CurrentLesson', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CurrentLesson />
      </MemoryRouter>
    )
  })
});

test('renders current lesson', () => {
  const lessonCard = screen.getByTestId('cl-card');
  expect(lessonCard).toBeInTheDocument();
});

test('renders custom lesson card with props', () => {
  const props = [
    {
      courseName: "Science",
      lessonName: "Math",
      lessonCurrentNumber: 3,
      allLessonsCount: 4,
    },
  ];

  props.forEach((field) => {
    const courseName = screen.getByText(field.courseName);
    expect(courseName).toBeInTheDocument();

    const lessonName = screen.getByText(field.lessonName);
    expect(lessonName).toBeInTheDocument();

    const lessonCurrentNumber = screen.getByLabelText(field.lessonCurrentNumber);
    expect(lessonCurrentNumber).toBeInTheDocument();

    const allLessonsCount = screen.getByLabelText(field.allLessonsCount);
    expect(allLessonsCount).toBeInTheDocument();
  });
});