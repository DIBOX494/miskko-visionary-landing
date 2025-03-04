
import React from 'react';
import { cn } from '@/lib/utils';
import { Gem, Shield, Zap } from 'lucide-react';

interface FloatingIconsProps {
  className?: string;
}

const FloatingIcons: React.FC<FloatingIconsProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute top-1/4 -left-10 animate-float opacity-10">
        <Shield size={80} className="text-metal-light" />
      </div>
      
      <div className="absolute bottom-1/3 right-10 animate-float opacity-10" style={{ animationDelay: '1s' }}>
        <Gem size={60} className="text-metal-light" />
      </div>
      
      <div className="absolute top-1/2 left-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
        <Zap size={70} className="text-neon" />
      </div>
    </div>
  );
};

export default FloatingIcons;
