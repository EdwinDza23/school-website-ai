
import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-sfs-green-950 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tighter">Reach Out</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Have questions about admissions or school life? Our administrative team is here to assist you.
            </p>

            <div className="space-y-8">
               <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-12 bg-sfs-green-900 border border-white/10 flex items-center justify-center text-sfs-gold group-hover:bg-sfs-gold group-hover:text-sfs-green-950 transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Location</h4>
                    <p className="text-sm text-slate-400">SFS School, Kodani, Honnavar, Karnataka - 581423</p>
                  </div>
               </div>

               <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-12 bg-sfs-green-900 border border-white/10 flex items-center justify-center text-sfs-gold group-hover:bg-sfs-gold group-hover:text-sfs-green-950 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Call Desk</h4>
                    <p className="text-sm text-slate-400">+91 12345 09876 / +91 09876 12345</p>
                  </div>
               </div>

               <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-12 bg-sfs-green-900 border border-white/10 flex items-center justify-center text-sfs-gold group-hover:bg-sfs-gold group-hover:text-sfs-green-950 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Official Email</h4>
                    <p className="text-sm text-slate-400">principal@sfskodani.com</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 rounded-48 border-white/10">
             <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                   <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-sfs-green-950/50 border border-white/10 rounded-12 px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-sfs-gold/50 transition-all"
                   />
                 </div>
                 <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                   <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-sfs-green-950/50 border border-white/10 rounded-12 px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-sfs-gold/50 transition-all"
                   />
                 </div>
               </div>
               <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                   <input 
                    type="text" 
                    placeholder="Admissions Inquiry" 
                    className="w-full bg-sfs-green-950/50 border border-white/10 rounded-12 px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-sfs-gold/50 transition-all"
                   />
               </div>
               <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                   <textarea 
                    rows={4}
                    placeholder="How can we help you?" 
                    className="w-full bg-sfs-green-950/50 border border-white/10 rounded-12 px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-sfs-gold/50 transition-all resize-none"
                   ></textarea>
               </div>
               <button className="w-full py-4 bg-sfs-gold text-sfs-green-950 font-bold rounded-16 flex items-center justify-center gap-3 hover:bg-white transition-all group">
                  <span className="uppercase tracking-widest text-sm">Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
