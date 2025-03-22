
import { useEffect } from 'react';
import { ArrowLeft, Building, Briefcase, FileSearch, Lightbulb, Award, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import Badge from './Badge';
import ImageCarousel from './ImageCarousel';

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    company: string;
    logo: string;
    context: string;
    role: string;
    problem: string;
    solution: string;
    execution: string;
    results: string;
    industry: string;
    skills: string[];
    images: string[];
  };
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-custom pt-32 pb-20">
      <Link 
        to="/projects" 
        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft size={16} className="mr-2" />
        <span>Back to Projects</span>
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.company}</p>
          </div>
          
          {project.images.length > 0 && (
            <div className="mb-10">
              <ImageCarousel images={project.images} alt={project.title} />
            </div>
          )}
          
          <div className="space-y-12">
            <section className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building size={18} className="text-primary" />
                </div>
                <h2 className="text-2xl font-medium">Context</h2>
              </div>
              <p className="text-muted-foreground">{project.context}</p>
            </section>
            
            <section className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <h2 className="text-2xl font-medium">My Role</h2>
              </div>
              <p className="text-muted-foreground">{project.role}</p>
            </section>
            
            <section className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileSearch size={18} className="text-primary" />
                </div>
                <h2 className="text-2xl font-medium">Problem</h2>
              </div>
              <p className="text-muted-foreground">{project.problem}</p>
            </section>
            
            <section className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb size={18} className="text-primary" />
                </div>
                <h2 className="text-2xl font-medium">Solution</h2>
              </div>
              <p className="text-muted-foreground">{project.solution}</p>
            </section>
            
            <section className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CircleDot size={18} className="text-primary" />
                </div>
                <h2 className="text-2xl font-medium">Execution</h2>
              </div>
              <p className="text-muted-foreground">{project.execution}</p>
            </section>
            
            <section className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award size={18} className="text-primary" />
                </div>
                <h2 className="text-2xl font-medium">Results</h2>
              </div>
              <p className="text-muted-foreground">{project.results}</p>
            </section>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <div className="glass-card rounded-xl p-6 sticky top-28">
            <h3 className="text-lg font-medium mb-4">Project Details</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Industry</p>
                <Badge variant="outline" className="text-sm">{project.industry}</Badge>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Skills & Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="default">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
