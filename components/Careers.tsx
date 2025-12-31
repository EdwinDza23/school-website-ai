import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Users, 
  MapPin, 
  Clock, 
  Briefcase, 
  ArrowRight, 
  X, 
  ChevronDown, 
  CheckCircle2,
  Mail,
  Phone,
  GraduationCap
} from 'lucide-react';

interface CareersProps {
  onClose: () => void;
  onApply?: (job: JobPosition) => void;
}

export interface JobPosition {
  id: number;
  title: string;
  category: string;
  type: string;
  location: string;
  postedAt: string;
  requirements: string[];
  fullDescription: string;
  status: 'OPEN' | 'SELECTED' | 'CLOSED';
}

const positions: JobPosition[] = [
  {
    id: 1,
    title: "Primary Science Teacher",
    category: "Aided Primary",
    type: "Full-time",
    location: "Kodani, Honnavar",
    postedAt: "5 DAYS AGO",
    status: "OPEN",
    requirements: [
      "B.Sc in Biology/Physics",
      "B.Ed or D.El.Ed",
      "Experiential teaching focus",
      "Fluency in English"
    ],
    fullDescription: "Join our vibrant educational community dedicated to nurturing young minds. We bridge the gap between tradition and innovation, making science an accessible, hands-on adventure for every student."
  },
  {
    id: 2,
    title: "Senior Mathematics Teacher",
    category: "High School",
    type: "Full-time",
    location: "Campus (Kodani)",
    postedAt: "2 DAYS AGO",
    status: "SELECTED",
    requirements: [
      "Master's in Mathematics",
      "B.Ed",
      "5+ years experience",
      "Excellent English communication"
    ],
    fullDescription: "We are looking for a passionate Mathematics educator to lead our senior secondary department. The ideal candidate will have a deep understanding of CBSE curriculum and a proven track record of inspiring students in logical reasoning and advanced calculus."
  },
  {
    id: 3,
    title: "ICT Coordinator",
    category: "Administration",
    type: "Contract",
    location: "Campus (Kodani)",
    postedAt: "1 WEEK AGO",
    status: "OPEN",
    requirements: [
      "MCA or B.Tech CS",
      "Knowledge of School ERPs",
      "Basic Hardware troubleshooting",
      "Network administration skills"
    ],
    fullDescription: "As the ICT Coordinator, you will manage the SFS School Kodani initiative, ensuring all smart classrooms and computer labs are operational and integrated with our cloud learning management system."
  }
];

const Careers: React.FC<CareersProps> = ({ onClose, onApply }) => {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  const toggleJob = (id: number) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-sfs-green-950 text-slate-100 font-sans pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-sfs-green-900/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button onClick={onClose} className="flex items-center gap-2 text-slate-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.2em]">
            <ArrowLeft size={18} /> Back to Dashboard
          </button>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/84b5WjX4/logo.png" 
                  alt="SFS Logo" 
                  className="h-full w-auto object-contain" 
                />
             </div>
             <h1 className="font-display font-bold text-white text-sm tracking-tight uppercase">Careers @ SFS</h1>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Talent Portal</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sfs-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfs-gold/10 border border-sfs-gold/20 rounded-full mb-6">
             <Users size={16} className="text-sfs-gold" />
             <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-[0.2em]">Join Our Community</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-none tracking-tight">
            Shape the Future <br /> of Education
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-medium">
            At SFS School Kodani, we are always looking for visionary educators and professionals who are passionate about nurturing the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Positions Section */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-10">
           <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">OPEN POSITIONS ({positions.length})</h3>
           <div className="h-px flex-1 bg-white/5"></div>
        </div>

        <div className="space-y-8">
          {positions.map((job) => (
            <div 
              key={job.id}
              className={`glass-card rounded-[32px] overflow-hidden border border-sfs-gold/10 transition-all duration-500 relative group ${
                expandedJobId === job.id ? 'bg-sfs-green-900/80 shadow-[0_30px_60px_rgba(0,0,0,0.4)]' : 'hover:border-sfs-gold/40'
              }`}
            >
              <div className="p-8 md:p-12">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-sfs-gold mb-4 group-hover:tracking-tight transition-all">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-6 text-slate-400 font-medium text-sm">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-sfs-gold/60" />
                        <span>{job.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-sfs-gold/60" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-sfs-gold/60" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-3">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{job.postedAt}</span>
                    <button 
                      onClick={() => job.status === 'OPEN' ? (onApply ? onApply(job) : toggleJob(job.id)) : null}
                      disabled={job.status !== 'OPEN'}
                      className={`px-10 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl ${
                        job.status === 'SELECTED' 
                        ? 'bg-sfs-gold text-sfs-green-950 shadow-sfs-gold/20 cursor-default' 
                        : 'bg-white/5 border border-white/10 text-white hover:bg-sfs-gold hover:text-sfs-green-950'
                      }`}
                    >
                      {job.status === 'SELECTED' ? 'SELECTED' : 'APPLY NOW'}
                    </button>
                  </div>
                </div>

                {/* Job Requirements Section */}
                <div className="space-y-6">
                   <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">JOB REQUIREMENTS:</h5>
                   <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
                      {job.requirements.map((req, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-sfs-gold"></div>
                           <span className="text-sm md:text-base text-slate-300 font-medium">{req}</span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Vertical Expansion (Step 2/3) */}
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                    expandedJobId === job.id 
                    ? 'max-h-[800px] opacity-100 mt-12 pt-12 border-t border-white/5' 
                    : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-8">
                    <div>
                       <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Role Description & Context</h5>
                       <p className="text-slate-400 text-base leading-relaxed">
                         {job.fullDescription}
                       </p>
                    </div>

                    <div className="p-8 bg-sfs-green-950/50 rounded-3xl border border-white/5">
                       <p className="text-xs text-slate-500 italic leading-relaxed text-center">
                         Disclaimer: SFS School is an equal opportunity employer. We value diversity and do not discriminate based on race, religion, color, national origin, gender, or age.
                       </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                       <button 
                         onClick={() => onApply && onApply(job)}
                         className="flex-1 py-4 bg-sfs-gold text-sfs-green-950 font-bold rounded-2xl text-[11px] uppercase tracking-widest shadow-2xl shadow-sfs-gold/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                       >
                          Proceed to Full Application <ArrowRight size={16} />
                       </button>
                       <button className="px-8 py-4 bg-white/5 text-slate-300 font-bold rounded-2xl text-[11px] uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">
                          Download PDF Spec
                       </button>
                    </div>
                  </div>
                </div>

                {/* Expand Trigger */}
                {!expandedJobId && job.status === 'OPEN' && (
                  <button 
                    onClick={() => toggleJob(job.id)}
                    className="mt-8 flex items-center gap-2 text-[10px] font-bold text-sfs-gold uppercase tracking-[0.2em] hover:text-white transition-colors group/more"
                  >
                    View Role details <ChevronDown size={14} className="group-hover/more:translate-y-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className="mt-24 p-12 md:p-20 bg-gradient-to-br from-sfs-green-900 to-sfs-green-950 rounded-[64px] border border-sfs-gold/20 relative overflow-hidden text-center group">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sfs-gold to-transparent opacity-40"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-sfs-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-sfs-gold/20">
                <Mail size={32} className="text-sfs-gold" />
              </div>
              <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Didn't find what you're looking for?</h4>
              <p className="text-slate-400 font-medium mb-12">
                If you believe your skills can add value to our mission, we'd love to hear from you. Drop your CV in our general talent pool.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <button className="px-12 py-5 bg-sfs-gold text-sfs-green-950 font-bold rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-sfs-gold/20">
                    Send General Application
                 </button>
                 <div className="flex items-center gap-3 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                    <Phone size={14} /> HR Helpline: +91 12345 67890
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer minimal info */}
      <footer className="container mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-600 uppercase tracking-widest gap-6">
         <p>© {new Date().getFullYear()} SFS School Kodani • Recruitment Division</p>
         <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Employment Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
         </div>
      </footer>
    </div>
  );
};

export default Careers;