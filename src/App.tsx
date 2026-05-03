/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import HeroBooking from './components/HeroBooking';
import SkyMiles from './components/SkyMiles';
import Destinations from './components/Destinations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <HeroBooking />
        <SkyMiles />
        <Destinations />
      </main>

      <Footer />
    </div>
  );
}
