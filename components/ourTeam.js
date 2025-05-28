import React from 'react'

export default function OurTeam() {
  return (
    <div className="px-8 pt-16 bg-white text-[#1F3A34]">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet our team!</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* Member 1 */}
    <div className="rounded-[32px] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] text-center p-6">
      <img src="\services\ALPESH VAVIYA.jpeg" alt="Alpesh Vaviya" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h4 className="text-lg font-semibold">Alpesh Vaviya</h4>

    </div>
    {/* Member 2 */}
    <div className="rounded-[32px] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] text-center p-6">
      <img src="\services\dhruvin vaviya.jpg" alt="Dhruvin Vaviya" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h4 className="text-lg font-semibold">Dhruvin Vaviya</h4>
      </div>
    {/* Member 3 */}
    <div className="rounded-[32px] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] text-center p-6">
      <img src="\services\DIPAK DEVDA.jpeg" alt="Dipak Devda" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h4 className="text-lg font-semibold">Dipak Devda</h4>
      </div>
    {/* Member 4 */}
    <div className="rounded-[32px] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] text-center p-6">
      <img src="\services\kuldeep jadeja.jpg" alt="Kuldeep Jadeja" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h4 className="text-lg font-semibold">Kuldeep Jadeja</h4>
      </div>
  </div>
</div>

  )
}
