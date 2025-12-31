import React from 'react';
import { Terminal, Cpu, Database, Cloud } from 'lucide-react';

const DevNotes: React.FC = () => {
  return (
    <section className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8 text-slate-500">
          <Terminal size={20} />
          <h3 className="text-sm font-mono uppercase tracking-widest">Developer Notes & Specs</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-4 bg-sfs-green-900/50 rounded border border-white/5">
             <div className="flex items-center gap-2 mb-2 text-sfs-gold">
               <Cpu size={16} />
               <h4 className="font-mono text-sm font-bold">Frontend</h4>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed">
               React 18+ SPA architecture. Optimized for zero page reloads. Smooth scroll implementation via native browser APIs.
             </p>
          </div>

          <div className="p-4 bg-sfs-green-900/50 rounded border border-white/5">
             <div className="flex items-center gap-2 mb-2 text-purple-400">
               <Database size={16} />
               <h4 className="font-mono text-sm font-bold">Auth & DB</h4>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed">
               Recommended: Firebase Authentication for secure OTP/Social login. Firestore for real-time updates on notices/events.
             </p>
          </div>

          <div className="p-4 bg-sfs-green-900/50 rounded border border-white/5">
             <div className="flex items-center gap-2 mb-2 text-emerald-400">
               <Cloud size={16} />
               <h4 className="font-mono text-sm font-bold">Deployment</h4>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed">
               Vercel or AWS Amplify for edge global distribution. Assets compressed via Next.js Image or similar optimization pipeline.
             </p>
          </div>

          <div className="p-4 bg-sfs-green-900/50 rounded border border-white/5">
             <div className="flex items-center gap-2 mb-2 text-orange-400">
               <Terminal size={16} />
               <h4 className="font-mono text-sm font-bold">CMS</h4>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed">
               Strict English-only content enforcement at CMS level. Sanity.io or Strapi recommended for headless content management.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevNotes;