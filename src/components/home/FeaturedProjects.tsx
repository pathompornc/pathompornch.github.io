
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/data/projects';

const FeaturedProjects = () => {
  return (
    <section className="section bg-silkyIvory dark:bg-deepUmber/90 py-20 md:py-32">
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
  );
};

export default FeaturedProjects;
