'use client';

import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            We're here to help with any questions you may have
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-gray-900">
                      Visit Us
                    </h3>
                    <p className="mt-1 text-gray-600">
                      #123, Street 271
                      <br />
                      Sangkat Tumnup Teuk, Khan Chamkarmon
                      <br />
                      Phnom Penh, Cambodia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-gray-900">
                      Call Us
                    </h3>
                    <p className="mt-1 text-gray-600">+855 23 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MailIcon className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-gray-900">
                      Email Us
                    </h3>
                    <p className="mt-1 text-gray-600">info@tamab.com.kh</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
