import Image from 'next/image';

export default function ResortShowcase() {
  return (
    <div className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2E1C] mb-12">
        We Promise Service that Leaves <br /> Nothing to Ask for
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        <div className="w-20 md:w-48 rounded-xl overflow-hidden">
          <Image
            src="/services/wedding2.avif"
            alt="Resort 1"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-36 md:w-64 rounded-xl overflow-hidden">
          <Image
            src="/services/sticker3.jpg"
            alt="Poolside Food"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-60 md:w-80 rounded-xl overflow-hidden">
          <Image
            src="/services/business3.avif"
            alt="Main Deck"
            width={400}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-36 md:w-64 rounded-xl overflow-hidden">
          <Image
            src="/services/sticker3.jpg"
            alt="Sunset Hut"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-20 md:w-48 rounded-xl overflow-hidden">
          <Image
            src="/services/wedding2.avif"
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
