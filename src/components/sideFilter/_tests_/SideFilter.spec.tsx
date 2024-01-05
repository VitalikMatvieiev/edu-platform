import '@testing-library/jest-dom';
import { fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideFilter from '../sideFilter';


describe('SideFilter component', () => {
    beforeEach(() => {
        render(
          <MemoryRouter>
            <SideFilter />
          </MemoryRouter>,
        );
      });
    test('renders without errors', () => {
      expect(screen.getByText('Duration range')).toBeInTheDocument();
      expect(screen.getByText('Instructor')).toBeInTheDocument();
      expect(screen.getByText('Category')).toBeInTheDocument();
      expect(screen.getByText('Level')).toBeInTheDocument();
      expect(screen.getByText('Apply')).toBeInTheDocument();
    });

    test('handles instructor selection', () => {
        const checkbox = screen.getByLabelText(/John \(4\)/);
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
      });

      test('handles category selection', () => {
        const checkbox = screen.getByLabelText(/Interactive \(4\)/);
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
      });

      test('handles level selection', () => {
        const checkbox = screen.getByLabelText(/Beginner \(2\)/);
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
      });

      test('handles price range change', () => {
        const priceInput = screen.getAllByDisplayValue(0)[0];
        fireEvent.change(priceInput, { target: { value: 50 } });
        expect(priceInput).toHaveValue(50);
      });

      test('button is clicked', () => {
        const applyButton = screen.getByText(/Apply/i);
        fireEvent.click(applyButton);
      });
})