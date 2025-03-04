
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      setRotation(prev => {
        // Determine rotation speed based on hover state
        const speed = isHovered ? 0.05 : 0.03;
        
        // Calculate new rotation angles with more dynamic movement
        return {
          x: prev.x + speed * Math.sin(timestamp / 2500) * (delta / 16),
          y: prev.y + speed * (delta / 16),
          z: prev.z + speed * Math.cos(timestamp / 3500) * 0.2 * (delta / 16)
        };
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      
      const rect = logoRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 15; // Increased sensitivity
      const y = (e.clientY - rect.top - rect.height / 2) / 15; // Increased sensitivity
      
      // Add more pronounced tilt towards the cursor
      logoRef.current.style.transform = `perspective(800px) rotateX(${-y + rotation.x}deg) rotateY(${x + rotation.y}deg) rotateZ(${rotation.z}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      if (!logoRef.current) return;
      logoRef.current.style.transform = `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`;
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
  }, [rotation]);
  
  return (
    <div 
      ref={logoRef}
      className={cn(
        "relative transition-transform duration-200 ease-out cursor-pointer select-none",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transform: `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)` 
      }}
    >
      <div className="relative inline-block">
        <div className="text-7xl font-display font-bold tracking-tighter">
          <span className="bg-gradient-to-b from-metal-light via-white to-metal-dark bg-clip-text text-transparent filter drop-shadow-lg">
            MISKKO
          </span>
        </div>
        
        <div className="absolute -inset-px text-7xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/5 via-white/20 to-white/5 blur-[2px] animate-shimmer bg-[length:200%_auto]">
          MISKKO
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 text-7xl font-display font-bold tracking-tighter text-transparent filter blur-md opacity-50 text-neon">
          MISKKO
        </div>
      </div>
    </div>
  );
};

export default Logo;
