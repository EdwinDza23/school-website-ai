import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Minus, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  GraduationCap,
  Bus,
  SearchX,
  ChevronRight
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Admissions",
    question: "What is the age criteria for LKG admission?",
    answer: "For LKG admission, the child should have completed 3 years and 6 months of age as of June 1st of the academic year. We strictly follow the state government's age regulations."
  },
  {
    category: "Admissions",
    question: "How do I secure a seat after the initial inquiry?",
    answer: "After the interaction and document verification, you must pay the admission fee and submit the original Transfer Certificate (if applicable) within 3 working days to secure the seat."
  },
  {
    category: "Academics",
    question: "Which board does SFS School follow?",
    answer: "SFS School Kodani follows the CBSE curriculum augmented with our proprietary 'SFS Excellence' framework, which integrates extra-curricular technical skills into the core subjects."
  },
  {
    category: "Academics",
    question: "Are there remedial classes for slow learners?",
    answer: "Yes, we conduct 'Supervised Learning' sessions every Tuesday and Thursday for students who require additional support in core subjects like Mathematics and Science."
  },
  {
    category: "Infrastructure",
    question: "Is school transport available for long distances?",
    answer: "We have a fleet of 12 GPRS-enabled buses covering a 20km radius around Honnavar. Safety is monitored via our SFS School Kodani tracking system available to parents."
  },
  {
    category: "Infrastructure",
    question: "What are the facilities in the Science Hub?",
    answer: "The Science Hub features dedicated Physics, Chemistry, and Biology modules, 3D models for biology, and a 'Maker Space' for robotics and electronics tinkering."
  },
  {
    category: "Parent Portal",
    question: "I forgot my SFS School Kodani portal password. How to reset?",
    answer: "You can use the 'Identity Verification' feature on the login screen. It will send a 6-digit OTP to your registered mobile number for instant password reset."
  },
  {
    category: "Parent Portal",
    question: "Can I pay school fees through the mobile app?",
    answer: "Yes, the SFS School Kodani Parent Portal has an integrated secure payment gateway. You can pay fees, download receipts, and track payment history 24/7."
  }
];

const categories = ["All", "Admissions", "Academics", "Infrastructure", "Parent Portal"];

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggleFaq = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case "Admissions": return <Users size={16} />;
      case "Academics": return <GraduationCap size={16} />;
      case "Infrastructure": return <Bus size={16} />;
      case "Parent Portal": return <ShieldCheck size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  return (
    <section id="faq" className="py-24 bg-sfs-green-950 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sfs-gold/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sfs-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-lg mb-10">Find answers to common questions about admissions, academics, and school life at SFS Kodani.</p>
          
          {/* Search Bar (Keyword Search) */}
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-500 group-focus-within:text-sfs-gold transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search by keyword (e.g. 'fees', 'transport', 'age')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-sfs-green-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white placeholder-slate-600 focus:outline-none focus:border-sfs-gold/50 focus:ring-1 focus:ring-sfs-gold/30 transition-all backdrop-blur-md"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Table of Contents / Sidebar (Topic Navigation) */}
          <div className="lg:col-span-3">
             <div className="sticky top-28 space-y-2">
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-6 pl-4">Topics</h3>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat 
                      ? 'bg-sfs-gold text-sfs-green-950 shadow-lg shadow-sfs-gold/10' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(cat)}
                      {cat}
                    </div>
                    {activeCategory === cat && <ChevronRight size={14} />}
                  </button>
                ))}
             </div>
          </div>

          {/* Accordion Content */}
          <div className="lg:col-span-9 space-y-4 min-h-[400px]">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                    expandedIndex === idx 
                    ? 'border-sfs-gold/40 bg-sfs-green-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
                    : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-6"
                  >
                    <div className="flex-1">
                       <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-[0.2em] mb-2 block opacity-70">
                         {faq.category}
                       </span>
                       <h4 className="text-white font-bold text-lg leading-snug">
                         {faq.question}
                       </h4>
                    </div>
                    <div className={`shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${
                      expandedIndex === idx ? 'bg-sfs-gold text-sfs-green-950 rotate-180' : 'bg-white/5 text-slate-500'
                    }`}>
                      {expandedIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-0 text-slate-400 text-base leading-relaxed border-t border-white/5 mt-2 bg-black/10">
                       <p className="mt-4">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95">
                 <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-slate-600 mb-6">
                    <SearchX size={40} />
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">No results found</h4>
                 <p className="text-slate-500">Try searching for a different keyword or browsing by topic.</p>
                 <button 
                   onClick={() => {setSearchQuery(""); setActiveCategory("All")}}
                   className="mt-6 text-sfs-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors underline underline-offset-8"
                 >
                   Clear all filters
                 </button>
              </div>
            )}
          </div>
        </div>

        {/* Contact Tier Section (Checklist Item 2: Contact Options) */}
        <div className="mt-32 p-12 md:p-20 bg-sfs-green-900 border border-white/10 rounded-[64px] relative overflow-hidden group">
           <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-sfs-gold/5 blur-[100px] rounded-full"></div>
           
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Still have questions?</h3>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                Can't find what you're looking for? Our dedicated team is ready to provide personalized support through any of these channels.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 {/* Option 1: Chat (Easiest) */}
                 <a href="https://wa.me/911234567890" target="_blank" className="p-8 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/20 rounded-3xl transition-all group/opt">
                    <MessageCircle size={32} className="mx-auto mb-4 group-hover/opt:scale-110 transition-transform" />
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-1">Live Chat</span>
                    <span className="text-[10px] opacity-80 font-medium">Quickest Support</span>
                 </a>

                 {/* Option 2: Phone */}
                 <a href="tel:+911234509876" className="p-8 bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-500/20 rounded-3xl transition-all group/opt">
                    <Phone size={32} className="mx-auto mb-4 group-hover/opt:scale-110 transition-transform" />
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-1">Call Desk</span>
                    <span className="text-[10px] opacity-80 font-medium">Mon-Fri, 9am - 4pm</span>
                 </a>

                 {/* Option 3: Email */}
                 <a href="mailto:info@sfskodani.com" className="p-8 bg-sfs-gold/10 hover:bg-sfs-gold text-sfs-gold hover:text-sfs-green-950 border border-sfs-gold/20 rounded-3xl transition-all group/opt">
                    <Mail size={32} className="mx-auto mb-4 group-hover/opt:scale-110 transition-transform" />
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-1">Email Team</span>
                    <span className="text-[10px] opacity-80 font-medium">Response in 24h</span>
                 </a>

                 {/* Option 4: Visit (Highest effort) */}
                 <a href="#contact" className="p-8 bg-white/5 hover:bg-white hover:text-sfs-green-950 text-white border border-white/10 rounded-3xl transition-all group/opt">
                    <MapPin size={32} className="mx-auto mb-4 group-hover/opt:scale-110 transition-transform" />
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-1">Campus Visit</span>
                    <span className="text-[10px] opacity-80 font-medium">Schedule Meeting</span>
                 </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;