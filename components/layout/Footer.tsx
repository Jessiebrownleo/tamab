import React from 'react';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-stone-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-bold text-2xl mb-4">
              <span className="text-amber-500">T</span>amab
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in construction materials. Quality products
              for homeowners, contractors, and DIY enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-500">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-amber-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product-listing" className="text-gray-300 hover:text-amber-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-amber-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-amber-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-amber-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-gray-300 hover:text-amber-500">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product-listing?category=cement" className="text-gray-300 hover:text-amber-500">
                  Cement
                </Link>
              </li>
              <li>
                <Link href="/product-listing?category=bricks" className="text-gray-300 hover:text-amber-500">
                  Bricks & Blocks
                </Link>
              </li>
              <li>
                <Link href="/product-listing?category=tiles" className="text-gray-300 hover:text-amber-500">
                  Tiles
                </Link>
              </li>
              <li>
                <Link href="/product-listing?category=steel" className="text-gray-300 hover:text-amber-500">
                  Steel
                </Link>
              </li>
              <li>
                <Link href="/product-listing?category=plumbing" className="text-gray-300 hover:text-amber-500">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/product-listing?category=paint" className="text-gray-300 hover:text-amber-500">
                  Paint
                </Link>
              </li>
              <li>
                <Link href="/product-listing?category=tools" className="text-gray-300 hover:text-amber-500">
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  #123, Street 271, Sangkat Tumnup Teuk, Khan Chamkarmon, Phnom
                  Penh, Cambodia
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-amber-500" />
                <span className="text-gray-300">+855 23 123 456</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-amber-500" />
                <span className="text-gray-300">info@tamab.com.kh</span>
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-3">Newsletter</h3>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-stone-700 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500 w-full" />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Bottom footer */}
        <div className="border-t border-stone-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Tamab. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;