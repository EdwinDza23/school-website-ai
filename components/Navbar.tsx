
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenPortal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const sectionsToObserve = ['home', 'about', 'gallery', 'admission', 'faq', 'resources', 'blogs', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-85px 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'resources' || id === 'faq') {
            setActiveSection('admission');
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionsToObserve.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'GALLERY', id: 'gallery' },
    { label: 'ADMISSION', id: 'admission' },
    { label: 'BLOGS', id: 'blogs' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-sfs-green-900/95 backdrop-blur-lg border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={() => scrollToSection('home')}
          className="cursor-pointer group flex items-center gap-4"
        >
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 bg-white/5 rounded-12 p-2">
             <img 
               src="https://i.ibb.co/84b5WjX4/logo.png" 
               alt="SFS School Logo" 
               className="h-full w-auto object-contain drop-shadow-[0_0_8px_rgba(245,158,11,0.15)]" 
             />
          </div>
          <div className="flex flex-col border-l border-white/5 pl-4">
            <h1 className="font-display font-bold text-base tracking-tight text-white leading-none">
              SFS SCHOOL
            </h1>
            <span className="text-[8px] font-bold tracking-[0.3em] text-sfs-gold uppercase leading-none mt-1.5 opacity-80">
              Kodani, Honnavar
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className="relative text-[10px] font-bold tracking-[0.2em] transition-all duration-300 py-2 group/nav"
            >
              <span className={`transition-colors duration-300 ${activeSection === link.id ? 'text-sfs-gold' : 'text-slate-300 hover:text-white'}`}>
                {link.label}
              </span>
              <span className={`absolute bottom-0 left-0 h-[2px] bg-sfs-gold transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover/nav:w-1/2'}`}></span>
            </button>
          ))}
          <button
            onClick={onOpenPortal}
            className="flex items-center gap-2 bg-sfs-gold hover:bg-white text-sfs-green-950 px-6 py-2.5 rounded-32 transition-all font-bold text-[10px] tracking-widest shadow-[0_5px_15px_rgba(245,158,11,0.2)]"
          >
            <span>PARENT LOGIN</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <button
          className="lg:hidden text-slate-200 hover:text-sfs-gold bg-white/5 p-2 rounded-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-sfs-green-900 border-b border-white/5 p-8 flex flex-col space-y-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className={`text-left text-lg font-bold py-2 border-b border-white/5 transition-colors ${activeSection === link.id ? 'text-sfs-gold' : 'text-slate-200 hover:text-sfs-gold'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPortal();
            }}
            className="w-full mt-4 flex justify-center items-center gap-2 bg-sfs-gold text-sfs-green-900 font-bold px-6 py-4 rounded-16"
          >
            <span>PARENT LOGIN</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
