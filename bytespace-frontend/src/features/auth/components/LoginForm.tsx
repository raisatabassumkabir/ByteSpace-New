import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, error, validationErrors, handleLogin, handleSocialLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin({ email, password, rememberMe: true });
  };

  return (
    <div className="space-y-8">
      {/* Eyebrow & Title verbatim from Figma #2007:456, #2007:457 */}
      <div className="space-y-1">
        <span className="text-[18px] font-normal text-[#003BE2] block">
          Sign In
        </span>
        <h2 className="text-[36px] sm:text-[44px] font-display font-semibold text-[#242528] tracking-tight leading-tight">
          Welcome Back
        </h2>
      </div>

      {/* Global Server Error Alert */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Form Fields matching Figma Labels & Placeholders verbatim */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-[14px] font-medium text-[#242528]">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="designer@example.com"
            required
            className="w-full h-[52px] px-6 rounded-[12px] border border-[#CED0D3] bg-white text-[16px] text-[#242528] placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all"
          />
          {validationErrors.email && (
            <p className="text-xs text-red-500 mt-1">{validationErrors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="block text-[14px] font-medium text-[#242528]">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            className="w-full h-[52px] px-6 rounded-[12px] border border-[#CED0D3] bg-white text-[16px] text-[#242528] placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all font-mono"
          />
          {validationErrors.password && (
            <p className="text-xs text-red-500 mt-1">{validationErrors.password}</p>
          )}
        </div>

        {/* Submit Button in Electric Lime #D4FB20 verbatim from Figma (alignItems: flex-end, padding: 12px 24px) */}
        <div className="flex justify-end pt-2 w-full">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-8 py-3 rounded-[24px] bg-[#D4FB20] hover:bg-[#c2ea0f] text-[#242528] font-medium text-[18px] tracking-normal transition-all duration-200 hover:-translate-y-0.5 active:scale-98 disabled:opacity-50 shadow-sm cursor-pointer flex items-center justify-center"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </div>
      </form>

      {/* Divider matching Figma: line + "or" + line */}
      <div className="flex items-center gap-3 w-full py-1">
        <div className="flex-1 h-[1px] bg-[#CED0D3]" />
        <span className="text-[16px] text-[#4F4F4F] px-2">
          or
        </span>
        <div className="flex-1 h-[1px] bg-[#CED0D3]" />
      </div>

      {/* Circular Social Buttons (Google and Apple) matching Figma #2007:474 */}
      <div className="flex items-center justify-center gap-4">
        {/* Google Circular Button */}
        <button
          type="button"
          disabled={isLoading}
          onClick={() => handleSocialLogin('google')}
          className="w-12 h-12 rounded-full border border-[#CED0D3] bg-white flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
          title="Sign in with Google"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.15z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.93H1.28v3.15C3.3 21.4 7.35 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.32 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.28C.46 8.21 0 10.05 0 12s.46 3.79 1.28 5.42l4.04-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.3 2.6 1.28 6.58l4.04 3.15c.94-2.83 3.58-4.98 6.68-4.98z"
            />
          </svg>
        </button>

        {/* Apple Circular Button */}
        <button
          type="button"
          disabled={isLoading}
          onClick={() => handleSocialLogin('github')}
          className="w-12 h-12 rounded-full border border-[#CED0D3] bg-white flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
          title="Sign in with Apple"
        >
          <svg className="w-5 h-5 fill-[#242528]" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1.01.08 2.02-.48 2.64-1.23z" />
          </svg>
        </button>
      </div>

      {/* Redirect Footer verbatim from Figma #2007:483 */}
      <div className="text-center text-[16px] text-[#4F4F4F] pt-2">
        <span>New user? </span>
        <Link to="/register" className="font-medium text-[#003BE2] hover:underline">
          Create an account
        </Link>
      </div>
    </div>
  );
};
