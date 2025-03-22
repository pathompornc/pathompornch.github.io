
import SectionTitle from '@/components/SectionTitle';

const SkillsSection = () => {
  const skills = [
    {
      title: "Product Strategy",
      description: "Developing product roadmaps, market analysis, and creating data-driven strategies to deliver exceptional user experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M8 13h2"/>
          <path d="M8 17h2"/>
          <path d="M14 13h2"/>
          <path d="M14 17h2"/>
        </svg>
      )
    },
    {
      title: "AI/ML Solutions",
      description: "Bridging the gap between technical AI concepts and practical business applications to solve complex problems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      )
    },
    {
      title: "Cross-functional Leadership",
      description: "Coordinating between engineering, design, and business teams to deliver cohesive products that meet user needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Specialized in creating user-centric products with advanced technology"
          className="animate-on-scroll"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card p-8 rounded-xl animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{skill.title}</h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
