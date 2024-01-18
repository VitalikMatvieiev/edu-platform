import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import MessagesList from '../messagesList';

describe('InboxMessageComponent Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MessagesList />
      </MemoryRouter>,
    );
  });

  test('should render from 3 to 5 messages', async () => {
    const messageCards = screen.getAllByRole('message-card');
    const actualLength = messageCards.length;
    expect(actualLength).toBeGreaterThanOrEqual(3);
    expect(actualLength).toBeLessThanOrEqual(5);
  });
});
