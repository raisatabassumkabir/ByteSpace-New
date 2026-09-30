import React from 'react';
import { AuthLayout } from '@/components/layout';
import { LoginForm } from '@/features/auth/components';

export const Login: React.FC = () => {
  return (
    <AuthLayout mode="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
