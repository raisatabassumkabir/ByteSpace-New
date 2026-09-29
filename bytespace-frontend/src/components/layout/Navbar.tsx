import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, ShoppingBag } from 'lucide-react';
import { ByteSpaceLogo } from '@/assets/icons/ByteSpaceLogo';
import { Button } from '@/components/ui/Button';
import { useAuthStore, useUIStore } from '@/store';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

interface NavbarProps {
  variant?: 'transparent-on-blue' | 'white';
}

export const Navbar: React.FC<NavbarProps> = ({ variant = 'transparent-on-blue' }) => {
  const scrollY = useScrollPosition();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { isMobileMenuOpen, toggleMobileMenu, bookmarkedCourseIds } = useUIStore();

  const isScrolled = scrollY > 20;

  // Navigation Links matching Figma reference verbatim
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/course-details' },
    { label: 'Creators', path: '/creator' },
  ];

  return (
    <header
      className={cn(
        'w-full z-50 transition-all duration-300',
        variant === 'transparent-on-blue'
          ? isScrolled
            ? 'sticky top-0 bg-brand-600/95 backdrop-blur-md shadow-lg shadow-brand-900/25 py-3.5 border-b border-white/10'
            : 'relative bg-transparent py-5'
          : isScrolled
          ? 'sticky top-0 bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-surface-200'
          : 'relative bg-white py-4 border-b border-surface-200'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <ByteSpaceLogo variant={variant === 'white' && !isScrolled ? 'dark' : 'on-blue'} />
          </Link>

          {/* Desktop Navigation Links verbatim */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={cn(
                  'text-sm font-semibold transition-colors duration-200',
                  variant === 'white' && !isScrolled
                    ? 'text-surface-700 hover:text-brand-600'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 pl-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border border-neon object-cover"
                  />
                  <span className="text-xs font-semibold text-white hidden lg:inline">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={() => logout()}
                  className="text-white/70 hover:text-red-300 p-1.5 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className={cn(
                    'text-sm font-semibold transition-colors duration-200',
                    variant === 'white' && !isScrolled
                      ? 'text-surface-700 hover:text-brand-600'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className={cn(
                    'text-sm font-semibold transition-colors duration-200',
                    variant === 'white' && !isScrolled
                      ? 'text-surface-700 hover:text-brand-600'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  Join Us
                </Link>
              </>
            )}

            {/* Shopping Bag / Cart Icon verbatim */}
            <Link
              to="/course-details"
              className={cn(
                'relative p-1.5 rounded-full transition-colors',
                variant === 'white' && !isScrolled
                  ? 'text-surface-700 hover:text-brand-600'
                  : 'text-white/90 hover:text-white'
              )}
              title="Shopping Cart / Course Details"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {bookmarkedCourseIds.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-neon text-[10px] font-black text-surface-900">
                  {bookmarkedCourseIds.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleMobileMenu}
              className={cn(
                'p-2 rounded-lg transition-colors',
                variant === 'white' && !isScrolled
                  ? 'text-surface-900 hover:bg-surface-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-700 border-b border-brand-800 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={toggleMobileMenu}
                className="text-base font-medium text-white/90 hover:text-neon py-2 px-3 rounded-md hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            {isAuthenticated && user ? (
              <div className="flex items-center justify-between p-2 rounded-lg bg-brand-800">
                <div className="flex items-center gap-2.5">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border border-neon"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">{user.name}</div>
                    <div className="text-xs text-white/60">{user.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}
                  className="text-xs font-semibold text-red-300 hover:text-red-200 px-2 py-1"
                >
                  Log out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" onClick={toggleMobileMenu}>
                  <Button variant="outline" size="md" className="w-full text-white border-white/30 hover:bg-white/10">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register" onClick={toggleMobileMenu}>
                  <Button variant="neon" size="md" className="w-full font-bold">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
