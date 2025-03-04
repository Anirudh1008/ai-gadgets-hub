
import { Monitor, Smartphone, Laptop, Camera, Headphones, Tv, Watch, Gamepad } from 'lucide-react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  bgClass: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Smartphones',
    icon: <Smartphone className="h-6 w-6" />,
    count: 1245,
    bgClass: 'bg-blue-50'
  },
  {
    id: '2',
    name: 'Laptops',
    icon: <Laptop className="h-6 w-6" />,
    count: 873,
    bgClass: 'bg-indigo-50'
  },
  {
    id: '3',
    name: 'Monitors',
    icon: <Monitor className="h-6 w-6" />,
    count: 562,
    bgClass: 'bg-purple-50'
  },
  {
    id: '4',
    name: 'Cameras',
    icon: <Camera className="h-6 w-6" />,
    count: 421,
    bgClass: 'bg-green-50'
  },
  {
    id: '5',
    name: 'Headphones',
    icon: <Headphones className="h-6 w-6" />,
    count: 795,
    bgClass: 'bg-amber-50'
  },
  {
    id: '6',
    name: 'TVs',
    icon: <Tv className="h-6 w-6" />,
    count: 327,
    bgClass: 'bg-red-50'
  },
  {
    id: '7',
    name: 'Smartwatches',
    icon: <Watch className="h-6 w-6" />,
    count: 512,
    bgClass: 'bg-sky-50'
  },
  {
    id: '8',
    name: 'Gaming',
    icon: <Gamepad className="h-6 w-6" />,
    count: 689,
    bgClass: 'bg-emerald-50'
  }
];

const MotionDiv = motion.div;

const CategorySection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse Categories</h2>
          <p className="text-gray-600">Find new and used electronics by category</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
                "rounded-xl overflow-hidden flex flex-col items-center justify-center py-6 transition-all cursor-pointer",
                category.bgClass,
                "hover:shadow-md"
              )}
            >
              <div className="text-gray-800 mb-3">
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
