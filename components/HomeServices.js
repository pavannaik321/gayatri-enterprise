'use client';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    name: 'Tent Card Print',
    image: '/services/TENT CARD PRINT.jpg',
    minQty: 'Minimum order: 100 ',
  },
  {
    name: 'Photo Print',
    image: '/services/PHOTO PRINT.jpg',
    minQty: 'Minimum order: 25',
  },
  {
    name: 'Pamplet',
    image: '/services/PAMPLET.jpg',
    minQty: 'Minimum order: 100 ',
  },
  {
    name: 'Neon sign Board',
    image: '/services/neon-sign-board.jpg',
    minQty: 'Minimum order: 50 ',
  },
  {
    name: 'Magnetic Rigid Boxes',
    image: '/services/Magnetic-Rigid-Boxes.jpg',
    minQty: 'Minimum order: 50 ',
  },
  {
    name: 'Manual Printing',
    image: '/services/manual printing.jpg',
    minQty: 'Minimum order: 100 ',
  },
];

export default function Homeservices() {
  return (
    <section className="py-20 px-4 bg-red-100 rounded-[48px] text-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12 bg-white p-4">
        <p className="text-red-500 font-semibold mb-2">Our Services</p>
        <h2 className="text-4xl font-bold" >Top Print Solutions We Offer</h2>
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
