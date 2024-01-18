import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import { MessageProps } from '../../../types/components/componentType';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h6: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
});

const InboxMessageComponent = (props: MessageProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        role="message-card"
        sx={{
          maxWidth: '320px',
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
              sx={{ lineHeight: '1.2', paddingBottom: '10px' }}
              variant="h6"
              component="div"
              role="message-title"
            >
              {props?.title}
            </Typography>
            <Typography
              sx={{ color: 'gray' }}
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
    </ThemeProvider>
  );
};

export default InboxMessageComponent;
