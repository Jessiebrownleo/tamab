'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { toast } from 'react-toastify';
import { sampleUsers } from '../../data/Users';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();

  // Simple authentication function
  const authenticateUser = (email: string, password: string) => {
    return sampleUsers.find(user => 
      user.email === email && user.password === password
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate inputs
      if (!email || !password) {
        toast.error('Please enter both email and password');
        return;
      }
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Authenticate user
      const user = authenticateUser(email, password);
      
      if (user) {
        // Store user session
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          role: user.role || 'user'
        }));
        
        // Redirect to account page
        router.push('/account');
        toast.success(`Welcome back, ${user.name}!`);
      } else {
        toast.error('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-600">
              Sign in to your account to continue
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-amber-600 hover:text-amber-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button 
              type="submit" 
              variant="primary" 
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Not a member?{' '}
            <Link href="/register" className="font-medium text-amber-600 hover:text-amber-500">
              Register now
            </Link>
          </p>
        </Card>
      </div>
    </div>;
};
export default Login;