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
  Square,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
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

  // Animation variants - OPTIMIZED FOR MOBILE
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 16,
        mass: 0.8
      }
    },
  };

  const cardHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.03,
      y: -4,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseGlow = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
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

  // Client portfolio examples - ADDED SECOND CLIENT
  const clientPortfolios = [
    {
      name: "Dr. Anup Ingle",
      role: "Assistant Professor At VIT Pune",
      website: "https://www.anupingle.com/",
      image: "https://www.anupingle.com/profile11.png",
      rating: 5,
      type: "Academic Portfolio",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      name: "Dr. Rishi Kulshresth",
      role: "IPR & Brand Protection Lawyer",
      website: "https://drrishikulshresth.com/wp/",
      image: "https://drrishikulshresth.com/wp/wp-content/uploads/2024/07/Client_image1.jpg",
      rating: 5,
      type: "Personal Portfolio", 
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  const handleClientClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50/40 to-teal-50/60 overflow-hidden" ref={containerRef}>
      {/* IMPROVED BACKGROUND - Vibrant but light for mobile */}
      <div className="fixed inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        {/* Main light gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-teal-50/70" />
        
        {/* Beautiful floating shapes with optimized colors for mobile */}
        <motion.div
          className="absolute top-20 left-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-teal-300/40 to-cyan-400/30 rounded-full blur-2xl sm:blur-3xl"
          style={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-1/3 right-4 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-r from-rose-300/30 to-pink-400/25 rounded-full blur-2xl sm:blur-3xl"
          style={{ x: mousePosition.x * -0.025, y: mousePosition.y * -0.025 }}
          animate={{
            y: [0, -30, 0],
            transition: { duration: 12, repeat: Infinity, ease: "linear", delay: 1 }
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-indigo-300/35 to-purple-400/30 rounded-full blur-2xl sm:blur-3xl"
          style={{ x: mousePosition.x * 0.015, y: mousePosition.y * 0.015 }}
          animate={pulseGlow}
        />
        
        {/* Additional subtle shapes */}
        <motion.div
          className="absolute top-40 right-10 w-32 h-32 bg-gradient-to-r from-amber-200/20 to-yellow-300/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Light overlay to ensure brightness */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* UPDATED NAVIGATION WITH BALANCED LAYOUT */}
      <motion.nav
        className="relative z-50 p-4 sm:p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section - Left Side */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* Company Logo */}
            <motion.div
              className="w-30 h-16 sm:w-35 sm:h-20 flex items-center justify-center overflow-hidden"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/templates/logoblack.png"
                alt="Creator Research Logo"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback logo icon */}
              <div className="hidden w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden sm:flex items-center space-x-8">
            <motion.button
              onClick={() => scrollToSection('templates')}
              className="text-slate-700 hover:text-teal-600 transition-colors duration-300 relative group font-semibold px-4 py-2"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">Templates</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('tech')} 
              className="text-slate-700 hover:text-coral-600 transition-colors duration-300 relative group font-semibold px-4 py-2"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">Tech Stack</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('example')}
              className="text-slate-700 hover:text-indigo-600 transition-colors duration-300 relative group font-semibold px-4 py-2"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">View Work</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          </div>

          {/* Contact Button - Right Side */}
          <div className="hidden sm:flex">
            <motion.button
              onClick={() => router.push('/templates')}
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Get Started</span>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button - Right Side */}
          <div className="sm:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-xl text-slate-700 font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Light background */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="sm:hidden fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-50/95 to-cyan-50/90 backdrop-blur-md z-50"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 p-8">
                {/* Close Button */}
                <motion.button
                  onClick={toggleMobileMenu}
                  className="absolute top-6 right-6 p-2 text-slate-700 hover:bg-white/50 rounded-lg transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Logo in Mobile Menu */}
                <motion.div
                  className="flex items-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/templates/logoblack.png"
                      alt="Creator Research Logo"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.nextSibling;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl items-center justify-center">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Menu Items */}
                <motion.button
                  onClick={() => scrollToSection('templates')}
                  className="text-2xl font-bold text-slate-900 hover:text-teal-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Templates
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('tech')}
                  className="text-2xl font-bold text-slate-900 hover:text-coral-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tech Stack
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('example')}
                  className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.button>

                {/* Get Started Button */}
                <motion.button
                  onClick={() => router.push('/templates')}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* IMPROVED HERO SECTION FOR MOBILE */}
      <motion.header 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-20 text-center"
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block"
            >
              Stand Out With A{' '}
            </motion.span>
            <motion.div className="text-teal-600 inline-block min-h-[40px] sm:min-h-[50px] lg:min-h-[60px] overflow-visible">
              <span className="block h-full flex items-center justify-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                {currentText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-teal-600 align-middle"
                />
              </span>
            </motion.div>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Get noticed with a stunning portfolio that showcases your best work. Our templates are designed to impress clients and employers.
          </motion.p>

          {/* SINGLE CTA - OPTIMIZED FOR MOBILE */}
          <motion.div
            className="flex justify-center mt-4 sm:mt-6 px-2"
            variants={itemVariants}
          >
            <motion.button
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('templates')}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 relative z-10" />
              <span className="relative z-10">Explore Portfolio Templates</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-0.5 transition-transform duration-300 relative z-10" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Creative Scroll Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex flex-col items-center text-teal-600 cursor-pointer"
                onClick={() => scrollToSection('templates')}
                whileHover={{ y: 3 }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-semibold">Explore</span>
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Hexagon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* REST OF THE SECTIONS WITH BEAUTIFUL GRADIENT BACKGROUND */}
      {/* Portfolio Template Gallery Section */}
      <section id="templates" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Portfolio <span className="text-teal-600">Template Gallery</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-2">
              Choose from our professionally designed templates to create a portfolio that truly represents you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {services.map((service, idx) => (
              <motion.article
                key={idx}
                className="group relative"
                variants={itemVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true, margin: '-30px' }}
              >
                <motion.div
                  className="relative p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  variants={cardHoverVariants}
                >
                  {/* Service Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 mx-auto`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 text-center">{service.title}</h3>
                  <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-center text-sm sm:text-base flex-grow">{service.description}</p>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((f, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center text-xs sm:text-sm text-slate-700 font-medium"
                        whileHover={{ x: 3 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 sm:mr-3`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
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
            className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-teal-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/60 max-w-2xl mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.div>
            <p className="text-sm sm:text-base text-slate-800 font-medium italic">
              "These are just a few examples of what we can do. Our designs are custom-tailored to your unique story and goals."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Why Choose <span className="text-coral-600">Our Templates</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-2">
              Our portfolio templates are designed with both aesthetics and functionality in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Layout, title: "Fully Responsive", desc: "Looks perfect on all devices from mobile to desktop.", color: "teal", gradient: "from-teal-400 to-cyan-500" },
              { icon: Smartphone, title: "Easy to Customize", desc: "Change colors, fonts, and layouts with simple configuration.", color: "coral", gradient: "from-coral-400 to-pink-500" },
              { icon: Globe, title: "SEO Optimized", desc: "Built with best practices to help you rank higher in search results.", color: "indigo", gradient: "from-indigo-400 to-purple-500" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-30px' }}
              >
                {/* Feature Icon */}
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-700 text-sm sm:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Built With <span className="text-indigo-600">Modern Tech Stack</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-2">
              Our templates leverage the latest technologies to ensure performance and amazing user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                variants={itemVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true, margin: '-30px' }}
              >
                <motion.div
                  className={`p-4 sm:p-6 ${tech.bgColor} backdrop-blur-sm rounded-xl sm:rounded-2xl border ${tech.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full`}
                  variants={cardHoverVariants}
                >
                  {/* Tech Icon */}
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${tech.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300 mx-auto border ${tech.borderColor}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <tech.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${tech.color}`} />
                  </motion.div>

                  <h3 className={`text-lg sm:text-xl font-bold ${tech.color} mb-2 text-center`}>{tech.name}</h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-center">{tech.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Real Example Section - UPDATED WITH TWO CLIENTS */}
      <section id="example" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              See Our <span className="text-pink-600">Work In Action</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-2">
              Check out these stunning portfolios we created for our amazing clients.
            </p>
          </motion.div>

          {/* Client Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {clientPortfolios.map((client, idx) => (
              <motion.div
                key={idx}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-30px' }}
                onClick={() => handleClientClick(client.website)}
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 text-center overflow-hidden h-full">
                  {/* Client Avatar */}
                  <motion.div
                    className="relative mx-auto mb-4 sm:mb-6 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br p-1.5 sm:p-2 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full rounded-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={`w-full h-full rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 hidden items-center justify-center text-teal-600 font-bold text-lg sm:text-xl`}>
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>

                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-coral-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{client.name}</h3>
                  <p className="text-teal-600 font-medium text-sm sm:text-base mb-2">{client.role}</p>
                  <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-slate-700 text-xs font-medium mb-3 sm:mb-4">
                    {client.type}
                  </div>

                  <div className="flex justify-center items-center mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Star
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${i < client.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-300 text-gray-300'
                            }`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    className="text-slate-600 text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 font-medium"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Click to visit portfolio website
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section id="view-templates" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <motion.div
          className="bg-gradient-to-br from-teal-500 via-coral-500 to-indigo-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-30px' }}
        >
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 relative z-10"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Ready to Create Your Portfolio?
          </motion.h2>

          <motion.p
            className="text-teal-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 relative z-10"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Explore all our templates and choose the perfect one for your needs.
          </motion.p>

          <motion.button
            className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-600 font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/templates')}
          >
            <span className="absolute inset-0 bg-teal-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 relative z-10" />
            <span className="relative z-10">View All Templates</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-300 relative z-10" />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Company Logo in Footer */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-20 h-12 sm:w-35 sm:h-20 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/templates/logoblack.png"
                alt="Creator Research Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
          
          <span className="text-slate-700 font-semibold text-sm">
            © {new Date().getFullYear()} Creator Research Pvt.Ltd. All Rights Reserved.
          </span>
        </motion.div>
      </footer>
    </div>
  );
}