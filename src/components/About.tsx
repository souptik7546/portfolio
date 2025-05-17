
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                Hello! I'm John, a passionate full-stack developer with over 5 years of experience building web applications. My journey in tech began when I created my first HTML page as a teenager, and I've been hooked ever since.
              </p>
              <p className="mb-4">
                I specialize in JavaScript frameworks like React, along with Node.js for backend development. I enjoy solving complex problems and creating intuitive, dynamic user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me hiking local trails, experimenting with new cooking recipes, or contributing to open-source projects.
              </p>
              
              <div className="mt-6">
                <h3 className="font-semibold text-xl mb-2">Quick Facts</h3>
                <ul className="space-y-2">
                  <li>🎓 Computer Science degree from Tech University</li>
                  <li>💼 Previously worked at Tech Solutions Inc.</li>
                  <li>🌍 Based in San Francisco, CA</li>
                  <li>⚡ Fun fact: I've visited 15 countries and counting!</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-primary/20 transform -translate-x-4 -translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
              alt="John Doe" 
              className="rounded-full w-full h-full object-cover border-4 border-background relative z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
