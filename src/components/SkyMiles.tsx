import { ArrowRight, Plane, Shield, CreditCard, User } from 'lucide-react';
import React from 'react';

export default function SkyMiles() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full shrink-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Offer Card (Left) */}
        <div className="lg:col-span-7 bg-delta-blue text-white p-8 md:p-10 rounded-sm flex flex-col justify-between relative overflow-hidden group">
          <div className="z-10 h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-light mb-3">Unlock More with <span className="font-bold">SkyMiles</span></h2>
            <p className="text-blue-100 text-sm max-w-sm mb-8 leading-relaxed">Earn up to 70,000 bonus miles with the Delta SkyMiles American Express Gold Card after qualifying purchases. Terms apply.</p>
            <div>
              <button className="bg-white text-delta-blue px-6 py-3 text-[12px] font-bold rounded-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            <svg width="250" height="250" viewBox="0 0 100 100" fill="white"><path d="M50 0L60 40H100L65 60L75 100L50 75L25 100L35 60L0 40H40L50 0Z"/></svg>
          </div>
        </div>

        {/* Login Widget (Right) */}
        <div className="lg:col-span-5 bg-gray-50 p-8 border border-gray-100 rounded-sm">
          <h3 className="text-sm font-bold text-delta-blue mb-5 tracking-wide">MEMBER LOGIN</h3>
          <div className="space-y-4">
            <input type="text" placeholder="SkyMiles Number" className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-delta-blue transition-colors rounded-sm" />
            <input type="password" placeholder="Password" className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-delta-blue transition-colors rounded-sm" />
            <div className="flex justify-between items-center text-xs mt-2 mb-4">
                <label className="flex items-center cursor-pointer group">
                    <input type="checkbox" className="mr-2 rounded-sm text-delta-crimson focus:ring-delta-crimson border-gray-300" />
                    <span className="text-gray-600 font-medium group-hover:text-delta-blue transition-colors">Remember Me</span>
                </label>
                <a href="#" className="font-medium text-delta-blue hover:text-delta-crimson underline transition-colors">Forgot Login?</a>
            </div>
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 text-[12px] uppercase tracking-wider rounded-sm transition-colors">
              Login
            </button>
            <p className="text-center text-[11px] text-gray-500 font-medium mt-4">
               Not a member? <a href="#" className="text-delta-crimson hover:underline font-bold">JOIN FREE</a>
            </p>
          </div>
        </div>
      </div>

      {/* Benefits banner */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100 mb-12">
          <div className="flex items-start space-x-3">
              <div className="text-delta-blue mt-0.5">
                  <Plane className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                  <h4 className="font-bold text-[#1a1a1a] text-sm tracking-tight mb-1">Miles Never Expire</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Your miles are yours to keep until you're ready to use them.</p>
              </div>
          </div>
          <div className="flex items-start space-x-3">
              <div className="text-delta-blue mt-0.5">
                  <Shield className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                  <h4 className="font-bold text-[#1a1a1a] text-sm tracking-tight mb-1">No Blackout Dates</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">On any Delta Air Lines flight when booking with Award Travel.</p>
              </div>
          </div>
            <div className="flex items-start space-x-3">
              <div className="text-delta-blue mt-0.5">
                  <User className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                  <h4 className="font-bold text-[#1a1a1a] text-sm tracking-tight mb-1">Medallion® Status</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Earn status for complimentary upgrades, fee waivers, and more.</p>
              </div>
          </div>
      </div>
    </section>
  );
}
