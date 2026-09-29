import React from 'react';
import { AuthLayout } from '@/components/layout';
import { RegisterForm } from '@/features/auth/components';

export const Register: React.FC = () => {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join over 50,000+ ambitious developers & designers on ByteSpace today."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
