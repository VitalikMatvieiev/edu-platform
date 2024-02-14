import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { InstructorCard } from '../instructorCard';

jest.mock('../../../img/avatar.jpg', () => 'mocked-avatar-path');

describe('InstructorCard Component', () => {
  const testProps = {
    category: ['Math', 'Physics'],
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <InstructorCard {...testProps} />
      </MemoryRouter>,
    );
  });

  it('renders the component with the correct category', () => {
    const categoryText = screen.getByText('Math, Physics');

    expect(categoryText).toBeInTheDocument();
  });

  it('renders the component with the correct name', () => {
    const nameText = screen.getByText('John Doe');

    expect(nameText).toBeInTheDocument();
  });

  it('renders the component with the correct email', () => {
    const emailText = screen.getByText('john.doe@example.com');

    expect(emailText).toBeInTheDocument();
  });

  it('renders the component with the correct alt text for the avatar', () => {
    const avatarImage = screen.getByAltText('ava');
    
    expect(avatarImage).toBeInTheDocument();
  });
});
