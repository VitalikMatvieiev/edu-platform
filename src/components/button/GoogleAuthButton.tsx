import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import './_button.scss';
import {FcGoogle} from "react-icons/fc"

function GoogleAuthButton() {

  const loginGoogle = useGoogleLogin({
    onSuccess: async response => {
      try {
          const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
              headers: {
                  "Authorization": `Bearer ${response.access_token}`
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
      <button className="btn-google" onClick={() => loginGoogle()}>
        <FcGoogle/>
        <p>Sign in with Google</p>
      </button>
    </>
  )
}

export default GoogleAuthButton;
