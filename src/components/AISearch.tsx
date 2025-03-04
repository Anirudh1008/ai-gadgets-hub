
import { useState, useRef, useEffect } from 'react';
import { Search, Mic, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const AISearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Example suggestions
  const suggestions = [
    'Brand new MacBook Pro M2',
    'Used iPhone 13 in excellent condition',
    'Second-hand gaming laptops',
    'Verified headphones under $100',
    'DSLR cameras with AI verification'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMicClick = () => {
    setIsListening(!isListening);
    
    // Simulate voice recognition after 2 seconds
    if (!isListening) {
      setTimeout(() => {
        setSearchQuery('Used iPhone 13 Pro Max');
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <div 
      ref={searchRef}
      className={cn(
        "relative w-full max-w-2xl transition-all duration-300 ease-in-out",
        isFocused ? "scale-105" : "scale-100"
      )}
    >
      <div 
        className={cn(
          "flex items-center bg-white border rounded-xl px-4 py-3 transition-all duration-300",
          isFocused 
            ? "shadow-lg border-blue-300 ring-2 ring-blue-100" 
            : "shadow-md hover:shadow-lg border-gray-200"
        )}
      >
        <Search className="h-5 w-5 text-gray-400 mr-2" />
        
        <input
          type="text"
          placeholder="Search for new or used electronics..."
          className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
        
        <div className="flex items-center space-x-2 ml-2">
          <button 
            className={cn(
              "p-1.5 rounded-full transition-all",
              isListening 
                ? "bg-red-100 text-red-500 animate-pulse" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            )}
            onClick={handleMicClick}
          >
            <Mic className="h-4 w-4" />
          </button>
          
          <div className="h-6 w-px bg-gray-200"></div>
          
          <button className="flex items-center space-x-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-2 py-1 rounded-md transition-all text-xs font-medium">
            <Sparkles className="h-3 w-3" />
            <span>AI Search</span>
          </button>
        </div>
      </div>
      
      {/* Dropdown suggestions */}
      {isFocused && (
        <div className="absolute z-10 left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
          <div className="px-3 py-2">
            <p className="text-xs font-medium text-gray-500 mb-2">AI Suggestions</p>
            {suggestions.map((suggestion, index) => (
              <div 
                key={index}
                className="flex items-center px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => {
                  setSearchQuery(suggestion);
                  setIsFocused(false);
                }}
              >
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-800">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AISearch;
