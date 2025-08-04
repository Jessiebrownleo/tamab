import React from 'react';
import Link from 'next/link';
import {
  TruckIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  HeadphonesIcon,
  ArrowRightIcon,
  StarIcon,
  ChevronRightIcon
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProductCard from '../components/products/ProductCard';

import products from '../data/Products';

export default function Home() {
  const pageTitle = 'Premium Construction Materials & Building Supplies | TAMAB CONSTRUCTION';
  const pageDescription =
    'Discover high-quality construction materials and building supplies at TAMAB CONSTRUCTION. We offer competitive prices, fast delivery, and expert advice for all your construction needs in Cambodia.';
  const pageKeywords = [
    'construction materials',
    'building supplies',
    'construction Cambodia',
    'building materials Phnom Penh',
    'construction equipment',
    'wholesale construction supplies',
    'cement',
    'bricks',
    'steel',
    'tiles',
    'paint',
    'plumbing',
    'electrical',
    'tamab construction'
  ];

  const pageImage =
    'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/640px-FC_Barcelona_%28crest%29.svg.png'; // Replace with your actual image URL

  const categories = [
    {
      id: 'cement',
      name: 'Cement',
      image:
        'https://singaporesedekah.com/cdn/shop/files/image-removebg-preview_e0b84e50-8dcd-422a-b795-8159500baa0e.png?v=1721300067',
      count: 24
    },
    {
      id: 'bricks',
      name: 'Bricks & Blocks',
      image:
        'https://mobileimages.lowes.com/productimages/4d55aa9a-b645-48ec-9a9e-7e6480283eea/02592174.jpg',
      count: 36
    },
    {
      id: 'tiles',
      name: 'Tiles',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRpicQkiSPeq3C4YfcU_C1oKN26NbgH1gvg&s',
      count: 48
    },
    {
      id: 'steel',
      name: 'Steel',
      image: 'https://www.servicesteel.org/wp-content/uploads/2021/07/shapes.jpg',
      count: 18
    },
    {
      id: 'plumbing',
      name: 'Plumbing',
      image:
        'https://assets-news.housing.com/news/wp-content/uploads/2022/10/14180445/plumbing-materials3.png',
      count: 42
    },
    {
      id: 'tools',
      name: 'Tools',
      image:
        'https://jcblhandtools.com/wp-content/uploads/2024/12/Guide-to-Workshop-Hand-Tools-2.webp',
      count: 64
    }
  ];

  const brands = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/640px-FC_Barcelona_%28crest%29.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsghnii_mjAgHGPCuldAbWgYao-SIf72dXQg&s'
  ];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        image={pageImage}
        type="website"
      />
      <div className="bg-gray-50 w-full">
        {/* Hero Section */}
        <section className="relative bg-stone-800 text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(0,0,0,0.4)'
            }}
          ></div>
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Build Better with Tamab</h1>
              <p className="text-lg md:text-xl mb-8">
                Quality construction materials for homeowners, contractors, and DIY enthusiasts. All in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary">
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-stone-800"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center p-4">
              <TruckIcon className="h-10 w-10 text-amber-600 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Free Delivery</h3>
                <p className="text-black text-sm">On orders over $500</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <ShieldCheckIcon className="h-10 w-10 text-amber-600 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Quality Guarantee</h3>
                <p className="text-black text-sm">100% quality assurance</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <CreditCardIcon className="h-10 w-10 text-amber-600 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Secure Payment</h3>
                <p className="text-black text-sm">Multiple payment methods</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <HeadphonesIcon className="h-10 w-10 text-amber-600 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">24/7 Support</h3>
                <p className="text-black text-sm">Dedicated customer service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Categories</h2>
            <Link href="/product-listing" className="text-amber-600 hover:text-amber-700 flex items-center">
              View All
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Link
                key={category.id}
                href={`/product-listing?category=${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-36 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-black">{category.count} products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="py-12 bg-amber-50">
          <div className="bg-amber-600 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="bg-white text-amber-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4 w-fit">
                  Special Offer
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">20% Off All Power Tools</h2>
                <p className="text-amber-100 mb-6">
                  Limited time offer. Grab your essential tools now at unbeatable prices.
                </p>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600 w-fit">
                  Shop Now
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Power tools on sale"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-black max-w-2xl mx-auto mb-8">
              Don't just take our word for it. See why thousands of contractors, homeowners, and DIY enthusiasts
              choose Tamab for their construction needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <Card className="flex flex-col p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-black mb-6 flex-grow">
                  "Tamab has been my go-to supplier for all construction materials. Their quality is unmatched and delivery is always on time.
                  Highly recommended for any serious contractor."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Robert Johnson"
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Robert Johnson</h4>
                    <p className="text-sm text-black">Professional Contractor</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="flex flex-col p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-black mb-6 flex-grow">
                  "As a DIY enthusiast, I appreciate the wide selection and helpful advice from the Tamab team.
                  They've helped me complete multiple home renovation projects with confidence."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah Miller"
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Sarah Miller</h4>
                    <p className="text-sm text-black">DIY Enthusiast</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="flex flex-col p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-black mb-6 flex-grow">
                  "We've been sourcing our construction materials from Tamab for over 5 years.
                  Their consistent quality and competitive pricing keep us coming back for every project."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/67.jpg"
                    alt="Michael Chen"
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Michael Chen</h4>
                    <p className="text-sm text-black">Construction Manager</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Trusted Brands Section */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Trusted Brands We Carry</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
            {brands.map((brand, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all">
                <img src={brand} alt={`Brand ${index + 1}`} className="h-12 md:h-16 w-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-stone-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
              Whether you're a professional contractor or a DIY enthusiast, Tamab
            has everything you need to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-stone-800"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Construction Tips & Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Blog Post 1 */}
              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                    DIY
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-600">
                    10 Essential Tools Every DIY Enthusiast Should Own
                  </h3>
                  <p className="text-black text-sm mb-4 line-clamp-2">
                    Discover the must-have tools that will make your home improvement projects easier and more professional.
                  </p>
                  <Link
                    href="/blog/essential-tools"
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center"
                  >
                    Read More
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </Card>

              {/* Blog Post 2 */}
              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                    Tips
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-600">
                    How to Choose the Right Paint for Every Room
                  </h3>
                  <p className="text-black text-sm mb-4 line-clamp-2">
                    Learn about different paint types, finishes, and how to select the perfect color for each space in your home.
                  </p>
                  <Link
                    href="/blog/paint-selection"
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center"
                  >
                    Read More
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </Card>

              {/* Blog Post 3 */}
              <Card className="overflow-hidden">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/white-kitchen-tile-floor-663e73179c3c4.jpg?crop=0.668xw:1.00xh;0.0545xw,0&resize=1200:*"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                    Guide
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-600">
                    The Ultimate Guide to Kitchen Renovation
                  </h3>
                  <p className="text-black text-sm mb-4 line-clamp-2">
                    Step-by-step instructions and material recommendations for a successful kitchen remodeling project.
                  </p>
                  <Link
                    href="/blog/kitchen-renovation"
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center"
                  >
                    Read More
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

