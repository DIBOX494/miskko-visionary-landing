
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
        "relative px-6 py-3 rounded-md text-black font-medium tracking-wide",
        "bg-neon hover:bg-neon/90 animate-glow shadow-neon",
        "transition-all duration-300 ease-out",
        "transform hover:scale-105 active:scale-95",
        "before:content-[''] before:absolute before:-inset-0.5 before:rounded-md before:bg-neon/30 before:blur-md before:opacity-0 before:transition-opacity",
        "hover:before:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
