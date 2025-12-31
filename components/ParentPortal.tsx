import React, { useState } from 'react';
import { X, Lock, CreditCard, FileText, MessageCircle, Activity, Fingerprint, ShieldCheck, ArrowLeft, RefreshCw } from 'lucide-react';

interface ParentPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ParentPortal: React.FC<ParentPortalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [credentials, setCredentials] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to send OTP
    setTimeout(() => {
      setIsOtpSent(true);
      setIsLoading(false);
    }, 1200);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to verify OTP
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setIsOtpSent(false);
    setOtp('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-sfs-green-950/80 backdrop-blur-md" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-sfs-green-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all"
        >
          <X size={24} />
        </button>

        {!isLoggedIn ? (
          // Login View
          <div className="flex flex-col md:flex-row w-full">
            {/* Left Side: Visual */}
            <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-sfs-green-800 to-sfs-green-950 items-center justify-center p-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sfs-gold to-transparent opacity-50"></div>
               <div className="text-center relative z-10">
                 <div className="h-20 w-20 bg-sfs-gold/10 rounded-2xl mx-auto flex items-center justify-center mb-6 border border-sfs-gold/30 shadow-[0_0_30px_rgba(245,158,11,0.15)] animate-pulse">
                    <ShieldCheck size={32} className="text-sfs-gold" />
                 </div>
                 <h2 className="text-3xl font-display font-bold text-white mb-2 text-center leading-tight">SFS School Kodani Portal</h2>
                 <p className="text-slate-400 text-sm max-w-xs mx-auto">
                   Secure end-to-end encrypted access to your child's academic footprint and school services.
                 </p>
               </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-sfs-green-900 relative">
              
              {!isOtpSent ? (
                // Step 1: Credentials
                <div className="animate-in slide-in-from-right-4 duration-300">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-1">Parent Identity</h3>
                    <p className="text-slate-500 text-sm">Enter registered details to receive access code</p>
                  </div>

                  <form onSubmit={handleSendOtp} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Mobile or Email</label>
                      <input 
                        type="text" 
                        placeholder="+91 98765 43210" 
                        value={credentials}
                        onChange={(e) => setCredentials(e.target.value)}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-sfs-gold/50 focus:ring-1 focus:ring-sfs-gold/50 transition-all font-medium"
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="group w-full bg-sfs-gold hover:bg-white text-sfs-green-950 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-sfs-gold/10"
                    >
                      {isLoading ? (
                        <RefreshCw size={20} className="animate-spin" />
                      ) : (
                        <>
                          <span>SEND ACCESS CODE</span>
                          <Fingerprint size={18} className="group-hover:scale-110 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                // Step 2: OTP Verification
                <div className="animate-in slide-in-from-right-4 duration-300">
                  <button 
                    onClick={handleReset}
                    className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors mb-6"
                  >
                    <ArrowLeft size={14} /> Change Number
                  </button>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-1">Verify Identity</h3>
                    <p className="text-slate-500 text-sm">A 6-digit code has been sent to <span className="text-white font-bold">{credentials}</span></p>
                  </div>

                  <form onSubmit={handleVerifyOtp} className="space-y-6">
                    <div>
                      <div className="flex justify-between items-end mb-3">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">6-Digit OTP</label>
                        <button type="button" className="text-[10px] font-bold text-sfs-gold hover:text-white uppercase tracking-widest">Resend Code</button>
                      </div>
                      <input 
                        type="text" 
                        maxLength={6}
                        placeholder="0 0 0 0 0 0" 
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white text-center text-2xl tracking-[0.5em] font-display focus:outline-none focus:border-sfs-gold transition-all"
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isLoading || otp.length < 6}
                      className={`group w-full py-4 rounded-xl transition-all flex items-center justify-center gap-3 font-bold shadow-xl ${
                        otp.length === 6 
                        ? 'bg-sfs-gold text-sfs-green-950 hover:bg-white shadow-sfs-gold/10' 
                        : 'bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed'
                      }`}
                    >
                      {isLoading ? (
                        <RefreshCw size={20} className="animate-spin" />
                      ) : (
                        <>
                          <span>VERIFY & LOGIN</span>
                          <Lock size={18} className="group-hover:scale-110 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              <div className="mt-12 text-center">
                 <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em] max-w-[200px] mx-auto leading-relaxed">
                   Authorized parent/guardian access only.
                 </p>
              </div>
            </div>
          </div>
        ) : (
          // Dashboard View (Remains same but optimized)
          <div className="w-full bg-sfs-green-900 flex flex-col animate-in fade-in duration-500">
            {/* Dashboard Header */}
            <div className="p-6 md:px-8 border-b border-white/5 flex items-center justify-between bg-sfs-green-800/50 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-sfs-gold to-yellow-600 p-[2px] shadow-lg">
                   <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl w-full h-full object-cover border-2 border-sfs-green-900" alt="Student" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Arjun Sharma</h3>
                  <p className="text-[10px] font-bold text-sfs-gold uppercase tracking-widest">Class 10-B • Roll No. 42</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsOtpSent(false);
                  setOtp('');
                }} 
                className="px-4 py-2 bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-xs font-bold text-slate-400 rounded-lg transition-all border border-white/5"
              >
                Logout
              </button>
            </div>

            {/* Dashboard Grid */}
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
              {/* Attendance */}
              <div className="glass-card rounded-2xl p-6 border-white/5 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:scale-110 transition-transform">
                    <Activity size={24} />
                  </div>
                  <span className="text-3xl font-display font-bold text-white">96%</span>
                </div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Attendance</h4>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[96%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase mt-3">Current Term Performance</p>
              </div>

              {/* Fee Gateway */}
              <div className="glass-card rounded-2xl p-6 border-white/5 group">
                 <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 group-hover:scale-110 transition-transform">
                    <CreditCard size={24} />
                  </div>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-[10px] font-bold rounded-lg border border-orange-500/20 uppercase tracking-widest">DUE</span>
                </div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Term 2 Fees</h4>
                <p className="text-white font-display font-bold text-2xl">₹ 12,500</p>
                <button className="w-full mt-5 py-3 bg-sfs-gold hover:bg-white text-sfs-green-950 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest shadow-lg shadow-sfs-gold/10">
                  Secure Checkout
                </button>
              </div>

              {/* Reports */}
              <div className="glass-card rounded-2xl p-6 border-white/5 group">
                 <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                    <FileText size={24} />
                  </div>
                </div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Academic Reports</h4>
                 <div className="space-y-3">
                   <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl hover:bg-white/5 cursor-pointer border border-transparent hover:border-blue-500/30 transition-all">
                     <span className="text-xs font-medium text-slate-300">Term 1 Final Result</span>
                     <span className="text-[10px] font-bold text-sfs-gold uppercase">PDF</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl hover:bg-white/5 cursor-pointer border border-transparent hover:border-blue-500/30 transition-all">
                     <span className="text-xs font-medium text-slate-300">Monthly Progress Tracking</span>
                     <span className="text-[10px] font-bold text-sfs-gold uppercase">PDF</span>
                   </div>
                 </div>
              </div>

               {/* Messages */}
              <div className="glass-card rounded-2xl p-6 border-white/5 group">
                 <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex gap-1">
                     <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                     <span className="text-[10px] font-bold text-red-500 uppercase">New</span>
                  </div>
                </div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Class Teacher</h4>
                <p className="text-sm text-white font-medium mb-4 line-clamp-2 leading-relaxed">
                  "Please remind Arjun to submit his Science project topic by Friday..."
                </p>
                <button className="text-[10px] font-bold text-purple-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2">
                  Open Inbox <ArrowLeft size={12} className="rotate-180" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentPortal;