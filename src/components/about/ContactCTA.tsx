
import Button from '@/components/Button';

const ContactCTA = () => {
  return (
    <section className="section bg-warmSandstone text-white">
      <div className="container-custom text-center max-w-3xl py-16">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Let's Connect</h2>
          <p className="text-white/80 text-lg mb-8">
            I'm always open to discussing product strategy, AI/ML opportunities, or potential collaborations.
          </p>
          <Button 
            as="a" 
            href="mailto:contact@example.com"
            size="lg"
            className="bg-white text-warmSandstone hover:bg-white/90"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
