
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  Linkedin, 
  GitHub, 
  FileText,
  Calendar 
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import CertificationCard from '@/components/CertificationCard';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { certificationData } from '@/data/certifications';

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
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                John Doe
              </h1>
              <div className="text-xl text-muted-foreground space-y-4 mb-8">
                <p>
                  I'm a Product Manager specializing in AI/ML solutions with 5 years of experience in ecommerce and fintech. I bridge the gap between technical complexity and business needs to create products that drive real impact.
                </p>
                <p>
                  Throughout my career, I've led cross-functional teams to develop innovative solutions that leverage artificial intelligence and machine learning to solve complex business problems.
                </p>
                <p>
                  My approach combines strategic thinking, user-centered design, and data-driven decision making to create products that not only meet business objectives but also provide exceptional user experiences.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  leftIcon={<Download size={16} />}
                  as="a" 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Button>
                <Button 
                  leftIcon={<Linkedin size={16} />}
                  variant="outline"
                  as="a" 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
                <Button 
                  leftIcon={<GitHub size={16} />}
                  variant="outline"
                  as="a" 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button 
                  leftIcon={<FileText size={16} />}
                  variant="outline"
                  as="a" 
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </Button>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="John Doe"
                  className="rounded-xl shadow-md w-full h-auto object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-xl z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle 
            title="Certifications" 
            subtitle="Professional certifications and qualifications"
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationData.map((cert, index) => (
              <CertificationCard 
                key={index}
                name={cert.name}
                issuer={cert.issuer}
                date={cert.date}
                logo={cert.logo}
                url={cert.url}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Work Experience" 
            subtitle="My professional journey as a Product Manager"
            className="animate-on-scroll"
          />
          
          <div className="space-y-8">
            {experienceData.map((job, index) => (
              <ExperienceCard 
                key={index}
                company={job.company}
                position={job.position}
                period={job.period}
                description={job.description}
                logo={job.logo}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle 
            title="Education" 
            subtitle="My academic background and achievements"
            className="animate-on-scroll"
          />
          
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <EducationCard 
                key={index}
                school={education.school}
                degree={education.degree}
                period={education.period}
                extracurriculars={education.extracurriculars}
                awards={education.awards}
                logo={education.logo}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Beyond Work Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Beyond Work" 
            subtitle="Exploring the world, one adventure at a time"
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-4 text-lg text-muted-foreground animate-on-scroll">
              <p>
                When I'm not diving into product development or AI research, I'm an avid traveler and explorer. I believe that experiencing different cultures and environments broadens perspective and fuels creativity.
              </p>
              <p>
                From hiking through remote mountain trails to exploring bustling urban centers around the world, I'm always seeking new experiences that challenge my understanding and provide fresh insights.
              </p>
              <p>
                I document my adventures and share travel tips through my blog, hoping to inspire others to step outside their comfort zones and discover the incredible diversity our world has to offer.
              </p>
              
              <div className="pt-4">
                <Button 
                  as={Link} 
                  to="/blog"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Visit My Travel Blog
                </Button>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Travel"
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="section bg-gray-900 text-white">
        <div className="container-custom text-center max-w-3xl py-16">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Let's Connect</h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm always open to discussing product strategy, AI/ML opportunities, or potential collaborations.
            </p>
            <Button 
              as="a" 
              href="mailto:contact@example.com"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
