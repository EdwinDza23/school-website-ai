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
            <h3 className="text-2xl font-display font-bold text-white mb-6">Our Legacy & Mission</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              S.F.S. English Medium School, Kodani, was founded with a singular purpose: to bring world-class education to the heart of Honnavar. Since 1989, we have nurtured generations of students, balancing academic rigor with moral integrity.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 rounded-12 bg-sfs-green-900 border border-white/5">
                 <span className="text-sfs-gold font-display font-bold text-3xl">30+</span>
                 <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Years Excellence</p>
               </div>
               <div className="p-4 rounded-12 bg-sfs-green-900 border border-white/5">
                 <span className="text-sfs-gold font-display font-bold text-3xl">100%</span>
                 <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Result Track</p>
               </div>
            </div>
          </div>
        );
      case 'curriculum':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Holistic Learning Framework</h3>
            <div className="space-y-4">
               <div className="flex items-start gap-4 p-4 rounded-12 bg-sfs-green-900 border border-white/5 group hover:border-sfs-gold/30 transition-all">
                  <div className="p-2 rounded-8 bg-sfs-gold/10 text-sfs-gold"><BookOpen size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold">State & Digital Integration</h4>
                    <p className="text-sm text-slate-400">Following CBSE standards augmented with interactive digital learning modules.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 p-4 rounded-12 bg-sfs-green-900 border border-white/5 group hover:border-sfs-gold/30 transition-all">
                  <div className="p-2 rounded-8 bg-sfs-gold/10 text-sfs-gold"><Users size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold">Extra-Curricular Focus</h4>
                    <p className="text-sm text-slate-400">Compulsory participation in Arts, Sports, and STEM projects for well-rounded growth.</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 'facilities':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 grid grid-cols-2 gap-4">
             {[
               { icon: Leaf, title: 'Eco Campus', desc: 'Sustainable living' },
               { icon: Wifi, title: 'Smart Classes', desc: 'Fiber-optic enabled' },
               { icon: BookOpen, title: 'Hi-Tech Lab', desc: 'Modern Equipment' },
               { icon: Layers, title: 'Sports Arena', desc: 'Professional Courts' }
             ].map((f, i) => (
               <div key={i} className="p-4 rounded-12 bg-sfs-green-900 border border-white/5 flex flex-col items-center text-center">
                  <f.icon className="text-sfs-gold mb-2" size={24} />
                  <h4 className="text-white text-sm font-bold">{f.title}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">{f.desc}</p>
               </div>
             ))}
          </div>
        );
      case 'day':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
            <div className="w-full overflow-hidden">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6 text-center">
                The best preparation for good work tomorrow is good work today.
              </h3>
              
              <div className="mb-8 p-6 bg-sfs-gold/10 border border-sfs-gold/20 rounded-24 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Heart size={80} />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                  <div className="w-14 h-14 bg-sfs-gold/20 rounded-16 flex items-center justify-center text-sfs-gold shrink-0 border border-sfs-gold/30">
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                      Tuesday Spiritual Nexus: Twin Heart Meditation
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                      Every Tuesday, our Morning Prayer is followed by the <span className="text-sfs-gold font-bold">Twin Heart Meditation Programme</span>. This practice is central to our holistic curriculum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-12 border border-white/10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-sfs-green-700 text-white text-[11px] font-bold uppercase tracking-wider">
                      <th className="p-4 border-r border-white/10">Assembly</th>
                      <th className="p-4 border-r border-white/10">Classroom Activity</th>
                      <th className="p-4">Major Events</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px] text-slate-300">
                    {[
                      ["Morning Prayer", "Word Power", "Classroom Teaching"],
                      ["Thought For the day", "Grammar Questions", "Lab Activities"],
                      ["Birthday Wishes", "Tongue Twisters", "Co-Curricular"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                        <td className={`p-4 border-r border-white/10 ${i === 0 ? 'text-sfs-gold font-bold' : ''}`}>
                          {row[0]}
                        </td>
                        <td className="p-4 border-r border-white/10">{row[1]}</td>
                        <td className="p-4">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <div className="aspect-[4/3] rounded-24 overflow-hidden shadow-2xl border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                      alt="Classroom Activity" 
                      className="w-full h-full object-cover"
                    />
                  </div>
               </div>

               <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-script text-xl text-sfs-gold">Beyond The Bell</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                    Enrichment & Support
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { label: "Academic Support", desc: "Remedial Programmes for continuous improvement." },
                      { label: "Club Activities", desc: "Literary, Arts, and Science Clubs." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <CheckCircle2 size={18} className="text-sfs-gold shrink-0 mt-1" />
                        <div>
                          <span className="text-white font-bold text-sm block mb-0.5">{item.label}</span>
                          <span className="text-xs text-slate-400 leading-normal">{item.desc}</span>
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

        <div className="grid lg:grid-cols-12 gap-12 bg-sfs-green-900/30 rounded-32 p-4 md:p-8 border border-white/5 backdrop-blur-sm">
          <div className="lg:col-span-12 xl:col-span-3 flex xl:flex-col gap-2 overflow-x-auto pb-4 xl:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-12 font-bold text-xs tracking-widest transition-all whitespace-nowrap min-w-max xl:w-full ${
                  activeTab === tab.id 
                    ? 'bg-sfs-gold text-sfs-green-950 shadow-lg shadow-sfs-gold/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
          <div className="lg:col-span-12 xl:col-span-9 min-h-[400px] flex flex-col justify-center">
             {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;