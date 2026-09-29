import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store';
import { RegisterCredentials, AuthValidationErrors } from '../types';

export function useRegister() {
  const navigate = useNavigate();
  const { register, isLoading, error, clearError } = useAuthStore();
  const [validationErrors, setValidationErrors] = useState<AuthValidationErrors>({});

  const validate = (data: RegisterCredentials): boolean => {
    const errors: AuthValidationErrors = {};
    if (!data.name.trim()) {
      errors.name = 'Full name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Please provide a valid email address';
    }

    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (!data.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the Terms of Service';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async (data: RegisterCredentials): Promise<boolean> => {
    clearError();
    if (!validate(data)) return false;

    const success = await register(data.name, data.email, data.password);
    if (success) {
      navigate('/');
    }
    return success;
  };

  return {
    isLoading,
    error,
    validationErrors,
    handleRegister,
    clearError,
  };
}
