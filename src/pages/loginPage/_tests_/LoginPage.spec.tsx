import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from '../loginPage';
import { MemoryRouter } from 'react-router-dom';

describe('LoginPage Component', () => {
  test('renders login page', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    // Check if the title is rendered
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();

    // Check if the username and password inputs are present
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    // Check if the "Show Password" checkbox is present
    expect(screen.getByText(/Show Password/i)).toBeInTheDocument();

    // Check if the "Login" button is present
    expect(screen.getByText(/Login/i)).toBeInTheDocument();

    // Check if the "Don't have an account?" link is present
    expect(screen.getByText(/Don't have an account?/i)).toBeInTheDocument();
  });

  test('handles login with incorrect data', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    // Fill in the form with incorrect data
    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: '' },
    });

    // Click the "Login" button
    fireEvent.click(screen.getByText(/Login/i));

    // Wait for error message
    await screen.findByText(/Username is required/i);
    await screen.findByText(/Password is required/i);

    // Check if the error messages are displayed
    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test('toggles password visibility', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    // Initially, the password should be of type "password"
    expect(screen.getByPlaceholderText(/password/i)).toHaveAttribute(
      'type',
      'password',
    );

    // Click the "Show Password" checkbox
    fireEvent.click(screen.getByText(/Show Password/i));

    // After clicking, the password should be of type "text"
    expect(screen.getByPlaceholderText(/password/i)).toHaveAttribute(
      'type',
      'text',
    );
  });
});
