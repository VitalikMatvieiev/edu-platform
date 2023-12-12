import { useFormik, FormikHelpers } from 'formik';
import {
  FormikValues,
  FormikConfigProps,
} from '../../../types/components/componentType';

const useUserFormik = ({
  userProfile,
  formError,
  setUserProfile,
  setIsEditing,
  setFormError,
}: FormikConfigProps) => {
  return useFormik({
    initialValues: {
      profilePhoto: userProfile?.profilePhoto || '',
      username: userProfile?.username || '',
      email: userProfile?.email || '',
      dateOfBirth: userProfile?.dateOfBirth || '',
    },
    onSubmit: async (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>,
    ) => {
      try {
        if (formError) {
          const userConfirmed = window.confirm(
            `${formError}\nDo you want to proceed?`,
          );
          if (!userConfirmed) {
            return;
          }
        }

        setUserProfile((prevProfile) => ({
          ...prevProfile!,
          profilePhoto: values.profilePhoto,
          username: values.username,
          email: values.email,
          dateOfBirth: values.dateOfBirth,
        }));
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating user data:', error);
      } finally {
        actions.setSubmitting(false);
      }
    },
    validate: (values: FormikValues) => {
      const errors: Record<string, string> = {};

      if (!values.username) {
        errors.username = 'Required';
      } else {
        const words = values.username.trim().split(/\s+/);
        if (words.length !== 2) {
          errors.username = 'Please enter exactly two words for the full name';
        } else {
          const [firstName, lastName] = words;
          if (firstName.length < 2 || lastName.length < 2) {
            errors.username =
              'Each part of the full name must be at least 2 characters long';
          } else if (values.username.length > 50) {
            errors.username = 'Full name is too long';
          }
        }
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (values.email.length > 255) {
        errors.email = 'Email is too long';
      }

      if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Required';
      } else {
        const currentDate = new Date();
        const birthDate = new Date(values.dateOfBirth);
        const minAgeDate = new Date();
        minAgeDate.setFullYear(currentDate.getFullYear() - 7);

        if (birthDate > minAgeDate) {
          errors.dateOfBirth = 'Must be at least 7 years old';
        }
      }

      setFormError(Object.values(errors).join('\n'));

      return errors;
    },
  });
};

export default useUserFormik;