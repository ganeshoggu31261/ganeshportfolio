import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Layers } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  icon: React.ReactNode;
}

const educationData: Education[] = [
  {
    institution: 'KL University',
    degree: 'B.Tech in CSE',
    period: '2022–2026',
    score: 'GPA: 9.50',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    institution: 'NRI Junior College',
    degree: 'Intermediate',
    period: '2020–2022',
    score: 'Marks: 904/1000',
    icon: <Award className="w-6 h-6" />,
  },
  {
    institution: 'CARE E.M High School',
    degree: '10th Grade',
    period: '2019–2020',
    score: 'Marks: 565/600',
    icon: <Layers className="w-6 h-6" />,
  },
];

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="education" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Education</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            My academic journey has equipped me with both theoretical knowledge and practical skills in computer science.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.institution}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.3 }}
              className={`relative mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'
              }`}
            >
              <div className="card p-6 md:w-[90%] relative">
                {/* Timeline dot */}
                <div className="absolute top-6 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white shadow-md z-10
                               left-[calc(50%+12px)] -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{item.institution}</h3>
                <p className="text-primary-500 font-medium mb-1">{item.degree}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{item.period}</p>
                <p className="font-medium">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.9 }}
          className="mt-16 text-center"
        >
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;