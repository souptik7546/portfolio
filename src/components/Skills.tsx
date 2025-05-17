
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

const Skills = () => {
  const [skills] = useState<Skill[]>([
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 55, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express', level: 75, category: 'backend' },
    { name: 'MongoDB', level: 70, category: 'backend' },
    // { name: 'SQL', level: 65, category: 'backend' },
    { name: 'Git', level: 85, category: 'other' },
    // { name: 'UI/UX Design', level: 75, category: 'other' },
  ]);

  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>(
    skills.reduce((acc, skill) => ({ ...acc, [skill.name]: 0 }), {})
  );

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    other: 'Additional Skills',
  };

  useEffect(() => {
    const animateSkills = () => {
      const timeout = setTimeout(() => {
        const newAnimatedLevels = { ...animatedLevels };
        let needsUpdate = false;

        skills.forEach((skill) => {
          if (animatedLevels[skill.name] < skill.level) {
            newAnimatedLevels[skill.name] = Math.min(
              animatedLevels[skill.name] + 2,
              skill.level
            );
            needsUpdate = true;
          }
        });

        if (needsUpdate) {
          setAnimatedLevels(newAnimatedLevels);
        } else {
          clearTimeout(timeout);
        }
      }, 20);

      return timeout;
    };

    const timeout = animateSkills();
    return () => clearTimeout(timeout);
  }, [animatedLevels, skills]);

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {(['frontend', 'backend', 'other'] as const).map((category) => (
          <Card key={category} className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">{categories[category]}</h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span>{animatedLevels[skill.name]}%</span>
                      </div>
                      <Progress value={animatedLevels[skill.name]} className="h-2" />
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
