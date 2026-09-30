import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import { Navbar, Footer } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { SparkleShape, SquiggleShape } from '@/assets/illustrations/DecorativeShapes';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-50 font-sans selection:bg-neon selection:text-surface-900">
      {/* Top Navbar integrated with blue canvas */}
      <div className="bg-brand-600 bg-hero-grid text-white relative">
        <Navbar variant="transparent-on-blue" />
      </div>

      {/* 404 Main Blue Canvas matching Figma reference Screenshot 2026-09-29 002718.png */}
      <div className="relative flex-1 bg-brand-600 text-white flex items-center justify-center py-28 px-4 overflow-hidden bg-hero-grid">
        {/* Floating Shapes */}
        <div className="absolute top-12 left-16 opacity-70 animate-float pointer-events-none hidden md:block">
          <SparkleShape className="w-12 h-12" color="#CCFF00" />
        </div>
        <div className="absolute bottom-16 right-16 opacity-70 animate-float-slow pointer-events-none hidden md:block">
          <SquiggleShape className="w-28 h-10" color="#CCFF00" />
        </div>

        <div className="relative max-w-lg mx-auto text-center space-y-6">
          {/* Giant "404" with vertical linear gradient from electric lime fading down matching Figma */}
          <div className="text-8xl sm:text-9xl md:text-[12rem] font-display font-semibold tracking-tight leading-none bg-gradient-to-b from-[#D4FB20] via-[#D4FB20]/90 to-[#D4FB20]/20 bg-clip-text text-transparent select-none drop-shadow-sm">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
              The page you are looking for doesn’t exist
            </h1>
            <p className="text-xs sm:text-sm text-[#E5E6E8] max-w-sm mx-auto leading-relaxed">
              Try to use a correct url or go back to homepage to start again
            </p>
          </div>

          <div className="pt-4">
            <Link to="/">
              <Button
                variant="neon"
                size="lg"
                className="font-bold px-8 py-3 rounded-full text-slate-950 bg-[#D4FB20] hover:bg-[#b5d915] shadow-lg shadow-black/10 transition-all duration-200"
                leftIcon={<HomeIcon className="w-4 h-4 text-slate-950" />}
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
