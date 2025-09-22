import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Advanced scroll animations with stagger
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }, index * 150);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px) scale(0.95)';
      el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Typewriter effect for hero text
  useEffect(() => {
    const text = "Raghav Arora";
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.innerHTML = '';
      let currentText = '';
      text.split('').forEach((char, index) => {
        setTimeout(() => {
          currentText += char;
          heroTitle.innerHTML = currentText;
        }, index * 100);
      });
    }
  }, []);

  // Removed form handling functions as we're using direct contact links

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="aurora-bg"></div>
        <div className="floating-particles"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
        <div className="orb orb-6"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Interactive cursor trail */}
      <div 
        className="cursor-trail"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      ></div>

      {/* Enhanced Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-blue-400/20 shadow-2xl nav-glow">
        <div className="flex space-x-8">
          {['Home', 'Experience', 'Skills', 'Connect'].map((item, index) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase() === 'connect' ? 'contact' : item.toLowerCase())}
              className="relative text-white/80 hover:text-white transition-all duration-500 hover:scale-110 nav-item group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
          ))}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative" ref={heroRef}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="hero-glow"></div>
          
          <h1 className="hero-title text-7xl md:text-9xl font-black mb-6 leading-none relative">
          </h1>
          
          <div className="overflow-hidden mb-8">
            <p className="tagline-animated text-xl md:text-2xl text-blue-300 font-light leading-relaxed">
              Business Analytics | AI | SEO | Global Business | Supply Chain | Social Media Marketer | Creative Designer
            </p>
          </div>
          
          <div className="overflow-hidden mb-12">
            <p className="summary-animated text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A passionate professional exploring the intersection of international business, logistics, and AI, 
              with a creative approach to design and problem-solving.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="mailto:ar.raghav07@outlook.com"
              className="social-icon-enhanced group"
            >
              <Mail size={28} />
              <div className="icon-ripple"></div>
            </a>
            <a 
              href="https://www.linkedin.com/in/raghav-4-r7r4"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-enhanced group"
            >
              <Linkedin size={28} />
              <div className="icon-ripple"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Experience Section */}
      <section id="experience" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="section-title text-5xl md:text-6xl font-black mb-4 relative inline-block">
              Professional Experience
              <div className="title-underline"></div>
            </h2>
          </div>
          
          <div className="space-y-24">
            {[
              {
                title: "Social Media Marketing Specialist",
                company: "SOAK & STEP",
                period: "July 2025 - Present",
                tasks: [
                  "Manage Soak & Step's social media presence and content strategy",
                  "Use AI tools to generate and edit brand images/videos",
                  "Drive engagement through trend-driven, creative marketing"
                ]
              },
              {
                title: "NGO Intern",
                company: "Missionaries of Charity",
                period: "December 2024",
                tasks: [
                  "Contributed 30+ hours supporting elderly, disabled, and handicapped individuals",
                  "Developed empathy and understanding through direct community engagement"
                ]
              },
              {
                title: "Sales and Marketing Intern",
                company: "SBI Life Insurance Co. Ltd.",
                period: "March 2024 - September 2024",
                tasks: [
                  "Explained insurance products and policies to prospective customers",
                  "Supported sales initiatives and customer outreach campaigns remotely"
                ]
              },
              {
                title: "Manager of Operations",
                company: "Himvikas Industries",
                period: "November 2023 - January 2024",
                tasks: [
                  "Gained experience in marketing, operations, and project management",
                  "Enhanced skills in market research, data analysis, and customer relationship management"
                ]
              }
            ].map((job, index) => (
              <div key={index} className="animate-on-scroll experience-card-enhanced group">
                <div className="glass-card-enhanced p-10 rounded-3xl relative overflow-hidden">
                  <div className="card-glow"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                  
                  <h3 className="text-3xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {job.title}
                  </h3>
                  <p className="text-xl text-blue-200 mb-6 font-medium">{job.company} | {job.period}</p>
                  <ul className="text-lg text-white/90 space-y-3 leading-relaxed">
                    {job.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <Sparkles size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills & Education Section */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="section-title text-5xl md:text-6xl font-black mb-4 relative inline-block">
              Skills & Education
              <div className="title-underline"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Skills Column */}
            <div className="animate-on-scroll">
              <Card className="glass-card-enhanced border-0 h-full group hover:scale-105 transition-transform duration-500">
                <CardContent className="p-10 relative">
                  <div className="card-glow"></div>
                  <h3 className="text-4xl font-bold text-blue-400 mb-10 group-hover:text-blue-300 transition-colors duration-300">
                    Skills & Certifications
                  </h3>
                  
                  <div className="mb-10">
                    <h4 className="text-2xl font-semibold text-blue-200 mb-6">Top Skills</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Social Media Marketing', 'International Logistics', 'Operations Management'].map((skill, index) => (
                        <span key={skill} className="skill-tag" style={{ animationDelay: `${index * 0.1}s` }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-semibold text-blue-200 mb-6">Certifications & Workshops</h4>
                    <ul className="text-lg text-white/90 space-y-4 leading-relaxed">
                      {[
                        "2 Day AI Mastermind - Outskill",
                        "International Logistics and Supply Chain",
                        "Introduction to Artificial Intelligence",
                        "Mandarin Chinese: Chinese for Beginners"
                      ].map((cert, index) => (
                        <li key={cert} className="flex items-center cert-item" style={{ animationDelay: `${index * 0.15}s` }}>
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 pulse-dot"></div>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education Column */}
            <div className="animate-on-scroll">
              <Card className="glass-card-enhanced border-0 h-full group hover:scale-105 transition-transform duration-500">
                <CardContent className="p-10 relative">
                  <div className="card-glow"></div>
                  <h3 className="text-4xl font-bold text-blue-400 mb-10 group-hover:text-blue-300 transition-colors duration-300">
                    Education
                  </h3>
                  
                  <div className="mb-12 edu-item">
                    <h4 className="text-2xl font-semibold text-blue-200 mb-3">Christ University, Bangalore</h4>
                    <p className="text-xl text-white/80 mb-2 font-medium">Bachelor of Business Administration - BBA</p>
                    <p className="text-xl text-white/80 mb-3">Strategy And Business Analytics</p>
                    <p className="text-base text-blue-300 font-medium">2024 - 2027</p>
                  </div>
                  
                  <div className="edu-item">
                    <h4 className="text-2xl font-semibold text-blue-200 mb-3">St. Mary's Covent Sr. Secondary School</h4>
                    <p className="text-xl text-white/80 mb-2 font-medium">High School Graduate</p>
                    <p className="text-xl text-white/80 mb-3">Business/Commerce</p>
                    <p className="text-base text-blue-300 font-medium">2021 - 2023</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Direct Links */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title text-5xl md:text-6xl font-black mb-8 relative inline-block">
              Let's Connect
              <div className="title-underline"></div>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate or have questions? Reach out through your preferred channel.
            </p>
          </div>
          
          <div className="flex justify-center space-x-12 animate-on-scroll">
            <a 
              href="mailto:ar.raghav07@outlook.com"
              className="contact-link-enhanced group"
            >
              <div className="contact-icon-container">
                <Mail size={32} />
                <div className="contact-ripple"></div>
              </div>
              <span className="contact-label">Email Me</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/raghav-4-r7r4"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-enhanced group"
            >
              <div className="contact-icon-container">
                <Linkedin size={32} />
                <div className="contact-ripple"></div>
              </div>
              <span className="contact-label">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-4 border-t border-blue-400/20 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-xl font-light">
            © 2024 Raghav Arora. Crafted with passion and powered by innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;