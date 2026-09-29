import React from 'react';

interface SocialLoginButtonsProps {
  onSocialLogin: (provider: 'google' | 'github') => void;
  isLoading?: boolean;
}

export const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({
  onSocialLogin,
  isLoading = false,
}) => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {/* Google Button */}
      <button
        type="button"
        disabled={isLoading}
        onClick={() => onSocialLogin('google')}
        className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-700 text-xs font-semibold hover:bg-surface-50 hover:border-surface-300 transition-all duration-200 disabled:opacity-60 shadow-sm"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
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
        <span>Google</span>
      </button>

      {/* GitHub Button */}
      <button
        type="button"
        disabled={isLoading}
        onClick={() => onSocialLogin('github')}
        className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-700 text-xs font-semibold hover:bg-surface-50 hover:border-surface-300 transition-all duration-200 disabled:opacity-60 shadow-sm"
      >
        <svg className="w-4 h-4 fill-current text-surface-900" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
        <span>GitHub</span>
      </button>
    </div>
  );
};
