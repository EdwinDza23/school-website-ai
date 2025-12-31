import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Beaker, 
  CheckCircle2, 
  Star, 
  BookOpen, 
  Users, 
  TrendingUp,
  Heart,
  Send,
  Upload,
  FileText,
  Quote,
  Sparkles
} from 'lucide-react';

interface JobApplicationProps {
  job: any;
  onClose: () => void;
}

const JobApplication: React.FC<JobApplicationProps> = ({ job, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const studentTestimonials = [
    {
      name: "Arjun S.",
      grade: "Grade 4",
      quote: "I love it when we go to the Science Hub! Making the mini-volcano explode was the best part of my whole week. Science is like magic but real!",
      initial: "A",
      color: "bg-blue-500"
    },
    {
      name: "Sarah M.",
      grade: "Grade 3",
      quote: "Science used to be just reading, but here we get to touch things and see how plants grow. I want to discover a new planet one day!",
      initial: "S",
      color: "bg-purple-500"
    },
    {
      name: "Kiran K.",
      grade: "Grade 5",
      quote: "Our experiments make everything so easy to understand. We built a small solar circuit last month and it was amazing to see the light turn on!",
      initial: "K",
      color: "bg-orange-500"
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-sfs-green-950 flex items-center justify-center p-6">
        <div className="max-w-lg w-full glass-card p-12 rounded-[48px] text-center border-sfs-gold/20">
          <div className="w-24 h-24 bg-sfs-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-sfs-gold/30">
            <CheckCircle2 className="text-sfs-gold" size={48} />
          </div>
          <h2 className="text-4xl font-display font-bold text-white mb-4">Application Sent</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Your profile for the <span className="text-sfs-gold font-bold">{job.title}</span> position has been received. Our recruitment team will review your application and get in touch within 5-7 business days.
          </p>
          <button 
            onClick={onClose}
            className="w-full py-4 bg-sfs-gold text-sfs-green-950 font-bold rounded-2xl shadow-2xl shadow-sfs-gold/20 hover:scale-105 transition-transform uppercase tracking-widest text-xs"
          >
            Return to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sfs-green-950 text-slate-100 font-sans pb-32">
      {/* Sticky Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-sfs-green-900/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button onClick={onClose} className="flex items-center gap-2 text-slate-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.2em]">
            <ArrowLeft size={18} /> Back
          </button>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-sfs-gold rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-sfs-green-950">S</span>
             </div>
             <span className="font-display font-bold text-white text-xs tracking-tight uppercase">Talent Acquisition</span>
          </div>
          <a href="#apply-form" className="px-6 py-2 bg-sfs-gold text-sfs-green-950 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg shadow-sfs-gold/20 hover:scale-105 transition-transform">
            Quick Apply
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-white/5 bg-gradient-to-b from-sfs-green-900/50 to-transparent">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                 <MapPin size={14} className="text-sfs-gold" />
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Kodani, Karnataka • SFS School Kodani</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Primary Science Teacher
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Ignite scientific curiosity and shape the foundation of inquiry for our primary students.
              </p>
            </div>
            <div className="shrink-0 pb-2">
              <div className="px-8 py-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                 <p className="text-[10px] font-bold text-sfs-gold uppercase tracking-widest mb-2">Compensation</p>
                 <p className="text-2xl font-display font-bold text-white">₹20k – ₹45k <span className="text-xs font-sans text-slate-500">/ mo</span></p>
                 <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Based on experience & scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 max-w-5xl pt-20">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Context */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-sfs-gold uppercase tracking-[0.3em] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sfs-gold"></div>
                The Opportunity
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed font-normal">
                SFS School Kodani is a vibrant educational community dedicated to nurturing young minds. We bridge the gap between tradition and innovation, offering an Aided Primary section (1st to 5th Std) and a Modern English Medium High School (6th to 10th Std).
              </p>
              <p className="text-slate-400 leading-relaxed">
                We believe that curiosity is the engine of achievement, and our mission is to make science an accessible, hands-on adventure for every student. We are looking for a passionate Primary Science Teacher to join our team of 30+ expert educators. At SFS Kodani, science isn't just a subject—it’s a way of exploring the world. You will have access to our computer labs and a library of 200+ resources to bring lessons to life.
              </p>
            </div>

            {/* NEW SECTION: What Our Students Say */}
            <div className="space-y-10 pt-8 border-t border-white/5">
              <div className="flex items-center justify-between">
                <h3 className="text-[11px] font-bold text-sfs-gold uppercase tracking-[0.3em] flex items-center gap-3">
                  <Sparkles size={16} className="text-sfs-gold animate-pulse" />
                  What Our Students Say
                </h3>
              </div>
              <div className="grid gap-6">
                {studentTestimonials.map((testimonial, i) => (
                  <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] relative overflow-hidden group hover:border-sfs-gold/20 transition-all">
                    <Quote size={40} className="absolute -top-4 -right-4 text-white/5 rotate-12" />
                    <div className="flex gap-6 items-start relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${testimonial.color} flex items-center justify-center text-white font-display font-bold text-xl shrink-0 shadow-lg`}>
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="text-white font-script text-2xl mb-4 leading-tight opacity-90 italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-2">
                           <span className="text-sm font-bold text-white">{testimonial.name}</span>
                           <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                           <span className="text-xs font-bold text-sfs-gold uppercase tracking-widest">{testimonial.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-10">
              <h3 className="text-[11px] font-bold text-sfs-gold uppercase tracking-[0.3em]">What you’ll do at SFS School Kodani</h3>
              <div className="grid gap-8">
                 {[
                   { title: "Ignite Curiosity", desc: "Design and deliver engaging, hands-on science lessons for students in LKG to 5th Std (Aided section).", icon: Star },
                   { title: "Facilitate Discovery", desc: "Lead students through simple experiments in our designated activity areas, helping them connect classroom theory to the natural world.", icon: Beaker },
                   { title: "Manage the 'Science Hub'", desc: "Maintain and organize science kits and instructional materials, ensuring a safe and inspiring environment for exploration.", icon: BookOpen },
                   { title: "Foster Scientific Literacy", desc: "Help students develop critical thinking skills by encouraging them to ask 'Why?' and 'How?' about everything from gravity to plant life.", icon: Users },
                   { title: "Collaborate with Families", desc: "Use our Parent Portal to provide regular updates, resources, and feedback to parents.", icon: TrendingUp }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-sfs-gold shrink-0 border border-white/10 group-hover:bg-sfs-gold group-hover:text-sfs-green-950 transition-all">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-2 text-lg">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="p-10 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-[40px] border border-white/5 space-y-8">
               <h3 className="text-[11px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-4">Pay & Benefits Disclosure</h3>
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-indigo-400" />
                        <span className="text-white font-medium">Transparent Salary Guidelines</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-indigo-400" />
                        <span className="text-white font-medium">Professional Development Stipends</span>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-indigo-400" />
                        <span className="text-white font-medium">Mental Health & Wellness Support</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-indigo-400" />
                        <span className="text-white font-medium">Competitive Leave Policy</span>
                     </div>
                  </div>
               </div>
               <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-indigo-300 font-bold uppercase tracking-widest italic">
                  <TrendingUp size={14} /> "Grow as you go" • Mentorship Culture
               </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-12">
            
            {/* Requirements Card */}
            <div className="p-8 bg-sfs-green-900 border border-white/10 rounded-[32px] sticky top-28">
               <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">REQUIREMENTS</h3>
               <ul className="space-y-6">
                 {[
                   "B.Sc. in Science Subject",
                   "B.Ed. or D.El.Ed.",
                   "Digital Tool Fluency",
                   "English Proficiency",
                   "Self-Starter Energy"
                 ].map((req, i) => (
                   <li key={i} className="flex items-center gap-4 text-sm font-bold text-white group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-sfs-gold group-hover:scale-150 transition-transform"></div>
                      {req}
                   </li>
                 ))}
               </ul>
               
               <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Added Pluses</p>
                  <ul className="space-y-3">
                    <li className="text-xs text-slate-400 leading-relaxed">• Aided School Documentation Knowledge</li>
                    <li className="text-xs text-slate-400 leading-relaxed">• Inquiry-Based Learning Expertise</li>
                    <li className="text-xs text-slate-400 leading-relaxed">• STEM Club Leadership</li>
                  </ul>
               </div>

               <div className="mt-12 flex items-center gap-4 p-4 bg-sfs-gold/10 rounded-2xl border border-sfs-gold/20">
                  <div className="p-2 bg-sfs-gold/20 rounded-lg text-sfs-gold">
                    <Heart size={20} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-200 uppercase tracking-tighter leading-tight">
                    Dedicated to Inclusivity & Diversity
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="container mx-auto px-6 max-w-5xl mt-32">
         <div className="p-10 md:p-20 bg-sfs-green-900 border border-white/10 rounded-[64px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sfs-gold to-transparent opacity-40"></div>
            
            <div className="max-w-2xl mx-auto text-center mb-16">
               <h2 className="text-4xl font-display font-bold text-white mb-4">Apply for this Role</h2>
               <p className="text-slate-400">Please provide your details and attach your CV along with a short teaching philosophy statement.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                     <input type="text" required className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sfs-gold transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                     <input type="email" required className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sfs-gold transition-all" />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Teaching Philosophy Statement</label>
                  <textarea rows={4} placeholder="Briefly describe your approach to science education..." className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sfs-gold transition-all resize-none"></textarea>
               </div>

               <div className="p-8 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center hover:bg-white/5 transition-all cursor-pointer group/upload">
                  <Upload size={32} className="text-slate-600 group-hover/upload:text-sfs-gold transition-colors mb-4" />
                  <p className="text-sm text-slate-400 font-bold mb-1">Upload Resume / CV</p>
                  <p className="text-[10px] text-slate-600 uppercase tracking-widest">PDF or Word (Max 10MB)</p>
               </div>

               <button type="submit" className="w-full py-5 bg-sfs-gold hover:bg-white text-sfs-green-950 font-bold rounded-2xl uppercase tracking-widest text-xs transition-all shadow-2xl shadow-sfs-gold/30 flex items-center justify-center gap-3">
                  Submit Application <Send size={18} />
               </button>
            </form>
         </div>
      </section>

      {/* Footer minimal info */}
      <footer className="container mx-auto px-6 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-600 uppercase tracking-widest gap-6">
         <p>© {new Date().getFullYear()} SFS School Kodani • Recruitment Division</p>
         <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Employment Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
         </div>
      </footer>
    </div>
  );
};

export default JobApplication;