'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  ShoppingCartIcon,
  HeartIcon,
  ShareIcon,
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  RefreshCwIcon,
  CheckIcon,
  MinusIcon,
  PlusIcon,
  ChevronRightIcon,
} from 'lucide-react';

import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';
import { useCart } from '@/contexts/CartContext';
import products from '@/data/Products';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  brand?: string;
  sku?: string;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
  images?: string[];
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  stock?: number;
}

const defaultProduct: Product = {
  id: '',
  name: 'Product Not Found',
  price: 0,
  image: 'https://via.placeholder.com/800x600?text=Product+Not+Found',
  rating: 0,
  reviewCount: 0,
  category: '',
  description:
    'The requested product could not be found. It may have been removed or is temporarily unavailable.',
  features: [
    'Please check the product ID in the URL',
    'Try browsing our catalog for similar products',
    'Contact support if you need assistance',
  ],
  specifications: {
    Status: 'Not Available',
    'Last Checked': new Date().toLocaleDateString(),
  },
  images: ['https://via.placeholder.com/800x600?text=Product+Not+Found'],
};

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState<Product>({ ...defaultProduct });
  const [loading, setLoading] = useState(true);
  const params = useParams(); // From next/navigation
  const router = useRouter(); // For navigation

  const { id } = params;

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      if (id && typeof id === 'string') {
        const foundProduct = products.find((p) => p.id === id);

        if (foundProduct) {
          const enhancedProduct: Product = {
            ...foundProduct,
            images: (foundProduct as any).images || [foundProduct.image],
            description:
              (foundProduct as any).description ||
              `High-quality ${foundProduct.category.toLowerCase()} for your construction needs.`,
            features: (foundProduct as any).features || [
              `Premium ${foundProduct.category.toLowerCase()} quality`,
              'Durable and long-lasting',
              'Suitable for various applications',
              'Meets industry standards',
            ],
            specifications: (foundProduct as any).specifications || {
              Material: foundProduct.category,
              Brand: (foundProduct as any).brand || 'BuildWell',
              Weight: 'Varies by product',
              Application: 'General Construction',
              Warranty: 'Manufacturer warranty included',
            },
          };
          setProduct(enhancedProduct);
        } else {
          setProduct({
            ...defaultProduct,
            id: id,
            name: `Product #${id} Not Found`,
          });
        }
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const reviews = [
    {
      id: 1,
      user: 'John D.',
      rating: 5,
      comment: 'Excellent quality product. Highly recommended!',
      date: '2024-12-15',
    },
    {
      id: 2,
      user: 'Sarah M.',
      rating: 4,
      comment: 'Good value for money. Fast delivery.',
      date: '2024-12-10',
    },
    {
      id: 3,
      user: 'Mike R.',
      rating: 5,
      comment: 'Perfect for my construction project.',
      date: '2024-12-08',
    },
  ];

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || product.image,
        discount: product.discount,
      },
      quantity
    );

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || product.image,
        discount: product.discount,
      },
      quantity
    );
    router.push('/cart');
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRightIcon className="h-4 w-4" />
          <Link href="/product-listing" className="hover:text-blue-600">
            Products
          </Link>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={product.images?.[mainImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      mainImage === index
                        ? 'border-blue-500'
                        : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.isNew && (
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                  New
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline space-x-4">
                {product.discount ? (
                  <>
                    <span className="text-3xl font-bold text-blue-600">
                      ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                      {product.discount}% OFF
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              {product.sku && (
                <p className="text-sm text-gray-600">SKU: {product.sku}</p>
              )}

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <TruckIcon className="h-4 w-4 mr-1" />
                  Free delivery
                </div>
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-4 w-4 mr-1" />
                  2 year warranty
                </div>
                <div className="flex items-center">
                  <RefreshCwIcon className="h-4 w-4 mr-1" />
                  30-day returns
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 hover:bg-gray-50"
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="p-2 hover:bg-gray-50"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center space-x-2 ${
                    isAdded ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}
                >
                  {isAdded ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    <ShoppingCartIcon className="h-5 w-5" />
                  )}
                  <span>{isAdded ? 'Added to Cart' : 'Add to Cart'}</span>
                </Button>
                <Button
                  onClick={handleBuyNow}
                  variant="secondary"
                  className="flex-1"
                >
                  Buy Now
                </Button>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <HeartIcon className="h-5 w-5" />
                  <span>Add to Wishlist</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <ShareIcon className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {['description', 'features', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="px-6 py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications &&
                    Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-600">{key}:</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{review.user}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard 
                  key={relatedProduct.id} 
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  image={relatedProduct.image}
                  rating={relatedProduct.rating}
                  reviewCount={relatedProduct.reviewCount}
                  category={relatedProduct.category}
                  isNew={relatedProduct.isNew || false}
                  isFeatured={(relatedProduct as any).isFeatured || false}
                  discount={relatedProduct.discount}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
