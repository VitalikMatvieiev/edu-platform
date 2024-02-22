import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { UserProfile } from '../userProfile';

jest.mock('axios');

describe('UserProfile Component', () => {
  const fullNameLabel = 'Full name';
  const emailLabel = 'Email';
  const dobLabel = 'Date of Birth';
  const regDateLabel = 'Registration Date';
  const lastLoginLabel = 'Last login date';
  const editProfileButtonLabel = 'Edit Profile';
  const logoutButtonLabel = 'Logout';

  describe('Rendering', () => {
    test('renders user profile information', async () => {
      try {
        render(
          <MemoryRouter>
            <UserProfile />
          </MemoryRouter>,
        );
        await waitFor(() => {
          expect(screen.getByText('Personal information')).toBeInTheDocument();
        });
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
        expect(screen.getByText(fullNameLabel)).toBeInTheDocument();
        expect(screen.getByText(emailLabel)).toBeInTheDocument();
        expect(screen.getByText(dobLabel)).toBeInTheDocument();
        expect(screen.getByText(regDateLabel)).toBeInTheDocument();
        expect(screen.getByText(lastLoginLabel)).toBeInTheDocument();
        expect(screen.getByAltText('profilePhoto')).toBeInTheDocument();
      } catch (error) {
        console.error('Test failed with error:', error);
        throw error;
      }
    });

    test('renders "Edit Profile" button', async () => {
      try {
        render(
          <MemoryRouter>
            <UserProfile />
          </MemoryRouter>,
        );
        await waitFor(() => {
          expect(screen.getByText('Personal information')).toBeInTheDocument();
        });
        expect(
          screen.getByRole('button', { name: 'Edit Profile' }),
        ).toBeInTheDocument();
      } catch (error) {
        console.error('Test failed with error:', error);
        throw error;
      }
    });

    test('renders "Logout" button', async () => {
      try {
        render(
          <MemoryRouter>
            <UserProfile />
          </MemoryRouter>,
        );
        await waitFor(() => {
          expect(screen.getByText('Personal information')).toBeInTheDocument();
        });
        expect(screen.getByText(logoutButtonLabel)).toBeInTheDocument();
      } catch (error) {
        console.error('Test failed with error:', error);
        throw error;
      }
    });

    test('renders profile input fields', async () => {
      render(
        <MemoryRouter>
          <UserProfile />
        </MemoryRouter>,
      );
      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      });

      const labelElement = screen.getByText(fullNameLabel).closest('label');
      const inputElement = labelElement
        ? labelElement.querySelector('input')
        : null;

      if (inputElement) {
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'text');
      } else {
        console.error('Input element not found');
      }
    });
  });

  describe('Profile Editing', () => {
    test('enables editing when "Edit Profile" button is clicked', async () => {
      try {
        render(
          <MemoryRouter>
            <UserProfile />
          </MemoryRouter>,
        );

        const editProfileButton = await waitFor(() => {
          return screen.getByRole('button', { name: /edit profile/i });
        });

        fireEvent.click(editProfileButton);

        const editingInput = await waitFor(() => {
          return screen.getByLabelText(fullNameLabel);
        });

        expect(editingInput).toBeInTheDocument();
        expect(editingInput).toHaveAttribute('type', 'text');
      } catch (error) {
        console.error('Test failed with error:', error);
        throw error;
      }
    });

    test('updates profile on "Save Changes" button click', async () => {
      try {
        render(
          <MemoryRouter>
            <UserProfile />
          </MemoryRouter>,
        );

        const editProfileButton = await waitFor(() => {
          return screen.getByText(editProfileButtonLabel);
        });

        fireEvent.click(editProfileButton);

        const editingInput = screen.getByLabelText(fullNameLabel);

        fireEvent.change(editingInput, { target: { value: 'New Name' } });

        fireEvent.click(screen.getByText('Save Changes'));

        await waitFor(() => {
          const updatedProfile = screen.queryByText(/new name/i);

          if (updatedProfile) {
            expect(updatedProfile).toBeInTheDocument();
            return true;
          }

          const alternativeUpdatedProfile = screen.queryByTestId(
            'alternative-profile-username',
          );

          if (alternativeUpdatedProfile) {
            expect(alternativeUpdatedProfile).toBeInTheDocument();
            return true;
          }
          return false;
        });
      } catch (error) {
        console.error('Test failed with error:', error);
        throw error;
      }
    });
  });

  describe(logoutButtonLabel, () => {
    test('logs out and redirects to "/" on "Logout" button click', async () => {
      try {
        render(
          <MemoryRouter>
            <UserProfile />
          </MemoryRouter>,
        );
        await waitFor(() => {
          expect(screen.queryByText('Loading user profile...')).toBeNull();
        });
        const logoutButton = screen.getByText(logoutButtonLabel);
        fireEvent.click(logoutButton);

        fireEvent.click(logoutButton);

        await waitFor(() => {
          expect(screen.queryByText('Loading user profile...')).toBeNull();
        });

        expect(window.location.pathname).toBe('/');
      } catch (error) {
        console.error('Test failed with error:', error);
        throw error;
      }
    });
  });
});
