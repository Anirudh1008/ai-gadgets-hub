
import { useRef } from 'react';
import { ChevronRight, ChevronLeft, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProductCard from './ProductCard';

// Sample product data
const featuredProducts = [
  {
    id: '1',
    title: 'MacBook Pro 16" M2 Pro (2023)',
    price: 2499,
    originalPrice: 2699,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isVerified: true,
    verificationScore: 98,
    category: 'Laptops',
    isFeatured: true
  },
  {
    id: '2',
    title: 'iPhone 14 Pro Max - 256GB - Used (Excellent Condition)',
    price: 899,
    originalPrice: 1099,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTQlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    isVerified: true,
    verificationScore: 92,
    category: 'Smartphones',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    price: 349,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isVerified: true,
    verificationScore: 95,
    category: 'Audio',
    isFeatured: false
  },
  {
    id: '4',
    title: 'Dell XPS 15 - Used (Like New) - i9, 32GB RAM, 1TB',
    price: 1499,
    originalPrice: 2299,
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isVerified: true,
    verificationScore: 90,
    category: 'Laptops'
  },
  {
    id: '5',
    title: 'iPad Pro 12.9" M2 (2022) - 256GB - Space Gray',
    price: 999,
    originalPrice: 1099,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isVerified: true,
    verificationScore: 97,
    category: 'Tablets'
  },
  {
    id: '6',
    title: 'Samsung Galaxy S23 Ultra - Used (Good condition)',
    price: 799,
    originalPrice: 1199,
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMHMyM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isVerified: true,
    verificationScore: 78,
    category: 'Smartphones'
  }
];

const FeaturedProducts = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const { current } = scrollContainerRef;
    const scrollAmount = current.clientWidth * 0.75;
    const scrollLeft = direction === 'left' 
      ? current.scrollLeft - scrollAmount 
      : current.scrollLeft + scrollAmount;
    
    current.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Electronics</h2>
            <p className="text-gray-600 mt-1">Top picks verified by our AI</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:bg-gradient-to-l after:from-white after:to-transparent"
        >
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-none pb-4 -mx-4 px-4 space-x-5 scroll-smooth"
          >
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="min-w-[240px] max-w-[280px] w-full animate-fade-in"
                style={{ animationDelay: `${parseInt(product.id) * 100}ms` }}
              >
                <ProductCard 
                  {...product}
                  condition={product.condition as any}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* AI Analysis banner */}
        <div className="mt-12 rounded-xl overflow-hidden relative bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="px-6 py-8 md:p-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <div className="p-1.5 rounded-md bg-blue-100">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">AI Market Analysis</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-lg">Our AI analyzes thousands of listings daily to determine fair pricing and identify the best deals on the market.</p>
              <Button className="button-hover">
                View Market Insights
              </Button>
            </div>
            
            <div className="w-full md:w-80 h-40 bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 p-4 flex flex-col">
                <div className="text-sm font-medium text-gray-900 mb-2">Price trend: MacBook Pro</div>
                <div className="flex-1 relative">
                  {/* Fake chart */}
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-blue-50 to-blue-50/10"></div>
                    
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path
                        d="M0,30 L1,28 L2,29 L3,26 L4,27 L5,25 L6,24 L7,26 L8,25 L9,24 L10,23 L11,24 L12,22 L13,20 L14,21 L15,19 L16,18 L17,17 L18,18 L19,16 L20,15 L21,14 L22,13 L23,15 L24,13 L25,11 L26,12 L27,10 L28,11 L29,9 L30,10 L31,8 L32,9 L33,7 L34,8 L35,7 L36,6 L37,7 L38,5 L39,6 L40,4 L41,5 L42,3 L43,4 L44,3 L45,2 L46,3 L47,2 L48,1 L49,2 L50,1 L51,2 L52,3 L53,4 L54,3 L55,4 L56,5 L57,4 L58,5 L59,6 L60,5 L61,6 L62,7 L63,6 L64,7 L65,8 L66,7 L67,8 L68,9 L69,8 L70,9 L71,10 L72,9 L73,10 L74,11 L75,10 L76,11 L77,12 L78,11 L79,12 L80,13 L81,12 L82,13 L83,14 L84,13 L85,14 L86,15 L87,13 L88,14 L89,15 L90,16 L91,15 L92,16 L93,17 L94,15 L95,16 L96,17 L97,18 L98,19 L99,20 L100,19"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                      />
                      <circle cx="50" cy="1" r="3" fill="#3b82f6" />
                      <text x="47" y="8" fontSize="4" fill="#3b82f6" fontWeight="bold">
                        -23%
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Prices dropped 23% over the last 30 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
