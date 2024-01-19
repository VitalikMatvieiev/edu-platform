import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderInstructors from '../headerInstructors';

jest.mock('../../../img/avatar.jpg', () => 'mocked-avatar-path');

describe('HeaderInstructors Component', () => {
  const testProps = {
    value: '',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <HeaderInstructors {...testProps} />
      </MemoryRouter>,
    );
  });

  it('renders the component with the correct text', () => {
    const headerText = screen.getByText('Instructors');
    expect(headerText).toBeInTheDocument();
  });

  it('renders the SearchInput component with the correct props', () => {
    const searchInput = screen.getByPlaceholderText('Search for instructors');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
  });

  it('renders the component with three Links', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });
});
