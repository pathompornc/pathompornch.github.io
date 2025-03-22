
import SectionTitle from '@/components/SectionTitle';
import CertificationCard from '@/components/CertificationCard';
import { certificationData } from '@/data/certifications';

const CertificationsSection = () => {
  return (
    <section className="section bg-silkyIvory dark:bg-deepUmber/90">
      <div className="container-custom">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and qualifications"
          className="animate-on-scroll"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationData.map((cert, index) => (
            <CertificationCard 
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              date={cert.date}
              logo={cert.logo}
              url={cert.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
