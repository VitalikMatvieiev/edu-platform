import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardOfCourse from '../CardOfCourse';

describe('CardOfCourse Component', () => {
  test('renders without errors', () => {
    render(<CardOfCourse />);
    expect(screen.getByTestId('card-of-course')).toBeInTheDocument();
  });

  test('toggles favorite state on button click', () => {
    render(<CardOfCourse />);
    const favoriteButton = screen.getByLabelText('Add to Favorites');

    // Initial state check
    expect(favoriteButton).toHaveStyle({ color: 'black' });

    // Click to toggle favorite
    fireEvent.click(favoriteButton);

    // Check if the state is updated
    expect(favoriteButton).toHaveStyle({ color: 'red' });

    // Click again to toggle back
    fireEvent.click(favoriteButton);

    // Check if the state is updated back to initial
    expect(favoriteButton).toHaveStyle({ color: 'black' });
  });
});
