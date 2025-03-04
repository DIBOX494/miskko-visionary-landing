
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import NeonButton from './NeonButton';
import { toast } from 'sonner';

interface WaitlistFormProps {
  className?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      setPhone('');
      toast.success('Thank you for joining the waitlist!');
    }, 1500);
  };
  
  return (
    <div className={cn("w-full max-w-md", className)}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-md focus:border-neon/50 focus:ring-1 focus:ring-neon/30 focus:outline-none text-white"
            disabled={loading}
            required
          />
          <div className="absolute inset-0 border border-white/5 rounded-md pointer-events-none" />
        </div>
        
        <div className="relative">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number (optional)"
            className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-md focus:border-neon/50 focus:ring-1 focus:ring-neon/30 focus:outline-none text-white"
            disabled={loading}
          />
          <div className="absolute inset-0 border border-white/5 rounded-md pointer-events-none" />
        </div>
        
        <NeonButton
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Join the Waitlist'}
        </NeonButton>
      </form>
    </div>
  );
};

export default WaitlistForm;
