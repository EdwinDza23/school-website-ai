
import React, { useState } from 'react';
import { Layers, Leaf, Wifi, BookOpen, Clock, Users, GraduationCap, Building2, CheckCircle2, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('us');

  const tabs = [
    { id: 'us', label: 'ABOUT US', icon: Building2 },
    { id: 'curriculum', label: 'CURRICULUM', icon: GraduationCap },
    { id: 'facilities', label: 'FACILITIES', icon: Layers },
    { id: 'day', label: 'A DAY\'S LIFE', icon: Clock },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'us':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12 border-l-2 border-sfs-gold/30 pl-8">
              <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-[0.3em] mb-4 block">Our Philosophy</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">Nurturing Potential, Shaping Futures</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                At S.F.S. English Medium School, we believe every child is a unique promise. From the playful curiosity of LKG to the focused ambition of 10th standard, we provide a stable, nurturing environment where character and intellect grow in harmony.
              </p>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Our Legacy & Mission</h4>
              <p className="text-slate-300 leading-relaxed mb-8 text-base">
                S.F.S. English Medium School, Kodani, was founded with a singular purpose: to bring world-class education to the heart of Honnavar. Since 1989, we have nurtured generations of students, balancing academic rigor with moral integrity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 rounded-20 bg-sfs-green-900 border border-white/5 hover:border-sfs-gold/20 transition-all group">
                   <span className="text-sfs-gold font-display font-bold text-4xl block mb-2 group-hover:scale-110 transition-transform origin-left">30+</span>
                   <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Years of Educational Excellence</p>
                 </div>
                 <div className="p-6 rounded-20 bg-sfs-green-900 border border-white/5 hover:border-sfs-gold/20 transition-all group">
                   <span className="text-sfs-gold font-display font-bold text-4xl block mb-2 group-hover:scale-110 transition-transform origin-left">100%</span>
                   <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Consistency in Result Track</p>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'curriculum':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12 border-l-2 border-sfs-gold/30 pl-8">
              <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-[0.3em] mb-4 block">Academic Standards</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">Academic Foundations for Global Citizens</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                Our academic approach is strictly aligned with the Karnataka State Board standards, yet we transcend the textbook. We focus on conceptual clarity, critical thinking, and a balanced lifestyle.
              </p>
            </div>

            <div className="mt-12 space-y-6">
               <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Holistic Learning Framework</h4>
               <div className="flex items-start gap-6 p-6 rounded-24 bg-sfs-green-900 border border-white/5 group hover:border-sfs-gold/30 transition-all">
                  <div className="p-4 rounded-16 bg-sfs-gold/10 text-sfs-gold shrink-0"><BookOpen size={24} /></div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-2">State & Digital Integration</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Following CBSE & State standards augmented with interactive digital learning modules and smart-classroom engagement.</p>
                  </div>
               </div>
               <div className="flex items-start gap-6 p-6 rounded-24 bg-sfs-green-900 border border-white/5 group hover:border-sfs-gold/30 transition-all">
                  <div className="p-4 rounded-16 bg-sfs-gold/10 text-sfs-gold shrink-0"><Users size={24} /></div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-2">Extra-Curricular Focus</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Compulsory participation in Arts, Sports, and STEM projects designed to build confidence beyond traditional exams.</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 'facilities':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12 border-l-2 border-sfs-gold/30 pl-8">
              <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-[0.3em] mb-4 block">Infrastructure</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">A Sanctuary for Learning</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                Infrastructure at SFS is designed to be more than just buildings; it is an extension of the classroom. We provide safe, technology-integrated spaces for every grade level.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
               {[
                 { icon: Leaf, title: 'Eco Campus', desc: 'Sustainable living & green spaces' },
                 { icon: Wifi, title: 'Smart Classes', desc: 'Fiber-optic enabled interactive rooms' },
                 { icon: BookOpen, title: 'Hi-Tech Lab', desc: 'Modern equipment for STEM inquiry' },
                 { icon: Layers, title: 'Sports Arena', desc: 'Professional courts & indoor games' }
               ].map((f, i) => (
                 <div key={i} className="p-8 rounded-24 bg-sfs-green-900 border border-white/5 flex flex-col items-start hover:border-sfs-gold/40 transition-all group">
                    <div className="p-3 bg-sfs-gold/10 rounded-12 text-sfs-gold mb-6 group-hover:scale-110 transition-transform">
                      <f.icon size={28} />
                    </div>
                    <h4 className="text-white text-lg font-bold mb-2">{f.title}</h4>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold leading-relaxed">{f.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'day':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
            <div className="mb-12 border-l-2 border-sfs-gold/30 pl-8">
              <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-[0.3em] mb-4 block">Student Experience</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">The Rhythm of Excellence</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                The best preparation for good work tomorrow is good work today. Our daily schedule is carefully balanced between academic focus and spiritual wellness.
              </p>
            </div>
            
            <div className="w-full overflow-hidden">
              <div className="mb-10 p-8 bg-sfs-gold/10 border border-sfs-gold/20 rounded-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Heart size={80} />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="w-16 h-16 bg-sfs-gold/20 rounded-20 flex items-center justify-center text-sfs-gold shrink-0 border border-sfs-gold/30 shadow-lg">
                    <Sparkles size={32} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                      Tuesday Spiritual Nexus: Twin Heart Meditation
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                      Every Tuesday, our Morning Prayer is followed by the <span className="text-sfs-gold font-bold">Twin Heart Meditation Programme</span>. This practice is central to our holistic curriculum and emotional well-being.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-20 border border-white/10 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-sfs-green-700 text-white text-[11px] font-bold uppercase tracking-wider">
                      <th className="p-5 border-r border-white/10">Assembly Period</th>
                      <th className="p-5 border-r border-white/10">Classroom Engagement</th>
                      <th className="p-5">Enrichment Events</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px] text-slate-300">
                    {[
                      ["Morning Prayer", "Word Power Building", "Classroom Teaching"],
                      ["Thought For the day", "Grammar Mastery", "Lab Activities"],
                      ["Birthday Celebrations", "Linguistic Twisters", "Co-Curricular Clubs"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                        <td className={`p-5 border-r border-white/10 ${i === 0 ? 'text-sfs-gold font-bold' : ''}`}>
                          {row[0]}
                        </td>
                        <td className="p-5 border-r border-white/10">{row[1]}</td>
                        <td className="p-5">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center pt-8">
               <div className="relative">
                  <div className="aspect-[4/3] rounded-32 overflow-hidden shadow-2xl border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                      alt="Classroom Activity" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sfs-gold rounded-full opacity-10 blur-3xl"></div>
               </div>

               <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-script text-2xl text-sfs-gold">Beyond The Bell</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 leading-tight">
                    Enrichment & Support
                  </h3>
                  <ul className="space-y-6">
                    {[
                      { label: "Academic Support", desc: "Personalized Remedial Programmes designed for continuous skill improvement." },
                      { label: "Club Activities", desc: "Engagement through Literary, Arts, and Science Clubs on weekends." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-6 group">
                        <CheckCircle2 size={24} className="text-sfs-gold shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <span className="text-white font-bold text-lg block mb-1">{item.label}</span>
                          <span className="text-sm text-slate-400 leading-relaxed">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-sfs-green-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">About our School</h2>
          <div className="h-1 w-20 bg-sfs-gold mx-auto rounded-full shadow-[0_0_10px_#f59e0b]"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 bg-sfs-green-900/30 rounded-[48px] p-6 md:p-12 border border-white/5 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sfs-gold/20 to-transparent"></div>
          <div className="lg:col-span-12 xl:col-span-3 flex xl:flex-col gap-3 overflow-x-auto pb-6 xl:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 px-8 py-5 rounded-16 font-bold text-xs tracking-widest transition-all whitespace-nowrap min-w-max xl:w-full border ${
                  activeTab === tab.id 
                    ? 'bg-sfs-gold text-sfs-green-950 border-sfs-gold shadow-2xl shadow-sfs-gold/30' 
                    : 'text-slate-400 border-white/5 hover:bg-white/5 hover:text-white hover:border-white/10'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
          <div className="lg:col-span-12 xl:col-span-9 min-h-[500px] flex flex-col pt-4 md:pt-0">
             {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
