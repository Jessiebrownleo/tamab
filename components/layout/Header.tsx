'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon, XIcon, PhoneIcon, TruckIcon } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  const cartItemCount = getCartCount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product-listing?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return <header className="w-full sticky top-0 bg-white shadow-sm z-50">
      {/* Top bar */}
      <div className="bg-stone-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>Call us: (855) 123-4567</span>
          </div>
          <div className="flex items-center">
            <TruckIcon className="h-4 w-4 mr-2" />
            <span>Free delivery on orders over $500</span>
          </div>
        </div>
      </div>
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="font-bold text-2xl text-stone-800">
                <span className="text-amber-600">T</span>amab
              </div>
            </div>
          </Link>
          {/* Search bar - hidden on mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-grow mx-8 relative">
            <input 
              type="text" 
              placeholder="Search for materials, tools..." 
              className="w-full py-2 px-4 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cart" className="flex items-center text-gray-700 hover:text-amber-600">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="ml-1 bg-amber-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link href="/login" className="flex items-center text-gray-700 hover:text-amber-600">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link href="/cart" className="mr-4 text-gray-700">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-8 right-16 bg-amber-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile search - visible only on mobile */}
        <form onSubmit={handleSearch} className="mt-4 md:hidden relative">
          <input 
            type="text" 
            placeholder="Search for materials, tools..." 
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
      {/* Navigation bar */}
      <nav className="bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between">
            <ul className="flex space-x-8 py-3">
              <li>
                <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product-listing" className="text-gray-700 hover:text-amber-600 font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-700 hover:text-amber-600 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-700 hover:text-amber-600 font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-3 py-3">
              <li>
                <Link href="/" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product-listing" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  FAQ
                </Link>
              </li>
              <li className="border-t border-gray-200 pt-2">
                <Link href="/login" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="/account" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>}
    </header>;
};
export default Header;
