import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if(response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-gray-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span></h2>
          <p className="text-gray-600 mt-4 text-lg">Have a project in mind? Let's build something great together.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: <FaEnvelope className="text-blue-600 text-2xl" />, title: "Email", value: "ujjalpandey12@gmail.com", link: "mailto:ujjalpandey12@gmail.com", action: "Write to me \u2192", bg: "bg-blue-50" },
              { icon: <FaPhoneAlt className="text-green-600 text-2xl" />, title: "Phone", value: "+977 9762898601", link: "tel:+9779762898601", action: "Call now \u2192", bg: "bg-green-50" },
              { icon: <FaMapMarkerAlt className="text-purple-600 text-2xl" />, title: "Location", value: "Butwal, Nepal", span: "Available for remote work", bg: "bg-purple-50" }
            ].map((info, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className={`w-16 h-16 rounded-2xl ${info.bg} flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm`}>
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">{info.title}</h3>
                  <p className="text-gray-900 text-xl font-medium mb-1">{info.value}</p>
                  {info.link ? (
                    <a href={info.link} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">{info.action}</a>
                  ) : (
                    <span className="text-purple-600 font-medium">{info.span}</span>
                  )}
                </div>
              </div>
            ))}
            
            <div className="flex gap-4 pt-8 border-t border-gray-100">
              {[
                { i: FaGithub, href: "https://github.com/Ujjal-Pandey", hoverColor: "hover:bg-gray-900 hover:text-white" },
                { i: FaFacebook, href: "https://www.facebook.com/ujjal.pandey.929038/", hoverColor: "hover:bg-blue-600 hover:text-white" },
                { i: FaLinkedin, href: "#", hoverColor: "hover:bg-blue-500 hover:text-white" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 ${social.hoverColor} transition-all duration-300 border border-gray-200 shadow-sm`}>
                  <social.i className="text-2xl" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send me a message</h3>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl">
                Failed to send message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-gray-900 resize-none"></textarea>
              </div>
              <button disabled={status === 'sending'} type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-600/30 flex justify-center items-center gap-2 mt-4 disabled:opacity-50">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
