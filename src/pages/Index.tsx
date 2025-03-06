
import React, { useState, useEffect } from 'react';
import NeonButton from '@/components/NeonButton';
import WaitlistForm from '@/components/WaitlistForm';

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
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center h-screen px-6 py-10">
          <div className={`text-center space-y-6 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-[5px] uppercase animate-pulse-glow neon-glow">
              Miskko
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mt-5">
              Redefining Streetwear
            </p>
            
            <div className="pt-6">
              <NeonButton onClick={handleWaitlistClick}>
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
