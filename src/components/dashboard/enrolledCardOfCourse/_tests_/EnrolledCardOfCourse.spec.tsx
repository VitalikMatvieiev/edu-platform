import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { EnrolledCardOfCourse } from '../enrolledCardOfCourse';

describe('EnrolledCardOfCourse Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <EnrolledCardOfCourse
          id=""
          title=""
          imageUrl=""
          category=""
          timeOfClasses=""
          numberOfStudents={0}
          completedChapterLength={0}
          chaptersLength={0}
        />
      </MemoryRouter>,
    );
  });

  test('renders course title', () => {
    const courseTitle = screen.getByRole('course-title');

    expect(courseTitle).toBeInTheDocument();
  });

  test('renders course photo', () => {
    const coursePhoto = screen.getByAltText('Course Photo');

    expect(coursePhoto).toBeInTheDocument();
  });
});
