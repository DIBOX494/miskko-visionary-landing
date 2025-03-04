import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import NeonButton from '@/components/NeonButton';
import WaitlistForm from '@/components/WaitlistForm';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingIcons from '@/components/FloatingIcons';
import { ChevronDown, Instagram, Twitter } from 'lucide-react';

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWaitlistClick = () => {
    if (showForm) {
      document.getElementById('waitlist-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowForm(true);
      setTimeout(() => {
        document.getElementById('waitlist-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-black to-dark overflow-hidden">
      <AnimatedBackground />
      <FloatingIcons />
      
      <header className="container mx-auto py-6 px-6 flex justify-between items-center">
        <div className="text-xl font-medium tracking-tight">
          <span className="metal-text">MISKKO</span>
        </div>
        
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
             className="text-white/60 hover:text-white">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
             className="text-white/60 hover:text-white">
            <Twitter size={20} />
          </a>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        <section className="container mx-auto flex flex-col items-center justify-center px-6 py-20 md:py-32">
          <div className={`transform transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Logo className="mb-12" />
          </div>
          
          <div className={`text-center max-w-md mx-auto space-y-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-3 py-1 bg-dark-200 rounded-full mb-4">
              <span className="text-xs uppercase tracking-wider text-white/60">Coming Soon</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-glow">
              Redefining Streetwear
            </h1>
            
            <p className="text-white/70 leading-relaxed">
              Where avant-garde design meets uncompromising quality.
              Join the movement that's reshaping the future of fashion.
            </p>
            
            <div className="pt-4">
              <NeonButton onClick={handleWaitlistClick}>
                Join the Waitlist
              </NeonButton>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
            <ChevronDown className="text-white/50" />
          </div>
        </section>
        
        <section id="waitlist-section" className={`container mx-auto px-6 py-20 transition-all duration-500 ${showForm ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-100 border border-white/5 rounded-xl p-8 backdrop-blur-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-display font-bold mb-3 tracking-tight">Be the First to Know</h2>
                <p className="text-white/60 max-w-md mx-auto">
                  Join our exclusive waitlist to get early access to our 
                  collection launches and special offers.
                </p>
              </div>
              
              <WaitlistForm className="mx-auto" />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="container mx-auto py-8 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} MISKKO. All rights reserved.
          </div>
          
          <div className="text-sm text-white/40 mt-4 md:mt-0">
            Crafting the future of fashion
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
