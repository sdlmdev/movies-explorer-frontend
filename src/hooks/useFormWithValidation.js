import { useCallback, useState } from 'react';
import {
  NAME_ERROR_VALIDATION,
  NAME_LENGTH_ERROR_VALIDATION,
  NAME_SPACE_ERROR_VALIDATION,
  EMAIL_REGEX,
  EMAIL_FORMAT_ERROR_VALIDATION,
} from '../utils/constants';

export function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isValidNameInput, setIsValidNameInput] = useState(false);
  const [isValidEmailInput, setIsValidEmailInput] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setValues({ ...values, [name]: value });
    setIsValid(target.closest('form').checkValidity());

    if (name === 'name') {
      const regexName = /^\s*$|^[A-Za-zА-Яа-яЁё\s-]+$/;
      const regexSpace = /^\s+$/;
      const isValidFormatName = regexName.test(value);
      const spaceErrorName = regexSpace.test(value);
      const minLength = 2;

      if (isValidFormatName === false) {
        setErrors({ ...errors, [name]: NAME_ERROR_VALIDATION });
        setIsValidNameInput(false);
      } else if (value.length < minLength) {
        setErrors({ ...errors, [name]: NAME_LENGTH_ERROR_VALIDATION });
        setIsValidNameInput(false);
      } else if (spaceErrorName === true) {
        setErrors({ ...errors, [name]: NAME_SPACE_ERROR_VALIDATION });
        setIsValidNameInput(false);
      } else {
        setErrors({ ...errors, [name]: '' });
        setIsValidNameInput(true);
      }
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
    }

    if (name === 'email') {
      const isValidFormatEmail = EMAIL_REGEX.test(value);

      if (isValidFormatEmail === false) {
        setErrors({ ...errors, [name]: EMAIL_FORMAT_ERROR_VALIDATION });
        setIsValidEmailInput(false);
      } else {
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValidEmailInput(true);
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    setErrors,
    isValid,
    resetForm,
    isValidNameInput,
    isValidEmailInput,
    setValues,
    setIsValidNameInput,
    setIsValidEmailInput,
    setIsValid,
  };
}
