
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, X, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10",
        isScrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold ai-gradient">AITronics</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/new" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            New
          </Link>
          <Link to="/used" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Used
          </Link>
          <Link to="/sell" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Sell
          </Link>
          <Link to="/trade" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Trade
          </Link>
          <Link to="/shops" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Shops
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full transition-all hover:bg-blue-50">
            <Search className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full transition-all hover:bg-blue-50">
            <Heart className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full transition-all hover:bg-blue-50 relative">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-white flex items-center justify-center">3</span>
          </Button>
          <Button className="bg-blue-50 hover:bg-blue-100 text-blue-700">
            <User className="h-4 w-4 mr-1" />
            Sign In
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-40 glass-light animate-slide-down md:hidden py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium text-gray-800 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/new" className="text-sm font-medium text-gray-800 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              New
            </Link>
            <Link to="/used" className="text-sm font-medium text-gray-800 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Used
            </Link>
            <Link to="/sell" className="text-sm font-medium text-gray-800 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Sell
            </Link>
            <Link to="/trade" className="text-sm font-medium text-gray-800 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Trade
            </Link>
            <Link to="/shops" className="text-sm font-medium text-gray-800 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Shops
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
