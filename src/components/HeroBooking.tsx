import { Calendar, ChevronDown, MapPin, Users } from 'lucide-react';
import React, { useState } from 'react';

export default function HeroBooking() {
  const [tripType, setTripType] = useState('round-trip');

  return (
    <section className="relative flex flex-col items-center">
      {/* Hero Background */}
      <div className="relative h-[360px] md:h-[420px] bg-[#002142] overflow-hidden shrink-0 w-full flex justify-center">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
          alt="Delta airplane tail with sky background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-delta-blue via-delta-blue/90 to-transparent z-10 w-full lg:w-[120%]"></div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full pb-10">
           <span className="text-delta-crimson font-bold tracking-widest text-[11px] mb-2 uppercase">REACH FOR THE SKIES</span>
           <h1 className="text-white text-4xl md:text-6xl font-light leading-tight tracking-tight max-w-xl">
             Experience the <br/><span className="font-bold">Delta Difference.</span>
           </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full -mt-20 sm:-mt-24 pb-8">
        {/* Booking Widget */}
        <div className="bg-white shadow-2xl rounded-sm p-1 border border-gray-50 flex flex-col">
          {/* Trip Type Toggles */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2 border-b border-gray-100">
             <div className="flex space-x-6">
                <button 
                  className={`text-[11px] font-bold tracking-widest pb-1 border-b-2 transition-colors ${tripType === 'round-trip' ? 'border-delta-crimson text-delta-blue' : 'border-transparent text-gray-400 hover:text-delta-blue'}`}
                  onClick={() => setTripType('round-trip')}
                >
                  ROUND TRIP
                </button>
                <button 
                  className={`text-[11px] font-bold tracking-widest pb-1 border-b-2 transition-colors ${tripType === 'one-way' ? 'border-delta-crimson text-delta-blue' : 'border-transparent text-gray-400 hover:text-delta-blue'}`}
                  onClick={() => setTripType('one-way')}
                >
                  ONE WAY
                </button>
                <button 
                  className={`text-[11px] font-bold tracking-widest pb-1 border-b-2 transition-colors hidden sm:block ${tripType === 'multi-city' ? 'border-delta-crimson text-delta-blue' : 'border-transparent text-gray-400 hover:text-delta-blue'}`}
                  onClick={() => setTripType('multi-city')}
                >
                  MULTI-CITY
                </button>
            </div>
            <button className="text-[10px] font-bold text-delta-crimson hover:text-delta-accent underline tracking-widest uppercase transition-colors">
              SHOP WITH MILES
            </button>
          </div>

          {/* Form Grid using divide */}
          <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-100">
            {/* Origin & Destination */}
            <div className="flex-1 p-4 hover:bg-gray-50/50 transition-colors group cursor-text">
                <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-wider">From</span>
                <div className="flex items-baseline">
                    <input type="text" defaultValue="ATL" className="w-[50px] outline-none text-xl font-bold text-delta-blue bg-transparent" />
                    <span className="text-gray-400 font-light text-sm truncate ml-1 opacity-80 group-hover:opacity-100 transition-opacity">Atlanta, GA</span>
                </div>
            </div>
            <div className="flex-1 p-4 hover:bg-gray-50/50 transition-colors group cursor-text border-t md:border-t-0 border-gray-100">
                <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-wider">To</span>
                <div className="flex items-baseline">
                    <input type="text" placeholder="DESTINATION" className="w-full outline-none text-xl font-bold text-delta-blue bg-transparent placeholder-gray-300" />
                </div>
            </div>

            {/* Dates */}
            <div className="flex-1 p-4 hover:bg-gray-50/50 transition-colors group cursor-text border-t md:border-t-0 border-gray-100">
                <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-wider">Dates</span>
                <div className="flex items-baseline">
                    <input type="text" placeholder="Depart - Return" className="w-full outline-none text-lg font-bold text-delta-blue bg-transparent placeholder-gray-300" />
                </div>
            </div>

            {/* Passengers */}
            <div className="w-full md:w-36 p-4 hover:bg-gray-50/50 transition-colors cursor-pointer border-t md:border-t-0 border-gray-100 flex flex-col justify-center">
                <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-wider">Passengers</span>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-delta-blue">1 Adult</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
            </div>

            {/* CTA */}
            <div className="w-full md:w-48 border-t md:border-t-0 border-gray-100 shrink-0">
               <button className="w-full h-[64px] md:h-full min-h-[72px] bg-delta-crimson hover:bg-[#a60d26] text-white font-bold text-lg transition-all flex items-center justify-center gap-2 rounded-b-sm md:rounded-l-none md:rounded-br-sm md:rounded-tr-sm uppercase tracking-wide">
                 Search
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
