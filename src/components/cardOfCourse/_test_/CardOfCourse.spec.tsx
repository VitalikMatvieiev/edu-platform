import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import CardOfCourse from '../CardOfCourse';

describe('CardOfCourse Component', () => {
  test('handles favorite button click', () => {
    const { getByLabelText } = render(
    <MemoryRouter>
      <CardOfCourse />
    </MemoryRouter>,);
    const favoriteButton = getByLabelText('Add to Favorites');
  
    fireEvent.click(favoriteButton);
    expect(favoriteButton).toHaveStyle('color: rgba(0, 0, 0, 0.54)');
  });

  test('renders "Join our learning" link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CardOfCourse />
      </MemoryRouter>
    );
    const joinLink = getByText('Join our learning');
  
    expect(joinLink).toBeInTheDocument();
    expect(joinLink.getAttribute('href')).toBe('/sign-up');
  });

  test('renders course price', () => {
    const { getByText } = render(
    <MemoryRouter>
      <CardOfCourse />
    </MemoryRouter>
    );
    const expectedCoursePrice = '$0';
    const coursePrice = getByText(expectedCoursePrice);

    expect(coursePrice).toBeInTheDocument();
  });

  test('renders course photo', () => {
    const { getByAltText } = render(
    <MemoryRouter>
      <CardOfCourse />
    </MemoryRouter>
    );
    const coursePhoto = getByAltText('Course Photo');
  
    expect(coursePhoto).toBeInTheDocument();
  });
});
