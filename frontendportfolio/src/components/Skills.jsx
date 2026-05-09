import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaServer, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase">What I bring</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">My <span className="text-blue-600">Skills</span></h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Technologies & tools I master to build amazing apps</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <FaPalette className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Frontend</h3>
            <div className="space-y-4">
              {[ {name: "React", score: 90}, {name: "JavaScript", score: 88}, {name: "TailwindCSS", score: 92} ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-semibold text-blue-600">{skill.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.score}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-blue-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
              <FaServer className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Backend</h3>
            <div className="space-y-4">
              {[ {name: "Node.js", score: 89}, {name: "Express.js", score: 87}, {name: "REST APIs", score: 90} ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-semibold text-green-600">{skill.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.score}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-green-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-600"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
              <FaDatabase className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Database & Tools</h3>
            <div className="space-y-4">
              {[ {name: "MongoDB", score: 88}, {name: "Git/GitHub", score: 90}, {name: "Postman", score: 87} ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-semibold text-purple-600">{skill.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.score}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-purple-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div><div className="text-4xl font-bold mb-2">15+</div><div className="text-blue-100">Technologies</div></div>
            <div><div className="text-4xl font-bold mb-2">5+</div><div className="text-blue-100">Projects Completed</div></div>
            <div><div className="text-4xl font-bold mb-2">2+</div><div className="text-blue-100">Years Experience</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
