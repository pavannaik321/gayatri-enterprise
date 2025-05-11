import Image from "next/image";
export default function HighlightsSection() {
  return (
    <div className="flex flex-col md:flex-row bg-red-100">
      {/* Left Side - Stats */}
<div className="bg-red-500 text-white w-full md:w-1/3 px-8 py-12 text-left grid grid-cols-2 gap-8">
  <div className="space-y-2">
    <div className="text-yellow-400 text-3xl">🖨️</div>
    <h3 className="text-4xl font-semibold">5000+</h3>
    <p className="text-lg text-gray-300">
      High-quality prints<br />delivered daily.
    </p>
  </div>
  <div className="space-y-2">
    <div className="text-yellow-400 text-3xl">📦</div>
    <h3 className="text-4xl font-semibold">120+</h3>
    <p className="text-lg text-gray-300">
      Trusted clients<br />across industries.
    </p>
  </div>
  <div className="space-y-2">
    <div className="text-yellow-400 text-3xl">🖌️</div>
    <h3 className="text-4xl font-semibold">50+</h3>
    <p className="text-lg text-gray-300">
      Custom design<br />templates offered.
    </p>
  </div>
  <div className="space-y-2">
    <div className="text-yellow-400 text-3xl">🚚</div>
    <h3 className="text-4xl font-semibold">24hr</h3>
    <p className="text-lg text-gray-300">
      Express delivery<br />turnaround time.
    </p>
  </div>
</div>

      {/* Right Side - Features */}
<div className="w-full md:w-2/3 px-8 py-12 text-[#1F3A34]">
  <h2 className="text-4xl md:text-4xl font-extrabold mb-20">
    Finally, a place for<br />
    <span className="text-red-500">all your printing needs.</span>
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="text-center">
      <Image width={200} height={100} src="/services/wedding2.avif" alt="Branches" className="rounded-lg mb-2 border-2 border-red-500 p-1" />
      <h4 className="text-lg font-semibold">JP Nagar</h4>
      <p className="text-sm text-gray-600">near bus stand.</p>
    </div>
    {/* Card 2 */}
    <div className="text-center">
      <Image width={200} height={100} src="/services/wedding2.avif" alt="Offset Printing" className="rounded-lg mb-2 border-2 border-red-500 p-1" />
      <h4 className="text-lg font-semibold">JP Nagar</h4>
      <p className="text-sm text-gray-600">near bus stand.</p>
    </div>
    {/* Card 3 */}
    <div className="text-center">
      <Image width={200} height={100} src="/services/wedding2.avif" alt="Delivery" className="rounded-lg mb-2 border-2 border-red-500 p-1" />
      <h4 className="text-lg font-semibold">JP Nagar</h4>
      <p className="text-sm text-gray-600">near bus stand.</p>
    </div>
    {/* Card 4 */}
    <div className="text-center">
      <Image width={200} height={100} src="/services/wedding2.avif" alt="Tech" className="rounded-lg mb-2 border-2 border-red-500 p-1" />
       <h4 className="text-lg font-semibold">JP Nagar</h4>
      <p className="text-sm text-gray-600">near bus stand.</p>
    </div>
  </div>
</div>

    </div>
  );
}
