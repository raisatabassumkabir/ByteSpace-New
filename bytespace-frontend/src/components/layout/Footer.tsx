import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ByteSpaceLogo } from '@/assets/icons/ByteSpaceLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Newsletter (Left) and Links (Right) */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="flex-1 max-w-md space-y-6">
            <Link to="/" className="inline-block mb-2">
              <ByteSpaceLogo variant="dark" />
            </Link>
            
            <p className="text-sm text-surface-600 font-medium">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex items-center gap-3 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-surface-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-all placeholder:text-surface-400"
                required
              />
              <button
                type="submit"
                className="bg-neon hover:bg-neon-hover text-slate-900 font-medium px-8 py-3 rounded-full text-sm transition-colors shrink-0"
              >
                Search
              </button>
            </form>
            
            <p className="text-[10px] text-surface-500 leading-relaxed max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Column: Links Grid */}
          <div className="flex-[1.5] grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {/* Column 1 */}
            <div className="space-y-4">
              <Link to="#courses" className="block text-surface-600 hover:text-brand-600">Featured Courses</Link>
              <Link to="#categories" className="block text-surface-600 hover:text-brand-600">Featured Categories</Link>
              <Link to="#business" className="block text-surface-600 hover:text-brand-600">Business</Link>
              <Link to="#it" className="block text-surface-600 hover:text-brand-600">IT</Link>
              <Link to="#design" className="block text-surface-600 hover:text-brand-600">Design</Link>
            </div>
            
            {/* Column 2 */}
            <div className="space-y-4">
              <Link to="#development" className="block text-surface-600 hover:text-brand-600">Development</Link>
              <Link to="#marketing" className="block text-surface-600 hover:text-brand-600">Marketing</Link>
              <Link to="#photography" className="block text-surface-600 hover:text-brand-600">Photography</Link>
              <Link to="#finance" className="block text-surface-600 hover:text-brand-600">Finance</Link>
              <Link to="#sport" className="block text-surface-600 hover:text-brand-600">Sport</Link>
            </div>
            
            {/* Column 3 */}
            <div className="space-y-4">
              <Link to="#creator" className="block text-surface-600 hover:text-brand-600">Become a Creator</Link>
              <Link to="#affiliate" className="block text-surface-600 hover:text-brand-600">Affiliate Program</Link>
              <Link to="#contact" className="block text-surface-600 hover:text-brand-600">Contact</Link>
              <Link to="#help" className="block text-surface-600 hover:text-brand-600">Help</Link>
              <Link to="#about" className="block text-surface-600 hover:text-brand-600">About</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-surface-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface-500">
          <div>
            @ 2023 ByteSpace. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="#privacy" className="hover:text-surface-900 transition-colors">Privacy Policy</Link>
            <Link to="#terms" className="hover:text-surface-900 transition-colors">Terms of Service</Link>
            <Link to="#cookies" className="hover:text-surface-900 transition-colors">Cookies Settings</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
