import React from 'react'

export default function OurTeam() {
  return (
    <div className="px-8 pt-16 bg-white text-[#1F3A34]">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">Meet our team!</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* Member 1 */}
    <div className="rounded-[32px] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] text-center p-6">
      <img src="/test.jpeg" alt="Ben Ashley" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h4 className="text-lg font-semibold">Ben Ashley</h4>
      <p className="text-sm text-gray-600">Digital Strategist</p>
    </div>
    {/* Member 2 */}
    <div className="rounded-[32px] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] text-center p-6">
      <img src="/test.jpeg" alt="Amanda Nguyen" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h4 className="text-lg font-semibold">Amanda Nguyen</h4>
      <p className="text-sm text-gray-600">Managing Director</p>
    </div>
    {/* Member 3 */}
    <div className="rounded-[32px] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] text-center p-6">
      <img src="/test.jpeg" alt="Amy Deschamps" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h4 className="text-lg font-semibold">Amy Deschamps</h4>
      <p className="text-sm text-gray-600">Director of Operations + Analytics</p>
    </div>
    {/* Member 4 */}
    <div className="rounded-[32px] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] text-center p-6">
      <img src="/test.jpeg" alt="Luther Makina" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h4 className="text-lg font-semibold">Luther Makina</h4>
      <p className="text-sm text-gray-600">Digital Strategist</p>
    </div>
  </div>
</div>

  )
}
