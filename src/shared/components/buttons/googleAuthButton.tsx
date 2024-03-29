import GoogleIcon from '/src/img/google-icon.svg';
import styles from './_button.module.scss';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const GoogleAuthButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          },
        );
        localStorage.setItem('access_token', response.access_token);
        navigate('/main');
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <button className={styles["btn-google"]} onClick={() => handleLoginGoogle()}>
        <img src={GoogleIcon} alt="Google icon" />
        <p>Sign in with Google</p>
      </button>
    </>
  );
};
