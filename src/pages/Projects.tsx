
import { useEffect, useRef } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/data/projects';

const Projects = () => {
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
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom">
        <SectionTitle 
          title="My Projects" 
          subtitle="A showcase of my work as a Product Manager in AI/ML, ecommerce, and fintech"
          className="animate-on-scroll"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectData.map((project) => (
            <div key={project.id} className="animate-on-scroll">
              <ProjectCard 
                id={project.id}
                title={project.title}
                company={project.company}
                logo={project.logo}
                description={project.context.substring(0, 150) + '...'}
                industry={project.industry}
                skills={project.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
