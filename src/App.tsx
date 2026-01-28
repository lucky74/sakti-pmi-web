import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import Stats from './components/Stats';
import JobSearch from './components/JobSearch';
import FraudWarning from './components/FraudWarning';
import Footer from './components/Footer';

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleSelectCountry = (countryCode: string) => {
    setSelectedCountry(countryCode);
    // Smooth scroll to stats section
    const element = document.getElementById('stats-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <Hero />
      <MapSection onSelectCountry={handleSelectCountry} />
      
      <div id="stats-section" className="container mx-auto px-4 -mt-10 relative z-10">
        <Stats countryCode={selectedCountry} />
      </div>
      
      <JobSearch countryCode={selectedCountry} />
      <FraudWarning />
      <Footer />
    </div>
  );
}

export default App;
