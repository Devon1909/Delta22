import { Heart, MessageCircle } from 'lucide-react';
import React from 'react';

const destinations = [
  { id: 1, name: 'London, UK', image: 'https://images.unsplash.com/photo-1513635269975-5969336cd115?q=80&w=2070&auto=format&fit=crop', price: '684' },
  { id: 2, name: 'Paris, FR', image: 'https://images.unsplash.com/photo-1502602898657-3e90760b9468?q=80&w=2070&auto=format&fit=crop', price: '742' },
  { id: 3, name: 'Rome, IT', image: 'https://images.unsplash.com/photo-1515542622106-78b1d9edec1a?q=80&w=2070&auto=format&fit=crop', price: '815' },
  { id: 4, name: 'Seoul, KR', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop', price: '1,120' },
  { id: 5, name: 'New York, US', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop', price: '249' },
  { id: 6, name: 'Tokyo, JP', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop', price: '849' },
  { id: 7, name: 'Cancun, MX', image: 'https://images.unsplash.com/photo-1522064119864-42fcf5569420?q=80&w=2070&auto=format&fit=crop', price: '349' },
  { id: 8, name: 'Los Angeles, US', image: 'https://images.unsplash.com/photo-1518115598688-66af79b188c0?q=80&w=2070&auto=format&fit=crop', price: '199' }
];

const stories = [
    { id: 1, user: '@traveler_k', img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1000&auto=format&fit=crop', likes: '1.2k', caption: 'Touch down in paradise. Thanks @Delta ✈️' },
    { id: 2, user: '@wandering_soul', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop', likes: '840', caption: 'Beach days are the best days.' },
    { id: 3, user: '@mike_explores', img: 'https://images.unsplash.com/photo-1621256331908-ee66236b333c?q=80&w=1000&auto=format&fit=crop', likes: '2k', caption: 'Delta SkyClub coffee hitting different this morning ☕' },
    { id: 4, user: '@sarah_abroad', img: 'https://images.unsplash.com/photo-1516483638261-f4085ee6b633?q=80&w=1000&auto=format&fit=crop', likes: '4.5k', caption: 'Rome, you have my heart. #DeltaMedallion' }
];

export default function Destinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-delta-blue tracking-tight">Trending Destinations</h2>
            <a href="#" className="hidden md:inline-flex text-[11px] font-bold text-delta-crimson underline uppercase tracking-widest hover:text-[#a60d26] transition-colors pb-1">
                Explore All
            </a>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((dest) => (
            <div 
                key={dest.id} 
                className="group cursor-pointer block"
            >
              <div className="h-32 sm:h-40 md:h-48 bg-gray-200 rounded-sm mb-3 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent z-10"></div>
                  
                  <img 
                    src={dest.image} 
                    alt={`Flight destination ${dest.name}`} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  <span className="absolute bottom-3 left-3 text-white font-bold text-sm z-20 tracking-wide drop-shadow-md">
                      {dest.name}
                  </span>
              </div>
              <div className="text-[11px] font-bold text-gray-500 tracking-wider">
                  FROM <span className="text-delta-crimson text-base md:text-lg font-bold tracking-normal ml-1 drop-shadow-sm group-hover:text-[#a60d26] transition-colors">${dest.price}*</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
             <a href="#" className="inline-flex text-[11px] font-bold text-delta-crimson underline uppercase tracking-widest">
                Explore All Destinations
            </a>
        </div>

        {/* UGC Section */}
        <div className="mt-28">
            <h3 className="text-2xl md:text-3xl font-bold text-delta-blue tracking-tight mb-8">Traveler Stories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {stories.map(story => (
                    <div key={story.id} className="relative aspect-square group overflow-hidden bg-gray-100 rounded-sm cursor-pointer shadow-sm">
                        <img 
                            src={story.img} 
                            alt={`Travel photo by ${story.user}`}
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
                             <div className="text-white font-bold text-xs tracking-wide">
                                <span>{story.user}</span>
                             </div>
                             <div>
                                 <p className="text-gray-200 text-[11px] leading-relaxed mb-4 line-clamp-3">{story.caption}</p>
                                 <div className="flex space-x-5 text-white">
                                    <span className="flex items-center text-[10px] font-bold tracking-widest"><Heart className="w-4 h-4 mr-1.5 fill-white" /> {story.likes}</span>
                                    <span className="flex items-center text-[10px] font-bold tracking-widest"><MessageCircle className="w-4 h-4 mr-1.5" /> 12</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <p className="text-gray-500 text-sm tracking-wide">Tag <span className="font-bold text-delta-blue">@Delta</span> and use <span className="font-bold text-delta-blue">#DeltaTravels</span> to be featured.</p>
            </div>
        </div>

      </div>
    </section>
  );
}
