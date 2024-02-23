import { render, screen } from '@testing-library/react';
import { CurrentLesson } from '../currentLesson';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('CurrentLesson', () => {
  const props = {
    courseId: 11,
    courseName: 'Science',
    lessonName: 'Math',
    lessonCurrentNumber: 3,
    allLessonsCount: 4,
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <CurrentLesson
          courseId={props.courseId}
          courseName={props.courseName}
          lessonName={props.lessonName}
          lessonCurrentNumber={props.lessonCurrentNumber}
          allLessonsCount={props.allLessonsCount}
        />
      </MemoryRouter>,
    );
  });

  test('renders current lesson', () => {
    const lessonCard = screen.getByTestId('cl-card');
    expect(lessonCard).toBeInTheDocument();
  });

  test('renders custom lesson card with props', () => {
    const courseName = screen.getByText(props.courseName);
    expect(courseName).toBeInTheDocument();

    const lessonName = screen.getByText(props.lessonName);
    expect(lessonName).toBeInTheDocument();

    const lessonInfo = screen.getByText(
      `${props.lessonCurrentNumber}/${props.allLessonsCount}`,
    );
    expect(lessonInfo).toBeInTheDocument();
  });
});
