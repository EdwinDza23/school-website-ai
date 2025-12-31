
import React, { useState } from 'react';
import { 
  Calendar, 
  Book, 
  Beaker, 
  ArrowRight, 
  Bell, 
  Cpu, 
  Code, 
  Globe, 
  Zap, 
  Rocket, 
  Plus,
  Minus,
  X,
  User,
  CheckCircle2,
  Maximize2,
  MousePointer2,
  Monitor,
  Wifi,
  Library,
  GraduationCap,
  Clock,
  ExternalLink,
  Activity
} from 'lucide-react';

const tickerItems = [
  "Annual Day registrations open for Grades 5-10",
  "Science Fair exhibition this Friday at 10 AM",
  "Parent-Teacher meeting scheduled for March 15th",
  "Holiday Alert: School closed on Monday for localized event"
];

interface DepartmentStat {
  label: string;
  value: string;
}

interface Department {
  id: number;
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  img: string;
  stats: DepartmentStat[];
  icon: any;
  specs: { category: string; list: string[] }[];
  faculty: {
    name: string;
    role: string;
    img: string;
    bio: string;
  };
}

interface ResourcesProps {
  onExploreCampus?: () => void;
}

const departments: Department[] = [
  {
    id: 1,
    title: "Computer Lab",
    tag: "DIGITAL LITERACY",
    icon: Monitor,
    shortDesc: "A dedicated space for students from 1st to 10th std to learn coding and digital literacy.",
    fullDesc: "Our state-of-the-art Computer Lab at SFS Kodani is designed to bridge the digital divide. We provide a hands-on learning environment where students transition from basic computing to advanced logical reasoning through programming. The lab is the nerve center for our IT curriculum, fostering creativity through digital art and technical proficiency through coding workshops.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "STATIONS", value: "30+ Units" },
      { label: "NETWORK", value: "Fiber Optic" },
      { label: "UPTIME", value: "99.9%" }
    ],
    specs: [
      { category: "Hardware", list: ["Dell Optiplex i5 Systems", "Interactive Smart Boards", "High-Precision Mice", "Network Printers"] },
      { category: "Software", list: ["Scratch (Lower Grades)", "Python & Java (High School)", "MS Office Suite", "Tux Paint & GIMP"] },
      { category: "Timings", list: ["Mon-Fri: 8:30 AM - 4:30 PM", "Saturday: 8:30 AM - 12:30 PM"] }
    ],
    faculty: {
      name: "Mr. Praveen Kumar",
      role: "IT Coordinator & Senior Faculty",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      bio: "With over 12 years of experience in educational technology, Mr. Praveen leads our digital curriculum integration."
    }
  },
  {
    id: 2,
    title: "Science & Innovation Lab",
    tag: "STEM EXCELLENCE",
    icon: Beaker,
    shortDesc: "Equipped with modern apparatus for Physics, Chemistry, and Biology experiments.",
    fullDesc: "The Science Lab is where theory meets reality. At SFS, we prioritize experiential learning, allowing students to conduct experiments that spark curiosity and deepen understanding of the natural world. From microscopic observations in Biology to chemical synthesis and physical laws, our lab is a sanctuary for young scientists.",
    img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "EQUIPMENT", value: "Grade-A" },
      { label: "SAFETY", value: "Certified" },
      { label: "MODULES", value: "STEM Focus" }
    ],
    specs: [
      { category: "Equipment", list: ["Compound Microscopes", "Chemical Fume Hoods", "Digital Weighing Scales", "Centrifuge Units"] },
      { category: "Focus Areas", list: ["Micro-biology", "Analytical Chemistry", "Kinematic Physics", "Environmental Science"] },
      { category: "Safety", list: ["First Aid Station", "Eye Wash Unit", "Fire Extinguishers", "Compulsory Lab Coats"] }
    ],
    faculty: {
      name: "Ms. Savitha Bhat",
      role: "Head of Science Department",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
      bio: "A passionate researcher and educator, Ms. Savitha specializes in making complex scientific concepts accessible through storytelling."
    }
  },
  {
    id: 3,
    title: "Digital Library",
    tag: "KNOWLEDGE HUB",
    icon: Library,
    shortDesc: "Access to 10,000+ volumes and high-speed digital repository for research.",
    fullDesc: "Our library is a silent sanctuary of knowledge. Combining traditional physical books with a modern digital repository, it serves as a resource hub for both students and faculty. We encourage a culture of reading and independent research, providing quiet study zones and collaborative spaces.",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "VOLUMES", value: "10,000+" },
      { label: "FORMAT", value: "Hybrid" },
      { label: "SEATING", value: "60+ Capacity" }
    ],
    specs: [
      { category: "Collections", list: ["Reference Encyclopedias", "Literary Classics", "Current Periodicals", "Scientific Journals"] },
      { category: "Digital", list: ["E-Book Reader Access", "Online Research Database", "Audio-Book Stations", "High-speed Wi-Fi"] },
      { category: "Policies", list: ["Max 2 Books/Week", "Silent Zone Discipline", "Weekly Reading Periods"] }
    ],
    faculty: {
      name: "Mrs. Deepa Naik",
      role: "Chief Librarian",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      bio: "Mrs. Deepa has curated our collection for over a decade, ensuring students have access to the best global and local literature."
    }
  }
];

const Resources: React.FC<ResourcesProps> = ({ onExploreCampus }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [deepDiveProject, setDeepDiveProject] = useState<Department | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openDeepDive = (dept: Department, e: React.MouseEvent) => {
    e.stopPropagation();
    setDeepDiveProject(dept);
    document.body.style.overflow = 'hidden';
  };

  const closeDeepDive = () => {
    setDeepDiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="resources" className="py-24 relative bg-sfs-green-950 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      
      {/* Deep Dive Modal */}
      {deepDiveProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-sfs-green-950/98 backdrop-blur-2xl" onClick={closeDeepDive}></div>
          <div className="relative w-full h-full md:w-[92vw] md:h-[92vh] bg-sfs-green-900 border border-white/10 md:rounded-[48px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
            
            <button 
              onClick={closeDeepDive}
              className="absolute top-8 right-8 z-50 p-4 bg-white/10 hover:bg-sfs-gold hover:text-sfs-green-950 text-white rounded-full transition-all border border-white/10 shadow-2xl flex items-center gap-2 group"
            >
              <X size={24} />
              <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest mr-2">Exit Deep Dive</span>
            </button>

            {/* Left: Hero Section */}
            <div className="w-full md:w-5/12 h-80 md:h-full relative overflow-hidden shrink-0">
              <img src={deepDiveProject.img} className="w-full h-full object-cover" alt={deepDiveProject.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-sfs-green-950 via-sfs-green-950/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <span className="px-5 py-2 bg-sfs-gold text-sfs-green-950 font-bold text-[11px] uppercase tracking-[0.2em] rounded-full mb-6 inline-block">
                  {deepDiveProject.tag}
                </span>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-none tracking-tight">
                  {deepDiveProject.title}
                </h2>
                
                {/* Structured Stats in Modal */}
                <div className="grid grid-cols-3 gap-4">
                  {deepDiveProject.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[9px] font-bold text-sfs-gold/60 uppercase tracking-widest mb-1">{stat.label}</span>
                      <span className="text-sm font-bold text-white whitespace-nowrap">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Scrollable Content */}
            <div className="flex-1 p-8 md:p-20 overflow-y-auto bg-sfs-green-900 custom-scrollbar">
              <div className="max-w-3xl space-y-16">
                
                <div className="space-y-6">
                   <h3 className="text-[11px] font-bold text-sfs-gold uppercase tracking-[0.3em] flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-sfs-gold animate-pulse"></div>
                     Department Overview
                   </h3>
                   <p className="text-xl text-slate-200 leading-relaxed font-normal opacity-90">
                     {deepDiveProject.fullDesc}
                   </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                   {deepDiveProject.specs.map((spec, i) => (
                     <div key={i} className="space-y-6">
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">{spec.category}</h4>
                        <ul className="space-y-4">
                          {spec.list.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-sm text-slate-300 font-medium">
                              <CheckCircle2 size={18} className="text-sfs-gold shrink-0 opacity-60" />
                              {item}
                            </li>
                          ))}
                        </ul>
                     </div>
                   ))}
                </div>

                <div className="p-10 bg-white/[0.03] rounded-[40px] border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <User size={120} />
                   </div>
                   <h3 className="text-[11px] font-bold text-sfs-gold uppercase tracking-[0.3em] mb-8">Faculty Spotlight</h3>
                   <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                      <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-sfs-gold/30 shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                        <img src={deepDiveProject.faculty.img} className="w-full h-full object-cover" alt={deepDiveProject.faculty.name} />
                      </div>
                      <div className="text-center md:text-left">
                         <h4 className="text-2xl font-display font-bold text-white mb-2">{deepDiveProject.faculty.name}</h4>
                         <p className="text-xs text-sfs-gold uppercase font-bold tracking-widest mb-4">{deepDiveProject.faculty.role}</p>
                         <p className="text-sm text-slate-400 leading-relaxed italic">"{deepDiveProject.faculty.bio}"</p>
                      </div>
                   </div>
                   <button className="mt-10 w-full py-4 bg-white/5 hover:bg-sfs-gold hover:text-sfs-green-950 text-white text-[11px] font-bold uppercase tracking-widest rounded-2xl transition-all border border-white/10">
                     Schedule a Department Tour
                   </button>
                </div>

                <div className="flex items-center justify-between gap-6 pb-12">
                   <div className="flex items-center gap-4">
                      <div className="p-4 bg-sfs-gold/10 rounded-2xl text-sfs-gold">
                         <GraduationCap size={28} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Excellence in Action</h4>
                         <p className="text-xs text-slate-500">SFS School Kodani • Excellence Hub</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <button className="p-4 rounded-xl bg-white/5 text-slate-400 hover:text-white transition-colors border border-white/10">
                        <ExternalLink size={20} />
                      </button>
                      <button className="px-10 py-4 bg-sfs-gold text-sfs-green-950 font-bold rounded-2xl uppercase tracking-widest text-[11px] shadow-2xl shadow-sfs-gold/30 hover:scale-105 transition-transform">
                        Portal Login
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Live Bulletin Ticker */}
      <div className="w-full bg-sfs-green-800/30 border-y border-white/5 backdrop-blur-xl overflow-hidden py-4 mb-20 relative z-10">
        <div className="flex whitespace-nowrap animate-ticker w-max pause-on-hover">
          <div className="flex items-center gap-16 px-8">
             {tickerItems.map((item, idx) => (
               <span key={`ticker-1-${idx}`} className={`flex items-center font-bold text-[13px] tracking-wide ${idx % 2 === 0 ? 'text-sfs-gold' : 'text-slate-200'}`}>
                 <Bell size={16} className="mr-3 shrink-0 opacity-80" /> 
                 {item}
               </span>
             ))}
          </div>
          <div className="flex items-center gap-16 px-8">
             {tickerItems.map((item, idx) => (
               <span key={`ticker-2-${idx}`} className={`flex items-center font-bold text-[13px] tracking-wide ${idx % 2 === 0 ? 'text-sfs-gold' : 'text-slate-200'}`}>
                 <Bell size={16} className="mr-3 shrink-0 opacity-80" /> 
                 {item}
               </span>
             ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight leading-none">School Facilities & Departments</h2>
            <p className="text-slate-400 text-lg">Explore the modern infrastructure powering the educational journey at SFS Kodani.</p>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
             <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <Wifi size={14} className="text-sfs-gold animate-pulse" /> Fiber Optic Active
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {departments.map((dept) => {
            const isComputerLab = dept.id === 1;
            
            return (
              <div 
                key={dept.id} 
                onClick={() => handleCardClick(dept.id)}
                className={`glass-card rounded-[40px] overflow-hidden transition-all duration-500 cursor-pointer relative group border border-white/5 ${
                  expandedId === dept.id 
                  ? 'ring-1 ring-sfs-gold/40 shadow-[0_20px_80px_rgba(245,158,11,0.15)] bg-sfs-green-800/40' 
                  : isComputerLab 
                    ? 'hover:-translate-y-4 hover:border-blue-400/60 hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] bg-sfs-green-900/40'
                    : 'hover:border-sfs-gold/30 hover:shadow-[0_0_30px_rgba(30,144,255,0.15)] bg-sfs-green-900/40'
                }`}
              >
                {/* Closed View */}
                <div className="p-10 flex flex-col h-full relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-5 rounded-3xl transition-all duration-500 shadow-xl ${
                      expandedId === dept.id 
                      ? 'bg-sfs-gold text-sfs-green-950 scale-110' 
                      : isComputerLab 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-400/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                        : 'bg-sfs-green-950/80 text-sfs-gold border border-white/10 group-hover:text-sfs-gold group-hover:border-sfs-gold/50'
                    }`}>
                      <dept.icon size={32} />
                    </div>
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-500 ${
                      expandedId === dept.id 
                      ? 'bg-sfs-gold border-sfs-gold text-sfs-green-950 rotate-180' 
                      : isComputerLab
                        ? 'bg-white/5 border-white/10 text-white group-hover:bg-blue-500/10 group-hover:border-blue-400 group-hover:text-blue-400'
                        : 'bg-white/5 border-white/10 text-white group-hover:bg-sfs-gold/10 group-hover:border-sfs-gold/50 group-hover:text-sfs-gold'
                    }`}>
                      {expandedId === dept.id ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-1 block transition-colors ${isComputerLab ? 'text-blue-400' : 'text-slate-500 group-hover:text-sfs-gold'}`}>
                      {dept.tag}
                    </span>
                    <h4 className="text-3xl font-display font-bold text-white group-hover:tracking-tight transition-all">
                      {dept.title}
                    </h4>
                  </div>

                  {/* Partial Detail View (Vertical Expansion) */}
                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                      expandedId === dept.id 
                      ? 'max-h-[600px] opacity-100 mt-10 pt-10 border-t border-white/10' 
                      : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-8">
                      {/* Enhanced Quick Stats Grid */}
                      <div className="grid grid-cols-1 gap-3">
                        {dept.stats.map((stat, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group/stat hover:bg-white/10 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className={`w-1 h-4 rounded-full opacity-50 group-hover/stat:opacity-100 transition-opacity ${isComputerLab ? 'bg-blue-400' : 'bg-sfs-gold'}`}></div>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                             </div>
                             <span className="text-xs font-bold text-white">{stat.value}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-slate-400 text-[15px] leading-relaxed font-medium">
                        {dept.shortDesc}
                      </p>

                      <button 
                        onClick={(e) => openDeepDive(dept, e)}
                        className={`w-full py-5 font-bold rounded-2xl transition-all uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center justify-center gap-3 group/btn ${isComputerLab ? 'bg-blue-500 text-white hover:bg-white hover:text-blue-500 shadow-blue-500/20' : 'bg-sfs-gold text-sfs-green-950 hover:bg-white shadow-sfs-gold/20'}`}
                      >
                        View Full Department Details <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Subtle Blue Glow */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 blur-[80px] rounded-full transition-colors ${isComputerLab ? 'bg-blue-500/10 group-hover:bg-blue-500/30' : 'bg-blue-500/5 group-hover:bg-blue-500/10'}`}></div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Section */}
        <div className="mt-20 p-10 bg-gradient-to-r from-sfs-green-900 to-sfs-green-950 border border-sfs-gold/20 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sfs-gold to-transparent opacity-30"></div>
           <div className="flex items-center gap-8 relative z-10">
              <div className="w-16 h-16 bg-sfs-gold/10 rounded-3xl flex items-center justify-center text-sfs-gold border border-sfs-gold/20 shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap size={32} />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-display font-bold text-white mb-2">Academic Excellence Starts Here</h4>
                <p className="text-slate-400 font-medium max-w-md">Our departments are constantly evolving to provide students with the tools they need for a digital future.</p>
              </div>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="text-center px-10 border-r border-white/10 hidden sm:block">
                 <span className="block text-4xl font-display font-bold text-white">100%</span>
                 <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">Digital Literacy</span>
              </div>
              <div className="text-center px-10 border-r border-white/10 hidden sm:block">
                 <span className="block text-4xl font-display font-bold text-white">42+</span>
                 <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">Staff Mentors</span>
              </div>
              <button 
                onClick={onExploreCampus}
                className="px-10 py-5 border border-white/10 hover:border-sfs-gold text-white hover:text-sfs-gold font-bold text-[11px] uppercase tracking-widest rounded-2xl transition-all backdrop-blur-md flex items-center gap-3"
              >
                 Explore Campus <MousePointer2 size={16} />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
