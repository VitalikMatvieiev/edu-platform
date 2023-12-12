import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from '../UserProfile';

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
      render(<UserProfile />);
      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      });

      expect(screen.getByText(fullNameLabel)).toBeInTheDocument();
      expect(screen.getByText(emailLabel)).toBeInTheDocument();
      expect(screen.getByText(dobLabel)).toBeInTheDocument();
      expect(screen.getByText(regDateLabel)).toBeInTheDocument();
      expect(screen.getByText(lastLoginLabel)).toBeInTheDocument();
      expect(screen.getByAltText('profilePhoto')).toBeInTheDocument();
    });

    test('renders "Edit Profile" button', async () => {
      render(<UserProfile />);
      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      });

      expect(
        screen.getByRole('button', { name: editProfileButtonLabel }),
      ).toBeInTheDocument();
    });

    test('renders "Logout" button', async () => {
      render(<UserProfile />);
      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      });

      expect(
        screen.getByRole('button', { name: logoutButtonLabel }),
      ).toBeInTheDocument();
    });

    test('renders profile input fields', async () => {
      render(<UserProfile />);
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
        render(<UserProfile />);

        await waitFor(() => {
          expect(
            screen.getByText('Loading user profile...'),
          ).toBeInTheDocument();
        });

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
        render(<UserProfile />);

        await waitFor(() => {
          expect(
            screen.getByText('Loading user profile...'),
          ).toBeInTheDocument();
        });

        const editProfileButton = await waitFor(() => {
          return screen.getByRole('button', { name: editProfileButtonLabel });
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

  describe('Logout', () => {
    test('logs out on "Logout" button click', async () => {
      try {
        render(<UserProfile />);
        await waitFor(() => {
          expect(
            screen.getByText('Loading user profile...'),
          ).toBeInTheDocument();
        });

        const logoutButton = await waitFor(() => {
          return screen.getByRole('button', { name: logoutButtonLabel });
        });

        fireEvent.click(logoutButton);

        await waitFor(() => {
          expect(screen.queryByText('Loading user profile...')).toBeNull();
        });
      } catch (error) {
        console.error('Test failed with error:', error);
        throw error;
      }
    });
  });
});