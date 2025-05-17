
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">Souptik Biswas</h2>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/souptik7546" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/souptik-biswas-069a88268/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:souptikbiswas429@gmail.com"
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          <p className="text-center text-muted-foreground">
            &copy; {currentYear} Souptik Biswas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
