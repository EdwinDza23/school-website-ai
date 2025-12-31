import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-sfs-green-900 overflow-hidden pt-20">
      {/* Background Pattern Layer */}
      <div className="absolute inset-0 topo-pattern opacity-40 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-left max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-sfs-gold w-5 h-5" fill="currentColor" />
            <span className="font-script text-2xl text-sfs-gold leading-none">
              Welcoming & Community-Oriented
            </span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] text-white">
            Cultivating <br />
            Character, <br />
            Inspiring Success
          </h1>
          
          <p className="font-sans text-base md:text-lg text-slate-100/90 mb-10 leading-relaxed font-medium">
            We believe in a holistic journey that extends beyond the classroom. Our programs are designed to instill strong values, build confidence, and foster critical thinking, preparing students not just for exams, but for life.
          </p>

          <button 
            onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth'})}
            className="px-10 py-5 bg-sfs-gold hover:bg-sfs-gold-400 text-sfs-green-950 font-bold rounded-16 transition-all uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] flex items-center gap-3 group overflow-hidden relative"
          >
            <span className="relative z-10">Begin the Journey</span>
            <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

          {/* Bottom Wave Decorative */}
          <div className="mt-12 opacity-80">
             <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 10C10 0 15 0 25 10C35 20 40 20 50 10C60 0 65 0 75 10C85 20 90 20 100 10" stroke="#f59e0b" strokeWidth="3" />
               <path d="M0 16C10 6 15 6 25 16C35 26 40 26 50 16C60 6 65 6 75 16C85 26 90 26 100 16" stroke="#f59e0b" strokeWidth="3" className="opacity-60" />
             </svg>
          </div>
        </div>

        {/* Right Side: Image Stack Composition */}
        <div className="flex-1 relative flex items-center justify-center min-h-[500px] w-full max-w-xl">
          {/* Main Gold Circle / Frame */}
          <div className="absolute w-[85%] aspect-square rounded-full border-2 border-sfs-gold/40 z-0"></div>
          
          {/* Background Group Image Circle */}
          <div className="absolute w-[75%] aspect-square rounded-full overflow-hidden border-2 border-sfs-gold/80 z-10 -translate-y-4 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
              alt="Community" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-sfs-gold/10 mix-blend-multiply"></div>
          </div>

          {/* Decorative Accents */}
          {/* Plus Signs */}
          <div className="absolute top-10 right-0 text-sfs-gold z-30">
             <div className="grid grid-cols-2 gap-2 opacity-80">
                <span className="text-xl font-bold">+</span>
                <span className="text-xl font-bold translate-y-4">+</span>
             </div>
          </div>
          <div className="absolute bottom-10 left-0 text-sfs-gold z-30">
             <div className="grid grid-cols-2 gap-2 opacity-80">
                <span className="text-xl font-bold">+</span>
                <span className="text-xl font-bold -translate-y-4">+</span>
             </div>
          </div>
          
          {/* Dotted Pattern */}
          <div className="absolute right-0 bottom-24 z-30 grid grid-cols-4 gap-2 opacity-60">
             {[...Array(12)].map((_, i) => (
               <div key={i} className="w-2 h-2 bg-sfs-gold rounded-full"></div>
             ))}
          </div>

          {/* Curvy Path Line */}
          <div className="absolute inset-0 z-15 pointer-events-none overflow-visible">
            <svg className="w-full h-full" viewBox="0 0 400 400">
               <path d="M 50 350 Q 200 400 350 50" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;