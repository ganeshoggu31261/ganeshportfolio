import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Cloud, Code, CheckCircle } from 'lucide-react';

interface Achievement {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    icon: <Cloud className="w-10 h-10" />,
    description: 'Certified in fundamentals of AWS Cloud, including services, architecture, and security best practices.',
    color: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-500',
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    icon: <Code className="w-10 h-10" />,
    description: 'Certified in developing enterprise applications using Red Hat technologies.',
    color: 'bg-red-100 dark:bg-red-900/30 text-red-500',
  },
  {
    title: 'AWS Cloud Virtual Internship',
    icon: <Award className="w-10 h-10" />,
    description: 'Completed a comprehensive virtual internship program on AWS Cloud services and solutions.',
    color: 'bg-primary-100 dark:bg-primary-900/30 text-primary-500',
  },
  {
    title: 'Full-Stack Application Deployment',
    icon: <CheckCircle className="w-10 h-10" />,
    description: 'Successfully built and deployed multiple full-stack applications with real-world utility.',
    color: 'bg-accent-100 dark:bg-accent-900/30 text-accent-500',
  },
];

const AchievementsSection: React.FC = () => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="achievements" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Achievements & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            Throughout my academic and professional journey, I've earned certifications and achieved milestones
            that reflect my commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="card p-6 flex flex-col md:flex-row items-start md:items-center gap-4"
            >
              <div className={`p-4 rounded-full ${item.color} flex-shrink-0`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="card p-8 mt-16"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Continuous Learning</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            I'm committed to continuous learning and staying updated with the latest technologies.
            Currently, I'm exploring advanced topics in cloud computing and microservices architecture.
          </p>
          <div className="mt-6 flex justify-center">
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;