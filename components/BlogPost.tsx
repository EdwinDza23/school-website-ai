import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Link as LinkIcon, 
  MessageSquare, 
  Bookmark, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  Mail, 
  ArrowRight,
  ThumbsUp,
  Heart,
  Quote
} from 'lucide-react';
import { BlogPostData, blogPosts } from './Blogs';

interface BlogPostProps {
  post: BlogPostData;
  onClose: (targetId?: string) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onClose }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);

  // Filter out the current post from related articles
  const relatedPosts = blogPosts.filter(p => p.title !== post.title).slice(0, 2);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-sfs-green-950 text-slate-100 font-sans pb-32">
      {/* Fixed Social Sharing Sidebar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
        <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex flex-col gap-4 shadow-2xl">
          <button className="p-2 text-slate-400 hover:text-sfs-gold hover:scale-110 transition-all"><Twitter size={20} /></button>
          <button className="p-2 text-slate-400 hover:text-sfs-gold hover:scale-110 transition-all"><Facebook size={20} /></button>
          <button className="p-2 text-slate-400 hover:text-sfs-gold hover:scale-110 transition-all"><Linkedin size={20} /></button>
          <button className="p-2 text-slate-400 hover:text-sfs-gold hover:scale-110 transition-all"><LinkIcon size={20} /></button>
          <div className="h-px bg-white/10 mx-2"></div>
          <button 
            onClick={() => setLiked(!liked)}
            className={`p-2 transition-all ${liked ? 'text-red-500' : 'text-slate-400 hover:text-red-400'}`}
          >
            <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Header Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-sfs-green-900/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={() => onClose('blogs')} 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={18} /> Back to Blog
          </button>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/84b5WjX4/logo.png" 
                  alt="SFS Logo" 
                  className="h-full w-auto object-contain" 
                />
             </div>
             <span className="font-display font-bold text-white text-xs tracking-tight uppercase">SFS Insights</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{post.category} Portal</span>
          </div>
        </div>
      </header>

      {/* Hero Section / Thumbnail */}
      <section className="pt-28 lg:pt-36">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col gap-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
              {post.categories ? post.categories.map((cat, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 text-slate-300 border border-white/10 rounded-full">{cat}</span>
              )) : (
                <span className="px-3 py-1 bg-sfs-gold/10 text-sfs-gold border border-sfs-gold/20 rounded-full">{post.category}</span>
              )}
            </div>

            {/* Title & Subheading */}
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                {post.excerpt}
              </p>
            </div>

            {/* Author Meta */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <img src={post.authorImg} alt={post.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{post.author}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase">{post.date}</p>
              </div>
            </div>

            {/* Thumbnail Image */}
            <div className="aspect-[16/9] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl relative group">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-sfs-green-950/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-6 max-w-5xl pt-16">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Article Body */}
          <div className="lg:col-span-8 space-y-12">
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed space-y-8 font-sans">
              {post.content.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-lg first-letter:text-7xl first-letter:font-bold first-letter:text-sfs-gold first-letter:mr-3 first-letter:float-left first-letter:leading-none" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Section */}
            <div className="pt-16 border-t border-white/10">
               <div className="p-10 bg-white/[0.03] rounded-[40px] border border-white/10 group cursor-pointer hover:bg-white/[0.05] transition-all">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-sfs-gold/30 shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                      <img src={post.authorImg} className="w-full h-full object-cover" alt={post.author} />
                    </div>
                    <div className="text-center md:text-left flex-1">
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Written By</p>
                       <h4 className="text-2xl font-display font-bold text-white mb-1">{post.author}</h4>
                       <p className="text-xs text-sfs-gold uppercase font-bold tracking-widest mb-4">{post.authorRole}</p>
                       <p className="text-sm text-slate-400 leading-relaxed italic">
                         Dedicated to fostering an environment where every student feels seen, heard, and empowered to reach their full potential.
                       </p>
                       <button className="mt-6 text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2 hover:text-sfs-gold transition-colors">
                          View Profile <ChevronRight size={14} />
                       </button>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-12">
            {/* Opt-in Subscription */}
            <div className="p-8 bg-sfs-green-900 border border-white/10 rounded-[40px] space-y-6">
              <div className="w-12 h-12 bg-sfs-gold/10 rounded-2xl flex items-center justify-center text-sfs-gold border border-sfs-gold/20">
                <Mail size={24} />
              </div>
              <h4 className="text-xl font-display font-bold text-white">Get Weekly Insights</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Join our newsletter to receive the latest industry trends and campus updates directly.
              </p>
              
              {subscribed ? (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs font-bold text-center">
                  Successfully Subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input 
                    type="email" 
                    required 
                    placeholder="you@email.com" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sfs-gold/50"
                  />
                  <button className="w-full py-3.5 bg-white/5 border border-white/10 text-white hover:bg-sfs-gold hover:text-sfs-green-950 font-bold rounded-xl text-[10px] uppercase tracking-widest transition-all">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
            
            {/* Related Articles */}
            <div className="space-y-6">
               <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] pl-2">Related Articles</h4>
               <div className="space-y-6">
                  {relatedPosts.map((r, i) => (
                    <div 
                      key={i} 
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        onClose('blogs');
                      }}
                      className="flex gap-4 group cursor-pointer"
                    >
                       <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-white/5">
                          <img src={r.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={r.title} />
                       </div>
                       <div>
                          <p className="text-[9px] font-bold text-sfs-gold uppercase tracking-widest mb-1">{r.category}</p>
                          <h5 className="text-sm font-bold text-white group-hover:text-sfs-gold transition-colors line-clamp-2 leading-snug">
                            {r.title}
                          </h5>
                          <p className="text-[10px] text-slate-500 mt-2 font-bold">{r.date}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Lead Conversion - Navigates to Admission Section */}
        <div className="mt-20 p-10 md:p-16 bg-sfs-gold rounded-[48px] text-sfs-green-950 shadow-2xl shadow-sfs-gold/20 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="max-w-2xl">
             <h4 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight tracking-tight">
               Ready to join our community?
             </h4>
             <p className="text-lg font-medium opacity-80 leading-relaxed">
               Admissions for the 2025-26 session are now open. Secure your child's future today by starting the application process through our SFS School Kodani portal.
             </p>
           </div>
           <button 
             onClick={() => onClose('admission')}
             className="w-full md:w-auto px-12 py-6 bg-sfs-green-950 text-white font-bold rounded-2xl text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform group"
           >
              Inquire Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </section>

      {/* Social Bottom Sharing (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 xl:hidden bg-sfs-green-900/95 backdrop-blur-xl border-t border-white/10">
        <div className="container mx-auto flex items-center justify-between">
           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Share this Story</p>
           <div className="flex gap-4">
              <button className="p-2 text-slate-300 hover:text-sfs-gold transition-colors"><Twitter size={18} /></button>
              <button className="p-2 text-slate-300 hover:text-sfs-gold transition-colors"><Facebook size={18} /></button>
              <button className="p-2 text-slate-300 hover:text-sfs-gold transition-colors"><Linkedin size={18} /></button>
              <button className="p-2 text-slate-300 hover:text-sfs-gold transition-colors"><LinkIcon size={18} /></button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;