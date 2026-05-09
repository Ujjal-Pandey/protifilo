import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-gray-900 font-bold text-2xl mb-4 tracking-tight">Ujjal <span className="text-blue-600">Pandey</span></h3>
          <p className="max-w-sm leading-relaxed mb-6">
            A passionate Full Stack Developer focused on building premium, highly-performant, and scalable web applications.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Ujjal-Pandey" target="_blank" rel="noopener noreferrer" className="w-10 h-10 shadow-sm border border-gray-200 rounded-full bg-white flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://www.facebook.com/ujjal.pandey.929038/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 shadow-sm border border-gray-200 rounded-full bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <FaFacebook className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 shadow-sm border border-gray-200 rounded-full bg-white flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 font-medium text-gray-500">
            <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-3 font-medium text-gray-500">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Web Design</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">UI/UX Design</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Full Stack Development</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-500">
        <p>© {new Date().getFullYear()} Ujjal Pandey. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built with <span className="text-gray-900">React</span> & <span className="text-cyan-600">Tailwind V4</span></p>
      </div>
    </footer>
  );
};

export default Footer;
