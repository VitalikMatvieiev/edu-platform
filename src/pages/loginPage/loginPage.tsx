import { InputName } from '../../types/components/componentType';
import Checkbox from '../../components/checkbox/checkbox';
import { Input } from '../../shared/components/inputs';
import Title from '../../components/title/title';
import {
  GoogleAuthButton,
  SubmitButton,
} from '../../shared/components/buttons';
import './_loginPage.scss';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  // State for making password visible
  const [showPassword, setShowPassword] = useState(false);

  const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputName>();

  // Getting data from inputs and send it to backend
  const loginHandler: SubmitHandler<InputName> = async (data) => {
    try {
      /* eslint-disable */
      // @ts-ignore: Unreachable code error
      const { username, password } = data;
      /* eslint-enable */
      toast.success('You logged in');
      navigate('/main');
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  //Handle for change state of visible password
  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section className="container-login">
        <div className="login-title-container">
          <Title headerText="Welcome!" />
        </div>
        <form onSubmit={handleSubmit(loginHandler)}>
          <Input
            type="text"
            placeholder="username"
            aboveInputText="Username"
            name="username"
            register={register}
            errors={errors}
            validation={{
              required: 'Username is required',
              minLength: {
                value: 5,
                message: 'Username must be at least 5 characters',
              },
              maxLength: {
                value: 30,
                message: 'Username cannot exceed 30 characters',
              },
            }}
          />
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            aboveInputText="Password"
            name="password"
            register={register}
            errors={errors}
            validation={{
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password must be at least 5 characters',
              },
              maxLength: {
                value: 30,
                message: 'Password cannot exceed 30 characters',
              },
            }}
          />
          <Checkbox
            className="checkbox-field"
            classNameText="checkbox-text"
            checkboxText="Show Password"
            checked={showPassword}
            onChange={handleCheckboxChange}
          />
          <SubmitButton className="btn-submit" buttonText="Login" />
        </form>
        <p className="account-not account-not-or">or</p>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleAuthButton />
        </GoogleOAuthProvider>
        <Link to={'/sign-up'} className="account-not">
          <p>Don&apos;t have an account?</p>
        </Link>
      </section>
    </div>
  );
};

export default LoginPage;
