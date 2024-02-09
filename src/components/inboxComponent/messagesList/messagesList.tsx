import { useEffect, useState } from 'react';
import { MessageProps } from '../../../types/components/componentType';
import InboxMessageComponent from '../inboxMessageComponent/inboxMessageComponent';
//import { InboxMessageService } from '../../../services/inboxMessageService';
import { Grid } from '@mui/material';

// Test data which we will get from backend
const testData = [{
  id: "1",
  title: 'Congratulations! Your summer scholarshop has',
  description: 'for more information, please, contact Mrs. Horse for assistant'
},
{
  id: "2",
  title: 'Congratulations! Your summer scholarshop has',
  description: 'for more information, please, contact Mrs. Horse for assistant'
},
{
  id: "3",
  title: 'Congratulations! Your summer scholarshop has',
  description: 'for more information, please, contact Mrs. Horse for assistant'
}]

export const MessagesList = () => {
  const [messageData, setMessageData] = useState<MessageProps[]>([]);

  const getInboxMessage = async () => {
    /* eslint-disable */
    // @ts-ignore: Unreachable code error
    //const response = await InboxMessageService.getMessage();
    /* eslint-enable */
    setMessageData(testData) //in implementation replace testData by response
  };
  
  useEffect(() => {
    getInboxMessage();
  }, []);

  return(
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {messageData.map(contents => (
        <Grid item xs={4} sm={8} md={12} key={contents.id}>
          <InboxMessageComponent
              id={contents.id}
              title={contents.title}
              description={contents.description}
          />
        </Grid>
      ))}
    </Grid>
  )
};
