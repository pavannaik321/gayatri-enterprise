import React from 'react'
import Image from 'next/image';
export default function Herosection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#E1E0F9] rounded-bl-[48px] rounded-br-[48px] px-8 py-16">
    {/* Left Side */}
    <div className="lg:w-1/2">
    <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
        Professional Printing Solutions
      </h1>
      <p className="text-black text-lg mb-8">
        From business cards to banners, we deliver vibrant, high-quality prints to help you stand out.
      </p>
      <div className="flex space-x-4">
      <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3">
      Get a Quote
</button>


      </div>
    </div>

    {/* Right Side - Image */}
    <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
<video
src="/videos/intro_video.mp4"
autoPlay
loop
muted
playsInline
className="rounded-3xl w-full h-auto max-w-[600px]"
/>
</div>

  </section>
  )
}
