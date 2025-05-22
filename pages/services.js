'use client';
import Header from '@/components/Header';
import Herosection from '@/components/Herosection';
import Image from 'next/image';
import React from 'react';
import Footer from '@/components/Footer';

const services = [
  {
    name: 'Business Card Printing',
    image: '/services/business3.avif',
    price: '₹500 / 100 pcs',
    minQty: 'Minimum order: 100 cards',
  },
  {
    name: 'Wedding Invitation Printing',
    image: '/services/wedding2.avif',
    price: '₹15 / card',
    minQty: 'Minimum order: 50 cards',
  },
  {
    name: 'Flyers & Brochures',
    image: '/services/brochures2.avif',
    price: '₹2.5 / page',
    minQty: 'Minimum order: 100 flyers',
  },
  {
    name: 'Poster Printing',
    image: '/services/poster.webp',
    price: '₹30 / poster',
    minQty: 'Minimum order: 10 posters',
  },
  {
    name: 'T-Shirt Printing',
    image: '/services/tshirt.jpg',
    price: '₹250 / shirt',
    minQty: 'Minimum order: 5 T-shirts',
  },
  {
    name: 'Sticker & Label Printing',
    image: '/services/sticker3.jpg',
    price: '₹1.5 / label',
    minQty: 'Minimum order: 200 labels',
  },
  // New services added here
  {
    name: 'Visiting Card Printing',
    image: '/services/visitingcard.jpg',
    price: '₹450 / 100 pcs',
    minQty: 'Minimum order: 100 cards',
  },
  {
    name: 'Pen Printing',
    image: '/services/penprint.png',
    price: '₹20 / pen',
    minQty: 'Minimum order: 50 pens',
  },
  {
    name: 'Letter Head Printing',
    image: '/services/letter-head.png',
    price: '₹10 / sheet',
    minQty: 'Minimum order: 100 sheets',
  },
  {
    name: 'Key Chain Printing',
    image: '/services/keychain.png',
    price: '₹30 / key chain',
    minQty: 'Minimum order: 50 key chains',
  },
  {
    name: 'Brochure Printing',
    image: '/services/brochurepic.png',
    price: '₹5 / brochure',
    minQty: 'Minimum order: 100 brochures',
  },
  {
    name: 'Canvas Printing',
    image: '/services/canvas-printing.png',
    price: '₹350 / canvas',
    minQty: 'Minimum order: 10 canvases',
  },
  {
    name: 'Pamphlet Printing',
    image: '/services/pamphlets.avif',
    price: '₹3 / pamphlet',
    minQty: 'Minimum order: 200 pamphlets',
  },
  {
    name: 'Vinyl Printing',
    image: '/services/Vinyl-printing.png',
    price: '₹25 / sq ft',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'Envelope Printing',
    image: '/services/envelope-printing.avif',
    price: '₹10 / envelope',
    minQty: 'Minimum order: 100 envelopes',
  },
  {
    name: 'Sunboard Printing',
    image: '/services/sunboard-printing.jpg',
    price: '₹100 / sq ft',
    minQty: 'Minimum order: 20 sq ft',
  },
  {
    name: 'Sticker Printing',
    image: '/services/sticker-printing.png',
    price: '₹1.5 / sticker',
    minQty: 'Minimum order: 200 stickers',
  },
  {
    name: 'Photo Printing',
    image: '/services/photo-printing.jpg',
    price: '₹50 / photo',
    minQty: 'Minimum order: 20 photos',
  },
  {
    name: 'Mug Printing',
    image: '/services/mug-printing.jpg',
    price: '₹150 / mug',
    minQty: 'Minimum order: 10 mugs',
  },
  {
    name: 'Wallpaper Printing',
    image: '/services/wallpaper-printing.jpg',
    price: '₹100 / sq ft',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'Sinages Printing',
    image: '/services/sinages-printing.jpg',
    price: '₹150 / sign',
    minQty: 'Minimum order: 10 signs',
  },
  {
    name: 'Cup Printing',
    image: '/services/cup-printing.jpg',
    price: '₹80 / cup',
    minQty: 'Minimum order: 20 cups',
  },
  {
    name: 'Frosted Film Printing',
    image: '/services/frosted-film.png',
    price: '₹50 / sq ft',
    minQty: 'Minimum order: 10 sq ft',
  },
  {
    name: 'Bottle Printing',
    image: '/services/bottle-printing.jpg',
    price: '₹40 / bottle',
    minQty: 'Minimum order: 50 bottles',
  },
  {
    name: 'One Way Vision Printing',
    image: '/services/one-way-vision.jpg',
    price: '₹200 / sq ft',
    minQty: 'Minimum order: 30 sq ft',
  },
  {
    name: 'Dairy Printing',
    image: '/services/dairy-printing.jpg',
    price: '₹20 / dairy',
    minQty: 'Minimum order: 100 dairies',
  },
  {
    name: 'Eco & Latex Printing',
    image: '/services/eco-latex-printing.png',
    price: '₹30 / sq ft',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'ID Card Printing',
    image: '/services/id-card-printing.jpg',
    price: '₹50 / ID card',
    minQty: 'Minimum order: 100 ID cards',
  },
  {
    name: 'Rigid Box Printing',
    image: '/services/rigid-box-printing.jpg',
    price: '₹100 / box',
    minQty: 'Minimum order: 50 boxes',
  },
  {
    name: 'Bill Book Printing',
    image: '/services/bill-book-printing.png',
    price: '₹40 / bill book',
    minQty: 'Minimum order: 20 bill books',
  },
  {
    name: 'Manuals Printing',
    image: '/services/manuals-printing.png',
    price: '₹50 / manual',
    minQty: 'Minimum order: 50 manuals',
  },
  {
    name: 'UV Printing',
    image: '/services/uv-printing.jpg',
    price: '₹80 / sq ft',
    minQty: 'Minimum order: 20 sq ft',
  },
  {
    name: 'Printed Tape',
    image: '/services/printed-tape.jpg',
    price: '₹10 / meter',
    minQty: 'Minimum order: 100 meters',
  },
];

export default function servicepage() {
  return (
  <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
       {/* Header */}
 <Header />
        <Herosection />

        {/* ✅ Updated top section with background and spacing */}
        <div className="bg-white p-8 rounded-2xl shadow mb-12 text-center">
          <p className="text-red-500 font-semibold mb-2">Our Services</p>
          <h2 className="text-4xl font-extrabold">Top Print Solutions We Offer</h2>
        </div>
           <div className="py-20 px-4 bg-red-100 rounded-[48px] text-gray-900">
      <div className="max-w-7xl mx-auto"></div>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
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

       <Footer/>
      </div>
    </div>
  );
}