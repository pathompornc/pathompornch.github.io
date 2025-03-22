
import SectionTitle from '@/components/SectionTitle';
import EducationCard from '@/components/EducationCard';
import { educationData } from '@/data/education';

const EducationSection = () => {
  return (
    <section className="section bg-silkyIvory dark:bg-deepUmber/90">
      <div className="container-custom">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and achievements"
          className="animate-on-scroll"
        />
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <EducationCard 
              key={index}
              school={education.school}
              degree={education.degree}
              period={education.period}
              extracurriculars={education.extracurriculars}
              awards={education.awards}
              logo={education.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
