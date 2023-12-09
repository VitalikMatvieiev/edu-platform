import { useEffect, useState } from 'react';
import './_loginPage.scss';
import Input from '../../components/input/input';
import Title from '../../components/title/title';
import Checkbox from '../../components/checkbox/checkbox';
import Button from '../../components/button/button';
import GoogleSignIn from '../../components/button/googleSignInButton';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputName } from '../../types/components/componentType';
import { toast } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';






const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  // State for making password visible
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputName>();

  // Getting data from inputs and send it to backend
  const loginHandler: SubmitHandler<InputName> = async (data) => {
    try {
      console.log(data);
      const { username, password } = data;
      console.log(username, password);
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
          <Button className="btn-submit" buttonText="Login" />
          <p className="account-not">or</p>
          <GoogleOAuthProvider clientId="1042423137273-buj8e81u7si5fkq4u3qm3beio980g15s.apps.googleusercontent.com">
            <GoogleSignIn/>
          </GoogleOAuthProvider>
        
        </form>
        <Link to={'/sign-up'} className="account-not">
          <p>Don&apos;t have an account?</p>
        </Link>
      </section>
    </div>
  );
};

export default LoginPage;
