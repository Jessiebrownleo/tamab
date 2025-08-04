'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCartIcon, StarIcon, CheckIcon } from 'lucide-react';
import Button from '../ui/Button';
import { useCart } from '../../contexts/CartContext';
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  rating,
  reviewCount,
  category,
  isNew = false,
  isFeatured = false,
  discount
}) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  const formattedDiscountedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(discountedPrice);

  // Use the cart context
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const router = useRouter();

  // Handle add to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking add to cart
    addToCart({
      id,
      name,
      price,
      image,
      discount
    });

    // Show added confirmation
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Navigate to product detail page when card is clicked
  const handleCardClick = () => {
    router.push(`/product-listing/${id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer"
      onClick={handleCardClick}
    >

      {/* Image */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
        <img src={image} alt={name} className="h-48 w-full object-cover object-center group-hover:opacity-90 transition-opacity" />
      </div>
      {/* Content */}
      <div className="p-4 flex-grow">
        <h3 className="text-sm text-gray-500 mb-1">{category}</h3>
        <h2 className="text-base font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h2>
        {/* Price */}
        <div className="mt-2 mb-2">
          {discount ? <div className="flex items-center">
              <span className="text-lg font-medium text-gray-900">
                {formattedDiscountedPrice}
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                {formattedPrice}
              </span>
            </div> : <span className="text-lg font-medium text-gray-900">
              {formattedPrice}
            </span>}
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />)}
          </div>
          <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
        </div>
        {/* Add to cart button */}
        <Button
          variant="primary"
          size="sm"
          className="w-full mt-2"
          onClick={(e) => {
            if (e) {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart(e as React.MouseEvent);
            }
          }}
          disabled={isAdded}
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
