
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, CreditCard, ShieldCheck, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Trust badges */}
        <div className="py-10 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <div className="p-2 rounded-full bg-blue-100 mr-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Secure Payments</h3>
                <p className="text-sm text-gray-600">Protected by escrow system</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="p-2 rounded-full bg-green-100 mr-4">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Money-Back Guarantee</h3>
                <p className="text-sm text-gray-600">14-day satisfaction policy</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-end">
              <div className="p-2 rounded-full bg-amber-100 mr-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-600">AI-assisted customer service</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold ai-gradient mb-4 inline-block">
              AITronics
            </Link>
            <p className="text-gray-600 text-sm mb-6">
              The next-generation AI-powered marketplace for new and used electronics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-primary transition-colors text-sm">How It Works</Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-600 hover:text-primary transition-colors text-sm">Sell Electronics</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Help & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors text-sm">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-primary transition-colors text-sm">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-primary transition-colors text-sm">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors text-sm">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">1234 Tech Avenue, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600 text-sm">support@aitronics.com</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600 text-sm">www.aitronics.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} AITronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
