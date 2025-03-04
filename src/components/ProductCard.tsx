
import { useState } from 'react';
import { Heart, ShieldCheck, AlertCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  condition: 'New' | 'Like New' | 'Excellent' | 'Good' | 'Fair';
  image: string;
  isFeatured?: boolean;
  isVerified: boolean;
  verificationScore?: number;
  category: string;
  isHorizontal?: boolean;
}

const ProductCard = ({
  id,
  title,
  price,
  originalPrice,
  condition,
  image,
  isFeatured = false,
  isVerified,
  verificationScore = 0,
  category,
  isHorizontal = false
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const conditionColors = {
    'New': 'bg-green-100 text-green-800',
    'Like New': 'bg-emerald-100 text-emerald-800',
    'Excellent': 'bg-blue-100 text-blue-800',
    'Good': 'bg-amber-100 text-amber-800',
    'Fair': 'bg-orange-100 text-orange-800'
  };
  
  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  return (
    <div 
      className={cn(
        "group relative overflow-hidden transition-all duration-300 ease-out",
        isHorizontal 
          ? "flex gap-4 rounded-xl p-3 hover:shadow-md" 
          : "rounded-xl flex flex-col hover:shadow-md",
        isFeatured && "shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div 
        className={cn(
          "overflow-hidden bg-gray-100 relative",
          isHorizontal ? "w-36 h-36 rounded-lg" : "aspect-[4/3] rounded-lg"
        )}
      >
        <img 
          src={image} 
          alt={title}
          className={cn(
            "object-cover w-full h-full transition-transform duration-500",
            isHovered && "scale-105"
          )}
          loading="lazy"
        />
        
        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={cn(
            "absolute top-2 right-2 p-1.5 rounded-full transition-all duration-300",
            isFavorite 
              ? "bg-white shadow-md text-red-500" 
              : "bg-white/70 text-gray-400 hover:bg-white hover:shadow-md hover:text-gray-600"
          )}
        >
          <Heart className="h-4 w-4" fill={isFavorite ? "#ef4444" : "none"} />
        </button>
        
        {/* AI badges */}
        {isVerified && (
          <div className="absolute bottom-2 left-2 flex space-x-1">
            <div className="ai-verified flex items-center space-x-0.5">
              <ShieldCheck className="w-3 h-3" />
              <span className="text-[10px]">Verified</span>
            </div>
          </div>
        )}
        
        {/* Discount badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2">
            <Badge className="text-xs font-medium bg-red-500 hover:bg-red-600">
              {discountPercentage}% OFF
            </Badge>
          </div>
        )}
        
        {/* Featured */}
        {isFeatured && (
          <div className="absolute top-0 left-0 w-full">
            <div className="w-full text-[10px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-1">
              Featured
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className={cn(
        "flex flex-col",
        isHorizontal ? "flex-1 pt-1" : "p-3"
      )}>
        <div className="flex items-start justify-between mb-1">
          <Badge 
            variant="secondary" 
            className={cn(
              "text-[10px] font-medium px-1.5 py-0", 
              conditionColors[condition]
            )}
          >
            {condition}
          </Badge>
          
          <Badge 
            variant="outline" 
            className="text-[10px] font-medium px-1.5 py-0 border-gray-200 text-gray-500"
          >
            {category}
          </Badge>
        </div>
        
        <h3 className="font-medium text-gray-900 line-clamp-2 text-sm leading-tight mb-1">
          {title}
        </h3>
        
        <div className="mt-auto pt-1 flex items-baseline">
          <span className="text-base font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="ml-1.5 text-xs text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        
        {/* Verification score */}
        {isVerified && verificationScore > 0 && (
          <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full",
                verificationScore > 80 ? "bg-green-500" : 
                verificationScore > 60 ? "bg-emerald-500" : 
                verificationScore > 40 ? "bg-yellow-500" : 
                "bg-orange-500"
              )} 
              style={{ width: `${verificationScore}%` }}
            ></div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-gray-500">AI Score</span>
              <span className="text-[10px] font-medium text-gray-700">{verificationScore}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
