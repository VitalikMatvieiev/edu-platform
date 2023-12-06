import React, { useState } from 'react';
import './_registrationPage.scss';
import Title from '../../components/title/title';
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';
import Button from '../../components/button/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { InputName } from '../../types/components/componentType';
const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  // State for making password visible
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<InputName>();

  // Getting data from inputs and send it to backend
  const registrationHandler: SubmitHandler<InputName> = async (data) => {
    try {
      console.log(data);
      const { username, email, password } = data;
      console.log({ username, email, password, isAdmin });
      toast.success('Account has been created');
      navigate('/');
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  //Handle for change state of visible password
  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxAdminChange = () => {
    setIsAdmin(!isAdmin);
  }

  return (
    <section className="container-registration">
      <div className="reg-title-container">
        <Title headerText="Register your account" />
      </div>
      <form onSubmit={handleSubmit(registrationHandler)}>
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
          type="email"
          placeholder="user@gmail.com"
          aboveInputText="Email"
          name="email"
          register={register}
          errors={errors}
          validation={{
            required: 'Email is required',
            minLength: {
              value: 5,
              message: 'Email must be at least 5 characters',
            },
            maxLength: {
              value: 30,
              message: 'Email cannot exceed 30 characters',
            },
            pattern: {
              value: /@/,
              message: "Email must contain '@'",
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
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          aboveInputText="Confirm Password"
          name="confirmPassword"
          register={register}
          errors={errors}
          validation={{
            required: 'Confirm Password is required',
            validate: (value: string) =>
              value === getValues('password') || 'Passwords do not match',
          }}
        />
        <Checkbox
          className="checkbox-field"
          classNameText="checkbox-text"
          checkboxText="Show password"
          checked={showPassword}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          className="checkbox-field checkbox-field-admin"
          classNameText="checkbox-text-admin"
          checkboxText="Register like admin"
          checked={isAdmin}
          onChange={handleCheckboxAdminChange}
        />
        <Button className="btn-submit" buttonText="Register" />
      </form>
      <Link to={'/'} className="account-is">
        <p>Have account?</p>
      </Link>
    </section>
  );
};

export default RegistrationPage;
