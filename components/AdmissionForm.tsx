
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  Check, 
  X, 
  FileText, 
  User, 
  Heart, 
  MapPin, 
  ShieldCheck,
  CheckCircle,
  Save,
  ArrowLeft,
  ChevronDown,
  Calendar,
  Trash2,
  FileUp,
  AlertCircle,
  Briefcase,
  Home,
  BookOpen,
  Info
} from 'lucide-react';

interface AdmissionFormProps {
  onClose: () => void;
}

const AdmissionForm: React.FC<AdmissionFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadModal, setUploadModal] = useState<{ isOpen: boolean; docName: string }>({ isOpen: false, docName: '' });
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: { name: string, size: string } }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<any>({
    academicYear: '2025-26',
    grade: '',
    studentName: '',
    gender: '',
    dob: '',
    nationality: 'Indian',
    religion: '',
    motherTongue: '',
    prevSchool: '',
    fatherName: '',
    fatherMobile: '',
    fatherEmail: '',
    motherName: '',
    motherMobile: '',
    address: '',
    pincode: '',
    bloodGroup: '',
    transportRequired: 'No',
    hostelRequired: 'No',
    consent: false
  });

  const totalSteps = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev: any) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsSubmitted(true);
    }
  };

  const prevStep = () => {
    setStep(Math.max(1, step - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && uploadModal.docName) {
      const fileSize = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
      setUploadedFiles(prev => ({
        ...prev,
        [uploadModal.docName]: { name: file.name, size: fileSize }
      }));
      setUploadModal({ isOpen: false, docName: '' });
    }
  };

  const removeFile = (docName: string) => {
    setUploadedFiles(prev => {
      const newState = { ...prev };
      delete newState[docName];
      return newState;
    });
  };

  const requiredDocs = [
    "Student's Aadhaar Card",
    "Birth Certificate",
    "Passport Size Photograph",
    "Previous School TC (If applicable)"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-sfs-green-950 flex items-center justify-center p-6">
        <div className="max-w-lg w-full glass-card p-12 rounded-[48px] text-center border-sfs-gold/20 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          <div className="w-20 h-20 bg-sfs-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-sfs-gold/30">
            <CheckCircle className="text-sfs-gold" size={48} />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">Application Submitted!</h2>
          <p className="text-slate-400 mb-8">
            Thank you for choosing SFS School Kodani. Your application ID is <span className="text-sfs-gold font-bold">SFS-2025-{Math.floor(1000 + Math.random() * 9000)}</span>.
          </p>
          <button 
            onClick={onClose}
            className="w-full py-4 bg-sfs-gold text-sfs-green-950 font-bold rounded-12 shadow-xl shadow-sfs-gold/20"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sfs-green-950 pb-20 selection:bg-sfs-gold selection:text-sfs-green-950">
      <header className="fixed top-0 left-0 right-0 z-50 bg-sfs-green-900/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button onClick={onClose} className="flex items-center gap-2 text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={18} /> Exit Form
          </button>
          <div className="flex flex-col items-center">
             <h1 className="font-display font-bold text-white leading-none">Admission Portal</h1>
             <span className="text-[10px] text-sfs-gold font-bold tracking-widest uppercase mt-1">SFS School Kodani</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
             <div className="w-2 h-2 bg-sfs-gold rounded-full animate-pulse"></div> Autosaved
          </div>
        </div>
      </header>

      {/* Shared Upload Modal */}
      {uploadModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-sfs-green-950/80 backdrop-blur-sm" onClick={() => setUploadModal({ isOpen: false, docName: '' })}></div>
          <div className="relative w-full max-w-md bg-sfs-green-900 border border-sfs-gold/20 rounded-24 p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-sfs-gold/10 rounded-16 flex items-center justify-center mx-auto mb-4 border border-sfs-gold/20">
                <FileUp className="text-sfs-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Upload Document</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">{uploadModal.docName}</p>
            </div>

            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/10 rounded-16 p-10 flex flex-col items-center justify-center cursor-pointer hover:border-sfs-gold/40 hover:bg-white/5 transition-all group"
            >
              <Upload className="text-slate-600 group-hover:text-sfs-gold mb-4 transition-colors" size={40} />
              <p className="text-sm text-slate-400 font-medium text-center">Click to browse or drag & drop</p>
              <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} />
            </div>
            
            <button 
              onClick={() => setUploadModal({ isOpen: false, docName: '' })}
              className="w-full mt-6 py-3 text-slate-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="container mx-auto px-6 pt-28 mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-widest">Step {step} of {totalSteps}</span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{Math.round((step/totalSteps)*100)}% Complete</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-sfs-gold transition-all duration-500 shadow-[0_0_10px_#f59e0b]" style={{ width: `${(step/totalSteps)*100}%` }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* STEP 1: STUDENT INFORMATION */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-2 bg-sfs-gold/10 rounded-8 text-sfs-gold"><User size={24} /></div>
                 <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Student Profile</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="col-span-full">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name (As per Aadhar)</label>
                  <input type="text" name="studentName" required value={formData.studentName} onChange={handleInputChange} placeholder="e.g. Arjun Sharma" className="w-full bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3.5 text-white focus:outline-none focus:border-sfs-gold/50 transition-all" />
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Grade Applied For</label>
                  <select name="grade" required value={formData.grade} onChange={handleInputChange} className="w-full appearance-none bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3.5 text-white focus:outline-none transition-all cursor-pointer">
                    <option value="" className="bg-sfs-green-950">Select Grade</option>
                    {['LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(g => <option key={g} value={g} className="bg-sfs-green-950">{g}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3.5 text-sfs-gold pointer-events-none" size={18} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Date of Birth</label>
                  <input type="date" name="dob" required value={formData.dob} onChange={handleInputChange} className="w-full bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3.5 text-white focus:outline-none transition-all" />
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Gender</label>
                  <select name="gender" required value={formData.gender} onChange={handleInputChange} className="w-full appearance-none bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3.5 text-white focus:outline-none transition-all cursor-pointer">
                    <option value="" className="bg-sfs-green-950">Select Gender</option>
                    <option value="Male" className="bg-sfs-green-950">Male</option>
                    <option value="Female" className="bg-sfs-green-950">Female</option>
                    <option value="Other" className="bg-sfs-green-950">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3.5 text-sfs-gold pointer-events-none" size={18} />
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Blood Group</label>
                  <select name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} className="w-full appearance-none bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3.5 text-white focus:outline-none transition-all cursor-pointer">
                    <option value="" className="bg-sfs-green-950">Select Group</option>
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => <option key={bg} value={bg} className="bg-sfs-green-950">{bg}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3.5 text-sfs-gold pointer-events-none" size={18} />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PARENT INFORMATION */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-2 bg-sfs-gold/10 rounded-8 text-sfs-gold"><Briefcase size={24} /></div>
                 <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Family Nexus</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Father's Info */}
                <div className="space-y-6 p-6 bg-white/[0.02] rounded-24 border border-white/5">
                  <h3 className="text-xs font-bold text-sfs-gold uppercase tracking-[0.2em] mb-4">Father / Guardian</h3>
                  <div className="space-y-4">
                    <input type="text" name="fatherName" required value={formData.fatherName} onChange={handleInputChange} placeholder="Father's Full Name" className="w-full bg-black/20 border border-white/10 rounded-12 px-4 py-3 text-white focus:outline-none focus:border-sfs-gold/50" />
                    <input type="tel" name="fatherMobile" required value={formData.fatherMobile} onChange={handleInputChange} placeholder="Mobile Number" className="w-full bg-black/20 border border-white/10 rounded-12 px-4 py-3 text-white focus:outline-none focus:border-sfs-gold/50" />
                    <input type="email" name="fatherEmail" value={formData.fatherEmail} onChange={handleInputChange} placeholder="Email Address" className="w-full bg-black/20 border border-white/10 rounded-12 px-4 py-3 text-white focus:outline-none focus:border-sfs-gold/50" />
                  </div>
                </div>
                {/* Mother's Info */}
                <div className="space-y-6 p-6 bg-white/[0.02] rounded-24 border border-white/5">
                  <h3 className="text-xs font-bold text-sfs-gold uppercase tracking-[0.2em] mb-4">Mother / Guardian</h3>
                  <div className="space-y-4">
                    <input type="text" name="motherName" required value={formData.motherName} onChange={handleInputChange} placeholder="Mother's Full Name" className="w-full bg-black/20 border border-white/10 rounded-12 px-4 py-3 text-white focus:outline-none focus:border-sfs-gold/50" />
                    <input type="tel" name="motherMobile" required value={formData.motherMobile} onChange={handleInputChange} placeholder="Mobile Number" className="w-full bg-black/20 border border-white/10 rounded-12 px-4 py-3 text-white focus:outline-none focus:border-sfs-gold/50" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: LOGISTICS & HISTORY */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-2 bg-sfs-gold/10 rounded-8 text-sfs-gold"><Home size={24} /></div>
                 <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Logistics & Background</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Permanent Residential Address</label>
                  <textarea name="address" required value={formData.address} onChange={handleInputChange} rows={3} placeholder="Complete address with landmarks..." className="w-full bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3 text-white focus:outline-none transition-all resize-none"></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Pincode</label>
                    <input type="text" name="pincode" required value={formData.pincode} onChange={handleInputChange} placeholder="581 423" className="w-full bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3 text-white focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Previous School (If any)</label>
                    <input type="text" name="prevSchool" value={formData.prevSchool} onChange={handleInputChange} placeholder="School Name, City" className="w-full bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3 text-white focus:outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 bg-white/[0.02] rounded-24 border border-white/5">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Transport Facility</label>
                    <div className="flex gap-4">
                       {['Yes', 'No'].map(opt => (
                         <label key={opt} className={`flex-1 py-3 px-4 rounded-12 border cursor-pointer transition-all text-center font-bold text-xs ${formData.transportRequired === opt ? 'bg-sfs-gold text-sfs-green-950 border-sfs-gold' : 'bg-black/20 border-white/10 text-slate-400 hover:border-white/20'}`}>
                           <input type="radio" name="transportRequired" value={opt} checked={formData.transportRequired === opt} onChange={handleInputChange} className="hidden" />
                           {opt}
                         </label>
                       ))}
                    </div>
                  </div>
                  <div className="p-6 bg-white/[0.02] rounded-24 border border-white/5">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Hostel Facility</label>
                    <div className="flex gap-4">
                       {['Yes', 'No'].map(opt => (
                         <label key={opt} className={`flex-1 py-3 px-4 rounded-12 border cursor-pointer transition-all text-center font-bold text-xs ${formData.hostelRequired === opt ? 'bg-sfs-gold text-sfs-green-950 border-sfs-gold' : 'bg-black/20 border-white/10 text-slate-400 hover:border-white/20'}`}>
                           <input type="radio" name="hostelRequired" value={opt} checked={formData.hostelRequired === opt} onChange={handleInputChange} className="hidden" />
                           {opt}
                         </label>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: DOCUMENT VAULT */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-2 bg-sfs-gold/10 rounded-8 text-sfs-gold"><BookOpen size={24} /></div>
                 <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Document Vault</h2>
              </div>
              <div className="grid gap-4">
                {requiredDocs.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] rounded-24 border border-white/10 group hover:border-sfs-gold/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${uploadedFiles[doc] ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-600'}`}>
                        {uploadedFiles[doc] ? <CheckCircle size={20} /> : <FileText size={20} />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{doc}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">{uploadedFiles[doc] ? `${uploadedFiles[doc].name} • ${uploadedFiles[doc].size}` : 'Action Required'}</p>
                      </div>
                    </div>
                    {uploadedFiles[doc] ? (
                      <button type="button" onClick={() => removeFile(doc)} className="p-2 text-slate-500 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
                    ) : (
                      <button type="button" onClick={() => setUploadModal({ isOpen: true, docName: doc })} className="px-5 py-2.5 bg-sfs-gold/10 text-sfs-gold border border-sfs-gold/30 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-sfs-gold hover:text-sfs-green-950 transition-all">Upload</button>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-16 flex gap-4">
                 <AlertCircle size={20} className="text-orange-500 shrink-0" />
                 <p className="text-xs text-orange-200/80 leading-relaxed">
                   Please ensure all documents are clear and legible. Original documents must be presented at the school office during the final interaction.
                 </p>
              </div>
            </div>
          )}

          {/* STEP 5: FINAL VALIDATION */}
          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-2 bg-sfs-gold/10 rounded-8 text-sfs-gold"><ShieldCheck size={24} /></div>
                 <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Final Validation</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-6 p-8 bg-white/[0.03] rounded-32 border border-white/10">
                    <h3 className="text-xs font-bold text-sfs-gold uppercase tracking-[0.3em] border-b border-white/5 pb-4 mb-6">Review Summary</h3>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Student</span>
                          <span className="text-sm font-bold text-white">{formData.studentName || 'N/A'}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Grade</span>
                          <span className="text-sm font-bold text-white">{formData.grade || 'N/A'}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Father</span>
                          <span className="text-sm font-bold text-white">{formData.fatherName || 'N/A'}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Location</span>
                          <span className="text-sm font-bold text-white">{formData.pincode || 'N/A'}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Documents</span>
                          <span className="text-sm font-bold text-emerald-400">{Object.keys(uploadedFiles).length} Uploaded</span>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-6 flex flex-col justify-center">
                    <div className="p-8 bg-sfs-gold/10 border border-sfs-gold/20 rounded-32 space-y-4">
                       <h4 className="text-white font-bold flex items-center gap-2"><Info size={18} className="text-sfs-gold" /> Declaration</h4>
                       <p className="text-xs text-slate-300 leading-relaxed">
                         I hereby declare that the information provided is true and correct to the best of my knowledge. I understand that any false information may lead to the cancellation of the application.
                       </p>
                       <label className="flex items-start gap-3 pt-4 cursor-pointer group">
                          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="mt-1 accent-sfs-gold" />
                          <span className="text-[11px] font-bold text-white uppercase tracking-tight group-hover:text-sfs-gold transition-colors">I accept the terms & conditions of SFS School Kodani Admission Process</span>
                       </label>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {/* SHARED NAVIGATION BUTTONS */}
          <div className="flex flex-col md:flex-row items-center gap-4 pt-12">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="w-full md:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-12 border border-white/10 flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-[10px]">
                <ChevronLeft size={18} /> Back
              </button>
            )}
            <button 
              type="submit" 
              disabled={step === totalSteps && !formData.consent}
              className={`flex-1 w-full py-4 font-bold rounded-12 flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-[10px] shadow-xl ${
                step === totalSteps && !formData.consent 
                ? 'bg-white/5 text-slate-600 border border-white/5 cursor-not-allowed shadow-none' 
                : 'bg-sfs-gold hover:bg-white text-sfs-green-950 shadow-sfs-gold/20'
              }`}
            >
              <span>{step === totalSteps ? 'Finalize & Submit' : 'Continue'}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* FOOTER INFO */}
      <div className="container mx-auto px-6 mt-16 text-center">
         <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.4em]">SFS-PORTAL-V2.5 • SECURE ADMISSION MODULE</p>
      </div>
    </div>
  );
};

export default AdmissionForm;
