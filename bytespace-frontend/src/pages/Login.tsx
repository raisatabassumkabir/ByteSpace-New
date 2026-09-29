import React from 'react';
import { AuthLayout } from '@/components/layout';
import { LoginForm } from '@/features/auth/components';

export const Login: React.FC = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Enter your credentials to access your ByteSpace account and coursework."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
