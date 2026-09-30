import React from 'react';
import { AuthLayout } from '@/components/layout';
import { RegisterForm } from '@/features/auth/components';

export const Register: React.FC = () => {
  return (
    <AuthLayout mode="register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
