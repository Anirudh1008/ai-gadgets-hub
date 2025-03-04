
import { Monitor, Smartphone, Laptop, Camera, Headphones, Tv, Watch, Gamepad } from 'lucide-react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  gradient: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Smartphones',
    icon: <Smartphone className="h-6 w-6" />,
    count: 1245,
    gradient: 'from-blue-600/20 to-blue-800/20 border-blue-500/20'
  },
  {
    id: '2',
    name: 'Laptops',
    icon: <Laptop className="h-6 w-6" />,
    count: 873,
    gradient: 'from-indigo-600/20 to-indigo-800/20 border-indigo-500/20'
  },
  {
    id: '3',
    name: 'Monitors',
    icon: <Monitor className="h-6 w-6" />,
    count: 562,
    gradient: 'from-purple-600/20 to-purple-800/20 border-purple-500/20'
  },
  {
    id: '4',
    name: 'Cameras',
    icon: <Camera className="h-6 w-6" />,
    count: 421,
    gradient: 'from-green-600/20 to-green-800/20 border-green-500/20'
  },
  {
    id: '5',
    name: 'Headphones',
    icon: <Headphones className="h-6 w-6" />,
    count: 795,
    gradient: 'from-amber-600/20 to-amber-800/20 border-amber-500/20'
  },
  {
    id: '6',
    name: 'TVs',
    icon: <Tv className="h-6 w-6" />,
    count: 327,
    gradient: 'from-red-600/20 to-red-800/20 border-red-500/20'
  },
  {
    id: '7',
    name: 'Smartwatches',
    icon: <Watch className="h-6 w-6" />,
    count: 512,
    gradient: 'from-sky-600/20 to-sky-800/20 border-sky-500/20'
  },
  {
    id: '8',
    name: 'Gaming',
    icon: <Gamepad className="h-6 w-6" />,
    count: 689,
    gradient: 'from-emerald-600/20 to-emerald-800/20 border-emerald-500/20'
  }
];

const MotionDiv = motion.div;

const CategorySection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"></div>
      <div className="absolute top-20 -left-10 w-72 h-72 bg-blue-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-40 -right-10 w-96 h-96 bg-indigo-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-2 neon-glow">Browse Categories</h2>
            <p className="text-gray-400">Find new and used electronics by category</p>
          </MotionDiv>
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
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"  
              }}
              className={cn(
                "rounded-xl overflow-hidden flex flex-col items-center justify-center py-6 card-hover cursor-pointer backdrop-blur-sm border border-white/5",
                "bg-gradient-to-br",
                category.gradient
              )}
            >
              <div className="text-white mb-3 bg-white/10 p-3 rounded-full">
                {category.icon}
              </div>
              <h3 className="font-medium text-white mb-1">{category.name}</h3>
              <p className="text-xs text-gray-400">{category.count} items</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
