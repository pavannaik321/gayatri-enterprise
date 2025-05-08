'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    stars: 5,
    text: `Outstanding print quality and service. Our wedding invitations were delivered on time and looked absolutely stunning.`,
    name: 'Aarav Mehta',
    role: 'Event Planner, Vivaah Creations',
    image: '/testimonial/men.png',
  },
  {
    stars: 4,
    text: `Got our company brochures printed here. Great support and decent pricing. Could improve delivery tracking.`,
    name: 'Ritika Sharma',
    role: 'Marketing Lead, ThinkSharp Solutions',
    image: '/testimonial/women.png',
  },
  {
    stars: 5,
    text: `They handled a huge banner printing order for our college fest—flawless quality and quick turnaround.`,
    name: 'Rohan Iyer',
    role: 'Student Coordinator, TechVerse IIT',
    image: '/testimonial/men.png',
  },
  {
    stars: 5,
    text: `Very professional team. Our business cards were printed exactly how we wanted. Excellent finish!`,
    name: 'Priya Nair',
    role: 'Founder, DesignMint Studio',
    image: '/testimonial/women.png',
  },
  {
    stars: 4,
    text: `T-shirt prints for our startup launch were vibrant and lasted multiple washes. Highly recommend for custom merchandise.`,
    name: 'Kunal Verma',
    role: 'Co-founder, Byte & Brew',
    image: '/testimonial/men.png',
  },
  {
    stars: 5,
    text: `Used their services for poster printing. Colors were accurate and delivery was faster than expected.`,
    name: 'Sneha Patil',
    role: 'Art Director, Kalakaari Designs',
    image: '/testimonial/women.png',
  },
  {
    stars: 4,
    text: `Very reliable print partner for our retail store needs. Some delay during festive rush, but quality never compromised.`,
    name: 'Ankit Desai',
    role: 'Operations Manager, Urban Threads',
    image: '/testimonial/men.png',
  },
  {
    stars: 5,
    text: `Used their photo album printing service. Excellent paper quality and binding. Memories well preserved!`,
    name: 'Ishita Rao',
    role: 'Photographer, SnapSaga',
    image: '/testimonial/women.png',
  },
  {
    stars: 5,
    text: `The packaging prints for our handmade soaps were sharp, water-resistant, and eco-friendly. Truly satisfied.`,
    name: 'Devansh Kapoor',
    role: 'Founder, Vanya Naturals',
    image: '/testimonial/men.png',
  },
];

export default function OurServiceSlider() {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <p className="text-red-500 font-semibold mb-2">Testimonials</p>
            <h2 className="text-4xl font-extrabold leading-snug">
              What our clients say about <br /> our print solutions
            </h2>
          </div>

          {/* Circle Stat */}
          <div className="flex flex-col items-center">
            <svg width="100" height="50" viewBox="0 0 100 50">
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="#EF4444"
                strokeWidth="10"
              />
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="#1e293b"
                strokeWidth="10"
                strokeDasharray="100"
                strokeDashoffset="0"
              />
            </svg>
            <div className="-mt-4 text-red-400 text-xl font-bold">92%</div>
            <p className="text-lg font-semibold text-red-400">Satisfied Clients</p>
            <p className="text-sm text-gray-400 text-center">Reliable, high-quality printing every time.</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex flex-row z-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md">
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-4 text-red-400">
                      {Array.from({ length: t.stars }, (_, i) => (
                        <Star key={i} className="w-4 h-4 fill-red-400" />
                      ))}
                      {t.stars < 5 &&
                        Array.from({ length: 5 - t.stars }, (_, i) => (
                          <Star key={i} className="w-4 h-4 text-gray-300" />
                        ))}
                    </div>
                    <p className="italic text-sm">{t.text}</p>
                  </div>
                  <div className="bg-gray-100 px-6 py-4 flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-red-400 object-cover"
                    />
                    <div>
                      <p className="text-red-600 font-semibold">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
