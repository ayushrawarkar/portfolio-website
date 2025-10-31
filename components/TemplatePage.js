"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Star, Users, Briefcase, Code, MessageCircle, ChevronLeft, Home, Settings, Zap, Crown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function TemplatesPage() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Template data with actual image paths
  const templates = [
    {
      id: 1,
      title: 'Portfolio Template 1',
      description: 'Clean and professional portfolio template perfect for developers, engineers, and tech professionals.',
      category: 'Developer',
      icon: Code,
      image: '/images/templates/templateimage1.jpg',
      liveUrl: 'https://academic-portfolio-ivory-theta.vercel.app/',
      features: ['Code Display', 'Project Showcase', 'Skills Section'],
      rating: 5,
    },
    {
      id: 2,
      title: 'Portfolio Template 2',
      description: 'Elegant portfolio template designed for designers, artists, and creative professionals.',
      category: 'Creative',
      icon: Users,
      image: '/images/templates/template2.jpg',
      liveUrl: 'https://profile-template-iota.vercel.app/',
      features: ['Gallery Layout', 'Animation Ready', 'Client Testimonials', 'Contact Form'],
      rating: 4,
    },
    {
      id: 3,
      title: 'Portfolio Template 3',
      description: 'Professional template suitable for consultants, freelancers, and business professionals.',
      category: 'Business',
      icon: Briefcase,
      image: '/images/templates/template3.jpg',
      liveUrl: '',
      features: ['Service Sections', 'Case Studies', 'Team Members', 'Pricing Tables'],
      rating: 5,
    }
  ];

  // Custom development packages
  const customPackages = [
    {
      id: 1,
      title: 'Basic Customization',
      description: 'Perfect if you like one of our templates but need minor adjustments and personalization.',
      icon: Settings,
      price: '$499',
      features: [
        'Choose any template as base',
        'Color scheme customization',
        'Content integration',
        'Basic layout adjustments',
        'Contact form setup',
        '1 round of revisions'
      ],
      delivery: '3-5 days',
      popular: false
    },
    {
      id: 2,
      title: 'Advanced Custom',
      description: 'For those who want significant modifications and unique features added to their portfolio.',
      icon: Zap,
      price: '$899',
      features: [
        'Template modification',
        'Custom animations',
        'Advanced functionality',
        'Multiple page layouts',
        'SEO optimization',
        '3 rounds of revisions',
        'Priority support'
      ],
      delivery: '7-10 days',
      popular: true
    },
    {
      id: 3,
      title: 'Fully Custom Design',
      description: 'Complete bespoke portfolio designed from scratch according to your exact specifications.',
      icon: Crown,
      price: '$1,499',
      features: [
        'Complete custom design',
        'Wireframing & prototyping',
        'Unique animations',
        'Advanced integrations',
        'E-commerce ready',
        'Unlimited revisions',
        'Dedicated project manager',
        'Lifetime support'
      ],
      delivery: '14-21 days',
      popular: false
    }
  ];

  const handleTemplateClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleContactClick = (packageType = 'general') => {
    // You can modify this to pass the package type to your contact form
    router.push('/#contact');
  };

  const handleCustomContact = (pkg) => {
    // This could open a modal or redirect with package details
    router.push('/#contact');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.03, 
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"
          animate={{
            y: [0, 15, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="relative z-50 p-6 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-sm"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            

            <motion.button
              onClick={handleHomeClick}
              className="group flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <Home className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Home</span>
            </motion.button>
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio Templates
            </h1>
          </motion.div>
        </div>
      </motion.header>

      {/* Templates Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ 
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)',
              backgroundSize: '400% 100%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Choose Your Perfect Template
          </motion.h2>
          <motion.p
            className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Browse our collection of professionally designed portfolio templates. Each template is fully customizable and ready to use.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                className="group"
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                initial="initial"
                onHoverStart={() => setHoveredCard(template.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="bg-white/70 backdrop-blur-lg rounded-3xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer relative"
                  variants={cardHoverVariants}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Template Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    <motion.div
                      className="w-full h-full relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.nextSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback */}
                      <div 
                        className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <template.icon className="w-16 h-16 text-blue-600 opacity-50" />
                        <span className="absolute bottom-4 text-sm text-blue-600 font-medium">
                          Template Preview
                        </span>
                      </div>
                    </motion.div>

                    {/* Animated external link icon on hover */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredCard === template.id ? 1 : 0,
                        opacity: hoveredCard === template.id ? 1 : 0
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    >
                      <ExternalLink className="w-3 h-3 text-blue-600" />
                    </motion.div>
                  </div>

                  {/* Template Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.span
                        className="px-3 py-1.5 bg-blue-100 text-blue-600 text-sm font-medium rounded-full border border-blue-200/50"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {template.category}
                      </motion.span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-slate-600 font-medium">{template.rating}</span>
                      </div>
                    </div>

                    <motion.h3
                      className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 2 }}
                    >
                      {template.title}
                    </motion.h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {template.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6">
                      {template.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center text-sm text-slate-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (idx * 0.1) }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn"
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonHoverVariants}
                      onClick={() => handleTemplateClick(template.liveUrl)}
                    >
                      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Standard Contact Button Section - MOVED ABOVE CUSTOM SECTION */}
        <motion.div
          className="text-center mt-20 mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            
            <motion.h3
              className="text-3xl font-bold text-slate-900 mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Ready to Get Started?
            </motion.h3>
            <motion.p
              className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Found a template you like? Contact us to get your portfolio set up and customized to your needs.
            </motion.p>
            <motion.button
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleContactClick()}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10 text-lg">Contact Us to Get Started</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Custom Development Section - NOW BELOW THE READY SECTION */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Want Something <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Completely Custom?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Don't see exactly what you're looking for? We'll create a bespoke portfolio tailored to your unique style and requirements.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {customPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className="group relative"
                variants={itemVariants}
                custom={index}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 300 }}
                    >
                      MOST POPULAR
                    </motion.div>
                  </div>
                )}
                
                <motion.div
                  className={`bg-white/70 backdrop-blur-lg rounded-3xl border-2 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative ${
                    pkg.popular 
                      ? 'border-orange-400 scale-105' 
                      : 'border-white/40'
                  }`}
                  whileHover={{ y: -5, scale: pkg.popular ? 1.08 : 1.02 }}
                >
                  {/* Package Header */}
                  <div className={`p-8 text-center ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}>
                    <motion.div
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <pkg.icon className={`w-8 h-8 ${
                        pkg.popular ? 'text-orange-100' : 'text-blue-100'
                      }`} />
                    </motion.div>
                    <h3 className={`text-2xl font-bold ${
                      pkg.popular ? 'text-white' : 'text-white'
                    } mb-2`}>
                      {pkg.title}
                    </h3>
                    <div className="text-3xl font-bold text-white mb-2">
                      {pkg.price}
                    </div>
                    <p className={`text-sm ${
                      pkg.popular ? 'text-orange-100' : 'text-blue-100'
                    }`}>
                      Delivery: {pkg.delivery}
                    </p>
                  </div>

                  {/* Package Features */}
                  <div className="p-6">
                    <p className="text-slate-600 mb-6 text-center leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center text-sm text-slate-700"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + (idx * 0.1) }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full mr-3 ${
                              pkg.popular 
                                ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                                : 'bg-gradient-to-r from-blue-500 to-purple-500'
                            }`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-4 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCustomContact(pkg)}
                    >
                      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get This Package
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Quote CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Have Specific Requirements?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Need something beyond our standard packages? Contact us for a personalized quote tailored to your exact needs.
              </p>
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleContactClick('custom-quote')}
              >
                <span className="absolute inset-0 bg-slate-900/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Settings className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Get Custom Quote</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}