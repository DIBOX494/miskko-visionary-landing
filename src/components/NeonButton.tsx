
import React from 'react';
import { cn } from '@/lib/utils';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  className, 
  children, 
  ...props 
}) => {
  return (
    <button
      className={cn(
        "bg-[#39ff14] hover:bg-[#32cc12] text-black",
        "px-6 py-3 md:px-8 md:py-4 rounded-md",
        "font-bold text-base md:text-lg",
        "transition-all duration-300 ease-out",
        "transform hover:scale-105 active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
