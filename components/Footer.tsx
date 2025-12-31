
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenCareers?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenCareers }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-sfs-green-900 border-t border-sfs-green-800 pt-16 pb-6 text-slate-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-12 p-2">
                  <img 
                    src="https://i.ibb.co/84b5WjX4/logo.png" 
                    alt="SFS School Logo" 
                    className="h-full w-auto object-contain" 
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-display font-bold text-lg text-white leading-none">SFS SCHOOL</h2>
                  <span className="text-[10px] font-bold text-sfs-gold uppercase mt-1 leading-none tracking-widest">Kodani, Honnavar</span>
                </div>
             </div>
             <p className="text-sm leading-relaxed text-slate-400 mb-8">
               Committed to providing a holistic education that empowers students to excel academically and grow into responsible global citizens.
             </p>
             <div className="flex space-x-3">
               <a href="#" className="w-10 h-10 rounded-full bg-sfs-green-800 flex items-center justify-center hover:bg-sfs-gold hover:text-sfs-green-900 transition-all">
                 <Facebook size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-sfs-green-800 flex items-center justify-center hover:bg-sfs-gold hover:text-sfs-green-900 transition-all">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-sfs-green-800 flex items-center justify-center hover:bg-sfs-gold hover:text-sfs-green-900 transition-all">
                 <Youtube size={18} />
               </a>
             </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-display font-bold text-lg text-white mb-2">Quick Links</h3>
            <div className="h-0.5 w-12 bg-sfs-gold mb-6 rounded-2"></div>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-sfs-gold transition-colors block py-1">About Us</a></li>
              <li><a href="#admission" className="hover:text-sfs-gold transition-colors block py-1">Admission</a></li>
              <li><a href="#gallery" className="hover:text-sfs-gold transition-colors block py-1">Gallery</a></li>
              <li><a href="#blogs" className="hover:text-sfs-gold transition-colors block py-1">Latest Blogs</a></li>
              <li>
                <button 
                  onClick={onOpenCareers}
                  className="hover:text-sfs-gold transition-colors block py-1 text-left"
                >
                  Careers
                </button>
              </li>
              <li><a href="#contact" className="hover:text-sfs-gold transition-colors block py-1">Contact Us</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-display font-bold text-lg text-white mb-2">Get in Touch</h3>
            <div className="h-0.5 w-12 bg-sfs-gold mb-6 rounded-2"></div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-8 bg-sfs-green-800 flex items-center justify-center text-sfs-gold shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Campus Address</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  SFS School, Kodani,<br/>
                  Honnavar, Uttara Kannada,<br/>
                  Karnataka - 581423
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 md:mt-12">
             <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-8 bg-sfs-green-800 flex items-center justify-center text-sfs-gold shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Call Us</h4>
                <p className="text-sm text-slate-400">
                  <a href="tel:+911234509876" className="hover:text-sfs-gold block text-xs tracking-tighter">+91 12345 09876</a>
                  <a href="tel:+910987612345" className="hover:text-sfs-gold block text-xs tracking-tighter">+91 09876 12345</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-8 bg-sfs-green-800 flex items-center justify-center text-sfs-gold shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Email Us</h4>
                <a href="mailto:principal@sfskodani.com" className="text-sm text-slate-400 hover:text-sfs-gold break-all">
                  principal@sfskodani.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sfs-green-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SFS School Kodani. All rights reserved. Designed & Developed by Edwin ❤️</p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
             <button 
               onClick={scrollToTop}
               className="w-8 h-8 bg-sfs-green-800 hover:bg-sfs-gold hover:text-sfs-green-900 rounded-6 flex items-center justify-center transition-all ml-4 shadow-lg"
             >
               <ArrowUp size={16} />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
