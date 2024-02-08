import { InputName } from '../../types/pages/PagesTypes';
import { Input, CustomButton } from '../../shared/components';
import Checkbox from '../../components/checkbox/checkbox';
import { Title } from '../../components/title/title';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import registrationPageStyles from './_registrationPage.module.scss';

export const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  // State for making password visible
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isInstructor, setIsInstructor] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<InputName>();

  // Getting data from inputs and send it to backend
  const registrationHandler: SubmitHandler<InputName> = async (data) => {
    try {
      /* eslint-disable */
      // @ts-ignore: Unreachable code error
      const { username, email, password } = data;
      /* eslint-enable */
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
    setIsInstructor(!isInstructor);
  };

  return (
    <section className={registrationPageStyles['container-registration']}>
      <div className={registrationPageStyles['reg-title-container']}>
        <Title headerText="Create your account" />
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
          placeholder="confirm password"
          aboveInputText="Confirm Password"
          name="confirmPassword"
          register={register}
          errors={errors}
          validation={{
            required: 'Password confirmation is required.',
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
          checkboxText="Register like instructor"
          checked={isInstructor}
          onChange={handleCheckboxAdminChange}
        />
        <CustomButton variant="submit-btn" type="submit">
          Create account
        </CustomButton>
      </form>
      <Link to={'/'} className={registrationPageStyles['account-is']}>
        <p>Have account?</p>
      </Link>
    </section>
  );
};
