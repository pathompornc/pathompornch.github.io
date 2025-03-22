
import { Download, Linkedin, Github, FileText } from 'lucide-react';
import Button from '@/components/Button';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Patt Chokchainant
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
                leftIcon={<Github size={16} />}
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
                alt="Patt Chokchainant"
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
