import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A complete, modern e-commerce platform built with MERN stack. Features include robust product management, user authentication, interactive cart functionality, secure payment gateway integration, order management, and fully responsive UI. Built with scalable architecture for modern e-commerce businesses.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Payment Gateway"],
      github: "https://github.com/Ujjal-Pandey/Ecommerce-website-mern-stack-",
      demo: "https://ecommerce-website-mern-stack-yta5-three.vercel.app/"
    },
    {
      title: "IT Management System (EventHub)",
      description: "A comprehensive event management system designed for IT professionals and organizations. Features include event scheduling, attendee management, ticketing system, real-time notifications, and analytics. Streamlines the entire event management workflow with an intuitive interface.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express", "Real-time"],
      github: "https://github.com/shubhamgyawali7/EventHub/commits/ujjal",
      demo: "https://event-hub-eight-rho.vercel.app/"
    },
    {
      title: "Password Size Photo Generator",
      description: "A utility tool that generates passport-sized photos from any image. Simply upload your photo, and the application automatically crops, resizes, and formats it to passport size specifications. Perfect for documents, applications, and identification needs.",
      image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=400&fit=crop",
      tags: ["React", "Canvas API", "Image Processing", "TailwindCSS"],
      github: "https://github.com/Ujjal-Pandey/Password-size-Photo",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 text-gray-900 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Work</span></h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">My latest and most advanced projects, focusing on scalable architecture and premium aesthetics.</p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden h-72 md:h-96 w-full bg-gray-100">
                <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-8 md:p-12 -mt-4 relative z-20 bg-white rounded-b-3xl">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition font-semibold">
                    <FaGithub className="text-xl" /> GitHub
                  </a>
                  <a href={project.demo} className="flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl shadow-blue-600/30">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
