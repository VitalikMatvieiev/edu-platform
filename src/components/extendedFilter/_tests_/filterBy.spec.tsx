import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { FilterBy } from '..';

describe('ExtendedFilter Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <FilterBy />
      </MemoryRouter>,
    );
  });
  test('initially hides the filter options', () => {
    const filterOptions = screen.queryByTestId('filter-options');

    expect(filterOptions).not.toBeInTheDocument();
  });

  test('toggles filter visibility on button click', () => {
    const filterButton = screen.getByTestId('filter-button');

    fireEvent.click(filterButton);

    const filterOptions = screen.getByTestId('filter-options');

    expect(filterOptions).toBeInTheDocument();
    fireEvent.click(filterButton);

    expect(filterOptions).not.toBeInTheDocument();
  });
});
