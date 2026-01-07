
import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  CreditCard, 
  FileText, 
  Activity, 
  ShieldCheck, 
  ArrowLeft, 
  RefreshCw, 
  Phone,
  ChevronRight,
  Download,
  Calendar,
  Bell,
  ChevronDown,
  User,
  Info,
  Clock,
  AlertTriangle,
  Award,
  BookOpen,
  CalendarDays,
  Settings,
  MessageSquare,
  Check,
  CircleDashed,
  CheckCircle2
} from 'lucide-react';

interface ParentPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ScreenState = 'login' | 'otp' | 'selectChild' | 'dashboard' | 'reports' | 'notices' | 'performance' | 'attendance' | 'notifications' | 'remarks';

interface Child {
  id: number;
  name: string;
  class: string;
  roll: number;
  img: string;
  attendance: string;
  feesStatus: 'PAID' | 'DUE';
}

interface SubjectResult {
  subject: string;
  marks: number;
  total: number;
  grade: string;
}

interface AssessmentData {
  status: 'COMPLETED' | 'PENDING';
  results: SubjectResult[];
}

interface MonthlyAttendance {
  month: string;
  percentage: number;
  daysPresent: number;
  workingDays: number;
}

interface Notice {
  id: number;
  title: string;
  category: 'Exam' | 'Fees' | 'General';
  timestamp: string;
  message: string;
}

interface TeacherRemark {
  id: number;
  teacher: string;
  date: string;
  subject: string;
  text: string;
}

const ParentPortal: React.FC<ParentPortalProps> = ({ isOpen, onClose }) => {
  const [screen, setScreen] = useState<ScreenState>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const [isChildDropdownOpen, setIsChildDropdownOpen] = useState(false);
  
  // Performance View State
  const [activeTerm, setActiveTerm] = useState<'Term 1' | 'Term 2'>('Term 1');
  const [activeAssessment, setActiveAssessment] = useState<string>('FA 1');
  const [isTermSelectOpen, setIsTermSelectOpen] = useState(false);
  const [isAssessmentSelectOpen, setIsAssessmentSelectOpen] = useState(false);

  // Notification Toggles
  const [notifSettings, setNotifSettings] = useState({
    fees: true,
    exams: true,
    announcements: true
  });

  const children: Child[] = [
    {
      id: 1,
      name: "Arjun S. Kumar",
      class: "Class 10 - B",
      roll: 42,
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&h=200&auto=format&fit=crop",
      attendance: "96%",
      feesStatus: "DUE"
    },
    {
      id: 2,
      name: "Ananya S. Kumar",
      class: "Class 6 - A",
      roll: 12,
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&auto=format&fit=crop",
      attendance: "92%",
      feesStatus: "PAID"
    }
  ];

  const termMap = {
    'Term 1': ['FA 1', 'FA 2', 'SA 1'],
    'Term 2': ['FA 3', 'FA 4', 'Final Exam']
  };

  const performanceData: Record<string, Record<string, AssessmentData>> = {
    'Term 1': {
      'FA 1': {
        status: 'COMPLETED',
        results: [
          { subject: 'Mathematics', marks: 23, total: 25, grade: 'A+' },
          { subject: 'Science', marks: 21, total: 25, grade: 'A' },
          { subject: 'English', marks: 24, total: 25, grade: 'A+' }
        ]
      },
      'FA 2': {
        status: 'COMPLETED',
        results: [
          { subject: 'Mathematics', marks: 22, total: 25, grade: 'A' },
          { subject: 'Science', marks: 24, total: 25, grade: 'A+' },
          { subject: 'English', marks: 23, total: 25, grade: 'A' }
        ]
      },
      'SA 1': {
        status: 'COMPLETED',
        results: [
          { subject: 'Mathematics', marks: 92, total: 100, grade: 'A+' },
          { subject: 'Science', marks: 88, total: 100, grade: 'A' },
          { subject: 'English', marks: 95, total: 100, grade: 'A+' }
        ]
      }
    },
    'Term 2': {
      'FA 3': {
        status: 'COMPLETED',
        results: [
          { subject: 'Mathematics', marks: 24, total: 25, grade: 'A+' },
          { subject: 'Science', marks: 22, total: 25, grade: 'A' },
          { subject: 'English', marks: 23, total: 25, grade: 'A' }
        ]
      },
      'FA 4': {
        status: 'PENDING',
        results: []
      },
      'Final Exam': {
        status: 'PENDING',
        results: []
      }
    }
  };

  const teacherRemarks: Record<number, TeacherRemark[]> = {
    1: [
      { id: 101, teacher: "Mr. Ramesh Hegde", date: "Feb 12, 2025", subject: "Class Teacher", text: "Arjun is showing consistent focus in his Science projects. He has shown leadership qualities in group activities this month." },
      { id: 102, teacher: "Ms. Savitha Bhat", date: "Jan 20, 2025", subject: "Science Dept", text: "Exceptional performance in the mid-term practicals. Keep up the analytical approach." }
    ],
    2: [
      { id: 201, teacher: "Ms. Deepa Naik", date: "Feb 10, 2025", subject: "Class Teacher", text: "Ananya is very regular with her assignments. Her participation in the Literary Club is commendable." }
    ]
  };

  const attendanceDetails: Record<number, MonthlyAttendance[]> = {
    1: [
      { month: 'June', percentage: 100, daysPresent: 22, workingDays: 22 },
      { month: 'July', percentage: 98, daysPresent: 24, workingDays: 25 },
      { month: 'August', percentage: 82, daysPresent: 18, workingDays: 22 },
      { month: 'September', percentage: 95, daysPresent: 21, workingDays: 22 }
    ],
    2: [
      { month: 'June', percentage: 95, daysPresent: 21, workingDays: 22 },
      { month: 'July', percentage: 92, daysPresent: 23, workingDays: 25 }
    ]
  };

  const notices: Notice[] = [
    {
      id: 1,
      title: "Science Fair Models Submission",
      category: "General",
      timestamp: "Today, 09:30 AM",
      message: "Final term science fair models must be submitted to the innovation hub by Friday. Ensure labeling is complete with student ID."
    }
  ];

  useEffect(() => {
    let interval: any;
    if (screen === 'otp' && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [screen, timer]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setScreen('otp');
      setTimer(30);
      setIsLoading(false);
    }, 1000);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setScreen('selectChild');
      setIsLoading(false);
    }, 1200);
  };

  const currentChild = children[selectedChildIndex];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-sfs-green-950/90 backdrop-blur-xl" onClick={onClose} />

      <div className="relative w-full h-full md:h-auto md:max-w-[400px] md:aspect-[9/19.5] bg-sfs-green-900 border-x border-white/5 md:rounded-6 shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 duration-500">
        
        {/* Universal Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/5 bg-sfs-green-950/50">
          {['reports', 'notices', 'performance', 'attendance', 'notifications', 'remarks'].includes(screen) ? (
            <button onClick={() => setScreen('dashboard')} className="p-2 text-slate-400">
              <ArrowLeft size={20} />
            </button>
          ) : screen === 'selectChild' ? (
            <button onClick={() => setScreen('otp')} className="p-2 text-slate-400">
              <ArrowLeft size={20} />
            </button>
          ) : <div className="w-9" />}
          
          <div className="flex flex-col items-center">
             <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-[0.3em]">Parent Portal</span>
             {['dashboard', 'reports', 'notices', 'performance', 'attendance', 'notifications', 'remarks'].includes(screen) && (
               <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">SFS School Kodani</span>
             )}
          </div>

          <button onClick={onClose} className="p-2 text-slate-400">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col bg-sfs-green-950/20">
          
          {/* SCREEN 1: LOGIN */}
          {screen === 'login' && (
            <div className="p-8 flex flex-col justify-center flex-1 animate-in fade-in duration-300">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-sfs-gold/10 rounded-6 flex items-center justify-center mx-auto mb-6 border border-sfs-gold/20">
                   <ShieldCheck className="text-sfs-gold" size={32} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">Login</h2>
                <p className="text-slate-500 text-sm">Enter mobile number to continue</p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-black/20 border border-white/10 rounded-6 pl-12 pr-4 py-4 text-white focus:outline-none focus:border-sfs-gold/50"
                    />
                  </div>
                </div>
                <button type="submit" disabled={isLoading} className="w-full py-4 bg-sfs-gold text-sfs-green-950 font-bold rounded-6 uppercase tracking-widest text-xs flex items-center justify-center gap-3 active:scale-95 transition-transform">
                  {isLoading ? <RefreshCw className="animate-spin" size={18} /> : "Send OTP"}
                </button>
              </form>
            </div>
          )}

          {/* SCREEN 2: OTP VERIFICATION */}
          {screen === 'otp' && (
            <div className="p-8 flex flex-col justify-center flex-1 animate-in slide-in-from-right-10 duration-300">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-sfs-gold/10 rounded-6 flex items-center justify-center mx-auto mb-6 border border-sfs-gold/20">
                   <Lock className="text-sfs-gold" size={32} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">Verification</h2>
                <p className="text-slate-500 text-sm">Sent to <span className="text-white font-medium">{phone}</span></p>
              </div>

              <form onSubmit={handleVerifyOtp} className="space-y-8">
                <input 
                  type="text" 
                  maxLength={6}
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-black/20 border border-white/10 rounded-6 py-6 text-center text-3xl font-display font-bold text-white tracking-[0.4em] focus:outline-none focus:border-sfs-gold"
                />
                <button type="submit" disabled={otp.length !== 6 || isLoading} className={`w-full py-4 rounded-6 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all ${otp.length === 6 ? 'bg-sfs-gold text-sfs-green-950' : 'bg-white/5 text-slate-600 border border-white/5'}`}>
                  {isLoading ? <RefreshCw className="animate-spin" size={18} /> : "Verify Code"}
                </button>
              </form>
            </div>
          )}

          {/* SCREEN 3: CHILD SELECTION */}
          {screen === 'selectChild' && (
            <div className="p-8 flex flex-col flex-1 animate-in fade-in duration-300">
              <div className="text-center mb-10">
                <h2 className="text-xl font-display font-bold text-white mb-2">Select Student</h2>
                <p className="text-slate-500 text-xs">Linked to your mobile number</p>
              </div>

              <div className="space-y-4">
                {children.map((child, idx) => (
                  <button 
                    key={child.id}
                    onClick={() => {
                      setSelectedChildIndex(idx);
                      setScreen('dashboard');
                    }}
                    className="w-full flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-6 hover:border-sfs-gold/30 hover:bg-white/[0.05] transition-all text-left"
                  >
                    <div className="w-14 h-14 rounded-6 overflow-hidden border border-white/10 shrink-0">
                      <img src={child.img} className="w-full h-full object-cover" alt={child.name} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{child.name}</h4>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{child.class} • Roll {child.roll}</p>
                    </div>
                    <ChevronRight size={16} className="ml-auto text-slate-600" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 4: DASHBOARD */}
          {screen === 'dashboard' && (
            <div className="p-6 space-y-6 animate-in fade-in duration-500">
              {/* CHILD SWITCHER COMPONENT */}
              <div className="relative">
                <button 
                  onClick={() => setIsChildDropdownOpen(!isChildDropdownOpen)}
                  className="w-full flex items-center gap-4 p-4 bg-white/[0.05] border border-white/10 rounded-6 transition-all hover:bg-white/[0.08]"
                >
                  <div className="w-12 h-12 rounded-6 overflow-hidden border border-sfs-gold/20 shrink-0">
                    <img src={currentChild.img} className="w-full h-full object-cover" alt="Student" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-white font-bold text-sm">{currentChild.name}</h3>
                    <p className="text-[9px] font-bold text-sfs-gold uppercase tracking-[0.2em]">{currentChild.class}</p>
                  </div>
                  <ChevronDown size={16} className={`text-slate-500 transition-transform ${isChildDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isChildDropdownOpen && (
                  <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-sfs-green-900 border border-white/10 rounded-6 shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {children.map((child, idx) => (
                      <button 
                        key={child.id}
                        onClick={() => {
                          setSelectedChildIndex(idx);
                          setIsChildDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-3 text-left hover:bg-white/5 transition-colors ${selectedChildIndex === idx ? 'bg-sfs-gold/10' : ''}`}
                      >
                        <img src={child.img} className="w-8 h-8 rounded-6 object-cover" alt="" />
                        <span className={`text-xs font-bold ${selectedChildIndex === idx ? 'text-sfs-gold' : 'text-slate-300'}`}>{child.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* STATS SNAPSHOT */}
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setScreen('attendance')}
                  className="p-5 bg-white/[0.02] border border-white/5 rounded-6 flex flex-col justify-between text-left transition-all hover:bg-white/5 active:scale-95 group"
                >
                  <Activity size={18} className="text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-2xl font-display font-bold text-white">{currentChild.attendance}</span>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Attendance</p>
                  </div>
                </button>
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-6 flex flex-col justify-between">
                  <CreditCard size={18} className={`${currentChild.feesStatus === 'PAID' ? 'text-emerald-400' : 'text-orange-400'} mb-2`} />
                  <div>
                    <span className="text-2xl font-display font-bold text-white">{currentChild.feesStatus}</span>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Fee Status</p>
                  </div>
                </div>
              </div>

              {/* ACTION TILES */}
              <div className="grid grid-cols-1 gap-3">
                 <button onClick={() => setScreen('performance')} className="w-full flex items-center justify-between p-5 bg-white/[0.03] border border-white/5 rounded-6 hover:bg-white/[0.06] group transition-all">
                   <div className="flex items-center gap-4">
                     <Award size={20} className="text-sfs-gold" />
                     <div className="text-left">
                       <h4 className="text-white font-bold text-sm">Academic Performance</h4>
                       <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Grades & Marks</p>
                     </div>
                   </div>
                   <ChevronRight size={18} className="text-slate-600 group-hover:translate-x-1" />
                 </button>

                 <button onClick={() => setScreen('remarks')} className="w-full flex items-center justify-between p-5 bg-white/[0.03] border border-white/5 rounded-6 hover:bg-white/[0.06] group transition-all">
                   <div className="flex items-center gap-4">
                     <MessageSquare size={20} className="text-purple-400" />
                     <div className="text-left">
                       <h4 className="text-white font-bold text-sm">Teacher Remarks</h4>
                       <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Monthly Insights</p>
                     </div>
                   </div>
                   <ChevronRight size={18} className="text-slate-600 group-hover:translate-x-1" />
                 </button>

                 <button onClick={() => setScreen('reports')} className="w-full flex items-center justify-between p-5 bg-white/[0.03] border border-white/5 rounded-6 hover:bg-white/[0.06] group transition-all">
                   <div className="flex items-center gap-4">
                     <FileText size={20} className="text-emerald-400" />
                     <div className="text-left">
                       <h4 className="text-white font-bold text-sm">Academic Documents</h4>
                       <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Reports & Status</p>
                     </div>
                   </div>
                   <ChevronRight size={18} className="text-slate-600 group-hover:translate-x-1" />
                 </button>
              </div>

              {/* SECURITY AWARENESS FOOTER */}
              <div className="mt-8 space-y-3 px-2">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock size={12} />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Last login: Today, 10:12 AM</span>
                </div>
                <div className="p-3 bg-white/[0.01] border border-white/5 rounded-6 flex items-center gap-3">
                  <AlertTriangle size={14} className="text-slate-600" />
                  <p className="text-[8px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">
                    Account access restricted to registered devices.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 5: ACADEMIC PERFORMANCE (DRILL DOWN) */}
          {screen === 'performance' && (
            <div className="p-6 space-y-6 animate-in slide-in-from-right-10 duration-300">
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <Award size={18} className="text-sfs-gold" />
                   <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Academic Drilldown</h3>
                 </div>

                 {/* TERM & ASSESSMENT DROPDOWNS */}
                 <div className="grid grid-cols-2 gap-3">
                   {/* Term Selector */}
                   <div className="relative">
                      <button 
                        onClick={() => setIsTermSelectOpen(!isTermSelectOpen)}
                        className="w-full flex items-center justify-between p-3 bg-white/[0.05] border border-white/10 rounded-6 text-xs font-bold text-white transition-all hover:bg-white/[0.08]"
                      >
                        {activeTerm}
                        <ChevronDown size={14} className={`text-slate-500 transition-transform ${isTermSelectOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isTermSelectOpen && (
                        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-sfs-green-900 border border-white/10 rounded-6 shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                          {(['Term 1', 'Term 2'] as const).map(t => (
                            <button 
                              key={t}
                              onClick={() => {
                                setActiveTerm(t);
                                setActiveAssessment(termMap[t][0]);
                                setIsTermSelectOpen(false);
                              }}
                              className="w-full p-3 text-left text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-sfs-gold transition-colors"
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      )}
                   </div>

                   {/* Assessment Selector */}
                   <div className="relative">
                      <button 
                        onClick={() => setIsAssessmentSelectOpen(!isAssessmentSelectOpen)}
                        className="w-full flex items-center justify-between p-3 bg-white/[0.05] border border-white/10 rounded-6 text-xs font-bold text-white transition-all hover:bg-white/[0.08]"
                      >
                        {activeAssessment}
                        <ChevronDown size={14} className={`text-slate-500 transition-transform ${isAssessmentSelectOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAssessmentSelectOpen && (
                        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-sfs-green-900 border border-white/10 rounded-6 shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                          {termMap[activeTerm].map(a => (
                            <button 
                              key={a}
                              onClick={() => {
                                setActiveAssessment(a);
                                setIsAssessmentSelectOpen(false);
                              }}
                              className="w-full p-3 text-left text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-sfs-gold transition-colors"
                            >
                              {a}
                            </button>
                          ))}
                        </div>
                      )}
                   </div>
                 </div>
               </div>

               {/* RESULTS DISPLAY */}
               <div className="space-y-4">
                 {performanceData[activeTerm][activeAssessment].status === 'COMPLETED' ? (
                   performanceData[activeTerm][activeAssessment].results.map((res, idx) => (
                     <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-white">{res.subject}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-sfs-gold">{res.marks}/{res.total}</span>
                            <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded-6">{res.grade}</span>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-sfs-gold transition-all duration-1000"
                            style={{ width: `${(res.marks / res.total) * 100}%` }}
                          />
                        </div>
                     </div>
                   ))
                 ) : (
                   <div className="py-12 flex flex-col items-center justify-center text-center px-8 border-2 border-dashed border-white/5 rounded-12 bg-white/[0.01]">
                      <CircleDashed className="text-slate-700 mb-4 animate-spin-slow" size={32} />
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Assessment Pending</h4>
                      <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">Results for {activeAssessment} have not been published by the examination cell yet.</p>
                   </div>
                 )}
               </div>

               <div className="p-4 bg-white/[0.03] border border-white/10 rounded-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-sfs-gold/10 rounded-6 flex items-center justify-center text-sfs-gold">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Consolidated Report</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Class Average: 89.2%</p>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-slate-600" />
               </div>
            </div>
          )}

          {/* SCREEN 6: ATTENDANCE DETAILS */}
          {screen === 'attendance' && (
            <div className="p-6 space-y-6 animate-in slide-in-from-right-10 duration-300">
               <div className="flex items-center gap-3 mb-2">
                 <CalendarDays size={18} className="text-emerald-400" />
                 <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Attendance Breakdown</h3>
               </div>

               <div className="space-y-4">
                 {attendanceDetails[currentChild.id].map((att, idx) => (
                   <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white">{att.month}</span>
                          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{att.daysPresent} / {att.workingDays} Days</span>
                        </div>
                        <span className={`text-sm font-bold ${att.percentage < 85 ? 'text-orange-400' : 'text-emerald-400'}`}>
                          {att.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-700 ${att.percentage < 85 ? 'bg-orange-500' : 'bg-emerald-400'}`}
                          style={{ width: `${att.percentage}%` }}
                        />
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* SCREEN 7: NOTICES INBOX */}
          {screen === 'notices' && (
            <div className="p-6 space-y-6 animate-in slide-in-from-right-10 duration-300">
              <div className="flex items-center gap-3 mb-2">
                 <Bell size={18} className="text-blue-400" />
                 <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">School Circulars</h3>
              </div>

              <div className="space-y-4">
                {notices.map((notice) => (
                  <div key={notice.id} className="p-5 bg-white/[0.02] border border-white/5 rounded-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-0.5 rounded-6 text-[8px] font-bold uppercase tracking-widest ${
                        notice.category === 'Exam' ? 'bg-purple-500/20 text-purple-400' :
                        notice.category === 'Fees' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-sfs-gold/20 text-sfs-gold'
                      }`}>
                        {notice.category}
                      </span>
                      <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{notice.timestamp}</span>
                    </div>
                    <h4 className="text-white font-bold text-sm mb-2">{notice.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                      {notice.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 8: TEACHER REMARKS */}
          {screen === 'remarks' && (
            <div className="p-6 space-y-6 animate-in slide-in-from-right-10 duration-300">
               <div className="flex items-center gap-3 mb-2">
                 <MessageSquare size={18} className="text-purple-400" />
                 <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Educator Insights</h3>
               </div>

               <div className="space-y-4">
                 {teacherRemarks[currentChild.id]?.map((remark) => (
                   <div key={remark.id} className="p-5 bg-white/[0.02] border border-white/5 rounded-6">
                      <div className="flex justify-between items-start mb-4">
                         <div>
                            <h4 className="text-white font-bold text-sm">{remark.teacher}</h4>
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">{remark.subject}</p>
                         </div>
                         <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{remark.date}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-purple-400/30 pl-4 py-1">
                        "{remark.text}"
                      </p>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* SCREEN 9: NOTIFICATION PREFERENCES */}
          {screen === 'notifications' && (
            <div className="p-6 space-y-6 animate-in slide-in-from-right-10 duration-300">
               <div className="flex items-center gap-3 mb-2">
                 <Settings size={18} className="text-slate-400" />
                 <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Alert Preferences</h3>
               </div>

               <div className="space-y-1">
                  {[
                    { key: 'fees', label: 'Fee Dues & Receipts', desc: 'Updates on installments and pending fees.' },
                    { key: 'exams', label: 'Academic Alerts', desc: 'Schedules, results and performance reviews.' },
                    { key: 'announcements', label: 'Official Announcements', desc: 'Emergency notices and general updates.' }
                  ].map((setting) => (
                    <div key={setting.key} className="p-5 bg-white/[0.02] border border-white/5 rounded-6 flex items-center justify-between group">
                       <div className="flex-1 mr-4">
                          <h4 className="text-white font-bold text-sm mb-1">{setting.label}</h4>
                          <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{setting.desc}</p>
                       </div>
                       <button 
                         onClick={() => setNotifSettings(prev => ({ ...prev, [setting.key]: !prev[setting.key as keyof typeof notifSettings] }))}
                         className={`w-12 h-6 rounded-full p-1 transition-all duration-300 flex items-center ${notifSettings[setting.key as keyof typeof notifSettings] ? 'bg-sfs-gold' : 'bg-white/10'}`}
                       >
                          <div className={`w-4 h-4 rounded-full bg-sfs-green-950 transition-transform duration-300 flex items-center justify-center ${notifSettings[setting.key as keyof typeof notifSettings] ? 'translate-x-6' : 'translate-x-0'}`}>
                             {notifSettings[setting.key as keyof typeof notifSettings] && <Check size={8} className="text-sfs-gold" />}
                          </div>
                       </button>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {/* SCREEN 10: ACADEMIC DOCUMENTS & ASSESSMENT STATUS */}
          {screen === 'reports' && (
            <div className="p-6 space-y-6 animate-in slide-in-from-right-10 duration-300">
               <div className="flex items-center gap-3 mb-2">
                 <FileText size={18} className="text-emerald-400" />
                 <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Examination Status</h3>
               </div>

               {/* ASSESSMENT STATUS REPORT */}
               <div className="p-1 bg-white/[0.05] rounded-6 space-y-1 border border-white/5">
                 {([
                   { term: 'Term 1', id: 'FA 1' },
                   { term: 'Term 1', id: 'FA 2' },
                   { term: 'Term 1', id: 'SA 1' },
                   { term: 'Term 2', id: 'FA 3' },
                   { term: 'Term 2', id: 'FA 4' },
                   { term: 'Term 2', id: 'Final Exam' }
                 ]).map((item, idx) => {
                   const status = performanceData[item.term][item.id].status;
                   const isCompleted = status === 'COMPLETED';
                   
                   return (
                     <div key={idx} className="flex items-center justify-between p-4 bg-sfs-green-900/50 rounded-6 border border-white/5">
                       <div className="flex items-center gap-4">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${isCompleted ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-white/5 border-white/10 text-slate-600'}`}>
                            {isCompleted ? <CheckCircle2 size={16} /> : <CircleDashed size={16} />}
                         </div>
                         <div>
                            <h4 className="text-xs font-bold text-white">{item.id}</h4>
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{item.term}</p>
                         </div>
                       </div>
                       <div className="flex items-center gap-3">
                         <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-600 border border-white/5'}`}>
                           {status}
                         </span>
                         {isCompleted && (
                           <button className="p-2 text-slate-400 hover:text-sfs-gold transition-colors">
                              <Download size={14} />
                           </button>
                         )}
                       </div>
                     </div>
                   );
                 })}
               </div>

               <div className="p-4 bg-white/[0.02] border border-white/10 rounded-6">
                 <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Note</h4>
                 <p className="text-[10px] text-slate-600 leading-relaxed italic">
                   Documents for pending assessments will be available for download once the results are validated by the principal's office.
                 </p>
               </div>
            </div>
          )}

        </div>

        {/* Global Footer Security Badge */}
        {['dashboard', 'reports', 'notices', 'performance', 'attendance', 'remarks', 'notifications'].includes(screen) && (
          <div className="p-4 border-t border-white/5 bg-sfs-green-950/80 flex items-center justify-center gap-2">
            <ShieldCheck size={12} className="text-sfs-gold/40" />
            <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Secure Session Active</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentPortal;
