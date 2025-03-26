
import { CalendarDays } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
  logo?: string;
}

const ExperienceCard = ({ company, position, period, description, logo }: ExperienceCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-medium">{position}</h3>
          <p className="text-primary font-medium">{company}</p>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <CalendarDays size={14} className="mr-1" />
            <span>{period}</span>
          </div>
          
          <div className="mt-4">
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
