import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

interface ProjectCardProps {
  id: string;
  title: string;
  coverPhoto: string;
  description: string;
  industry: string;
  skills: string[];
}

const ProjectCard = ({ id, title, coverPhoto, description, industry, skills }: ProjectCardProps) => {
  return (
    <Link 
      to={`/projects/${id}`}
      className="block group"
    >
      <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-md">
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
          <img 
            src={coverPhoto} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{title}</h3>
            </div>
            <span className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={16} />
            </span>
          </div>
          
          <p className="mt-4 text-muted-foreground line-clamp-2">{description}</p>
          
          <div className="mt-6 flex flex-wrap gap-2 items-center">
            <Badge variant="outline">{industry}</Badge>
            {skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="default">{skill}</Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="secondary">+{skills.length - 3}</Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
