import React from 'react';
import { motion } from 'framer-motion';
const profileImg = '/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">About <span className="text-blue-600">Me</span></h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-2xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img src={profileImg} alt="Ujjal Pandey" className="w-full h-auto object-cover hover:scale-105 transition duration-700" />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 flex items-center gap-4 border border-gray-100 z-20">
              <div className="bg-blue-600 text-white rounded-lg w-16 h-16 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">2+</span>
                <span className="text-xs">Years</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">Coding Experience</p>
                <p className="text-sm text-gray-500">Full Stack Development</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">I'm <span className="text-blue-600">Ujjal Pandey</span></h3>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">A passionate <strong className="text-blue-600">Full Stack Developer</strong> currently studying <strong className="text-blue-600">CSIT at Butwal Multiple Campus</strong>. I transform ideas into elegant, functional web applications.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-5 rounded-xl border hover:shadow-lg transition">
                <span className="text-3xl mb-2 block">🎓</span>
                <h4 className="font-bold">Education</h4>
                <p className="text-sm">CSIT Student</p>
                <p className="text-xs text-gray-500">Butwal Multiple Campus</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border hover:shadow-lg transition">
                <span className="text-3xl mb-2 block">💻</span>
                <h4 className="font-bold">Experience</h4>
                <p className="text-sm">2+ Years Coding</p>
                <p className="text-xs text-gray-500">Full Stack Focus</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border hover:shadow-lg transition">
                <span className="text-3xl mb-2 block">🚀</span>
                <h4 className="font-bold">Projects</h4>
                <p className="text-sm">5+ Completed</p>
                <p className="text-xs text-gray-500">MERN Stack</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border hover:shadow-lg transition">
                <span className="text-3xl mb-2 block">🌍</span>
                <h4 className="font-bold">Location</h4>
                <p className="text-sm">Butwal, Nepal</p>
                <p className="text-xs text-gray-500">Remote Available</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-600">
              <p className="text-gray-700 italic">"I believe great software is born from passion, attention to detail, and a deep understanding of user needs. I'm committed to building solutions that make a difference."</p>
              <p className="text-blue-600 font-semibold mt-2">— Ujjal Pandey</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
