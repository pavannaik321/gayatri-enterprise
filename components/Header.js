import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; 
import Image from "next/image";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Function to determine active link styles
  const linkStyle = (path) =>
    router.pathname === path
      ? "bg-[#E1E0F9] text-black font-semibold px-3 h-14 w-32 py-3 text-center rounded-t-3xl"
      : "text-gray-700 px-3 py-3";

  return (
    <header className="flex justify-between items-center px-8 pt-6 bg-[#f9f9f9] shadow-sm">
      <div className="w-32 h-14">
        <Image
          src="/logo.png"
          alt="ARCHAI Logo"
          width={128}
          height={40}
          priority
        />
      </div>

      <nav className="hidden md:flex space-x-6 text-sm">
        
        <Link href="/" className={linkStyle("/")}>
          Home
        </Link>
        <Link href="/about" className={linkStyle("/about")}>
          About Us
        </Link>
        <Link href="/services" className={linkStyle("/services")}>
          Services
        </Link>
        <Link href="/contact" className={linkStyle("/contact")}>
          Connect Us
        </Link>
      </nav>

      <div className="flex space-x-4 mb-4">
        <a
          href="/brochure.pdf"
          download
          className="bg-black text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2"
        >
          <ArrowDownTrayIcon className="h-4 w-4" />
          <span>Download Brochure</span>
        </a>
      </div>
    </header>
  );
}
