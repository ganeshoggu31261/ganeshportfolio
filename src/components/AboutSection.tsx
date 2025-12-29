import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Activity, Database, Cloud } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            I'm currently pursuing my <span className="font-semibold">B.Tech in Computer Science</span> at <span className="font-semibold">KL University</span> (2022–2026), maintaining a GPA of <span className="font-semibold">9.50</span>. With a strong foundation in programming and web development, I specialize in full-stack development and cloud technologies. I'm always curious to learn and explore innovative tech solutions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
        >
          {/* Expertise Cards */}
          <motion.div variants={fadeIn} className="card p-6">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-primary-500">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Proficient in C, Java, and exploring advanced programming concepts.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="card p-6">
            <div className="bg-secondary-100 dark:bg-secondary-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-secondary-500">
              <Activity className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building responsive web applications using modern frameworks like React.js and Node.js.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="card p-6">
            <div className="bg-accent-100 dark:bg-accent-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-accent-500">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Databases</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Experience with MongoDB for NoSQL and MySQL for relational database management.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="card p-6">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-primary-500">
              <Cloud className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AWS certified with experience in deploying and managing cloud services.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I began my computer science journey with a passion for technology and problem-solving. During my time at KL University, I've focused on building practical applications that solve real-world problems while maintaining academic excellence.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Beyond technical skills, I'm committed to continuous learning and exploring emerging technologies. I believe in creating software that is not only functional but also accessible and user-friendly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;