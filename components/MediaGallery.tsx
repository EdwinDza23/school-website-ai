
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter, Maximize2, X, Image as ImageIcon } from 'lucide-react';

interface MediaGalleryProps {
  onClose: () => void;
  initialCategory?: string;
}

const categories = ['All', 'Academics', 'Sports', 'Events', 'Campus'];

const allMedia = [
  // Academics
  { id: 1, src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg', title: 'Math Competition', category: 'Academics' },
  { id: 2, src: 'https://images.pexels.com/photos/5427855/pexels-photo-5427855.jpeg', title: 'Science Lab Discovery', category: 'Academics' },
  { id: 3, src: 'https://images.pexels.com/photos/5211437/pexels-photo-5211437.jpeg', title: 'Collaborative Study', category: 'Academics' },
  { id: 4, src: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg', title: 'Digital Literacy Class', category: 'Academics' },
  
  // Sports
  { id: 5, src: 'https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg', title: 'Athletics Meet', category: 'Sports' },
  { id: 6, src: 'https://images.pexels.com/photos/18471488/pexels-photo-18471488.jpeg', title: 'Cricket Finals', category: 'Sports' },
  { id: 7, src: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg', title: 'Volleyball Practice', category: 'Sports' },
  { id: 8, src: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg', title: 'Relay Race', category: 'Sports' },

  // Events
  { id: 9, src: 'https://images.pexels.com/photos/30170871/pexels-photo-30170871.jpeg', title: 'Cultural Fest 2024', category: 'Events' },
  { id: 10, src: 'https://images.pexels.com/photos/19461117/pexels-photo-19461117.jpeg', title: 'Annual Day Gathering', category: 'Events' },
  { id: 11, src: 'https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg', title: 'Independence Day', category: 'Events' },
  { id: 12, src: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg', title: 'Silver Jubilee Celebration', category: 'Events' },

  // Campus
  { id: 13, src: 'https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg', title: 'Aerial Campus View', category: 'Campus' },
  { id: 14, src: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg', title: 'School Entrance', category: 'Campus' },
  { id: 15, src: 'https://images.pexels.com/photos/18790641/pexels-photo-18790641.jpeg', title: 'Library Hub', category: 'Campus' },
  { id: 16, src: 'https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg', title: 'IT Infrastructure', category: 'Campus' },
];

const MediaGallery: React.FC<MediaGalleryProps> = ({ onClose, initialCategory = 'All' }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedImg, setSelectedImg] = useState<typeof allMedia[0] | null>(null);

  const filteredMedia = useMemo(() => {
    return activeCategory === 'All' 
      ? allMedia 
      : allMedia.filter(m => m.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-sfs-green-950 pb-24 font-sans text-slate-100">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-sfs-green-900/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={onClose} 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-8 p-1.5">
                <img 
                  src="https://i.ibb.co/84b5WjX4/logo.png" 
                  alt="SFS Logo" 
                  className="h-full w-auto object-contain" 
                />
             </div>
             <h1 className="font-display font-bold text-white text-sm tracking-tight uppercase">SFS MEDIA HUB</h1>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[9px] font-bold text-sfs-gold uppercase tracking-[0.2em] bg-sfs-gold/10 px-4 py-2 rounded-full border border-sfs-gold/20">
             <div className="w-1.5 h-1.5 rounded-full bg-sfs-gold animate-pulse"></div> 
             Active Archives
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-sfs-green-900/40 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
             <ImageIcon size={14} className="text-sfs-gold" />
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Digital Archives</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tighter uppercase">Visual Chronicles</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Exploring the dynamic life and lasting legacy of S.F.S. English Medium School through our comprehensive media collection.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-sfs-green-950/80 backdrop-blur-md py-6 border-y border-white/5">
        <div className="container mx-auto px-6 flex items-center justify-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeCategory === cat 
                ? 'bg-sfs-gold border-sfs-gold text-sfs-green-950 shadow-xl shadow-sfs-gold/20' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Media Grid */}
      <section className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="relative group aspect-square rounded-32 overflow-hidden glass-card border-white/5 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sfs-gold/10"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-sfs-green-950/90 via-sfs-green-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-[9px] font-bold text-sfs-gold uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-white font-display font-bold text-xl leading-tight tracking-tight">{item.title}</h4>
                <div className="mt-4 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                   <Maximize2 size={14} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Enlarge</span>
                </div>
              </div>

              {/* Tag Accent */}
              <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-[8px] font-bold text-white uppercase">SFS_ARCHIVE_24</span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="py-32 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-2">No media found in this category</h3>
            <p className="text-slate-500">We're constantly updating our archives. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Lightbox / Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-sfs-green-950/95 backdrop-blur-2xl" onClick={() => setSelectedImg(null)}></div>
          
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-8 right-8 z-[110] p-4 bg-white/10 hover:bg-sfs-gold hover:text-sfs-green-950 text-white rounded-full transition-all border border-white/10"
          >
            <X size={24} />
          </button>

          <div className="relative w-full h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-500 max-w-6xl">
            <div className="w-full h-full relative rounded-48 overflow-hidden shadow-2xl border border-white/10 bg-black/40">
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                className="w-full h-full object-contain" 
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                   <div>
                     <span className="inline-block px-4 py-1.5 bg-sfs-gold text-sfs-green-950 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
                        {selectedImg.category}
                     </span>
                     <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter uppercase leading-none">
                        {selectedImg.title}
                     </h3>
                   </div>
                   <div className="flex gap-4">
                      <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                        Download Original
                      </button>
                      <button className="px-8 py-4 bg-sfs-gold text-sfs-green-950 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-sfs-gold/20">
                        Share Asset
                      </button>
                   </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em]">SFS SCHOOL KODANI MEDIA ARCHIVES • {new Date().getFullYear()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
