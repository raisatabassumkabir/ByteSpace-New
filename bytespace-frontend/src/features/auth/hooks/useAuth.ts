import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store';
import { LoginCredentials, AuthValidationErrors } from '../types';

export function useAuth() {
  const navigate = useNavigate();
  const { login, socialLogin, user, isAuthenticated, isLoading, error, clearError } = useAuthStore();
  const [validationErrors, setValidationErrors] = useState<AuthValidationErrors>({});

  const validate = (credentials: LoginCredentials): boolean => {
    const errors: AuthValidationErrors = {};
    if (!credentials.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      errors.email = 'Please provide a valid email address';
    }

    if (!credentials.password) {
      errors.password = 'Password is required';
    } else if (credentials.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async (credentials: LoginCredentials): Promise<boolean> => {
    clearError();
    if (!validate(credentials)) return false;

    const success = await login(credentials.email, credentials.password);
    if (success) {
      navigate('/');
    }
    return success;
  };

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    await socialLogin(provider);
    navigate('/');
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    validationErrors,
    handleLogin,
    handleSocialLogin,
    clearError,
  };
}
