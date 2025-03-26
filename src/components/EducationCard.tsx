
import { GraduationCap, Award } from 'lucide-react';

interface EducationCardProps {
  school: string;
  degree: string;
  period: string;
  major?: string;
  extracurriculars?: string[];
  awards?: string[];
  logo?: string;
}

const EducationCard = ({ 
  school, 
  degree, 
  period, 
  major,
  extracurriculars, 
  awards,
  logo 
}: EducationCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img 
              src={logo} 
              alt={`${school} logo`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-medium">{school}</h3>
          <p className="text-primary">{degree}</p>
          {major && <p className="text-sm text-primary-foreground">{major}</p>}
          <p className="text-sm text-muted-foreground mt-1">{period}</p>
          
          {(extracurriculars && extracurriculars.length > 0) && (
            <div className="mt-4">
              <div className="flex items-center text-muted-foreground mb-2">
                <GraduationCap size={16} className="mr-2" />
                <span className="font-medium">Extracurricular Activities</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-1">
                {extracurriculars.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {(awards && awards.length > 0) && (
            <div className="mt-4">
              <div className="flex items-center text-muted-foreground mb-2">
                <Award size={16} className="mr-2" />
                <span className="font-medium">Awards</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-1">
                {awards.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
