
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">Hi, I'm Souptik Biswas</h1>
          <h2 className="text-2xl md:text-4xl text-primary font-medium mb-6">
            {typedText}<span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Creating elegant, user-friendly solutions for the modern web. Passionate about building applications that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} className="max-w-xs">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="max-w-xs" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(184,231,251,0.15),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(58,124,242,0.1),transparent_25%)]"></div>
    </section>
  );
};

export default Hero;
