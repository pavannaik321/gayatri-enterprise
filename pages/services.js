import Image from 'next/image';


import Header from '@/components/Header';
import Herosection from '@/components/Herosection';

export default function Services() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
<Header />

      {/* Hero Section */}
<Herosection />
    </div>
  );
}