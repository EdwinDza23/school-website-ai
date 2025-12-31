
import React from 'react';

interface GalleryProps {
  onViewAll?: () => void;
}

const images = [
  {
    src: 'https://images.pexels.com/photos/19461117/pexels-photo-19461117.jpeg',
    title: 'Student Community',
    category: 'Community',
    span: 'lg:col-span-2 lg:row-span-2' // Top Left Feature (4 cells)
  },
  {
    src: 'https://images.pexels.com/photos/5427855/pexels-photo-5427855.jpeg',
    title: 'Science Hub',
    category: 'STEM',
    span: 'lg:col-span-1 lg:row-span-1' // Row 1, Col 3
  },
  {
    src: 'https://images.pexels.com/photos/18790641/pexels-photo-18790641.jpeg',
    title: 'Library Sanctuary',
    category: 'Academics',
    span: 'lg:col-span-1 lg:row-span-1' // Row 2, Col 3
  },
  {
    src: 'https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg',
    title: 'Computer Lab',
    category: 'IT',
    span: 'lg:col-span-1 lg:row-span-1' // Row 3, Col 1
  },
  {
    src: 'https://images.pexels.com/photos/30170871/pexels-photo-30170871.jpeg',
    title: 'Performing Arts',
    category: 'Creative',
    span: 'lg:col-span-1 lg:row-span-1' // Row 3, Col 2
  },
  {
    src: 'https://images.pexels.com/photos/6816531/pexels-photo-6816531.jpeg',
    title: 'Art Studio',
    category: 'Creative',
    span: 'lg:col-span-1 lg:row-span-1' // Row 3, Col 3
  },
  {
    src: 'https://images.pexels.com/photos/5211437/pexels-photo-5211437.jpeg',
    title: 'Modern Classroom',
    category: 'Academics',
    span: 'lg:col-span-1 lg:row-span-1' // Row 4, Col 1
  },
  {
    src: 'https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg',
    title: 'Campus Architecture',
    category: 'Campus',
    span: 'lg:col-span-1 lg:row-span-1' // Row 4, Col 2
  },
  {
    src: 'https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg',
    title: 'Sports Arena',
    category: 'Athletics',
    span: 'lg:col-span-1 lg:row-span-1' // Row 4, Col 3
  }
];

const Gallery: React.FC<GalleryProps> = ({ onViewAll }) => {
  return (
    <section id="gallery" className="py-24 bg-sfs-green-900 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">Campus Experience</h2>
            <p className="text-slate-400 text-lg">A visual journey through the spaces where excellence is built at SFS Kodani.</p>
          </div>
          <button 
            onClick={onViewAll}
            className="hidden md:flex items-center gap-3 px-8 py-3.5 border border-sfs-gold text-sfs-gold hover:bg-sfs-gold hover:text-sfs-green-950 rounded-32 font-bold text-[10px] transition-all uppercase tracking-widest mt-8 md:mt-0 shadow-lg shadow-sfs-gold/10"
          >
            View All Media
          </button>
        </div>

        {/* Bento Grid Container - Perfectly packed 3x4 layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-6">
          {images.map((item, i) => (
            <div 
              key={i} 
              className={`relative group overflow-hidden glass-card border-white/10 shadow-2xl rounded-24 transition-all duration-500 hover:z-10 ${item.span}`}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100" 
              />
              
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sfs-green-950/90 via-sfs-green-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-sfs-gold text-sfs-green-950 text-[9px] font-bold uppercase tracking-widest rounded-8 mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-2xl tracking-tight uppercase leading-none">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-12 bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-sfs-gold animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View CTA */}
        <div className="mt-12 md:hidden">
          <button 
            onClick={onViewAll}
            className="w-full flex justify-center items-center gap-3 px-8 py-5 bg-sfs-gold text-sfs-green-950 rounded-16 font-bold text-xs transition-all uppercase tracking-widest shadow-xl shadow-sfs-gold/20"
          >
            View Full Media Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
