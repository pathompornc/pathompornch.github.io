
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

const HeroSection = () => {
  return (
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
              className="rounded-xl object-cover h-96 md:h-[500px] w-full"
            />
          </div>
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
  );
};

export default HeroSection;
