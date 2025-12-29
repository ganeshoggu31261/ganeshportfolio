import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: Skill[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C', level: 85 },
      { name: 'Java', level: 80 },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'Spring Boot', level: 65 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    category: 'Cloud & Tools',
    skills: [
      { name: 'AWS', level: 70 },
      { name: 'Git', level: 85 },
      { name: 'Railway Deployment', level: 75 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [visibleSkills, setVisibleSkills] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (inView) {
      const allSkills: Record<string, boolean> = {};
      skillsData.forEach(category => {
        category.skills.forEach(skill => {
          allSkills[skill.name] = true;
        });
      });
      
      // Delay animation start a bit
      setTimeout(() => {
        setVisibleSkills(allSkills);
      }, 300);
    }
  }, [inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6 
      } 
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            Throughout my education and projects, I've developed proficiency in various 
            technologies and programming languages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-500">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: '0%' }}
                        animate={{ width: visibleSkills[skill.name] ? `${skill.level}%` : '0%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
              English (Fluent)
            </span>
            <span className="px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded-full">
              Telugu (Native)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;