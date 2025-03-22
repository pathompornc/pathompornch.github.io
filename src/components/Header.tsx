import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Add type for className function
type NavLinkClassName = ({ isActive }: { isActive: boolean }) => string;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo/Name */}
        <NavLink 
          to="/" 
          className="text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Patt Chokchainant
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            About
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-white dark:bg-gray-900 z-40 animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
              <NavLink 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-colors"
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/blog" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-colors"
                }
              >
                Blog
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-colors"
                }
              >
                About
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
