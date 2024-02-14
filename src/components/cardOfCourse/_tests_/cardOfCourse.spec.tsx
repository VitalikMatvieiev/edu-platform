import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { CardOfCourse } from '../cardOfCourse';

describe('CardOfCourse Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CardOfCourse />
      </MemoryRouter>
    );
  });

  test('handles favorite button click', () => {
    const favoriteButton = screen.getByLabelText('Add to Favorites');
  
    fireEvent.click(favoriteButton);
    expect(favoriteButton).toHaveStyle('color: rgba(0, 0, 0, 0.54)');
  });

  test('renders "Join our learning" link', () => {
    const joinLink = screen.getByText('Join our learning');
  
    expect(joinLink).toBeInTheDocument();
    expect(joinLink.getAttribute('href')).toBe('/sign-up');
  });

  test('renders course price', () => {
    const coursePrice = screen.getByRole('course-price');

    expect(coursePrice).toBeInTheDocument();
  });

  test('renders course photo', () => {
    const coursePhoto = screen.getByAltText('Course Photo');
  
    expect(coursePhoto).toBeInTheDocument();
  });
});
