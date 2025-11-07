"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Palette,
  Code,
  ArrowRight,
  Layout,
  Smartphone,
  Briefcase,
  Globe,
  Sparkles,
  Cpu,
  Type,
  Zap,
  Palette as FramerIcon,
  Wind,
  GitBranch,
  ExternalLink,
  Star,
  Users,
  ArrowDown,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useScroll();
  const containerRef = useRef(null);

  // Hide scroll indicator when user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotatingTexts = useMemo(() => [
    "Professional Portfolio",
    "Stunning Website", 
    "Creative Showcase",
    "Impressive Profile"
  ], []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Throttle mousemove events
  useEffect(() => {
    let ticking = false;
    const updateMouse = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', updateMouse, { passive: true });
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const handleType = () => {
      const current = currentTextIndex % rotatingTexts.length;
      const fullText = rotatingTexts[current];
      setCurrentText(isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      );
      setTypingSpeed(isDeleting ? 40 : 80);
      if (!isDeleting && currentText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 700);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((current + 1) % rotatingTexts.length);
      }
    };
    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typingSpeed, rotatingTexts]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 14,
        mass: 0.5
      }
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const services = [
    {
      title: 'Personal Portfolio',
      description: 'Elegant personal portfolio websites designed to showcase your work, skills, and experience.',
      icon: Briefcase,
      features: ['Responsive Design', 'Project Gallery', 'About Section', 'Contact Form'],
    },
    {
      title: 'Community Portfolio', 
      description: 'Collaborative platforms for communities and teams to showcase collective work.',
      icon: Users,
      features: ['Member Profiles', 'Collaborative Spaces', 'Team Showcases', 'Community Engagement'],
    },
    {
      title: 'Developer Portfolio',
      description: 'Clean, technical portfolios for developers to showcase projects and technical skills.',
      icon: Code,
      features: ['Code Display', 'Project Showcases', 'Skills Visualization', 'GitHub Integration'],
    },
  ];

  // Tech stack data
  const techStack = [
    {
      name: 'Next.js',
      description: 'React framework for production-grade applications with server-side rendering',
      icon: Cpu,
      color: 'text-black',
      bgColor: 'bg-black/5',
    },
    {
      name: 'React',
      description: 'Library for building user interfaces with reusable components',
      icon: Zap,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/5',
    },
    {
      name: 'TypeScript',
      description: 'Typed JavaScript for better developer experience and code quality',
      icon: Type,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/5',
    },
    {
      name: 'Framer Motion',
      description: 'Production-ready motion library for smooth animations and interactions',
      icon: FramerIcon,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/5',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      icon: Wind,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/5',
    },
    {
      name: 'Git & Vercel',
      description: 'Version control and seamless deployment for modern web applications',
      icon: GitBranch,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/5',
    },
  ];

  // Single client portfolio example
  const clientPortfolio = {
    name: "Dr. Anup Ingle",
    role: "Assistant Professor At VIT Pune",
    website: "https://www.anupingle.com/",
    image: "https://www.anupingle.com/profile11.png",
    rating: 5,
  };

  const handleClientClick = () => {
    window.open(clientPortfolio.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        <motion.div
          className="absolute top-24 left-12 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          style={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl"
          style={{ x: mousePosition.x * -0.015, y: mousePosition.y * -0.015 }}
          animate={{
            y: [0, -20, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />
        <motion.div
          className="absolute bottom-24 left-1/3 w-80 h-80 bg-gradient-to-r from-green-200/25 to-blue-200/25 rounded-3xl blur-3xl"
          style={{ x: mousePosition.x * 0.01, y: mousePosition.y * 0.01 }}
          animate={{
            y: [0, 15, 0],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="relative z-50 p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center space-x-12">
            <motion.button
              onClick={() => scrollToSection('templates')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              Templates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('tech')} 
              className="text-slate-700 hover:text-purple-600 transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              Tech Stack
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('example')}
              className="text-slate-700 hover:text-pink-600 transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              View Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - ONLY EXPLORE CTA */}
      <motion.header className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-20 text-center" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block"
            >
              Stand Out With A{' '}
            </motion.span>
            <motion.div
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block min-h-[60px] sm:min-h-[80px] lg:min-h-[96px] overflow-visible"
              initial={{ backgroundPosition: '200% 0' }}
              animate={{ backgroundPosition: '0% 0' }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            >
              <span className="block h-full flex items-center justify-center">
                {currentText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 inline-block w-1 h-8 sm:h-12 lg:h-16 bg-current align-middle"
                >
                  |
                </motion.span>
              </span>
            </motion.div>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Get noticed with a stunning portfolio that showcases your best work. Our templates are designed to impress clients and employers while highlighting your unique talents and personality.
          </motion.p>

          {/* SINGLE CTA - EXPLORE PORTFOLIOS */}
          <motion.div
            className="flex justify-center mt-2 px-4"
            variants={itemVariants}
          >
            <motion.button
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('templates')}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Palette className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10 text-lg">Explore Portfolio Templates</span>
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300 relative z-10" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex flex-col items-center text-slate-500 cursor-pointer"
                onClick={() => scrollToSection('templates')}
                whileHover={{ y: 5 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm mb-2">Explore Templates</span>
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Portfolio Template Gallery Section - FIRST SECTION */}
      <section id="templates" className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Portfolio <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Template Gallery</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Choose from our professionally designed templates to create a portfolio that truly represents you and your work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <motion.article
                key={idx}
                className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>

                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((f, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-sm text-slate-700"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      {f}
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Templates</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">Our portfolio templates are designed with both aesthetics and functionality in mind.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "Fully Responsive", desc: "Looks perfect on all devices from mobile to desktop.", color: "blue" },
              { icon: Smartphone, title: "Easy to Customize", desc: "Change colors, fonts, and layouts with simple configuration.", color: "purple" },
              { icon: Globe, title: "SEO Optimized", desc: "Built with best practices to help you rank higher in search results.", color: "pink" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>

                <motion.div
                  className={`w-12 h-12 ${feature.color === 'blue' ? 'bg-blue-100' : feature.color === 'purple' ? 'bg-purple-100' : 'bg-pink-100'} rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color === 'blue' ? 'text-blue-600' : feature.color === 'purple' ? 'text-purple-600' : 'text-pink-600'}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section - SECOND SECTION */}
      <section id="tech" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Built With <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Modern Tech Stack</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Our templates leverage the latest technologies to ensure performance, scalability, and an amazing user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>

                <motion.div
                  className={`w-14 h-14 ${tech.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <tech.icon className={`w-7 h-7 ${tech.color}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{tech.description}</p>

                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Real Example Section - THIRD SECTION */}
      <section id="example" className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              See Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Work In Action</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Check out this stunning portfolio we created for a professional developer.
            </p>
          </motion.div>

          {/* Single Client Card */}
          <div className="flex justify-center">
            <motion.div
              className="group cursor-pointer max-w-sm w-full"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              viewport={{ once: true, margin: '-50px' }}
              onClick={handleClientClick}
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>

                {/* Client Avatar */}
                <motion.div
                  className="relative mx-auto mb-6 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-red-500 p-2 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <img
                      src={clientPortfolio.image}
                      alt={clientPortfolio.name}
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-100 to-red-100 hidden items-center justify-center text-orange-600 font-bold text-2xl">
                      AI
                    </div>
                  </div>

                  <motion.div
                    className="absolute -top-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{clientPortfolio.name}</h3>
                <p className="text-orange-600 font-medium text-lg mb-4">{clientPortfolio.role}</p>

                <div className="flex justify-center items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < clientPortfolio.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-300 text-gray-300'
                        }`}
                    />
                  ))}
                </div>

                <motion.p
                  className="text-slate-600 text-sm flex items-center justify-center gap-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Click to visit portfolio website
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA Section - View Templates */}
      <section id="view-templates" className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Ready to Create Your Portfolio?
          </motion.h2>

          <motion.p
            className="text-blue-100 text-xl mb-8"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Explore all our templates and choose the perfect one for your needs.
          </motion.p>

          <motion.button
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/templates')}
          >
            <span className="absolute inset-0 bg-blue-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <Code className="w-5 h-5 mr-3 relative z-10" />
            <span className="relative z-10 text-lg">View All Templates</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 text-center">
        <motion.p
          className="text-slate-700"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          © {new Date().getFullYear()}. Creator Research Pvt.Ltd. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
}