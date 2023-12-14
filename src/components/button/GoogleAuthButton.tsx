import {GoogleOAuthProvider, useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import './_button.scss';

function GoogleAuthButton() {

  const loginGoogle = useGoogleLogin({
    onSuccess: async respose => {
        try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    "Authorization": `Bearer ${respose.access_token}`
                }
            })
  
            console.log(res.data)
        } catch (err) {
            console.log(err)
  
        }
  
    }
  });
  return (
    <>
      <GoogleOAuthProvider clientId="1042423137273-buj8e81u7si5fkq4u3qm3beio980g15s.apps.googleusercontent.com">
        <button onClick={() => loginGoogle()}>
          Sign in with Google{' '}
        </button>
      </GoogleOAuthProvider>
    </>
  )
  
}

export default GoogleAuthButton;
