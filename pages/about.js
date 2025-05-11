import Image from 'next/image';


import Header from '@/components/Header';
import Herosection from '@/components/Herosection';
import ResortShowcase from '@/components/abouthero';
import HighlightsSection from '@/components/ourShops';
import Footer from '@/components/Footer';
import OurTeam from '@/components/ourTeam';

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
<Header />

      {/* Hero Section */}
<Herosection />
<ResortShowcase />
<HighlightsSection />
<OurTeam />
<Footer />
    </div>
  );
}