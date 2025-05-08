import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
<footer className="text-black pt-12 pb-8 px-4 mt-20 rounded-t-[48px]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* Brand */}
    <div>
      <h3 className="text-2xl font-extrabold text-red-500 mb-3">Gayatary Enterprise</h3>
      <p className="text-sm text-black">
        Delivering premium print solutions for businesses, events, and creatives.
        Delivering premium print solutions for businesses, events, and creatives.
      </p>
    </div>

    {/* Services */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-red-500">Services</h4>
      <ul className="space-y-2 text-sm text-black">
        <li><a href="#" className="hover:text-white transition">Business Cards</a></li>
        <li><a href="#" className="hover:text-white transition">Flyers & Brochures</a></li>
        <li><a href="#" className="hover:text-white transition">Wedding Invites</a></li>
        <li><a href="#" className="hover:text-white transition">T-Shirt Printing</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-red-500">Company</h4>
      <ul className="space-y-2 text-sm text-black">
        <li><a href="#" className="hover:text-white transition">About Us</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
        <li><a href="#" className="hover:text-white transition">Careers</a></li>
        <li><a href="#" className="hover:text-white transition">Terms & Privacy</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-red-500">Get in Touch</h4>
      <p className="text-sm text-black mb-2">123 Banglore, Karnataka</p>
      <p className="text-sm text-black mb-2">Email: gayataryenterprise@gmail.com</p>
      <p className="text-sm text-black">Phone: +91 9113909285</p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        <a href="#" className="hover:text-red-500 transition"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-red-500 transition"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-red-500 transition"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-red-500 transition"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} Developed By Techbite
  </div>
</footer>

  )
}
