import Image from 'next/image';

export default function ResortShowcase() {
  return (
    <div className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E1C] mb-12">
        We Promise Service that Leaves <br /> Nothing to Ask for
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        <div className="w-20 md:w-48 rounded-xl overflow-hidden">
          <Image
            src="/services/10818.jpg"
            alt="Resort 1"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-36 md:w-64 rounded-xl overflow-hidden">
          <Image
            src="/services/BROCHURES 4 PAGE.jpg"
            alt="Poolside Food"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-60 md:w-80 rounded-xl overflow-hidden">
          <Image
            src="/services/3516712.jpg"
            alt="Main Deck"
            width={400}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-36 md:w-64 rounded-xl overflow-hidden">
          <Image
            src="/services/11414757.jpg"
            alt="Sunset Hut"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-20 md:w-48 rounded-xl overflow-hidden">
          <Image
            src="/services/VISIITNG CARD2.jpg"
            alt="Hotel Grounds"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
