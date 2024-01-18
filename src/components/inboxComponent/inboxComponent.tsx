import MessagesList from './messagesList/messagesList';
import { Container } from '@mui/material';
import TitleOfSection from '../titleOfSection/titleOfSection';

const InboxComponent: React.FC = () => {
  return (
    <Container>
      <TitleOfSection titleText="Inbox" />
      <div>
        <MessagesList />
      </div>
    </Container>
  );
};

export default InboxComponent;
