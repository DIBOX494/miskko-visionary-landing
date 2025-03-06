
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
        "relative px-6 py-3 rounded-md text-black font-medium",
        "bg-[#39ff14] hover:bg-[#32cc12] shadow-neon",
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
