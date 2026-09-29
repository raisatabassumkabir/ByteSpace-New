import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SocialLoginButtons } from './SocialLoginButtons';
import { useAuth } from '../hooks/useAuth';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { isLoading, error, validationErrors, handleLogin, handleSocialLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin({ email, password, rememberMe });
  };

  return (
    <div className="space-y-6">
      {/* Social Logins */}
      <SocialLoginButtons onSocialLogin={handleSocialLogin} isLoading={isLoading} />

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-surface-200" />
        <span className="bg-white px-3 text-xs uppercase tracking-wider text-surface-400 font-semibold absolute">
          or sign in with email
        </span>
      </div>

      {/* Global Server Error Alert */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="alex@bytespace.dev"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail className="w-4 h-4" />}
          error={validationErrors.email}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<Lock className="w-4 h-4" />}
          error={validationErrors.password}
          required
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 text-surface-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-surface-300 text-brand-600 focus:ring-brand-500 w-4 h-4"
            />
            <span>Remember me</span>
          </label>

          <a
            href="#forgot-password"
            className="font-semibold text-brand-600 hover:text-brand-700 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="neon"
          size="lg"
          isLoading={isLoading}
          className="w-full font-bold text-sm tracking-wide mt-2"
        >
          Sign In to ByteSpace
        </Button>
      </form>

      {/* Redirect Footer */}
      <div className="text-center text-xs text-surface-500 pt-2">
        <span>Don't have an account yet? </span>
        <Link to="/register" className="font-bold text-brand-600 hover:text-brand-700 hover:underline">
          Create an account
        </Link>
      </div>
    </div>
  );
};
