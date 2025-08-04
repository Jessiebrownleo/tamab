'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
const Register = () => {
  return <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-gray-600">
              Join Tamab to start shopping for construction materials
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input id="firstName" name="firstName" type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input id="lastName" name="lastName" type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input id="password" name="password" type="password" autoComplete="new-password" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div className="flex items-center">
              <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <Link href="/terms" className="font-medium text-amber-600 hover:text-amber-500">
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="font-medium text-amber-600 hover:text-amber-500">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <Button type="submit" variant="primary" fullWidth>
              Create account
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-amber-600 hover:text-amber-500">
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </div>;
};
export default Register;