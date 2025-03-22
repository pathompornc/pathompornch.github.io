
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Transforming Ideas into Digital Reality</h3>
            <p className="text-muted-foreground max-w-md">
              Looking for a Product Manager with a background in AI/ML who understands both business and technology? Let's connect.
            </p>
          </div>
          
          <div className="flex flex-col space-y-6 md:items-end">
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/pathompornc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/pathompornc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:ch.pathomporn@gmail.com" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="text-muted-foreground">
              <p>ch.pathomporn@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Pathomporn Chokchainant. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
