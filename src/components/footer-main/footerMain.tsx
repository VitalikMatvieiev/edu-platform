import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import './_footerMain.scss';

export const FooterMain = () => (
  <div className="footer">
    <div className="footer-social">
      <div className="footer-social-logo">
        <LocalGroceryStoreIcon />
        <h1 className="footer-social-logo-text">Learnify</h1>
      </div>
      <span className="footer-social-cta">Start Learning Today!</span>
      <div className="footer-social-icons">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
    <div className="footer-contacts">
      <div className="footer-contacts-text">
        <span>Need assistance?</span>
        <h1>Our support team is available</h1>
      </div>
      <div className="footer-contact-details">
        <div className="footer-contacts-phone">
          <CallIcon />
          <span>(+123) 456 7890</span>
        </div>
        <div className="footer-contacts-email">
          <EmailIcon />
          <span>support@learnify.io</span>
        </div>
      </div>
    </div>
  </div>
);
