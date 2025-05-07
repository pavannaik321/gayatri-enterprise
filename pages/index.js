
import Image from 'next/image';

import Header from '@/components/Header';
import Herosection from '@/components/Herosection';
import OurServiceSlider from '@/components/ourservicesslider';

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
    <div className="bg-white rounded-2xl p-6 flex items-start shadow-md">
      <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
        🖌️
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Custom Design Options</h3>
        <p className="text-sm text-gray-600 mt-1">Choose from templates or upload your own designs for a personalized print experience.</p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="bg-white rounded-2xl p-6 flex items-start shadow-md">
      <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
        🚚
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Fast & Reliable Delivery</h3>
        <p className="text-sm text-gray-600 mt-1">Get your prints delivered quickly with our trusted courier partners.</p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="bg-white rounded-2xl p-6 flex items-start shadow-md">
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


<section class="bg-[#E1E0F9] rounded-[48px] py-16 px-6 sm:px-10 lg:px-20">
  <div class="max-w-7xl mx-auto text-center">
    <p class="text-sm font-semibold text-red-500 mb-2">OUR MACHINERY IN ACTION</p>
    <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
      Trusted equipment powering top-tier print results
    </h2>
    <p class="text-gray-600 max-w-3xl mx-auto mb-12">
      From brochures to banners, our high-end machines ensure flawless quality, every time.
    </p>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left">
        <img src="/svg/img1.png" alt="Offset Printing Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Offset Printing Machine</h3>
        <p class="text-sm text-gray-600">
          Ideal for high-volume jobs like books and brochures, delivering sharp, vibrant prints at scale.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left">
        <img src="/svg/img2.png" alt="Laser Printer" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Laser Printing Unit</h3>
        <p class="text-sm text-gray-600">
          High-speed laser printing for corporate materials like flyers, handouts, and presentations.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left">
        <img src="/svg/img3.png" alt="UV Coating Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">UV Coating System</h3>
        <p class="text-sm text-gray-600">
          Enhances print durability with a glossy or matte finish—perfect for business cards and covers.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left">
        <img src="/svg/img4.png" alt="Large Format Printer" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Large Format Printer</h3>
        <p class="text-sm text-gray-600">
          Prints banners, posters, and signage with exceptional clarity and outdoor durability.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left">
        <img src="/svg/img5.png" alt="Binding Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Perfect Binding Machine</h3>
        <p class="text-sm text-gray-600">
          Used for finishing booklets, reports, and manuals with a clean, professional spine.
        </p>
      </div>


      <div class="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start text-left">
        <img src="/svg/img6.png" alt="Automated Cutting Machine" class="rounded-xl mb-4 object-cover w-full h-40" />
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Precision Cutting Machine</h3>
        <p class="text-sm text-gray-600">
          Ensures clean edges and accurate trimming for cards, leaflets, and custom die-cut prints.
        </p>
      </div>
    </div>

    <div class="mt-12">
      <a href="#demo" class="inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-full shadow-lg transition">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        Schedule a machine walkthrough
      </a>
    </div>
  </div>
</section>
<OurServiceSlider />




    </div>
  );
}