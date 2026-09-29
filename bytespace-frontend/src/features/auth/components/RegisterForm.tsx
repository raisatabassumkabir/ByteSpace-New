import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User as UserIcon, Mail, Lock, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SocialLoginButtons } from './SocialLoginButtons';
import { useRegister } from '../hooks/useRegister';
import { useAuth } from '../hooks/useAuth';

export const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const { isLoading, error, validationErrors, handleRegister } = useRegister();
  const { handleSocialLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRegister({ name, email, password, agreeToTerms });
  };

  return (
    <div className="space-y-6">
      {/* Social Registration */}
      <SocialLoginButtons onSocialLogin={handleSocialLogin} isLoading={isLoading} />

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-surface-200" />
        <span className="bg-white px-3 text-xs uppercase tracking-wider text-surface-400 font-semibold absolute">
          or register with email
        </span>
      </div>

      {/* Server Error Alert */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="e.g. Alex Morgan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          leftIcon={<UserIcon className="w-4 h-4" />}
          error={validationErrors.name}
          required
        />

        <Input
          label="Work or Personal Email"
          type="email"
          placeholder="alex@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail className="w-4 h-4" />}
          error={validationErrors.email}
          required
        />

        <Input
          label="Create Password"
          type="password"
          placeholder="Minimum 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<Lock className="w-4 h-4" />}
          error={validationErrors.password}
          helperText="Include at least one number or special character"
          required
        />

        {/* Terms Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 text-xs text-surface-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-0.5 rounded border-surface-300 text-brand-600 focus:ring-brand-500 w-4 h-4"
              required
            />
            <span>
              I agree to ByteSpace's{' '}
              <a href="#terms" className="text-brand-600 font-semibold hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#privacy" className="text-brand-600 font-semibold hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {validationErrors.agreeToTerms && (
            <p className="mt-1 text-xs text-red-500 font-medium">{validationErrors.agreeToTerms}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="neon"
          size="lg"
          isLoading={isLoading}
          className="w-full font-bold text-sm tracking-wide mt-2"
        >
          Create Free Account
        </Button>
      </form>

      {/* Redirect Footer */}
      <div className="text-center text-xs text-surface-500 pt-2">
        <span>Already have an account? </span>
        <Link to="/login" className="font-bold text-brand-600 hover:text-brand-700 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};
