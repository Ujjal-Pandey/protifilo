import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFileDownload } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
const profileImg = '/profile.jpeg';

const cvPdf = '/intership_cv.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 relative overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-white/70 backdrop-blur-sm shadow-sm">
            <p className="text-blue-600 font-semibold tracking-wide text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Available for work
            </p>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Ujjal Pandey
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-semibold tracking-wide mt-2">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
            Crafting modern, highly performant web applications with elegant design and scalable backend architecture.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: <FaReact className="text-blue-500" />, name: "React" },
              { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
              { icon: <SiExpress className="text-gray-700" />, name: "Express" },
              { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
              { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" }
            ].map((tech) => (
              <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-semibold border border-gray-100 text-gray-700 shadow-sm hover:border-gray-200 hover:shadow transition-all cursor-default">
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 pt-4">
            <a href="#projects" className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              View My Work
            </a>
            <a href={cvPdf} download="intership_cv.pdf" className="px-8 py-3.5 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow flex items-center justify-center gap-2">
              <FaFileDownload className="text-blue-600" /> Get CV
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center relative lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-1000"></div>
            <img 
              src={profileImg} 
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white group-hover:scale-[1.02] transition duration-500" 
              alt="Ujjal Pandey" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
