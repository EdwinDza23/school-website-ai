import React, { useState } from 'react';
import { ClipboardCheck, FileText, UserPlus, CheckCircle2, Download, Loader2, Check, X, ShieldCheck, Sparkles, FileUp } from 'lucide-react';
import { jsPDF } from 'https://esm.sh/jspdf';

interface AdmissionProps {
  onOpenForm: () => void;
}

const Admission: React.FC<AdmissionProps> = ({ onOpenForm }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const steps = [
    "Assembling Student Profile Data",
    "Generating Academic Schema",
    "Applying SFS Brand Architecture",
    "Optimizing Document Resolution",
    "Finalizing SFS School Kodani Export"
  ];

  const triggerPDFGeneration = () => {
    setShowPreview(true);
    setIsGenerating(true);
    
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        setGenStep(currentStep);
      } else {
        clearInterval(interval);
        generateActualPDF();
      }
    }, 700);
  };

  const generateActualPDF = () => {
    const doc = new jsPDF();
    let y = 0;

    // --- PAGE 1: INSPIRED BY "LESSON PLAN" BANNER ---
    // Top Graphic Header
    doc.setFillColor(0, 26, 22); // SFS Green-950
    doc.rect(0, 0, 210, 50, 'F');
    
    // Abstract shapes like the inspiration image
    doc.setFillColor(245, 158, 11); // SFS Gold
    doc.circle(200, 10, 20, 'F');
    doc.setFillColor(60, 40, 120); // Purple accent
    doc.rect(10, 10, 15, 5, 'F');
    doc.circle(180, 40, 5, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.text("Admission Form", 105, 30, { align: "center" });
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("S.F.S. ENGLISH MEDIUM SCHOOL, KODANI", 105, 40, { align: "center" });
    
    y = 60;

    // --- SUMMARY TABLE (INSPIRED BY "SUMMARY" IMAGE) ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(60, 40, 120); // Purple color for Section Headings
    doc.text("Summary", 20, y);
    
    y += 4;
    doc.setDrawColor(245, 158, 11); // Gold Border
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    
    y += 6;
    // Table Structure
    const summaryRows = [
      ["Current Date", new Date().toLocaleDateString()],
      ["Subject", "New Student Admission"],
      ["Year Group", "Academic Session 2026-27"],
      ["Main Topic", "Enrollment Application"],
      ["Subtopics", "Personal Info, Parent Details, Health"]
    ];

    summaryRows.forEach((row, i) => {
      // Row Background for odd rows
      if (i % 2 !== 0) {
        doc.setFillColor(252, 250, 242);
        doc.rect(20, y - 4, 170, 10, 'F');
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(row[0], 25, y + 2);
      
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 40, 120);
      doc.text(row[1], 80, y + 2);
      
      doc.setDrawColor(245, 158, 11);
      doc.line(20, y + 6, 190, y + 6);
      y += 10;
    });

    // --- LESSON OUTLINE STYLE TABLE ---
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(60, 40, 120);
    doc.text("Admission Outline", 20, y);
    
    y += 5;
    // Header Row with yellow background like "Lesson Outline"
    doc.setFillColor(245, 158, 11);
    doc.rect(20, y, 170, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text("Category", 35, y + 7.5, { align: "center" });
    doc.text("Information Required", 105, y + 7.5, { align: "center" });
    doc.text("Remarks", 167.5, y + 7.5, { align: "center" });

    y += 12;
    const detailFields = [
      ["Student Name", "_______________________", "As per Aadhar"],
      ["Class Applied", "_______________________", "LKG to 10th"],
      ["Date of Birth", "___ / ___ / _______", "DD/MM/YYYY"],
      ["Father's Name", "_______________________", "Full Name"],
      ["Mother's Name", "_______________________", "Full Name"],
      ["Phone No.", "_______________________", "Verified Contact"],
      ["Address", "_______________________", "Local/Perm."]
    ];

    detailFields.forEach((row, i) => {
      doc.setDrawColor(245, 158, 11);
      doc.line(20, y, 190, y);
      
      // Vertical separators
      doc.line(20, y, 20, y + 12);
      doc.line(65, y, 65, y + 12);
      doc.line(145, y, 145, y + 12);
      doc.line(190, y, 190, y + 12);

      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text(row[0], 25, y + 7.5);
      
      doc.setFont("helvetica", "normal");
      doc.text(row[1], 105, y + 7.5, { align: "center" });
      
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(row[2], 167.5, y + 7.5, { align: "center" });
      
      doc.setFontSize(10);
      y += 12;
    });
    doc.line(20, y, 190, y); // Final bottom line

    // --- DIFFERENTIATION / EXTENSION SECTIONS (PAGE 2) ---
    doc.addPage();
    y = 25;

    const sections = [
      { title: "Special Support", content: "Guide students who need extra support by offering practice activities aligned to their skill level and one-on-one tutoring as needed." },
      { title: "Academic Extension", content: "Prepare activities that would allow students to explore ideas in greater depth, such as real-world applications and cross-curricular connections." },
      { title: "Assessment", content: "Assess students' understanding through their participation in the investigation, completion of worksheets, and ability to explain concepts." }
    ];

    sections.forEach(sec => {
      doc.setFillColor(252, 250, 242);
      doc.rect(20, y, 170, 10, 'F');
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(60, 40, 120);
      doc.text(sec.title, 25, y + 7);
      
      y += 15;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const splitText = doc.splitTextToSize(sec.content, 160);
      doc.text(splitText, 25, y);
      
      y += (splitText.length * 6) + 15;
    });

    // Signature Area
    y += 10;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, y, 90, y);
    doc.line(120, y, 190, y);
    doc.setFontSize(8);
    doc.text("Parent / Guardian Signature", 20, y + 5);
    doc.text("Principal Endorsement", 120, y + 5);

    // Footer
    doc.setFontSize(7);
    doc.setTextColor(180, 180, 180);
    doc.text("SFS SCHOOL KODANI • ADMISSION DOCUMENT ENGINE • REv 2026.B", 105, 285, { align: "center" });

    doc.save("SFS_School_Kodani_Admission.pdf");
    
    setIsGenerating(false);
    setTimeout(() => setShowPreview(false), 800);
  };

  return (
    <section id="admission" className="py-24 bg-sfs-green-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sfs-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      {showPreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-sfs-green-950/80 backdrop-blur-md" onClick={() => !isGenerating && setShowPreview(false)}></div>
          
          <div className="relative w-full max-w-lg bg-sfs-green-900 border border-sfs-gold/20 rounded-[32px] p-10 shadow-2xl overflow-hidden flex flex-col items-center">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sfs-gold to-transparent opacity-50"></div>
             
             <div className="w-48 h-64 bg-sfs-green-950 border border-white/10 rounded-16 mb-8 relative flex flex-col p-4 shadow-inner overflow-hidden">
                <div className="w-full h-4 bg-sfs-gold/20 rounded-4 mb-2"></div>
                <div className="w-2/3 h-2 bg-white/5 rounded-2 mb-4"></div>
                <div className="space-y-2">
                   {[...Array(8)].map((_, i) => (
                     <div key={i} className={`h-1 bg-white/5 rounded-2 ${i % 3 === 0 ? 'w-full' : 'w-5/6'}`}></div>
                   ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sfs-gold/10 to-transparent h-1/4 w-full animate-[bounce_3s_infinite] opacity-50"></div>
             </div>

             <div className="text-center mb-8">
               <h3 className="text-2xl font-display font-bold text-white mb-2 text-center leading-tight">SFS School Kodani <br/> Document Engine</h3>
               <p className="text-sfs-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6 h-4">
                 {isGenerating ? steps[genStep] : "Document Complete"}
               </p>
               
               <div className="flex gap-2 justify-center">
                 {steps.map((_, i) => (
                   <div 
                     key={i} 
                     className={`h-2 rounded-full transition-all duration-500 ${
                       i <= genStep ? 'w-6 bg-sfs-gold' : 'w-2 bg-white/10'
                     }`}
                   ></div>
                 ))}
               </div>
             </div>

             <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-6 py-3 rounded-full border border-white/5">
                <ShieldCheck size={14} className="text-sfs-gold" /> Official School System Active
             </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Admissions {new Date().getFullYear()+1}</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Start your journey toward excellence. Our admissions process is transparent and accessible.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Inquiry', icon: FileText, desc: 'Submit your online inquiry or visit the campus to collect the prospectus.' },
            { step: '02', title: 'Evaluation', icon: ClipboardCheck, desc: 'Interaction with the student and parents to understand academic readiness.' },
            { step: '03', title: 'Enrollment', icon: UserPlus, desc: 'Complete documentation and fee payment to secure your seat.' }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-24 relative overflow-hidden group border-white/5">
              <span className="absolute -top-4 -right-4 text-9xl font-display font-bold text-white/5 transition-colors group-hover:text-sfs-gold/10">
                {item.step}
              </span>
              <div className="bg-sfs-gold/10 w-14 h-14 rounded-16 flex items-center justify-center mb-6 text-sfs-gold border border-sfs-gold/20">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <CheckCircle2 size={12} className="text-sfs-gold" /> All Documents Required
                </li>
                <li className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <CheckCircle2 size={12} className="text-sfs-gold" /> Transfer Certificate
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-sfs-green-900/50 rounded-[32px] p-10 md:p-12 border border-sfs-gold/10 flex flex-col lg:flex-row items-center justify-between gap-10">
           <div className="text-center lg:text-left">
             <h4 className="text-white font-display font-bold text-2xl mb-2 flex items-center gap-3 justify-center lg:justify-start">
               Ready to Apply? <Sparkles size={20} className="text-sfs-gold animate-pulse" />
             </h4>
             <p className="text-slate-400 text-sm max-w-md">Applications for the {new Date().getFullYear()+1}-{new Date().getFullYear()+2} academic year are now open.</p>
           </div>
           
           <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
             <button 
               onClick={triggerPDFGeneration}
               disabled={isGenerating}
               className="w-full sm:w-auto px-8 py-4 border border-sfs-gold/50 text-sfs-gold hover:bg-sfs-gold hover:text-sfs-green-950 font-bold rounded-16 transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 group relative overflow-hidden"
             >
               <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
               SFS School Kodani Form
             </button>
             
             <button 
               onClick={onOpenForm}
               className="w-full sm:w-auto px-10 py-4 bg-sfs-gold text-sfs-green-950 font-bold rounded-16 shadow-xl shadow-sfs-gold/20 hover:bg-white hover:scale-105 transition-all uppercase tracking-widest text-[10px] flex items-center justify-center"
             >
               Fill Online Application
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;