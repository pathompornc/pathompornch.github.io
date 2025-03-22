
import { Calendar, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  logo?: string;
  url?: string;
}

const CertificationCard = ({ name, issuer, date, logo, url }: CertificationCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img 
              src={logo} 
              alt={`${issuer} logo`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-primary">{issuer}</p>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-sm text-primary hover:underline"
            >
              View Certificate
              <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
