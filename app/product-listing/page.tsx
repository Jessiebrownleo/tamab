import React, { Suspense } from 'react';
import Link from 'next/link';
import { Filter, X, Grid, List, ShoppingCart } from 'lucide-react';
import categories from '@/data/Categories';
import products from '@/data/Products';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ProductCard from '@/components/products/ProductCard';
import ProductListingClient from './ProductListingClient';

interface PageProps {
  searchParams: Promise<{ search?: string }>
}

export default async function ProductListing({ searchParams }: PageProps) {
  const { search } = await searchParams;
  const searchQuery = search || '';

  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <div className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Construction Materials</h1>
          <div className="flex items-center text-sm text-gray-300 mt-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Products</span>
          </div>
        </div>
      </div>

      <ProductListingClient 
        categories={categories}
        products={products}
        initialSearchQuery={searchQuery}
      />
    </div>
  );
}