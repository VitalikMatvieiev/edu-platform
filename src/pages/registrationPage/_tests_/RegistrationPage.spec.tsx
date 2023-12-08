import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import RegistrationPage from '../registrationPage';
//Grouping tests which check render and functionality of the page
describe('RegistrationPage - render and checking functionality', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>,
    );
  });
  //Test of rendering all page without errors
  test('renders registration page', () => {
    expect(screen.getByText(/Create your account/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/user@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Confirm Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Show password/i)).toBeInTheDocument();
    expect(screen.getByText(/Register like instructor/i)).toBeInTheDocument();
    expect(screen.getByText(/Have account?/i)).toBeInTheDocument();
  });
  //Test of button's show password correct work
  test('toggles password visibility back and forth', () => {
    const passwordInputs = screen.getAllByPlaceholderText(/password/i);
    expect(passwordInputs[0]).toHaveAttribute('type', 'password');
    fireEvent.click(screen.getByText(/Show password/i));
    expect(passwordInputs[0]).toHaveAttribute('type', 'text');
    fireEvent.click(screen.getByText(/Show password/i));
    expect(passwordInputs[0]).toHaveAttribute('type', 'password');
  });
});
//Group tests which check validation or errors
describe(`RegistrationPage - checking user's mistake`, () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>,
    );
  });
  //Test of validation and required fields
  test('handles registration with incorrect data', async () => {
    fireEvent.click(screen.getByText(/Create account/i));
    await waitFor(() => screen.getByText(/Username is required/i));
    await waitFor(() => screen.getByText(/Email is required/i));
    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });
  //Test of checking passwords match
  test('checking passwords match', async () => {
    // Simulate user input for registration form
    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'john_doe' },
    });
    fireEvent.change(screen.getByPlaceholderText(/user@gmail.com/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getAllByPlaceholderText(/password/i)[0], {
      // Select the first password input
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getAllByPlaceholderText(/password/i)[1], {
      // Select the second password input
      target: { value: 'incorrect_password' },
    });
    fireEvent.click(screen.getByText(/Create account/i));
    // Wait for validation messages to appear
    await waitFor(() => screen.getByText(/Passwords do not match/i));
    // Verify that the error message is displayed
    expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
  });
});
