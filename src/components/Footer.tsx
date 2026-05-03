import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 shrink-0 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center md:items-start justify-between text-[11px]">
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16 w-full md:w-auto mb-10 md:mb-0">
          <div className="space-y-3">
            <div className="font-bold text-white text-[11px] mb-4 uppercase tracking-widest">About Delta</div>
            <p className="hover:text-white cursor-pointer transition-colors leading-loose">Our Story</p>
            <p className="hover:text-white cursor-pointer transition-colors leading-loose">Careers</p>
            <p className="hover:text-white cursor-pointer transition-colors leading-loose">Newsroom</p>
          </div>
          <div className="space-y-3">
            <div className="font-bold text-white text-[11px] mb-4 uppercase tracking-widest">Support</div>
            <p className="hover:text-white cursor-pointer transition-colors leading-loose">Help Center</p>
            <p className="hover:text-white cursor-pointer transition-colors leading-loose">Baggage</p>
            <p className="hover:text-white cursor-pointer transition-colors leading-loose">Accessibility</p>
          </div>
          <div className="space-y-3">
            <div className="font-bold text-white text-[11px] mb-4 uppercase tracking-widest">Legal</div>
            <p className="hover:text-white cursor-pointer transition-colors leading-loose">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer transition-colors leading-loose">Terms of Use</p>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-6 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <span className="text-white font-bold tracking-widest uppercase text-[11px]">JOIN OUR NEWSLETTER</span>
            <form className="flex w-full sm:w-auto">
              <input type="email" placeholder="Email Address" required className="bg-gray-800 border-none px-4 py-2.5 w-full sm:w-56 text-white text-xs focus:ring-1 focus:ring-delta-crimson outline-none placeholder-gray-500 rounded-sm rounded-r-none" />
              <button type="submit" className="bg-delta-crimson hover:bg-[#a60d26] text-white px-5 py-2.5 font-bold text-[11px] tracking-wider transition-colors rounded-sm rounded-l-none uppercase">SUBMIT</button>
            </form>
          </div>
          
          <div className="flex space-x-5 mb-4 md:mb-0 justify-start w-full md:justify-end">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
              </a>
          </div>

          <div className="text-left md:text-right opacity-60 leading-relaxed text-[10px] sm:text-[11px] mt-2">
            © 2024 Delta Air Lines, Inc.<br/>Travel may be operated by Delta Connection® carriers.
          </div>
        </div>
      </div>
    </footer>
  );
}
