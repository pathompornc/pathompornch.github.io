
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsSection from '@/components/home/SkillsSection';
import CTASection from '@/components/home/CTASection';

const Home = () => {
  // Reference for scrolling animation
  const animatedElementsRef = useRef<HTMLElement[]>([]);
  
  // Handle scroll animations
  useEffect(() => {
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
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <CTASection />
    </div>
  );
};

export default Home;
