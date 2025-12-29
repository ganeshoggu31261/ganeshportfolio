import React, { Suspense } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeScene from './three/ThreeScene';
import profilePic from './passport.jpg';


const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900" />}>
          <ThreeScene />
        </Suspense>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-primary-500 inline-block">
                Oggu Venkata Sai Sree Ganesh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              Computer Science Engineering Student
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="btn btn-primary"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 animate-float">
          <img
         
  src={profilePic}
  alt="Oggu Venkata Sai Sree Ganesh"
  className="w-full h-full object-cover"
/>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-600 dark:text-gray-400">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-primary-500" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;