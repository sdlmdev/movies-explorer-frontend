import { useCallback, useState } from 'react';

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
        setErrors({ ...errors, [name]: 'Разрешены: латиница, кириллица, пробел, дефис.' });
        setIsValidNameInput(false);
      } else if (value.length < minLength) {
        setErrors({ ...errors, [name]: 'Минимум 2 символа.' });
        setIsValidNameInput(false);
      } else if (spaceErrorName === true) {
        setErrors({ ...errors, [name]: 'Введите ключевое слово.' });
        setIsValidNameInput(false);
      } else {
        setErrors({ ...errors, [name]: '' });
        setIsValidNameInput(true);
      }
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
    }

    if (name === 'email') {
      const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const isValidFormatEmail = regexEmail.test(value);

      if (isValidFormatEmail === false) {
        setErrors({ ...errors, [name]: 'Почта должна быть формата pochta@yandex.ru.' });
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
