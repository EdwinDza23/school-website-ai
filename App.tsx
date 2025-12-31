
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Admission from './components/Admission';
import FAQ from './components/FAQ';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Footer from './components/Footer';
import DevNotes from './components/DevNotes';
import ParentPortal from './components/ParentPortal';
import AdmissionForm from './components/AdmissionForm';
import Careers from './components/Careers';
import JobApplication from './components/JobApplication';
import BlogPost from './components/BlogPost';
import MediaGallery from './components/MediaGallery';

function App() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [mediaGalleryCategory, setMediaGalleryCategory] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  // Navigation handlers for simulating "new pages"
  if (showAdmissionForm) {
    return <AdmissionForm onClose={() => setShowAdmissionForm(false)} />;
  }

  if (selectedJob) {
    return <JobApplication job={selectedJob} onClose={() => setSelectedJob(null)} />;
  }

  if (selectedBlog) {
    return <BlogPost post={selectedBlog} onClose={(targetId?: string) => {
      setSelectedBlog(null);
      // Wait for landing page to render then scroll to target section
      setTimeout(() => {
        const sectionId = targetId || 'blogs';
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }} />;
  }

  if (showCareers) {
    return <Careers 
      onClose={() => setShowCareers(false)} 
      onApply={(job) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedJob(job);
      }}
    />;
  }

  if (mediaGalleryCategory !== null) {
    return <MediaGallery 
      initialCategory={mediaGalleryCategory} 
      onClose={() => setMediaGalleryCategory(null)} 
    />;
  }

  return (
    <div className="bg-sfs-green-950 min-h-screen selection:bg-sfs-gold selection:text-sfs-green-950">
      <Navbar onOpenPortal={() => setIsPortalOpen(true)} />
      
      <main>
        <Hero />
        <About />
        <Gallery onViewAll={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMediaGalleryCategory('All');
        }} />
        <Admission onOpenForm={() => setShowAdmissionForm(true)} />
        <Resources onExploreCampus={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMediaGalleryCategory('Campus');
        }} />
        <FAQ />
        <Blogs onOpenBlog={(post) => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setSelectedBlog(post);
        }} />
        <Contact />
      </main>

      <Footer onOpenCareers={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowCareers(true);
      }} />
      <DevNotes />

      <ParentPortal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />
    </div>
  );
}

export default App;
