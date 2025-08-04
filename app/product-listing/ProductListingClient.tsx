'use client';

import React, { useState, useEffect } from 'react';
import { Filter, X, Grid, List, ShoppingCart } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ProductCard from '@/components/products/ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isNew?: boolean;
  discount?: number;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

interface ProductListingClientProps {
  categories: Category[];
  products: Product[];
  initialSearchQuery?: string;
}

export default function ProductListingClient({ 
  categories, 
  products, 
  initialSearchQuery = '' 
}: ProductListingClientProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let filtered = products;

    if (!selectedCategories.includes('all')) {
      filtered = filtered.filter(product => {
        const normalizedCategory = product.category.toLowerCase().replace(/\s+/g, '');
        return selectedCategories.some(cat => {
          if (cat === 'bricks' && normalizedCategory.includes('brick')) return true;
          return normalizedCategory.includes(cat);
        });
      });
    }

    if (initialSearchQuery) {
      const query = initialSearchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Popular - keep original order
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategories, initialSearchQuery, sortOption, products]);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
    if (categoryId === 'all' && isChecked) {
      setSelectedCategories(['all']);
    } else if (isChecked) {
      setSelectedCategories(prev => {
        const updated = prev.filter(cat => cat !== 'all').concat(categoryId);
        return updated.length > 0 ? updated : ['all'];
      });
    } else {
      setSelectedCategories(prev => {
        const updated = prev.filter(cat => cat !== categoryId);
        return updated.length > 0 ? updated : ['all'];
      });
    }
  };

  const resetFilters = () => setSelectedCategories(['all']);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button onClick={toggleFilter} variant="outline" className="flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className={`w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
          <Card className="sticky top-4">
            <div className="flex items-center justify-between mb-6 text-gray-600">
              <h2 className="text-lg font-medium">Filters</h2>
              <div className="flex items-center gap-2">
                <button className="text-sm text-amber-600 hover:text-amber-700" onClick={resetFilters}>
                  Reset All
                </button>
                <button className="lg:hidden" onClick={toggleFilter}>
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-600">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category.id}`}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded "
                      checked={selectedCategories.includes(category.id)}
                      onChange={e => handleCategoryChange(category.id, e.target.checked)}
                    />
                    <label htmlFor={`category-${category.id}`} className="ml-2 text-sm cursor-pointer text-gray-600">
                      {category.name} {category.count > 0 && `(${category.count})`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-gray-600">
              Showing <span className="font-medium">{currentProducts.length}</span> of{' '}
              <span className="font-medium">{filteredProducts.length}</span> results
              {initialSearchQuery && (
                <span className="ml-2">
                  for "<span className="font-medium">{initialSearchQuery}</span>"
                </span>
              )}
            </p>
            <div className="flex items-center gap-4">
              <select
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
                className="border text-gray-600 border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="popular">Sort by: Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
              <div className="flex items-center gap-1 border border-gray-300 rounded-md">
                <button 
                  onClick={() => setViewMode('grid')} 
                  className={`p-2 rounded-l-md ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')} 
                  className={`p-2 rounded-r-md ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {currentProducts.length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-gray-600  text-lg">No products found matching your criteria.</p>
              <Button onClick={resetFilters} variant="primary" className="mt-4">
                Clear Filters
              </Button>
            </Card>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-6">
              {currentProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {currentProducts.map(product => (
                <Card key={product.id} className="flex flex-col sm:flex-row overflow-hidden">
                  <div className="sm:w-48 h-48 flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg text-gray-600 font-medium mb-2">{product.name}</h2>
                      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                      <p className="text-xl  font-bold text-amber-600">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="mt-4">
                      <Button variant="primary" icon={<ShoppingCart className="h-4 w-4" />}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} 
                  disabled={currentPage === 1} 
                  className="px-3 py-2 border text-gray-600 border-gray-300  rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 text-gray-600 py-2 border-t border-b border-r border-gray-300 hover:bg-gray-50 ${
                      currentPage === index + 1 ? 'bg-amber-600 text-white hover:bg-amber-700' : ''
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border text-gray-600 border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
