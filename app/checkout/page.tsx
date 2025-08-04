'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CreditCardIcon, ShieldCheckIcon, ChevronDownIcon, CheckIcon, TruckIcon, InfoIcon } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useCart } from '../../contexts/CartContext';
import { generateInvoice, handleInvoiceAfterCheckout } from '../../utils/generateInvoice';
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('aba');
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [invoiceHtml, setInvoiceHtml] = useState<string | null>(null);

  // Use cart context and navigation
  const { cartItems, getCartTotal, clearCart } = useCart();
  const router = useRouter();

  // Calculate item totals
  const calculateItemTotal = (item: any) => {
    const itemPrice = item.discount 
      ? item.price * (1 - item.discount / 100) 
      : item.price;
    return itemPrice * item.quantity;
  };

  // Calculate totals
  const subtotal = getCartTotal();
  const shippingCost = deliveryMethod === 'express' ? 35 : subtotal >= 500 ? 0 : 25;
  const total = subtotal + shippingCost;

  // Generate a random order ID
  const generateOrderId = () => {
    return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  // Handle place order
  const handlePlaceOrder = () => {
    // Basic form validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'country', 'postalCode'];
    const errors: { [key: string]: string } = {};
    
    requiredFields.forEach(field => {
      const input = document.getElementById(field) as HTMLInputElement;
      if (input && !input.value.trim()) {
        errors[field] = 'This field is required';
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setIsSubmitting(true);

    // Get form values
    const formData = {
      firstName: (document.getElementById('firstName') as HTMLInputElement)?.value || '',
      lastName: (document.getElementById('lastName') as HTMLInputElement)?.value || '',
      email: (document.getElementById('email') as HTMLInputElement)?.value || '',
      phone: (document.getElementById('phone') as HTMLInputElement)?.value || '',
      address: (document.getElementById('address') as HTMLInputElement)?.value || '',
      city: (document.getElementById('city') as HTMLInputElement)?.value || '',
      country: (document.getElementById('country') as HTMLInputElement)?.value || '',
      postalCode: (document.getElementById('postalCode') as HTMLInputElement)?.value || '',
      orderNotes: (document.getElementById('orderNotes') as HTMLTextAreaElement)?.value || ''
    };

    // Generate invoice HTML
    const orderId = generateOrderId();
    const generatedInvoiceHtml = generateInvoice({
      orderId,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      items: cartItems,
      subtotal,
      shipping: shippingCost,
      total,
      customerName: `${formData.firstName} ${formData.lastName}`,
      customerEmail: formData.email,
      shippingAddress: `${formData.address}, ${formData.city}, ${formData.country} ${formData.postalCode}`
    });

    // Store the invoice HTML in state for email purposes
    setInvoiceHtml(generatedInvoiceHtml);
    
    // In a real application, you would submit the order to a backend here
    // and send the invoice via email
    console.log('Invoice HTML for email:', generatedInvoiceHtml);
    
    // For demo purposes, we'll show the invoice in a new tab
    setTimeout(() => {
      // Clear the cart
      clearCart();
      
      // Show success message
      setOrderPlaced(true);
      setIsSubmitting(false);
      
      // Handle invoice - open in new tab AND download as HTML file
      handleInvoiceAfterCheckout(generatedInvoiceHtml, orderId);
      
      // In a real implementation, you would send the email here
      // Example: sendEmail(customerEmail, 'Your Order Invoice', generatedInvoiceHtml);
      
      // Redirect to home after a delay
      setTimeout(() => {
        router.push('/');
      }, 5000);
    }, 2000);
  };
  return <div className="bg-gray-50 w-full min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-600">Checkout</h1>
          <div className="flex items-center text-sm text-gray-300 mt-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/cart" className="hover:text-white">
              Cart
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">Checkout</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-600">Shipping Address</h2>
                <Link href="/account/addresses" className="text-sm text-amber-600 hover:text-amber-700">
                  Saved Addresses
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input type="text" id="firstName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input type="text" id="lastName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input type="tel" id="phone" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input type="text" id="address" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input type="text" id="city" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code *
                  </label>
                  <input type="text" id="postalCode" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province *
                  </label>
                  <div className="relative">
                    <select
                        id="state"
                        className="appearance-none w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Select Province/City</option>
                      <option value="PNH">Phnom Penh</option>
                      <option value="BTB">Battambang</option>
                      <option value="KCM">Kampong Cham</option>
                      <option value="KCH">Kampong Chhnang</option>
                      <option value="KSP">Kampong Speu</option>
                      <option value="KTS">Kampong Thom</option>
                      <option value="KZG">Kampot</option>
                      <option value="KDL">Kandal</option>
                      <option value="KRA">Kratie</option>
                      <option value="MON">Mondulkiri</option>
                      <option value="PVH">Preah Vihear</option>
                      <option value="PSV">Prey Veng</option>
                      <option value="PPA">Pursat</option>
                      <option value="RAT">Ratanakiri</option>
                      <option value="SRP">Siem Reap</option>
                      <option value="SHV">Preah Sihanouk</option>
                      <option value="STG">Stung Treng</option>
                      <option value="SVR">Svay Rieng</option>
                      <option value="TKA">Takeo</option>
                      <option value="ODM">Oddar Meanchey</option>
                      <option value="KPT">Kep</option>
                      <option value="PBL">Pailin</option>
                      <option value="TBN">Tboung Khmum</option>
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea id="notes" rows={3} placeholder="Notes about your order, e.g. special delivery instructions" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                </div>
              </div>
            </Card>
            {/* Delivery Options */}
            <Card>
              <h2 className="text-xl font-bold text-gray-600 mb-6">Delivery Options</h2>
              <div className="space-y-4">
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${deliveryMethod === 'standard' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setDeliveryMethod('standard')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${deliveryMethod === 'standard' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {deliveryMethod === 'standard' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-600">Standard Delivery</h3>
                        <span className="font-medium text-gray-600">
                          {subtotal >= 500 ? 'Free' : '$25.00'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Delivery within 3-5 business days
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${deliveryMethod === 'express' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setDeliveryMethod('express')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${deliveryMethod === 'express' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {deliveryMethod === 'express' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-600">Express Delivery</h3>
                        <span className="font-medium text-gray-600">$35.00</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Delivery within 1-2 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            {/* Payment Methods */}
            <Card>
              <h2 className="text-xl font-bold text-gray-600 mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'aba' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('aba')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'aba' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'aba' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-600">ABA Pay</h3>
                        <img src="https://play-lh.googleusercontent.com/WU6sZMD1UspzwqYnlACtmN60rckp8hoINSgsR21mKLJBbsHPwXtzwvOocpjC7FcO1g" alt="ABA Pay" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using ABA Mobile app
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'acleda' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('acleda')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'acleda' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'acleda' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-600">ACLEDA ToanChet</h3>
                        <img src="https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg" alt="ACLEDA" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using ACLEDA ToanChet app
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'bakong' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('bakong')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'bakong' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'bakong' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-600">Bakong</h3>
                        <img src="https://play-lh.googleusercontent.com/ABNDYwddbqTFpqp809iNq3r9LjrE2qTZ8xFqWmc-iLfHe2vyPAPwZrN_4S1QCFaLDYE" alt="Bakong" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using Bakong mobile app
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'cod' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('cod')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'cod' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'cod' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-600">Cash on Delivery</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay with cash upon delivery (Phnom Penh only)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* Order Summary */}
          <div>
            <Card>
              <h2 className="text-xl font-bold text-gray-600 mb-6">Order Summary</h2>
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map(item => {
                  const itemPrice = item.discount 
                    ? item.price * (1 - item.discount / 100) 
                    : item.price;
                  const itemTotal = itemPrice * item.quantity;

                  return (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-600">{item.name}</h3>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity} x ${itemPrice.toFixed(2)}
                        </p>
                      </div>
                      <span className="font-medium text-gray-600">
                        ${itemTotal.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Order Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-600">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  {shippingCost > 0 ? <span className="font-medium text-gray-600">
                      ${shippingCost.toFixed(2)}
                    </span> : <span className="text-green-600 font-medium">Free</span>}
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold">
                  <span className="text-gray-600">Total</span>
                  <span className="text-gray-600">${total.toFixed(2)}</span>
                </div>
              </div>
              {/* Terms and Conditions */}
              <div className="mt-6 mb-6">
                <div className="flex items-start">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 mt-1"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I have read and agree to the website's{' '}
                    <Link href="/terms" className="text-amber-600 hover:text-amber-700">
                      terms and conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-amber-600 hover:text-amber-700">
                      privacy policy
                    </Link>
                  </label>
                </div>
              </div>
              {/* Place Order Button */}
              {orderPlaced ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p className="font-bold text-gray-600">Order Placed Successfully!</p>
                  <p className="text-gray-600">Thank you for your order. Your invoice has been opened in a new tab and downloaded as an HTML file.</p>
                  <p className="text-gray-600">You will be redirected to the home page shortly.</p>
                </div>
              ) : (
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={handlePlaceOrder}
                  disabled={!termsAccepted || isSubmitting || cartItems.length === 0}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </Button>
              )}
              {/* Secure Checkout */}
              <div className="mt-6 flex justify-center items-center text-sm text-gray-600">
                <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-600">Secure Checkout</span>
              </div>
              {/* Need Help */}
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-start">
                  <InfoIcon className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-600">Need Help?</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Call us at +855 23 123 456 or email at{' '}
                      <a href="mailto:support@tamab.com.kh" className="text-amber-600 hover:text-amber-700">
                        support@tamab.com.kh
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Checkout;
