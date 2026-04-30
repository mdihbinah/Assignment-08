'use client'
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="container mx-auto px-6 py-5 grid gap-8 md:grid-cols-3">
        
        <div>
          <Link href={'/'} className="text-2xl btn font-bold"><span className="font-extrabold text-success">Tiles</span> Gallery</Link>
          
          <p className="mt-2 text-sm opacity-80">
            Discover and explore beautiful tiles for your perfect aesthetic.
          </p>
        </div>


        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/all-tiles" className="hover:underline">All Tiles</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@tilesgallery.com</p>
          <p className="text-sm mb-3">Phone: +8801402245543</p>

          <div className="flex gap-4 mt-2 text-xl">
            <a href="https://x.com" target="_blank">
              <FaX className="hover:text-success " />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="hover:text-success" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook className="hover:text-success" />
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-base-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;