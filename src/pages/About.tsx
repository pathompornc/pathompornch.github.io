
import { useEffect, useRef } from 'react';
import AboutHero from '@/components/about/AboutHero';
import CertificationsSection from '@/components/about/CertificationsSection';
import ExperienceSection from '@/components/about/ExperienceSection';
import EducationSection from '@/components/about/EducationSection';
import BeyondWorkSection from '@/components/about/BeyondWorkSection';
import ContactCTA from '@/components/about/ContactCTA';

const About = () => {
  // Reference for scrolling animation
  const animatedElementsRef = useRef<HTMLElement[]>([]);
  
  // Handle scroll animations
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
      animatedElementsRef.current.push(el as HTMLElement);
    });
    
    return () => {
      if (animatedElementsRef.current) {
        animatedElementsRef.current.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div>
      <AboutHero />
      <CertificationsSection />
      <ExperienceSection />
      <EducationSection />
      <BeyondWorkSection />
      <ContactCTA />
    </div>
  );
};

export default About;
