import './_button.scss';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function GoogleSignIn() {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        if (credentialResponse.credential != null){
          const decodedInfo = jwtDecode(credentialResponse.credential);
          console.log(decodedInfo);
      }
    }}
      onError={() => {
        // Handle errors here
        console.error('Google login failed');
      }}
      // theme="filled_blue"
      size="large"
      width="100%"

      // text="continue_with"
    />
  );
}

export default GoogleSignIn;
