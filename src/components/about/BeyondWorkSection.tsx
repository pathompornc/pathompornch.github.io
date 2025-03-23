import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

const BeyondWorkSection = () => {
  return (
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
              I love documenting my adventures and sharing experiences with others, hoping to inspire them to step outside their comfort zones and discover the incredible diversity our world has to offer.
            </p>
            
            <div className="pt-4">
              {/* <Button 
                as={Link} 
                to="/blog"
                rightIcon={<ArrowRight size={16} />}
              >
                Visit My Travel Blog
              </Button> */}
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
  );
};

export default BeyondWorkSection;
