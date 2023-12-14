import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import GoogleAuthButton from '../button/GoogleAuthButton';

jest.mock('axios');

describe('GoogleAuthButton Component', () => {
  it('calls Google login on button click', async () => {
    const mockedData = {
      data: {
        // mocked user data from Google API
        name: 'John Doe',
        email: 'johndoe@gmail.com',
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockedData); // Casting axios.get to jest.Mock

    const { getByText } = render(<GoogleAuthButton />);

    const signInButton = getByText('Sign in with Google');
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: {
            Authorization: expect.stringContaining('Bearer'),
          },
        }
      );
    });
  });
});