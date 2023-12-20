import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import './_button.scss';
import GoogleIcon from '/src/img/google-icon.svg';
import { useNavigate } from 'react-router-dom';


function GoogleAuthButton() {
  const navigate = useNavigate();

  const loginGoogle = useGoogleLogin({
    onSuccess: async response => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${response.access_token}`
          }
        })
        localStorage.setItem('access_token', response.access_token);
        navigate('/main');
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
  });
  return (
    <>
      <button className="btn-google" onClick={() => loginGoogle()}>
        <img src={GoogleIcon} alt="Google icon" />
        <p>Sign in with Google</p>
      </button>
    </>
  )
}

export default GoogleAuthButton;