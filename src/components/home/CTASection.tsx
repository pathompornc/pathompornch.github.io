
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

const CTASection = () => {
  return (
    <section className="section bg-warmSandstone/90 text-white">
      <div className="container-custom text-center max-w-3xl py-16 md:py-24">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Let's create something amazing together</h2>
          <p className="text-white/80 text-lg mb-8">
            Whether you're looking to innovate with AI/ML or optimize your digital product strategy, I'm here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/about"
              rightIcon={<ArrowRight size={16} />}
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
  );
};

export default CTASection;
