
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { blogData } from '@/data/blog';

const Blog = () => {
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
          title="Travel & Adventures" 
          subtitle="Sharing my experiences and insights from around the world"
          className="animate-on-scroll"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {blogData.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`} 
              className="group animate-on-scroll"
            >
              <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-md h-full">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                  <img 
                    src={post.cover} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 flex flex-col h-[calc(100%-33.33%)]">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-medium group-hover:text-primary transition-colors mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex items-center text-primary">
                    <span className="mr-1">Read more</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-muted-foreground mb-6">
            This blog is currently under construction. More travel stories coming soon!
          </p>
          <Button 
            as={Link} 
            to="/about"
            variant="outline"
          >
            Learn More About Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
