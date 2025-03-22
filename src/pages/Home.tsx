
import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/data/projects';

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
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 pt-20">
          <div className="space-y-6 lg:space-y-8 animate-on-scroll">
            <span className="inline-block text-sm md:text-base bg-primary/10 text-primary px-4 py-1 rounded-full">
              Product Manager in AI/ML
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Transforming business challenges into elegant AI-powered solutions. With 5 years of experience in ecommerce and fintech.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                as={Link} 
                to="/projects"
                rightIcon={<ArrowRight size={16} />}
                size="lg"
              >
                View Projects
              </Button>
              <Button 
                as={Link} 
                to="/about"
                variant="outline"
                size="lg"
              >
                About Me
              </Button>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Programming visualization"
                className="rounded-xl shadow-lg object-cover h-96 md:h-[500px] w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-xl z-0" />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <ArrowDown size={20} className="text-primary" />
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="section bg-gray-50 dark:bg-gray-900 py-20 md:py-32">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="A selection of my recent work as a Product Manager"
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.slice(0, 3).map((project) => (
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
          
          <div className="mt-12 text-center animate-on-scroll">
            <Button 
              as={Link} 
              to="/projects"
              rightIcon={<ArrowRight size={16} />}
              variant="outline"
              size="lg"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills & Expertise Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Skills & Expertise" 
            subtitle="Specialized in creating user-centric products with advanced technology"
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <path d="M8 13h2"/>
                  <path d="M8 17h2"/>
                  <path d="M14 13h2"/>
                  <path d="M14 17h2"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Product Strategy</h3>
              <p className="text-muted-foreground">
                Developing product roadmaps, market analysis, and creating data-driven strategies to deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">AI/ML Solutions</h3>
              <p className="text-muted-foreground">
                Bridging the gap between technical AI concepts and practical business applications to solve complex problems.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Cross-functional Leadership</h3>
              <p className="text-muted-foreground">
                Coordinating between engineering, design, and business teams to deliver cohesive products that meet user needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gray-900 text-white">
        <div className="container-custom text-center max-w-3xl py-16 md:py-24">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Let's create something amazing together</h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're looking to innovate with AI/ML or optimize your digital product strategy, I'm here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                as={Link} 
                to="/about"
                rightIcon={<ArrowRight size={16} />}
                className="bg-white text-gray-900 hover:bg-gray-100"
                size="lg"
              >
                Get in Touch
              </Button>
              <Button 
                as={Link} 
                to="/projects"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
