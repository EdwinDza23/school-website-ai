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
  AlertCircle
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-sfs-green-950 flex items-center justify-center p-6">
        <div className="max-w-lg w-full glass-card p-12 rounded-[48px] text-center border-sfs-gold/20 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          <div className="w-20 h-20 bg-sfs-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-sfs-gold/30">
            <CheckCircle className="text-sfs-gold" size={48} />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">Application Submitted!</h2>
          <p className="text-slate-400 mb-8">
            Thank you for choosing SFS School Kodani.
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
    <div className="min-h-screen bg-sfs-green-950 pb-20">
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
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 pt-28 mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold text-sfs-gold uppercase tracking-widest">Step {step} of {totalSteps}</span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{Math.round((step/totalSteps)*100)}% Complete</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-sfs-gold transition-all duration-500" style={{ width: `${(step/totalSteps)*100}%` }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-2 bg-sfs-gold/10 rounded-8 text-sfs-gold"><User size={24} /></div>
                 <h2 className="text-2xl font-display font-bold text-white">Student Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="col-span-full">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                  <input type="text" name="studentName" required value={formData.studentName} onChange={handleInputChange} placeholder="Arjun Sharma" className="w-full bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3.5 text-white focus:outline-none transition-all" />
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Grade</label>
                  <select name="grade" required value={formData.grade} onChange={handleInputChange} className="w-full appearance-none bg-sfs-green-900 border border-white/10 rounded-12 px-4 py-3.5 text-white focus:outline-none transition-all cursor-pointer">
                    <option value="" className="bg-sfs-green-950">Select Grade</option>
                    {['LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(g => <option key={g} value={g} className="bg-sfs-green-950">{g}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3.5 text-sfs-gold pointer-events-none" size={18} />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center gap-4 pt-8">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="w-full md:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-12 border border-white/10 flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs">
                <ChevronLeft size={18} /> Back
              </button>
            )}
            <button type="submit" className="flex-1 w-full py-4 bg-sfs-gold hover:bg-sfs-gold-400 text-sfs-green-950 font-bold rounded-12 flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs shadow-xl shadow-sfs-gold/20">
              <span>{step === totalSteps ? 'Submit Application' : 'Next Step'}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;