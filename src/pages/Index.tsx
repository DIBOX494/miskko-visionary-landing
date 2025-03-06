
import React, { useEffect, useState } from 'react';
import NeonButton from '@/components/NeonButton';
import WaitlistForm from '@/components/WaitlistForm';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Instagram } from 'lucide-react';

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
    <div className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      <AnimatedBackground />
      
      <header className="container mx-auto py-4 px-6 flex justify-between items-center absolute top-0 left-0 right-0 z-10">
        <div className="flex gap-4 ml-auto">
          <a href="https://www.instagram.com/miskk_oo" target="_blank" rel="noopener noreferrer" 
             className="text-white/60 hover:text-white">
            <Instagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@miskko.hz" target="_blank" rel="noopener noreferrer" 
             className="text-white/60 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="container mx-auto flex flex-col items-center justify-center px-6 py-10">
          <div className={`text-center max-w-md mx-auto space-y-6 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-[5px] uppercase neon-glow animate-pulse-glow">
              Miskko
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mt-5">
              Redefining Streetwear
            </p>
            
            <div className="pt-6">
              <NeonButton onClick={handleWaitlistClick} className="py-4 px-8 text-lg font-bold uppercase tracking-wider">
                Join the Waitlist
              </NeonButton>
            </div>
          </div>
        </section>
        
        <section id="waitlist-section" className={`container mx-auto px-6 py-20 transition-all duration-500 ${showForm ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-100 border border-white/5 rounded-xl p-8 backdrop-blur-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3 uppercase tracking-wider">Join Our Waitlist</h2>
                <p className="text-white/60 max-w-md mx-auto">
                  Be the first to experience our collection when it launches.
                </p>
              </div>
              
              <WaitlistForm className="mx-auto" />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="container mx-auto py-4 px-6">
        <div className="text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} MISKKO. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
