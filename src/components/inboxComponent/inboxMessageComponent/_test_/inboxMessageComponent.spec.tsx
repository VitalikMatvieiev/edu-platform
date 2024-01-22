import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import InboxMessageComponent from '../inboxMessageComponent';

describe('InboxMessageComponent Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <InboxMessageComponent id="" title="" description="" />
      </MemoryRouter>,
    );
  });

  test('renders message title', () => {
    const messageTitle = screen.getByRole('message-title');

    expect(messageTitle).toBeInTheDocument();
  });

  test('renders message description', () => {
    const messageDescription = screen.getByRole('message-description');

    expect(messageDescription).toBeInTheDocument();
  });

  test('button is clicked', () => {
    const moreButton = screen.getByTestId('inbox-button');

    fireEvent.click(moreButton);
  });
});
