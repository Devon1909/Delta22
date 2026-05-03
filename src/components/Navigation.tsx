import { Menu, Search, User } from 'lucide-react';
import React, { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shrink-0 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo placeholder */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2 mr-8">
            <div className="w-8 h-8 bg-delta-crimson flex items-center justify-center transform rotate-45 overflow-hidden rounded-sm">
                <div className="w-full h-full bg-white opacity-20 transform -translate-x-1/2"></div>
            </div>
            <span className="text-delta-blue font-bold text-xl tracking-tighter ml-1">DELTA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center space-x-6 text-[13px] font-semibold text-delta-blue tracking-wide">
            <a href="#" className="border-b-2 border-delta-crimson pb-1 mt-1 transition-colors hover:text-delta-crimson">BOOK</a>
            <a href="#" className="hover:text-delta-crimson transition-colors mt-1 pb-1 border-b-2 border-transparent">CHECK-IN</a>
            <a href="#" className="hover:text-delta-crimson transition-colors mt-1 pb-1 border-b-2 border-transparent">MY TRIPS</a>
            <a href="#" className="hover:text-delta-crimson transition-colors mt-1 pb-1 border-b-2 border-transparent">FLIGHT STATUS</a>
          </div>

          {/* Right side icons & CTA */}
          <div className="hidden md:flex items-center space-x-4">
             <button className="text-delta-blue hover:text-delta-crimson transition-colors p-1">
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button className="bg-delta-blue text-white px-5 py-2 text-[12px] font-bold rounded-sm tracking-wide hover:bg-[#002142] transition-colors ml-2">
              SIGN UP / LOG IN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-delta-blue p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-4 pt-2 pb-3 space-y-1 text-[13px] font-semibold text-delta-blue tracking-wide">
            <a href="#" className="block py-3 hover:text-delta-crimson border-b border-gray-50">BOOK</a>
            <a href="#" className="block py-3 hover:text-delta-crimson border-b border-gray-50">CHECK-IN</a>
            <a href="#" className="block py-3 hover:text-delta-crimson border-b border-gray-50">MY TRIPS</a>
            <a href="#" className="block py-3 hover:text-delta-crimson border-b border-gray-50">FLIGHT STATUS</a>
            <div className="mt-4 pt-2 flex flex-col gap-3">
              <button className="w-full flex justify-center items-center gap-2 border border-delta-blue text-delta-blue px-5 py-2.5 text-[12px] font-bold rounded-sm tracking-wide">
                <Search className="w-4 h-4" /> SEARCH
              </button>
              <button className="w-full justify-center flex items-center bg-delta-blue text-white px-5 py-2.5 text-[12px] font-bold rounded-sm tracking-wide">
                SIGN UP / LOG IN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
