
import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import AISearch from './AISearch';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-50 via-white to-white"></div>
      <div className="absolute top-20 -left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float"></div>
      <div className="absolute top-40 -right-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Badge */}
          <div 
            className={cn(
              "inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 mb-6 transition-all duration-700 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="flex items-center text-xs font-medium text-indigo-700">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              AI-Powered Electronics Marketplace
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl transition-all duration-700 delay-150 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="block">The future of electronics trading,</span>
            <span className="block ai-gradient">verified and powered by AI</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className={cn(
              "text-lg md:text-xl text-gray-600 mb-8 max-w-2xl transition-all duration-700 delay-300 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Buy or sell with confidence using AI verification that checks device condition, detects fraud, and ensures fair pricing for both new and used electronics.
          </p>
          
          {/* Search bar */}
          <div 
            className={cn(
              "w-full transition-all duration-700 delay-450 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <AISearch />
          </div>
          
          {/* Features */}
          <div 
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-12 transition-all duration-700 delay-600 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex flex-col items-center p-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <ShieldCheck className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">AI-Verified Listings</h3>
              <p className="text-xs text-gray-500 text-center">Every device is verified for authenticity and condition</p>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <Zap className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">Smart Pricing</h3>
              <p className="text-xs text-gray-500 text-center">Get fair market value based on real-time analysis</p>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <Sparkles className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">Fraud Detection</h3>
              <p className="text-xs text-gray-500 text-center">Advanced AI scans for misleading or fraudulent listings</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center gap-4 mt-12 transition-all duration-700 delay-750 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Button className="h-11 px-6 rounded-lg shadow-sm button-hover bg-primary hover:bg-primary/90">
              Explore Marketplace
            </Button>
            <Button variant="outline" className="h-11 px-6 rounded-lg shadow-sm button-hover">
              Sell Your Device
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
