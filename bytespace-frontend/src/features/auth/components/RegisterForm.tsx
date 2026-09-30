import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useRegister } from '../hooks/useRegister';

export const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, error, validationErrors, handleRegister } = useRegister();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRegister({ name, email, password, agreeToTerms: true });
  };

  return (
    <div className="space-y-8">
      {/* Eyebrow & Title verbatim from Figma #2007:305, #2007:306 */}
      <div className="space-y-1">
        <span className="text-[18px] font-normal text-[#003BE2] block">
          Create an Account
        </span>
        <h2 className="text-[36px] sm:text-[44px] font-display font-semibold text-[#242528] tracking-tight leading-tight">
          Welcome to ByteSpace
        </h2>
      </div>

      {/* Server Error Alert */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Form Fields matching Figma Labels & Placeholders verbatim */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-[14px] font-medium text-[#242528]">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jamie Davis"
            required
            className="w-full h-[52px] px-6 rounded-[12px] border border-[#CED0D3] bg-white text-[16px] text-[#242528] placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all"
          />
          {validationErrors.name && (
            <p className="text-xs text-red-500 mt-1">{validationErrors.name}</p>
          )}
        </div>

        {/* Email */}
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

        {/* Password */}
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

        {/* Continue Button in Electric Lime #D4FB20 verbatim from Figma (alignItems: flex-end, padding: 12px 24px) */}
        <div className="flex justify-end pt-2 w-full">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-8 py-3 rounded-[24px] bg-[#D4FB20] hover:bg-[#c2ea0f] text-[#242528] font-medium text-[18px] tracking-normal transition-all duration-200 hover:-translate-y-0.5 active:scale-98 disabled:opacity-50 shadow-sm cursor-pointer flex items-center justify-center"
          >
            {isLoading ? 'Creating Account...' : 'Continue'}
          </button>
        </div>
      </form>

      {/* Redirect Footer verbatim from Figma #2007:322 */}
      <div className="text-center text-[16px] text-[#4B4C53] pt-4">
        <span>Already have an account? </span>
        <Link to="/login" className="font-medium text-[#003BE2] hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};
