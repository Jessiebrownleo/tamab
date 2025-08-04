import React from 'react';
import { Check } from 'lucide-react';
import Card from '@/components/ui/Card';

const ReturnPolicy = () => {
  const returnSteps = [
    {
      title: 'Request Return',
      description: 'Contact our customer service team within 30 days of receiving your order to initiate a return.'
    },
    {
      title: 'Receive Return Label',
      description: 'Once your return is approved, we\'ll email you a return shipping label.'
    },
    {
      title: 'Pack Items',
      description: 'Pack the items securely in their original packaging if possible.'
    },
    {
      title: 'Ship Items Back',
      description: 'Drop off the package at any authorized shipping location using our provided label.'
    },
    {
      title: 'Receive Refund',
      description: 'Once we receive and inspect the items, we\'ll process your refund within 5-7 business days.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Return Policy</h1>
          <p className="text-xl text-gray-300">
            Easy returns within 30 days of purchase
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Overview */}
          <Card className="mb-8">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 mb-6">
              We want you to be completely satisfied with your purchase. If
              you're not happy with your order, we accept returns within 30 days
              of delivery for a full refund or exchange.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                <p className="text-gray-600">
                  30-day return window for most items
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                <p className="text-gray-600">
                  Free returns for defective items
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                <p className="text-gray-600">
                  Easy return process with prepaid shipping labels
                </p>
              </div>
            </div>
          </Card>

          {/* Return Process */}
          <Card className="mb-8">
            <h2 className="text-xl font-bold mb-6">Return Process</h2>
            <div className="space-y-6">
              {returnSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Return Conditions */}
          <Card className="mb-8">
            <h2 className="text-xl font-bold mb-4">Return Conditions</h2>
            <p className="text-gray-600 mb-4">
              To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Unused and in the same condition that you received it</li>
              <li>In the original packaging</li>
              <li>Accompanied by the receipt or proof of purchase</li>
              <li>Returned within 30 days of delivery</li>
            </ul>
          </Card>

          {/* Non-Returnable Items */}
          <Card className="mb-8">
            <h2 className="text-xl font-bold mb-4">Non-Returnable Items</h2>
            <p className="text-gray-600 mb-4">
              Several types of goods are exempt from being returned:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Custom or personalized orders</li>
              <li>Bulk materials that have been opened</li>
              <li>Perishable goods</li>
              <li>
                Products with safety or sanitary seals that have been broken
              </li>
              <li>Items marked as final sale or clearance</li>
            </ul>
          </Card>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our return policy, please contact
              us:
            </p>
            <div className="space-x-4">
              <a href="tel:+855123456789" className="text-amber-600 hover:text-amber-700 font-medium">
                (855) 123-4567
              </a>
              <span className="text-gray-300">|</span>
              <a href="mailto:returns@tamab.com" className="text-amber-600 hover:text-amber-700 font-medium">
                returns@tamab.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;