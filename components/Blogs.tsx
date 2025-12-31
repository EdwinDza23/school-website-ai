import React from 'react';
import { CalendarDays, User, ArrowRight } from 'lucide-react';

export interface BlogPostData {
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  authorRole: string;
  authorImg: string;
  img: string;
  category: string;
  categories?: string[];
  readTime: string;
}

interface BlogsProps {
  onOpenBlog?: (post: BlogPostData) => void;
}

export const blogPosts: BlogPostData[] = [
  {
    title: 'Annual Sports Day: Strength, Spirit & Sportsmanship',
    excerpt: 'The Annual Sports Day at S.F.S. English Medium School, Kodani was a vibrant celebration of physical fitness, teamwork, and true sportsmanship.',
    content: [
      "The Annual Sports Day at S.F.S. English Medium School, Kodani was a vibrant celebration of energy, teamwork, and determination. The school campus transformed into a lively arena where students showcased not just physical strength, but discipline, confidence, and true sportsmanship.",
      "The day began with a march-past, led by our student leaders, followed by the lighting of the ceremonial torch, symbolizing the spirit of fair play and perseverance. Students from all classes participated enthusiastically in track and field events, team sports, and fun games designed to encourage participation across age groups.",
      "Events such as sprints, relay races, long jump, and traditional games brought excitement and healthy competition. The cheers from fellow students and teachers created an atmosphere filled with motivation and unity.",
      "Beyond medals and trophies, Sports Day emphasized an important lesson — winning is not just about coming first, but about giving your best. Teachers and staff appreciated the efforts of every participant, reinforcing the value of resilience and teamwork.",
      "The event concluded with a prize distribution ceremony and a message highlighting the importance of sports in building physical fitness, mental strength, and leadership skills. Sports Day once again reminded us that education extends far beyond classrooms."
    ],
    date: 'Jan 20, 2025',
    author: 'SFS School Editorial Team',
    authorRole: 'School Communications',
    authorImg: 'https://images.pexels.com/photos/5306431/pexels-photo-5306431.jpeg',
    img: 'https://images.pexels.com/photos/19461117/pexels-photo-19461117.jpeg',
    category: 'Sports',
    categories: ['Sports', 'Student Life'],
    readTime: '6 min read'
  },
  {
    title: 'Independence Day: Freedom, Unity & Responsibility',
    excerpt: 'S.F.S. English Medium School, Kodani celebrated Independence Day with pride, reflecting on the values of freedom, unity, and national responsibility.',
    content: [
      "Independence Day was celebrated with great pride and patriotism at S.F.S. English Medium School, Kodani, as students and staff came together to honor the spirit of freedom and national unity.",
      "The celebration began with the hoisting of the national flag, followed by the singing of the National Anthem, filling the campus with a sense of respect and gratitude. Students presented speeches, patriotic songs, and cultural performances that reflected the sacrifices made by our freedom fighters.",
      "Through skits and presentations, students highlighted the importance of independence not only as a historical achievement, but as a responsibility carried by every citizen. The messages focused on values such as integrity, unity, discipline, and respect for the nation.",
      "Teachers addressed the gathering, encouraging students to become responsible individuals who contribute positively to society. Emphasis was placed on education as a powerful tool in shaping a strong and progressive nation.",
      "The Independence Day celebration concluded with a collective pledge to uphold the ideals of freedom, equality, and justice. The event served as a reminder that the future of the nation lies in the hands of today’s students."
    ],
    date: 'Aug 15, 2024',
    author: 'SFS School Editorial Team',
    authorRole: 'School Communications',
    authorImg: 'https://images.pexels.com/photos/5306431/pexels-photo-5306431.jpeg',
    img: 'https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg',
    category: 'Culture',
    readTime: '5 min read'
  },
  {
    title: '25 Years of Excellence: Silver Jubilee Celebration',
    excerpt: 'The Silver Jubilee of S.F.S. English Medium School marked 25 years of academic excellence, strong values, and holistic student development.',
    content: [
      "The Silver Jubilee Celebration of S.F.S. English Medium School, Kodani marked a proud milestone — 25 years of dedication to quality education and holistic development. The event was a memorable occasion that brought together students, parents, alumni, teachers, and well-wishers.",
      "The program opened with a welcome address, followed by a brief journey through the school’s history, highlighting its growth from humble beginnings to a respected educational institution. A visual presentation showcased key achievements, academic milestones, and memorable moments over the years.",
      "Students presented cultural performances including dance, music, and drama, reflecting creativity, confidence, and teamwork. Each performance symbolized the values the school stands for — discipline, innovation, and respect for tradition.",
      "Special appreciation was extended to teachers and staff whose commitment has shaped generations of students. The management expressed gratitude to parents for their continued trust and support.",
      "As the celebrations concluded, the Silver Jubilee stood as a testament to the school’s enduring mission: to nurture young minds, uphold strong values, and prepare students for a meaningful future. The event was not just a celebration of the past, but a promise for the years ahead."
    ],
    date: 'Dec 10, 2024',
    author: 'SFS School Editorial Team',
    authorRole: 'School Communications',
    authorImg: 'https://images.pexels.com/photos/5306431/pexels-photo-5306431.jpeg',
    img: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
    category: 'Milestones',
    readTime: '6 min read'
  }
];

const Blogs: React.FC<BlogsProps> = ({ onOpenBlog }) => {
  return (
    <section id="blogs" className="py-24 bg-sfs-green-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-tighter">Latest Updates</h2>
            <p className="text-slate-400">Voices from our campus community.</p>
          </div>
          <button className="text-sfs-gold font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">View All Posts</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {blogPosts.map((post, i) => (
             <article 
                key={i} 
                onClick={() => onOpenBlog?.(post)}
                className="glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:border-sfs-gold/30 group transition-all cursor-pointer"
             >
                <div className="h-56 overflow-hidden relative">
                   <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 saturate-[0.8]" />
                   <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-sfs-green-950/80 backdrop-blur-md rounded-full text-[10px] text-sfs-gold font-bold uppercase tracking-widest border border-white/10">{post.category}</span>
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                   <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1"><CalendarDays size={12} className="text-sfs-gold" /> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={12} className="text-sfs-gold" /> {post.author.split(' ')[0]}</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sfs-gold transition-colors leading-snug">
                     {post.title}
                   </h3>
                   <p className="text-sm text-slate-400 mb-8 flex-1 leading-relaxed">
                     {post.excerpt}
                   </p>
                   <button 
                    className="flex items-center gap-2 text-sfs-gold font-bold text-xs uppercase tracking-widest group/btn"
                   >
                     Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
             </article>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;