"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Star, Users, Briefcase, Code, MessageCircle, ChevronLeft, Home, Settings, Zap, Crown, Info, X, Check, Palette, Grid, Sparkles, Menu, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function TemplatesPage() {
    const router = useRouter();
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedTemplateDetails, setSelectedTemplateDetails] = useState(null);
    const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
    const [selectedPackageDetails, setSelectedPackageDetails] = useState(null);

    // Template data with actual image paths
    const templates = [
        {
            id: 1,
            title: 'Developer Portfolio Pro',
            description: 'Clean, technical portfolio template perfect for developers, engineers, and tech professionals to showcase coding projects.',
            icon: Code,
            image: '/images/templates/templateimage1.jpg',
            liveUrl: 'https://academic-portfolio-ivory-theta.vercel.app/',
            features: ['Code Display', 'Project Showcases', 'Skills Visualization', 'GitHub Integration'],
            rating: 5,
            category: 'developer',
            detailedFeatures: [
                'Responsive design for all devices',
                'Code syntax highlighting',
                'Project showcase with filters',
                'Skills and technologies section',
                'GitHub integration',
                'Dark/Light mode toggle'
            ],
            technologies: ['Next.js', 'React', 'Tailwind CSS'],
            gradient: 'from-teal-400 to-cyan-500',
            bgColor: 'bg-teal-500/10',
            borderColor: 'border-teal-200/50'
        },
        {
            id: 2,
            title: 'Personal Portfolio Elegance',
            description: 'Elegant personal portfolio template designed for designers, artists, and creative professionals.',
            icon: Users,
            image: '/images/templates/template2.jpg',
            liveUrl: 'https://profile-template-iota.vercel.app/',
            features: ['Responsive Design', 'Project Gallery', 'About Section', 'Contact Form'],
            rating: 4,
            category: 'personal',
            detailedFeatures: [
                'Full-screen hero section',
                'Image and video gallery',
                'About me section',
                'Testimonials slider',
                'Blog integration ready',
                'Social media integration'
            ],
            technologies: ['React', 'CSS3', 'JavaScript'],
            gradient: 'from-coral-400 to-pink-500',
            bgColor: 'bg-coral-500/10',
            borderColor: 'border-coral-200/50'
        },
        {
            id: 3,
            title: 'Community Portfolio Hub',
            description: 'Collaborative platform template for communities, teams, and organizations to showcase collective work.',
            icon: Briefcase,
            image: '/images/templates/template3.jpg',
            liveUrl: 'https://community-portfolio-orpin.vercel.app/',
            features: ['Member Profiles', 'Collaborative Spaces', 'Team Showcases', 'Community Engagement'],
            rating: 5,
            category: 'community',
            detailedFeatures: [
                'Multi-user profiles',
                'Team collaboration spaces',
                'Project management dashboard',
                'Member directory',
                'Event calendar',
                'Discussion forums'
            ],
            technologies: ['Next.js', 'MongoDB', 'Socket.io'],
            gradient: 'from-indigo-400 to-purple-500',
            bgColor: 'bg-indigo-500/10',
            borderColor: 'border-indigo-200/50'
        }
    ];

    // Custom development packages
    const customPackages = [
        {
            id: 1,
            title: 'Basic Customization',
            description: 'Perfect if you like one of our templates but need minor adjustments and personalization.',
            icon: Settings,
            price: '₹4499',
            features: [
                'Choose any template as base',
                'Color scheme customization',
                'Content integration',
                'Basic layout adjustments',
                'Contact form setup',
                '1 round of revisions'
            ],
            delivery: '3-5 days',
            popular: false,
            detailedDescription: 'Ideal for clients who have found a template they love but need some personal touches to make it their own. We handle all the technical details while you focus on your content.',
            fullFeatures: [
                'Template selection from our collection',
                'Custom color palette implementation',
                'Logo and branding integration',
                'Content population and optimization',
                'Basic responsive adjustments',
                'Contact form configuration',
                'Social media links setup',
                '1 round of minor revisions',
                'Basic SEO setup',
                'Google Analytics integration'
            ],
            gradient: 'from-teal-500 to-cyan-500',
            bgColor: 'bg-teal-500/10'
        },
        {
            id: 2,
            title: 'Advanced Custom',
            description: 'For those who want significant modifications and unique features added to their portfolio.',
            icon: Zap,
            price: '₹10999',
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
            popular: true,
            detailedDescription: 'Perfect for clients who want to stand out with unique features and custom functionality. We transform our templates into something truly unique for your brand.',
            fullFeatures: [
                'Deep template customization',
                'Custom animation development',
                'Advanced interactive features',
                'Multiple page template designs',
                'Advanced SEO optimization',
                'Performance optimization',
                'Custom form development',
                'Third-party API integrations',
                '3 rounds of comprehensive revisions',
                'Priority email support',
                'Training session handover'
            ],
            gradient: 'from-coral-500 to-pink-500',
            bgColor: 'bg-coral-500/10'
        },
        {
            id: 3,
            title: 'Fully Custom Design',
            description: 'Complete bespoke portfolio designed from scratch according to your exact specifications.',
            icon: Crown,
            price: '₹15499',
            features: [
                'Complete custom design',
                'Wireframing & prototyping',
                'Unique animations',
                'Advanced integrations',
                'E-commerce ready',
                'Unlimited revisions for 1 year',
                'Dedicated project manager',
                '1 year support'
            ],
            delivery: '14-21 days',
            popular: false,
            detailedDescription: 'The ultimate solution for clients who want a completely unique portfolio built from the ground up. Every pixel is designed specifically for your needs and brand identity.',
            fullFeatures: [
                'Complete custom design from scratch',
                'Wireframing and prototyping phase',
                'Custom illustration and graphics',
                'Advanced animation systems',
                'E-commerce functionality ready',
                'Admin dashboard development',
                'Custom backend integrations',
                'Advanced security features',
                'Unlimited revisions for 1 year',
                'Dedicated project manager',
                '24/7 priority support',
                '1 year maintenance and updates',
                'Comprehensive documentation'
            ],
            gradient: 'from-indigo-500 to-purple-500',
            bgColor: 'bg-indigo-500/10'
        }
    ];

    const handleTemplateClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleHomeClick = () => {
        router.push('/');
    };

    const handleContactClick = (template = null) => {
        setSelectedTemplate(template);
        setSelectedPackage(null);
        setIsContactFormOpen(true);
        setIsMobileMenuOpen(false); // Close mobile menu when contacting
    };

    const handleCustomContact = (pkg) => {
        setSelectedPackage(pkg);
        setSelectedTemplate(null);
        setIsContactFormOpen(true);
    };

    const handleCloseContactForm = () => {
        setIsContactFormOpen(false);
        setSelectedTemplate(null);
        setSelectedPackage(null);
    };

    const handleViewDetails = (template) => {
        setSelectedTemplateDetails(template);
        setIsDetailModalOpen(true);
    };

    const handleCloseDetailModal = () => {
        setIsDetailModalOpen(false);
        setSelectedTemplateDetails(null);
    };

    const handleContactFromDetails = () => {
        setIsDetailModalOpen(false);
        setSelectedTemplate(selectedTemplateDetails);
        setIsContactFormOpen(true);
    };

    const handleViewPackageDetails = (pkg) => {
        setSelectedPackageDetails(pkg);
        setIsPackageModalOpen(true);
    };

    const handleClosePackageModal = () => {
        setIsPackageModalOpen(false);
        setSelectedPackageDetails(null);
    };

    const handleContactFromPackageDetails = () => {
        setIsPackageModalOpen(false);
        setSelectedPackage(selectedPackageDetails);
        setIsContactFormOpen(true);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to navigate to all templates page
    const handleExploreMoreTemplates = () => {
        router.push('/all-templates'); // Navigate to your existing all-templates page
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                type: "tween",
                duration: 0.4,
                ease: "easeOut"
            }
        },
    };

    const cardHoverVariants = {
        initial: { scale: 1, y: 0 },
        hover: {
            scale: 1.02,
            y: -4,
            transition: {
                type: "tween",
                duration: 0.2
            }
        }
    };

    const buttonHoverVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.02,
            transition: {
                type: "tween",
                duration: 0.15
            }
        },
        tap: { scale: 0.98 }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/10 to-teal-50/10 overflow-hidden">
            {/* Simplified Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-coral-400/5 to-pink-400/5 rounded-full blur-xl" />
            </div>

            {/* IMPROVED MOBILE HEADER */}
            <motion.header
                className="relative z-50 py-4 px-4 sm:px-6 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo/Brand - Improved for mobile */}
                        <motion.div
                            className="flex items-center space-x-2 sm:space-x-3"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <motion.div
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </motion.div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-slate-900">PortfolioCraft</h1>
                                <p className="text-xs text-slate-600">Premium Templates</p>
                            </div>
                            <div className="sm:hidden">
                                <h1 className="text-lg font-bold text-slate-900">PortfolioCraft</h1>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden sm:flex items-center space-x-4">
                            <motion.button
                                onClick={handleHomeClick}
                                className="group flex items-center space-x-2 px-4 py-2.5 bg-white text-slate-700 font-medium rounded-xl shadow-sm hover:shadow-md border border-slate-200 hover:border-teal-200 transition-all duration-200"
                                whileHover="hover"
                                whileTap="tap"
                                variants={buttonHoverVariants}
                            >
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </motion.button>

                            <motion.button
                                onClick={() => handleContactClick()}
                                className="group flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                                whileHover="hover"
                                whileTap="tap"
                                variants={buttonHoverVariants}
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Get Started</span>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="sm:hidden flex items-center space-x-2">
                            <motion.button
                                onClick={() => handleContactClick()}
                                className="px-3 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-lg shadow-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MessageCircle className="w-4 h-4" />
                            </motion.button>
                            
                            <motion.button
                                onClick={toggleMobileMenu}
                                className="p-2 text-slate-700 hover:bg-gray-100 rounded-lg transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Menu className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                className="sm:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={mobileMenuVariants}
                            >
                                <div className="px-4 py-3 space-y-3">
                                    <motion.button
                                        onClick={handleHomeClick}
                                        className="w-full flex items-center space-x-3 px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Home className="w-4 h-4" />
                                        <span>Back to Home</span>
                                    </motion.button>
                                    
                                    <motion.button
                                        onClick={() => handleContactClick()}
                                        className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-lg shadow-sm"
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Contact Us</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Page Title Section - Improved for mobile */}
                    <motion.div
                        className="text-center mt-6 mb-4 sm:mt-8 sm:mb-6 px-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.div
                            className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 rounded-full border border-slate-200 shadow-sm mb-3 sm:mb-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500" />
                            <span className="text-xs sm:text-sm font-medium text-slate-700">Premium Portfolio Templates</span>
                        </motion.div>
                        
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                            Choose Your
                            <span className="block bg-gradient-to-r from-teal-600 via-coral-600 to-indigo-600 bg-clip-text text-transparent">
                                Perfect Design
                            </span>
                        </h1>
                        
                        <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
                            Discover professionally crafted portfolio templates designed to showcase your work in the best light.
                        </p>
                    </motion.div>
                </div>
            </motion.header>

            {/* Templates Grid */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
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
                                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer relative"
                                variants={cardHoverVariants}
                            >
                                {/* Template Image */}
                                <div className="relative h-40 sm:h-48 bg-gray-100 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                                    <div className="w-full h-full relative">
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
                                            className="hidden w-full h-full bg-gradient-to-br from-teal-100 to-cyan-100 items-center justify-center"
                                            style={{ display: 'none' }}
                                        >
                                            <template.icon className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600 opacity-50" />
                                            <span className="absolute bottom-3 text-xs sm:text-sm text-teal-600 font-medium">
                                                Template Preview
                                            </span>
                                        </div>
                                    </div>

                                    {/* External link icon */}
                                    <div className={`absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg z-20 transition-all duration-200 ${hoveredCard === template.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                        <ExternalLink className="w-3 h-3 text-teal-600" />
                                    </div>
                                </div>

                                {/* Template Content */}
                                <div className="p-4 sm:p-6 relative z-10">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`px-2 py-1 ${template.bgColor} text-teal-600 text-xs sm:text-sm font-medium rounded-full border ${template.borderColor}`}>
                                            {template.category}
                                        </span>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-xs sm:text-sm text-slate-600 font-medium">{template.rating}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                                        {template.title}
                                    </h3>

                                    <p className="text-slate-600 mb-3 leading-relaxed text-xs sm:text-sm">
                                        {template.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-1.5 sm:space-y-2 mb-4">
                                        {template.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center text-xs sm:text-sm text-slate-600"
                                            >
                                                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${template.gradient} rounded-full mr-2 sm:mr-3`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="space-y-2 sm:space-y-3">
                                        <motion.button
                                            className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-200 relative overflow-hidden text-sm sm:text-base"
                                            whileHover="hover"
                                            whileTap="tap"
                                            variants={buttonHoverVariants}
                                            onClick={() => handleTemplateClick(template.liveUrl)}
                                        >
                                            <span className="flex items-center justify-center">
                                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                                View Live Demo
                                            </span>
                                        </motion.button>

                                        <div className="flex space-x-2 sm:space-x-3">
                                            <motion.button
                                                className="flex-1 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg sm:rounded-xl hover:bg-gray-200 transition-all duration-200 border border-gray-200 text-xs sm:text-sm"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleViewDetails(template)}
                                            >
                                                <div className="flex items-center justify-center space-x-1">
                                                    <Info className="w-3 h-3" />
                                                    <span>More</span>
                                                </div>
                                            </motion.button>
                                            
                                            <motion.button
                                                className="flex-1 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-200 text-xs sm:text-sm"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleContactClick(template)}
                                            >
                                                <div className="flex items-center justify-center space-x-1">
                                                    <MessageCircle className="w-3 h-3" />
                                                    <span>Contact</span>
                                                </div>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Explore More Templates Button */}
                <motion.div 
                    className="text-center mt-8 sm:mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        onClick={handleExploreMoreTemplates}
                        className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 border border-teal-500/20 shadow-lg"
                        whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.4)" 
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Grid className="w-5 h-5 mr-3" />
                        <span className="text-base">Explore More Templates</span>
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                    <p className="text-slate-600 mt-3 text-sm">
                        Discover our complete collection of portfolio templates
                    </p>
                </motion.div>

                {/* Custom Development Section */}
                <motion.section
                    className="mt-8 sm:mt-12 lg:mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                            Need Something <span className="text-coral-600">Custom?</span>
                        </h2>
                        <p className="text-sm sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Don't see exactly what you're looking for? We'll create a bespoke portfolio tailored to your unique style and requirements.
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-30px" }}
                    >
                        {customPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                className="group relative"
                                variants={itemVariants}
                                custom={index}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20">
                                        <div className="px-3 py-1 bg-gradient-to-r from-coral-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                                            POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className={`bg-white rounded-xl sm:rounded-2xl border-2 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative ${pkg.popular ? 'border-coral-400' : 'border-gray-100'} h-full`}>
                                    {/* Package Header */}
                                    <div className={`p-4 sm:p-6 text-center bg-gradient-to-r ${pkg.gradient}`}>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                            <pkg.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                                            {pkg.title}
                                        </h3>
                                        <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                                            {pkg.price}
                                        </div>
                                        <p className="text-white/90 text-xs sm:text-sm">
                                            Delivery: {pkg.delivery}
                                        </p>
                                    </div>

                                    {/* Package Features */}
                                    <div className="p-4 sm:p-6">
                                        <p className="text-slate-600 mb-3 sm:mb-4 text-center leading-relaxed text-xs sm:text-sm">
                                            {pkg.description}
                                        </p>

                                        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                            {pkg.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center text-xs sm:text-sm text-slate-700"
                                                >
                                                    <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${pkg.gradient}`} />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="space-y-2">
                                            <motion.button
                                                className={`w-full py-2.5 sm:py-3 font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-200 bg-gradient-to-r ${pkg.gradient} text-white text-sm sm:text-base`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleCustomContact(pkg)}
                                            >
                                                <span className="flex items-center justify-center">
                                                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                                    Get This Package
                                                </span>
                                            </motion.button>

                                            <motion.button
                                                className="w-full py-2 bg-gray-100 text-gray-700 font-medium rounded-lg sm:rounded-xl hover:bg-gray-200 transition-all duration-200 border border-gray-200 text-xs sm:text-sm"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleViewPackageDetails(pkg)}
                                            >
                                                <div className="flex items-center justify-center space-x-1">
                                                    <Info className="w-3 h-3" />
                                                    <span>More Details</span>
                                                </div>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Standard Contact Button Section */}
                    <motion.div
                        className="text-center mt-8 sm:mt-12 lg:mt-16 mb-12 sm:mb-16 lg:mb-24"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-xl relative overflow-hidden">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                                Ready to Get Started?
                            </h3>
                            <p className="text-sm sm:text-lg text-slate-700 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
                                Found a template you like? Contact us to get your portfolio set up and customized to your needs.
                            </p>
                            <motion.button
                                className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base lg:text-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleContactClick()}
                            >
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                                <span>Contact Us to Get Started</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.section>
            </main>

            {/* Template Detail Modal */}
            <AnimatePresence>
                {isDetailModalOpen && selectedTemplateDetails && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            {/* Modal Header */}
                            <div className="relative p-4 sm:p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                                        {selectedTemplateDetails.title}
                                    </h3>
                                    <button
                                        onClick={handleCloseDetailModal}
                                        className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                    </button>
                                </div>
                                <div className="flex items-center space-x-3 sm:space-x-4 mt-2">
                                    <span className={`px-2 py-1 ${selectedTemplateDetails.bgColor} text-teal-600 text-xs sm:text-sm font-medium rounded-full border ${selectedTemplateDetails.borderColor}`}>
                                        {selectedTemplateDetails.category}
                                    </span>
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs sm:text-sm text-slate-600">{selectedTemplateDetails.rating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-4 sm:p-6">
                                <div className="space-y-3 sm:space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Description</h4>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                            {selectedTemplateDetails.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Detailed Features</h4>
                                        <div className="space-y-1.5 sm:space-y-2">
                                            {selectedTemplateDetails.detailedFeatures.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-2">
                                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-slate-600 text-xs sm:text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Technologies</h4>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {selectedTemplateDetails.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                                    <button
                                        className="flex-1 py-2.5 sm:py-3 bg-gray-100 text-gray-700 font-medium rounded-lg sm:rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base"
                                        onClick={handleCloseDetailModal}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                                        onClick={handleContactFromDetails}
                                    >
                                        Contact About This
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Package Detail Modal */}
            <AnimatePresence>
                {isPackageModalOpen && selectedPackageDetails && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            {/* Modal Header */}
                            <div className="relative p-4 sm:p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                                        {selectedPackageDetails.title}
                                    </h3>
                                    <button
                                        onClick={handleClosePackageModal}
                                        className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                    </button>
                                </div>
                                <div className="flex items-center space-x-3 sm:space-x-4 mt-2">
                                    <div className="text-xl sm:text-2xl font-bold text-teal-600">
                                        {selectedPackageDetails.price}
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs sm:text-sm font-medium rounded-full">
                                        Delivery: {selectedPackageDetails.delivery}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-4 sm:p-6">
                                <div className="space-y-3 sm:space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Package Description</h4>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                            {selectedPackageDetails.detailedDescription}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Complete Features</h4>
                                        <div className="space-y-1.5 sm:space-y-2">
                                            {selectedPackageDetails.fullFeatures.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-2">
                                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-slate-600 text-xs sm:text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                                    <button
                                        className="flex-1 py-2.5 sm:py-3 bg-gray-100 text-gray-700 font-medium rounded-lg sm:rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base"
                                        onClick={handleClosePackageModal}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                                        onClick={handleContactFromPackageDetails}
                                    >
                                        Get This Package
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactForm
                isOpen={isContactFormOpen}
                onClose={handleCloseContactForm}
                selectedTemplate={selectedTemplate}
                selectedPackage={selectedPackage}
            />
        </div>
    );
}