import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { SortingNew } from '..';

describe('ExtendedFilter Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SortingNew />
      </MemoryRouter>,
    );
  });
  test('display sorting', () => {
    expect(screen.getByLabelText('Sort by:')).toBeInTheDocument();
  });

  test('displays all sort options after clicking select', () => {
    const selectElement = screen.getByLabelText(
      'Sort by:',
    ) as HTMLSelectElement;
    const sortOptions = [
      'Rating (Ascending)',
      // 'Most Popular (Ascending)',
      // 'Newest (Ascending)',
      'Price (Ascending)',
      'Rating (Descending)',
      // 'Most Popular (Descending)',
      // 'Newest (Descending)',
      'Price (Descending)',
    ];

    sortOptions.forEach((option) => {
      selectElement.value = option;

      fireEvent.change(selectElement);
      expect(selectElement.value).toBe(option);
    });
  });
});
