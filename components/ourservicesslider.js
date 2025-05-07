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
    text: `I appreciate your hospital really good environment and excellent patient care.
You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.`,
    name: 'Amanda Kinedy',
    role: 'Hematology',
    image: '/aboutus/chairman.jpg',
  },
  {
    stars: 4,
    text: `I appreciate your hospital really good environment and excellent patient care.
You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.`,
    name: 'Richard Powers',
    role: 'Orthopedic',
    image: '/aboutus/chairman.jpg',
  },
  {
    stars: 5,
    text: `I appreciate your hospital really good environment and excellent patient care.
You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.`,
    name: 'Maria Rusconi',
    role: 'Cardiology',
    image: '/aboutus/chairman.jpg',
  },
  {
    stars: 5,
    text: `I appreciate your hospital really good environment and excellent patient care.
You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.`,
    name: 'Amanda Kinedy',
    role: 'Hematology',
    image: '/aboutus/chairman.jpg',
  },
  {
    stars: 4,
    text: `I appreciate your hospital really good environment and excellent patient care.
You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.`,
    name: 'Richard Powers',
    role: 'Orthopedic',
    image: '/aboutus/chairman.jpg',
  },
  {
    stars: 5,
    text: `I appreciate your hospital really good environment and excellent patient care.
You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.`,
    name: 'Maria Rusconi',
    role: 'Cardiology',
    image: '/aboutus/chairman.jpg',
  },
];

export default function OurServiceSlider() {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <p className="text-cyan-400 font-semibold mb-2">Testimonials</p>
            <h2 className="text-4xl font-extrabold leading-snug">
              What people say about <br /> medical health care
            </h2>
          </div>

          {/* Circle Stat */}
          <div className="flex flex-col items-center">
  <svg width="100" height="50" viewBox="0 0 100 50">
    <path
      d="M 10 50 A 40 40 0 0 1 90 50"
      fill="none"
      stroke="#0ea5e9"  // cyan-400
      strokeWidth="10"
    />
    <path
      d="M 10 50 A 40 40 0 0 1 90 50"
      fill="none"
      stroke="#1e293b"  // bg-gray-800 (tailwind's gray-800)
      strokeWidth="10"
      strokeDasharray="100"
      strokeDashoffset="0"  // controls how much is filled (100 - 84 = 16)
    />
  </svg>
  <div className="-mt-4 text-cyan-400 text-xl font-bold">92%</div>
  
  <p className="text-lg font-semibold text-cyan-400">Happy Patients</p>
  <p className="text-sm text-gray-300 text-center">Best medical facilities and loving staff.</p>
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
            <div key={idx} className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  {Array.from({ length: t.stars }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
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
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
                />
                <div>
                  <p className="text-cyan-600 font-semibold">{t.name}</p>
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
