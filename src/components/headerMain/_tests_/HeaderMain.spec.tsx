import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderMain from '../headerMain';

describe('HeaderMain Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HeaderMain />
      </MemoryRouter>,
    );
  });
  test('renders header text', () => {
    const headerText = screen.getByText(/Discover new courses/i);
    expect(headerText).toBeInTheDocument();
  });
  test('renders search input', () => {
    const searchInput = screen.getByPlaceholderText(/Search courses/i);
    expect(searchInput).toBeInTheDocument();
  });
  test('handles search input change', async () => {
    const searchInput = screen.getByPlaceholderText(/Search courses/i);
    expect(searchInput).toBeInTheDocument();
    await act(async () => {
      userEvent.type(searchInput, 'React');
      await waitFor(() => expect(searchInput).toHaveValue('React'));
    });
  });
});
