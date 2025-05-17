
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Eye, Github, Link } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  detailedDescription: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-stack e-commerce solution with product management and payment integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      detailedDescription: 'An extensive e-commerce platform featuring product catalog, user authentication, shopping cart functionality, order management, and secure checkout with Stripe integration. The application includes an admin dashboard for inventory management and sales analytics.'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web Application',
      description: 'A dynamic task manager with drag-and-drop functionality and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500',
      technologies: ['React', 'TypeScript', 'Firebase'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      detailedDescription: 'A comprehensive task management solution designed for teams. Features include task creation, assignment, due dates, priority levels, comments, and file attachments. The intuitive drag-and-drop interface allows users to easily move tasks between different status columns.'
    },
    {
      id: 3,
      title: 'Fitness Tracking Dashboard',
      category: 'Mobile App',
      description: 'A cross-platform mobile app for tracking workouts, nutrition, and fitness progress.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      detailedDescription: 'A mobile fitness application that helps users track their workouts, nutrition, and overall progress. The app includes customizable workout plans, meal tracking, progress photos, weight logging, and detailed analytics to visualize progress over time.'
    },
    {
      id: 4,
      title: 'Real Estate Listing Platform',
      category: 'Web Development',
      description: 'A property listing website with advanced search, filtering, and map integration.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      detailedDescription: 'A comprehensive real estate platform allowing users to search, filter, and explore property listings. Features include interactive map integration, virtual tours, contact forms, and a dashboard for property owners to manage their listings.'
    },
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openProjectDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">My Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ScrollReveal key={project.id} threshold={0.2}>
            <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => openProjectDialog(project)} 
                    className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Eye className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                    <p className="mb-4">{project.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs bg-secondary px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm flex items-center hover:text-primary transition-colors"
                      >
                        <Link size={16} className="mr-1" /> Live Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm flex items-center hover:text-primary transition-colors"
                      >
                        <Github size={16} className="mr-1" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.category}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="mb-4">{selectedProject.detailedDescription}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Link className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
