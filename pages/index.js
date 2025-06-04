
import Image from 'next/image';

import Header from '@/components/Header';
import Herosection from '@/components/Herosection';
import OurServiceSlider from '@/components/ourservicesslider';
import Homeservices from '@/components/HomeServices';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Header */}
<Header />

      {/* Hero Section */}
<Herosection />


      <div className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
  {/* Left - Feature Cards */}
  <div className="space-y-6 w-full md:w-1/2">
    {/* Feature 1 */}
    <div className="bg-white rounded-2xl p-6 flex items-start shadow-md transition-transform transform  hover:scale-105">
      <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
        🖌️
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Custom Design Options</h3>
        <p className="text-sm text-gray-600 mt-1">Choose from templates or upload your own designs for a personalized print experience.</p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="bg-white rounded-2xl p-6 flex items-start shadow-md transition-transform transform  hover:scale-105">
      <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
        🚚
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Fast & Reliable Delivery</h3>
        <p className="text-sm text-gray-600 mt-1">Get your prints delivered quickly with our trusted courier partners.</p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="bg-white rounded-2xl p-6 flex items-start shadow-md transition-transform transform  hover:scale-105">
      <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
        📦
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Bulk Order Discounts</h3>
        <p className="text-sm text-gray-600 mt-1">Save more when you print more – ideal for events, campaigns, and business needs.</p>
      </div>
    </div>
  </div>

  {/* Right - Title and CTA */}
  <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-12">
    <p className="text-red-600 text-sm font-semibold mb-2">• KEY FEATURES</p>
    <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">The complete printing solution</h2>
    <p className="text-gray-600 mb-6">
      From design to doorstep, our platform ensures top-quality prints delivered with speed and care—perfect for both personal and business needs.
      From design to doorstep, our platform ensures top-quality prints delivered with speed and care—perfect for both personal and business needs.
      From design to doorstep, our platform ensures top-quality prints delivered with speed and care—perfect for both personal and business needs.
      From design to doorstep, our platform ensures top-quality prints delivered with speed and care—perfect for both personal and business needs.
    </p>
    <a
      href="#"
      className="inline-flex items-center text-red-600 font-semibold text-base border border-red-600 rounded-full px-5 py-2 hover:bg-red-600 hover:text-white transition"
    >
      <span className="mr-2">→</span> Get a quote
    </a>
  </div>
</div>


<section class="bg-red-100 rounded-[48px] py-16 px-6 sm:px-10 lg:px-20">
  <div class="max-w-7xl mx-auto text-center">
    <p class="text-sm font-semibold text-red-500 mb-2">OUR MACHINERY IN ACTION</p>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
      Trusted equipment powering top-tier print results
    </h2>
    <p class="text-gray-600 max-w-3xl mx-auto mb-12">
      From brochures to banners, our high-end machines ensure flawless quality, every time.
    </p>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
        <img src="/machine/digital_printing.jpg" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Digital printing Machine</h3>
        <p class="text-sm text-gray-600">
          Ideal for high-volume jobs like books and brochures, delivering sharp, vibrant prints at scale.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
      <img src="/machine/harf cuting machine.jpg" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Harf Cutting Machine</h3>
        <p class="text-sm text-gray-600">
          High-speed laser printing for corporate materials like flyers, handouts, and presentations.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
      <img src="/machine/digital_printing.jpg" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Digital printing Machine</h3>
        <p class="text-sm text-gray-600">
          Enhances print durability with a glossy or matte finish—perfect for business cards and covers.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
        <img src="/machine/lamination.jpg" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Lamination Machine</h3>
        <p class="text-sm text-gray-600">
          Prints banners, posters, and signage with exceptional clarity and outdoor durability.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
        <img src="/machine/offset.jpg" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Offset Machine</h3>
        <p class="text-sm text-gray-600">
          Used for finishing booklets, reports, and manuals with a clean, professional spine.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
        <img src="/machine/parfect_binding.png" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Parfect binding Machine</h3>
        <p class="text-sm text-gray-600">
          Ensures clean edges and accurate trimming for cards, leaflets, and custom die-cut prints.
        </p>
      </div>
      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
        <img src="/machine/photo_print.jpg" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Photo Printing Machine</h3>
        <p class="text-sm text-gray-600">
          Ensures clean edges and accurate trimming for cards, leaflets, and custom die-cut prints.
        </p>
      </div>
      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
        <img src="/machine/vinyl_print.jpg" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Vinyl Printing Machine</h3>
        <p class="text-sm text-gray-600">
          Ensures clean edges and accurate trimming for cards, leaflets, and custom die-cut prints.
        </p>
      </div>
      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left transition-transform transform  hover:scale-105">
        <img src="/machine/digital_printing2.jpg" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Digital Printing Machine</h3>
        <p class="text-sm text-gray-600">
          Ensures clean edges and accurate trimming for cards, leaflets, and custom die-cut prints.
        </p>
      </div>
    </div>

    <div class="mt-12">
      <Link href="/services" class="inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-full shadow-lg transition">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        Schedule a service walkthrough
      </Link>
    </div>
  </div>
</section>
<OurServiceSlider />
<Homeservices />
<Footer />



    </div>
  );
}