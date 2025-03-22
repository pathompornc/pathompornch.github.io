
import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard';
import { experienceData } from '@/data/experience';

const ExperienceSection = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey as a Product Manager"
          className="animate-on-scroll"
        />
        
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <ExperienceCard 
              key={index}
              company={job.company}
              position={job.position}
              period={job.period}
              description={job.description}
              logo={job.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
