import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ExtendedFilter from '../extendedFilter';

describe('ExtendedFilter Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ExtendedFilter />
      </MemoryRouter>
    );
  });

  test('displays the correct title when no category is selected', () => {
    const filterTitle = screen.getByText('Choose the name of the course:');
    
    expect(filterTitle).toBeInTheDocument();
  });

  test('displays the correct title when a category is selected', () => {
    fireEvent.click(screen.getByText('Web Development'));
    
    expect(screen.getByText('Result for Web Development:')).toBeInTheDocument();
  });

  test('handles scroll left correctly', () => {
    fireEvent.click(screen.getByTestId('scroll-left-button'));
  });

  test('handles scroll right correctly', () => {
    fireEvent.click(screen.getByTestId('scroll-right-button'));
  });
});
