
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      
      const rect = logoRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 20;
      const y = (e.clientY - rect.top - rect.height / 2) / 20;
      
      logoRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!logoRef.current) return;
      logoRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    const logoElement = logoRef.current;
    if (logoElement) {
      logoElement.addEventListener('mousemove', handleMouseMove);
      logoElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (logoElement) {
        logoElement.removeEventListener('mousemove', handleMouseMove);
        logoElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <div 
      ref={logoRef}
      className={cn(
        "relative transition-transform duration-200 ease-out cursor-pointer select-none",
        className
      )}
    >
      <div className="relative inline-block">
        <div className="text-7xl font-display font-bold metal-text tracking-tighter">
          MISKKO
        </div>
        <div className="absolute -inset-px text-7xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/5 to-white/0 blur-sm">
          MISKKO
        </div>
      </div>
    </div>
  );
};

export default Logo;
