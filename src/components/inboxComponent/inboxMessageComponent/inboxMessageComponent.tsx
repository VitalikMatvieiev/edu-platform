import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
import { MessageProps } from '../../../types/components/componentType';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';
import './_inboxMessageComponent.scss';

const InboxMessageComponent = (props: MessageProps) => {
  return (
    <Card
      role="message-card"
      sx={{
        maxWidth: '325px',
        padding: '5px',
        borderRadius: '20px',
        display: 'flex',
        justifyItems: 'center',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingLeft: '10px',
          marginTop: '5px',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: ['Montserrat', 'sans-serif'].join(','),
              fontSize: 16,
              fontWeight: 700,
              lineHeight: '1.4',
              paddingBottom: '10px',
            }}
            variant="h6"
            component="div"
            role="message-title"
          >
            {props?.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: ['Montserrat', 'sans-serif'].join(','),
              fontSize: 13,
              lineHeight: '1.3',
              fontWeight: 400,
              color: 'gray',
            }}
            variant="subtitle2"
            component="div"
            role="message-description"
          >
            {props?.description}
          </Typography>
        </Box>
        <Box>
          <Link to="#">
            <Fab
              size="medium"
              sx={{ bgcolor: 'white' }}
              data-testid="inbox-button"
            >
              <ArrowForwardIcon fontSize="small" sx={{ color: 'black' }} />
            </Fab>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InboxMessageComponent;
