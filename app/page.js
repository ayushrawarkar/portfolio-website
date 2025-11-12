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
  Rocket,
  Target,
  Shield,
  Gem,
  Crown,
  Sparkle,
  Zap as Lightning,
  Award,
  TrendingUp,
  Eye,
  Heart,
  Diamond,
  Sparkles as Shine,
  Moon,
  Sun,
  Play,
  Hexagon,
  Triangle,
  Circle,
  Square
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

  // Animation variants - MODERN & SMOOTH
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

  // FIXED: Removed rotation from card hover variants
  const cardHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.04,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseGlow = {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // MODERN COLOR SCHEME - Teal, Coral, Indigo
  const services = [
    {
      title: 'Personal Portfolio',
      description: 'Elegant personal portfolio websites designed to showcase your work, skills, and experience.',
      icon: Briefcase,
      gradient: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-200/50',
      features: ['Responsive Design', 'Project Gallery', 'About Section', 'Contact Form'],
    },
    {
      title: 'Community Portfolio', 
      description: 'Collaborative platforms for communities and teams to showcase collective work.',
      icon: Users,
      gradient: 'from-coral-400 to-pink-500',
      bgColor: 'bg-coral-500/10',
      borderColor: 'border-coral-200/50',
      features: ['Member Profiles', 'Collaborative Spaces', 'Team Showcases', 'Community Engagement'],
    },
    {
      title: 'Developer Portfolio',
      description: 'Clean, technical portfolios for developers to showcase projects and technical skills.',
      icon: Code,
      gradient: 'from-indigo-400 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-200/50',
      features: ['Code Display', 'Project Showcases', 'Skills Visualization', 'GitHub Integration'],
    },
  ];

  // Tech stack with modern colors
  const techStack = [
    {
      name: 'Next.js 14',
      description: 'Latest React framework with app router and server components',
      icon: Cpu,
      color: 'text-teal-600',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-200',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'React 18',
      description: 'Modern React with concurrent features and hooks',
      icon: Zap,
      color: 'text-coral-600',
      bgColor: 'bg-coral-500/10',
      borderColor: 'border-coral-200',
      gradient: 'from-coral-500 to-pink-500'
    },
    {
      name: 'TypeScript',
      description: 'Type-safe JavaScript for robust applications',
      icon: Type,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-200',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Framer Motion',
      description: 'Advanced animations and page transitions',
      icon: Sparkle,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-200',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS with custom design system',
      icon: Wind,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-200',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Git & Vercel',
      description: 'Version control and seamless deployment',
      icon: GitBranch,
      color: 'text-pink-600',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-200',
      gradient: 'from-pink-500 to-coral-500'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/20 to-teal-50/20 overflow-hidden" ref={containerRef}>
      {/* Background elements - MODERN GEOMETRIC */}
      <div className="fixed inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"
          style={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-r from-coral-400/15 to-pink-400/15 rounded-full blur-3xl"
          style={{ x: mousePosition.x * -0.025, y: mousePosition.y * -0.025 }}
          animate={{
            y: [0, -40, 0],
            transition: { duration: 12, repeat: Infinity, ease: "linear", delay: 1 }
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{ x: mousePosition.x * 0.015, y: mousePosition.y * 0.015 }}
          animate={pulseGlow}
        />
        
        {/* Geometric Patterns */}
        <motion.div
          className="absolute top-40 right-40 w-8 h-8 bg-teal-400/30 rotate-45"
          animate={{
            y: [0, -30, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-6 h-6 bg-coral-400/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />
      </div>

      {/* Navigation - SIMPLE & CLEAN */}
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
              className="text-slate-700 hover:text-teal-600 transition-colors duration-300 relative group font-semibold"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10 px-4 py-2">Templates</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('tech')} 
              className="text-slate-700 hover:text-coral-600 transition-colors duration-300 relative group font-semibold"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10 px-4 py-2">Tech Stack</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('example')}
              className="text-slate-700 hover:text-indigo-600 transition-colors duration-300 relative group font-semibold"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10 px-4 py-2">View Work</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - SINGLE CTA */}
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
            {/* FIXED: Using solid color instead of gradient for better visibility */}
            <motion.div className="text-teal-600 inline-block min-h-[60px] sm:min-h-[80px] lg:min-h-[96px] overflow-visible">
              <span className="block h-full flex items-center justify-center font-bold">
                {currentText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 inline-block w-1 h-8 sm:h-12 lg:h-16 bg-teal-600 align-middle"
                >
                  
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
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
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

        {/* Creative Scroll Indicator */}
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
                className="flex flex-col items-center text-teal-600 cursor-pointer"
                onClick={() => scrollToSection('templates')}
                whileHover={{ y: 5 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm mb-2 font-semibold">Explore Templates</span>
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Hexagon className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Portfolio Template Gallery Section - FIRST SECTION */}
      <section id="templates" className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* FIXED: Using solid colors for headings */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Portfolio <span className="text-teal-600">Template Gallery</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Choose from our professionally designed templates to create a portfolio that truly represents you and your work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <motion.article
                key={idx}
                className="group relative"
                variants={itemVariants}
                whileHover="hover"
                // initial="initial"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div
                  className="relative p-8 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                  variants={cardHoverVariants}
                >
                  {/* Geometric Shape Background */}
                  <motion.div
                    className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full`}
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: { duration: 8, repeat: Infinity, ease: "linear" }
                    }}
                  />

                  {/* FIXED: Removed rotation from icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{service.title}</h3>
                  <p className="text-slate-700 mb-6 leading-relaxed text-center flex-grow">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((f, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center text-sm text-slate-700 font-medium"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12 p-6 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl border border-teal-200/30 max-w-2xl mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-6 h-6 text-white" />
            </motion.div>
            <p className="text-lg text-slate-800 font-medium italic">
              "These are just a few examples of what we can do. Our designs are custom-tailored to your unique story and goals."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* FIXED: Using solid colors for headings */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-coral-600">Our Templates</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">Our portfolio templates are designed with both aesthetics and functionality in mind.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "Fully Responsive", desc: "Looks perfect on all devices from mobile to desktop.", color: "teal", gradient: "from-teal-400 to-cyan-500" },
              { icon: Smartphone, title: "Easy to Customize", desc: "Change colors, fonts, and layouts with simple configuration.", color: "coral", gradient: "from-coral-400 to-pink-500" },
              { icon: Globe, title: "SEO Optimized", desc: "Built with best practices to help you rank higher in search results.", color: "indigo", gradient: "from-indigo-400 to-purple-500" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div
                  className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full`}
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                />

                {/* FIXED: Removed rotation from feature icons */}
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
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
            {/* FIXED: Using solid colors for headings */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Built With <span className="text-indigo-600">Modern Tech Stack</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Our templates leverage the latest technologies to ensure performance, scalability, and an amazing user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                variants={itemVariants}
                whileHover="hover"
                
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div
                  className={`p-6 ${tech.bgColor} backdrop-blur-sm rounded-2xl border-2 ${tech.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full`}
                  variants={cardHoverVariants}
                >
                  {/* FIXED: Removed rotation from tech icons */}
                  <motion.div
                    className={`w-14 h-14 ${tech.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border ${tech.borderColor} mx-auto`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                  </motion.div>

                  <h3 className={`text-xl font-bold ${tech.color} mb-2 text-center`}>{tech.name}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed text-center">{tech.description}</p>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${tech.gradient} group-hover:w-full transition-all duration-500`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Real Example Section - THIRD SECTION */}
      <section id="example" className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            {/* FIXED: Using solid colors for headings */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              See Our <span className="text-pink-600">Work In Action</span>
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
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              viewport={{ once: true, margin: '-50px' }}
              onClick={handleClientClick}
            >
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center overflow-hidden">
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-coral-400/20 to-pink-400/20 rounded-full blur-xl"
                  animate={pulseGlow}
                />

                {/* Client Avatar - FIXED: Reduced rotation */}
                <motion.div
                  className="relative mx-auto mb-6 w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 p-2 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
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
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 hidden items-center justify-center text-teal-600 font-bold text-2xl">
                      AI
                    </div>
                  </div>

                  <motion.div
                    className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-coral-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{clientPortfolio.name}</h3>
                <p className="text-teal-600 font-medium text-lg mb-4">{clientPortfolio.role}</p>

                <div className="flex justify-center items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Star
                        className={`w-5 h-5 ${i < clientPortfolio.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-300 text-gray-300'
                          }`}
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  className="text-slate-600 text-sm flex items-center justify-center gap-2 font-medium"
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
          className="bg-gradient-to-br from-teal-500 via-coral-500 to-indigo-500 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Floating Shapes */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full"
            animate={{
              y: [0, -20, 0],
              transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/10 rotate-45"
            animate={{
              scale: [1, 1.3, 1],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
          />
          
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4 relative z-10"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Ready to Create Your Portfolio?
          </motion.h2>

          <motion.p
            className="text-teal-100 text-xl mb-8 relative z-10"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Explore all our templates and choose the perfect one for your needs.
          </motion.p>

          <motion.button
            className="group inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/templates')}
          >
            <span className="absolute inset-0 bg-teal-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <Code className="w-5 h-5 mr-3 relative z-10" />
            <span className="relative z-10 text-lg">View All Templates</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 text-center">
        <motion.p
          className="text-slate-700 font-semibold"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          © {new Date().getFullYear()} Creator Research Pvt.Ltd. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
}