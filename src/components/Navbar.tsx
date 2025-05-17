
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ darkMode, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">JOHN DOE</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors cursor-pointer">About</a>
          <a onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors cursor-pointer">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors cursor-pointer">Projects</a>
          <a onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</a>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 text-foreground p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors cursor-pointer">About</a>
            <a onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
