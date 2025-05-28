'use client';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    name: 'Business Card Printing',
    image: '/services/business3.avif',
    minQty: 'Minimum order: 100 cards',
  },
  {
    name: 'Wedding Invitation Printing',
    image: '/services/wedding2.avif',
    minQty: 'Minimum order: 50 cards',
  },
  {
    name: 'Flyers & Brochures',
    image: '/services/brochures2.avif',
    minQty: 'Minimum order: 100 flyers',
  },
  {
    name: 'Poster Printing',
    image: '/services/poster.webp',
    minQty: 'Minimum order: 10 posters',
  },
  {
    name: 'T-Shirt Printing',
    image: '/services/tshirt.jpg',
    minQty: 'Minimum order: 5 T-shirts',
  },
  {
    name: 'Sticker & Label Printing',
    image: '/services/sticker3.jpg',
    minQty: 'Minimum order: 200 labels',
  },
  // New services added here
  {
    name: 'Wall Calander',
    image: '/services/Wall Calander.jpg',
    minQty: 'Minimum order: 100 cards',
  },
  {
    name: 'Batch Printing',
    image: '/services/pen-printing.jpg',
    minQty: 'Minimum order: 50 pens',
  },
  {
    name: 'Letter Head Printing',
    image: '/services/letter-head.jpg',
    minQty: 'Minimum order: 100 sheets',
  },
  {
    name: 'Key Chain Printing',
    image: '/services/keychain.png',
    minQty: 'Minimum order: 50 key chains',
  },
  {
    name: 'Brochure Printing',
    image: '/services/brochure-printing.jpg',
    minQty: 'Minimum order: 100 brochures',
  },
  {
    name: 'Canvas Printing',
    image: '/services/canvas-printing.jpg',
    minQty: 'Minimum order: 10 canvases',
  },
  {
    name: 'Pamphlet Printing',
    image: '/services/pamphlet-printing.jpg',
    minQty: 'Minimum order: 200 pamphlets',
  },
  {
    name: 'Vinyl Printing',
    image: '/services/vinyl-printing.jpg',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'Envelope Printing',
    image: '/services/envelope-printing.jpg',
    minQty: 'Minimum order: 100 envelopes',
  },
  {
    name: 'Sunboard Printing',
    image: '/services/sunboard-printing.jpg',
    minQty: 'Minimum order: 20 sq ft',
  },
  {
    name: 'Sticker Printing',
    image: '/services/sticker-printing.jpg',
    minQty: 'Minimum order: 200 stickers',
  },
  {
    name: 'Photo Printing',
    image: '/services/photo-printing.jpg',
    minQty: 'Minimum order: 20 photos',
  },
  {
    name: 'Mug Printing',
    image: '/services/mug-printing.jpg',
    minQty: 'Minimum order: 10 mugs',
  },
  {
    name: 'Wallpaper Printing',
    image: '/services/wallpaper-printing.jpg',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'Sinages Printing',
    image: '/services/sinages-printing.jpg',
    minQty: 'Minimum order: 10 signs',
  },
  {
    name: 'Cup Printing',
    image: '/services/cup-printing.jpg',
    minQty: 'Minimum order: 20 cups',
  },
  {
    name: 'Frosted Film Printing',
    image: '/services/frosted-film.jpg',
    minQty: 'Minimum order: 10 sq ft',
  },
  {
    name: 'Bottle Printing',
    image: '/services/bottle-printing.jpg',
    minQty: 'Minimum order: 50 bottles',
  },
  {
    name: 'One Way Vision Printing',
    image: '/services/one-way-vision.jpg',
    minQty: 'Minimum order: 30 sq ft',
  },
  {
    name: 'Dairy Printing',
    image: '/services/dairy-printing.jpg',
    minQty: 'Minimum order: 100 dairies',
  },
  {
    name: 'Eco & Latex Printing',
    image: '/services/eco-latex-printing.jpg',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'ID Card Printing',
    image: '/services/id-card-printing.jpg',
    minQty: 'Minimum order: 100 ID cards',
  },
  {
    name: 'Rigid Box Printing',
    image: '/services/rigid-box-printing.jpg',
    minQty: 'Minimum order: 50 boxes',
  },
  {
    name: 'Bill Book Printing',
    image: '/services/bill-book-printing.jpg',
    minQty: 'Minimum order: 20 bill books',
  },
  {
    name: 'Manuals Printing',
    image: '/services/manuals-printing.jpg',
    minQty: 'Minimum order: 50 manuals',
  },
  {
    name: 'UV Printing',
    image: '/services/uv-printing.jpg',
    minQty: 'Minimum order: 20 sq ft',
  },
  {
    name: 'Printed Tape',
    image: '/services/printed-tape.jpg',
    minQty: 'Minimum order: 100 meters',
  },
];

export default function servicepage() {
  return (
    <section className="py-20 px-4 bg-red-100 rounded-[48px] text-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-red-500 font-semibold mb-2">Our Services</p>
        <h2 className="text-4xl font-bold">Top Print Solutions We Offer</h2>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
  {/* Image */}
  <div className="p-4">
    <div className="rounded-xl overflow-hidden">
      <Image
        src={service.image}
        alt={service.name}
        width={500}
        height={300}
        className="object-cover w-full h-48"
      />
    </div>
  </div>

  {/* Content */}
  <div className="px-6 pb-6 text-start">
    <h3 className="text-xl font-bold text-red-500 mb-2">{service.name}</h3>
    <p className="text-lg font-semibold text-gray-800 mb-1">{service.price}</p>
    <p className="text-sm text-gray-600">{service.minQty}</p>
  </div>
</div>

        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-14 text-center">
        <a
          href="#demo"
          className="inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Schedule a machine walkthrough
        </a>
      </div>
    </section>
  );
}
