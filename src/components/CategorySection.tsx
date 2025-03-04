
import { Monitor, Smartphone, Laptop, Camera, Headphones, Tv, Watch, Gamepad } from 'lucide-react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  gradient: string;
  borderColor: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Smartphones',
    icon: <Smartphone className="h-6 w-6" />,
    count: 1245,
    gradient: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200'
  },
  {
    id: '2',
    name: 'Laptops',
    icon: <Laptop className="h-6 w-6" />,
    count: 873,
    gradient: 'from-indigo-50 to-indigo-100',
    borderColor: 'border-indigo-200'
  },
  {
    id: '3',
    name: 'Monitors',
    icon: <Monitor className="h-6 w-6" />,
    count: 562,
    gradient: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-200'
  },
  {
    id: '4',
    name: 'Cameras',
    icon: <Camera className="h-6 w-6" />,
    count: 421,
    gradient: 'from-green-50 to-green-100',
    borderColor: 'border-green-200'
  },
  {
    id: '5',
    name: 'Headphones',
    icon: <Headphones className="h-6 w-6" />,
    count: 795,
    gradient: 'from-amber-50 to-amber-100',
    borderColor: 'border-amber-200'
  },
  {
    id: '6',
    name: 'TVs',
    icon: <Tv className="h-6 w-6" />,
    count: 327,
    gradient: 'from-rose-50 to-rose-100',
    borderColor: 'border-rose-200'
  },
  {
    id: '7',
    name: 'Smartwatches',
    icon: <Watch className="h-6 w-6" />,
    count: 512,
    gradient: 'from-sky-50 to-sky-100',
    borderColor: 'border-sky-200'
  },
  {
    id: '8',
    name: 'Gaming',
    icon: <Gamepad className="h-6 w-6" />,
    count: 689,
    gradient: 'from-emerald-50 to-emerald-100',
    borderColor: 'border-emerald-200'
  }
];

const MotionDiv = motion.div;

const CategorySection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50 to-white"></div>
      <div className="absolute top-20 -left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-40 -right-10 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Browse Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover new and pre-owned electronics across various categories, all verified by our advanced AI technology</p>
          </MotionDiv>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {categories.map((category, index) => (
            <MotionDiv
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"  
              }}
              className={cn(
                "rounded-xl overflow-hidden flex flex-col items-center justify-center py-7 card-hover cursor-pointer",
                "bg-gradient-to-br",
                category.gradient,
                "border",
                category.borderColor,
                "soft-shadow"
              )}
            >
              <div className="text-gray-700 mb-3 bg-white p-3 rounded-full shadow-sm">
                {category.icon}
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.count} items</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
