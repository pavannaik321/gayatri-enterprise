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
    minQty: 'Minimum order: 100 cards',
  },
  {
    name: 'Wedding Invitation Printing',
    image: '/services/wedding2.avif',
    minQty: 'Minimum order: 50 cards',
  },
  {
    name: 'Flyers & Brochures',
    image: '/services/BROCHURES.jpg',
    minQty: 'Minimum order: 100 flyers',
  },
  {
    name: 'Poster Printing',
    image: '/services/poster.jpg',
    minQty: 'Minimum order: 10 posters',
  },
  {
    name: 'T-Shirt Printing',
    image: '/services/T-SHIRT.jpg',
    minQty: 'Minimum order: 5 T-shirts',
  },
  {
    name: 'Sticker & Label Printing',
    image: '/services/images.jpg',
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
    image: '/services/batch-printing.webp',
    minQty: 'Minimum order: 50 pens',
  },
  {
    name: 'Bill Book Printing',
    image: '/services/BILL BOOK.png',
    minQty: 'Minimum order: 100 sheets',
  },
  {
    name: 'Book Binding',
    image: '/services/BOOK BINDING.png',
    minQty: 'Minimum order: 50 key chains',
  },
  {
    name: 'Bottle Printing',
    image: '/services/bottel.jpg',
    minQty: 'Minimum order: 100 brochures',
  },
  {
    name: 'Bow Banner Flag',
    image: '/services/Bow-Banner-FLAGS.jpg',
    minQty: 'Minimum order: 10 canvases',
  },
  {
    name: 'Brochures Printing',
    image: '/services/BROCHURES.jpg',
    minQty: 'Minimum order: 200 pamphlets',
  },
  {
    name: 'Butter Paper',
    image: '/services/BUTTER PAPER PRINT.jpg',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'Canvas Print',
    image: '/services/CANVASH PRINT.jpg',
    minQty: 'Minimum order: 100 envelopes',
  },
  {
    name: 'Cartons',
    image: '/services/Cartons.jpg',
    minQty: 'Minimum order: 20 sq ft',
  },
  {
    name: 'Diary Printing ',
    image: '/services/dieary print.jpg',
    minQty: 'Minimum order: 200 stickers',
  },
  {
    name: 'Eco & Latex Printing',
    image: '/services/Eco & Latex Printing.jpg',
    minQty: 'Minimum order: 20 photos',
  },
  {
    name: 'Envelope Printing',
    image: '/services/Envelope.jpg',
    minQty: 'Minimum order: 10 mugs',
  },
  {
    name: 'Frosted Vinyal',
    image: '/services/FROSTED VINYAL.jpg',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'Gift Coupons Printing',
    image: '/services/gift-coupons-printing-service.jpg',
    minQty: 'Minimum order: 10 signs',
  },
  {
    name: 'Glass Engraving',
    image: '/services/glass-ENGRAVING.jpg',
    minQty: 'Minimum order: 20 cups',
  },
  {
    name: 'ID Card Tag',
    image: '/services/ID TAG.jpg',
    minQty: 'Minimum order: 10 sq ft',
  },
  {
    name: 'Key Chain',
    image: '/services/Key Chain.jpg',
    minQty: 'Minimum order: 50 bottles',
  },
  {
    name: 'Laser Engraved Tumbler',
    image: '/services/laser-engraved-tumbler.jpg',
    minQty: 'Minimum order: 30 sq ft',
  },
  {
    name: 'Letter Head',
    image: '/services/LETTER HEAD.jpg',
    minQty: 'Minimum order: 100 dairies',
  },
  {
    name: 'Magnetic Rigid Boxes',
    image: '/services/Magnetic-Rigid-Boxes.jpg',
    minQty: 'Minimum order: 50 sq ft',
  },
  {
    name: 'Manual Printing',
    image: '/services/manual printing.jpg',
    minQty: 'Minimum order: 100 ID cards',
  },
  {
    name: 'Mouse Pad Printing',
    image: '/services/MOUSE PAD PRINT.jpg',
    minQty: 'Minimum order: 50 boxes',
  },
  {
    name: 'Mug Printing',
    image: '/services/MUG PRINT.jpg',
    minQty: 'Minimum order: 20 bill books',
  },
  {
    name: 'Neon sign Board',
    image: '/services/neon-sign-board.jpg',
    minQty: 'Minimum order: 50 manuals',
  },
  {
    name: 'One Way Vision Film',
    image: '/services/One-Way Vision-Film.jpg',
    minQty: 'Minimum order: 20 sq ft',
  },
  {
    name: 'Pamplet',
    image: '/services/PAMPLET.jpg',
    minQty: 'Minimum order: 100 meters',
  },
    {
    name: 'Paper Bag',
    image: '/services/PAPER BAGS.jpg',
    minQty: 'Minimum order: 100 ',
  },
    {
    name: 'Pen',
    image: '/services/PEN.jpg',
    minQty: 'Minimum order: 50 ',
  },
    {
    name: 'Pen Drive Print',
    image: '/services/pendrive print.jpg',
    minQty: 'Minimum order: 25',
  },
    {
    name: 'Photo Print',
    image: '/services/PHOTO PRINT.jpg',
    minQty: 'Minimum order: 25',
  },
    {
    name: 'Poster Print',
    image: '/services/POSTER PRINT.jpg',
    minQty: 'Minimum order: 50',
  },
    {
    name: 'Presentation Print',
    image: '/services/presentation-folder-.jpg',
    minQty: 'Minimum order: 50',
  },
    {
    name: 'Printed Name Badges',
    image: '/services/Printed-Name Badges.jpg',
    minQty: 'Minimum order: 100',
  },
    {
    name: 'QR Code Stand',
    image: '/services/QR CODE STANDEE.jpg',
    minQty: 'Minimum order: 25',
  },
    {
    name: 'Rectangle Flag',
    image: '/services/Rectangle Flags.jpg',
    minQty: 'Minimum order: 50',
  },
    {
    name: 'T-shirt',
    image: '/services/T-SHIRT.jpg',
    minQty: 'Minimum order: 100 ',
  },
    {
    name: 'Trophy',
    image: '/services/TROFY.jpg',
    minQty: 'Minimum order: 50',
  },
    {
    name: 'Tent Card Print',
    image: '/services/TENT CARD PRINT.jpg',
    minQty: 'Minimum order: 100 ',
  },
    {
    name: 'Tapes',
    image: '/services/TAPES.jpg',
    minQty: 'Minimum order: 100 meters',
  },
    {
    name: 'Sun V Board',
    image: '/services/SUNVBOARD.jpg',
    minQty: 'Minimum order: 10 ',
  },
    {
    name: 'Sun Pack',
    image: '/services/SUNPACK.jpg',
    minQty: 'Minimum order: 10',
  },
    {
    name: 'Sticker Print',
    image: '/services/STICKER PRINT.jpg',
    minQty: 'Minimum order: 100 ',
  },
    {
    name: 'Screen Print',
    image: '/services/SREEN PRINT.jpg',
    minQty: 'Minimum order: 100 ',
  },
    {
    name: 'Set package',
    image: '/services/set.jpg',
    minQty: 'Minimum order: 50',
  },
    {
    name: 'Self Ink Stamp',
    image: '/services/SELF INK STAMP.jpg',
    minQty: 'Minimum order: 10',
  },
    {
    name: 'Roll up Banner',
    image: '/services/Roll-upbanner stand.jpg',
    minQty: 'Minimum order: 100 ',
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
          <h2 className="text-4xl font-bold">Top Print Solutions We Offer</h2>
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

      </div>
       <Footer/>
    </div>
  );
}