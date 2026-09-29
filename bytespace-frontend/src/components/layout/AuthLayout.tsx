import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowLeft, ShieldCheck, Zap } from 'lucide-react';
import { ByteSpaceLogo } from '@/assets/icons/ByteSpaceLogo';
import { SparkleShape, SquiggleShape } from '@/assets/illustrations/DecorativeShapes';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-surface-50 font-sans">
      {/* Left Branding Panel (Deep Royal Blue) */}
      <div className="relative hidden lg:flex lg:w-1/2 bg-brand-600 flex-col justify-between p-12 overflow-hidden text-white bg-hero-grid">
        {/* Floating Background Glow & Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-70 animate-float pointer-events-none">
          <SparkleShape className="w-12 h-12" color="#CCFF00" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-50 animate-float-slow pointer-events-none">
          <SquiggleShape className="w-24 h-10" color="#CCFF00" />
        </div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-neon/15 blur-3xl pointer-events-none" />

        {/* Top Logo & Back to Home */}
        <div className="relative z-10 flex items-center justify-between">
          <Link to="/" className="inline-block">
            <ByteSpaceLogo variant="on-blue" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-neon transition-colors bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to site</span>
          </Link>
        </div>

        {/* Center Floating Social Proof / Feature Showcase Card */}
        <div className="relative z-10 max-w-md mx-auto my-auto space-y-6">
          <div className="glass-card rounded-3xl p-7 border border-white/20 shadow-2xl backdrop-blur-xl relative">
            {/* Floating Top Badge */}
            <div className="absolute -top-3.5 right-6 bg-neon text-surface-900 text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-neon-sm flex items-center gap-1">
              <Zap className="w-3 h-3 fill-surface-900" />
              <span>Verified Alum</span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-white">5.0 / 5.0</span>
            </div>

            <p className="text-white text-base leading-relaxed font-medium mb-6">
              "ByteSpace is the gold standard for tech education. The project-driven curriculum and weekly code reviews helped me land my dream role as a Senior Frontend Engineer."
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-white/15">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Student avatar"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-neon"
              />
              <div>
                <h4 className="font-bold text-sm text-white">Elena Vasquez</h4>
                <p className="text-xs text-white/70">Staff Engineer at Vercel</p>
              </div>
            </div>
          </div>

          {/* Quick Highlight Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-black text-neon">94%</div>
              <div className="text-xs text-white/80 font-medium">Placement within 6 mos</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-black text-neon">250+</div>
              <div className="text-xs text-white/80 font-medium">Top tech mentors</div>
            </div>
          </div>
        </div>

        {/* Bottom Security / Trust Proof */}
        <div className="relative z-10 flex items-center gap-2 text-xs text-white/70">
          <ShieldCheck className="w-4 h-4 text-neon" />
          <span>Enterprise grade encryption & privacy protection</span>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <div className="w-full max-w-md space-y-8 bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-surface-200/50 border border-surface-200/60">
          {/* Mobile Logo & Back Link */}
          <div className="flex lg:hidden items-center justify-between mb-4">
            <Link to="/">
              <ByteSpaceLogo variant="dark" />
            </Link>
            <Link to="/" className="text-xs font-semibold text-brand-600 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </Link>
          </div>

          {/* Form Header */}
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-surface-900 tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-surface-500">{subtitle}</p>
          </div>

          {/* Form Body */}
          {children}
        </div>
      </div>
    </div>
  );
};
