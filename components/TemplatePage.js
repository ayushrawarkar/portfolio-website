"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Star, Users, Briefcase, Code, MessageCircle, ChevronLeft, Home, Settings, Zap, Crown, Info, X, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function TemplatesPage() {
    const router = useRouter();
    const [hoveredCard, setHoveredCard] = useState(null);

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
            technologies: ['Next.js', 'React', 'Tailwind CSS']
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
            technologies: ['React', 'CSS3', 'JavaScript']
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
            technologies: ['Next.js', 'MongoDB', 'Socket.io']
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
            ]
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
            ]
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
            ]
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

    // New function to handle view details
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

    // Package detail functions
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
                className="relative z-50 p-4 sm:p-6 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-sm"
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
                <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center sm:space-x-4">
                    <div className="flex items-center sm:flex-1 sm:justify-start">
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
                        className="sm:flex-1 sm:flex sm:justify-center"
                    >
                        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
                            Portfolio Templates
                        </h1>
                    </motion.div>

                    {/* Spacer for mobile balance - hidden on desktop */}
                    <div className="sm:hidden w-4"></div>
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

                                        {/* CTA Buttons */}
                                        <div className="space-y-3">
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

                                            {/* Small More Button */}
                                            <div className="flex space-x-3">
                                                <motion.button
                                                    className="flex-1 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => handleViewDetails(template)}
                                                >
                                                    <div className="flex items-center justify-center space-x-1">
                                                        <Info className="w-3 h-3" />
                                                        <span className="text-sm">More</span>
                                                    </div>
                                                </motion.button>
                                                
                                                <motion.button
                                                    className="flex-1 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => handleContactClick(template)}
                                                >
                                                    <div className="flex items-center justify-center space-x-1">
                                                        <MessageCircle className="w-3 h-3" />
                                                        <span className="text-sm">Contact</span>
                                                    </div>
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Custom Development Section */}
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
                                    className={`bg-white/70 backdrop-blur-lg rounded-3xl border-2 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative ${pkg.popular
                                        ? 'border-orange-400 scale-105'
                                        : 'border-white/40'
                                        }`}
                                    whileHover={{ y: -5, scale: pkg.popular ? 1.08 : 1.02 }}
                                >
                                    {/* Package Header */}
                                    <div className={`p-8 text-center ${pkg.popular
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600'
                                        }`}>
                                        <motion.div
                                            className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <pkg.icon className={`w-8 h-8 ${pkg.popular ? 'text-orange-100' : 'text-blue-100'
                                                }`} />
                                        </motion.div>
                                        <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-white'
                                            } mb-2`}>
                                            {pkg.title}
                                        </h3>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            {pkg.price}
                                        </div>
                                        <p className={`text-sm ${pkg.popular ? 'text-orange-100' : 'text-blue-100'
                                            }`}>
                                            Delivery: {pkg.delivery}
                                        </p>
                                    </div>

                                    {/* Package Features */}
                                    <div className="p-6">
                                        <p className="text-slate-600 mb-6 text-center leading-relaxed">
                                            {pkg.description}
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            {pkg.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="flex items-center text-sm text-slate-700"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 1 + (idx * 0.1) }}
                                                >
                                                    <motion.div
                                                        className={`w-2 h-2 rounded-full mr-3 ${pkg.popular
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

                                        {/* CTA Buttons */}
                                        <div className="space-y-3">
                                            <motion.button
                                                className={`w-full py-3 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn ${pkg.popular
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

                                            {/* More Button for Packages */}
                                            <motion.button
                                                className="w-full py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleViewPackageDetails(pkg)}
                                            >
                                                <div className="flex items-center justify-center space-x-1">
                                                    <Info className="w-3 h-3" />
                                                    <span className="text-sm">More Details</span>
                                                </div>
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Standard Contact Button Section */}
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
                                onClick={() => handleContactClick()} // General inquiry
                            >
                                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
                                <span className="relative z-10 text-lg">Contact Us to Get Started</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.section>
            </main>

            {/* Template Detail Modal */}
            <AnimatePresence>
                {isDetailModalOpen && selectedTemplateDetails && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                        >
                            {/* Modal Header */}
                            <div className="relative p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {selectedTemplateDetails.title}
                                    </h3>
                                    <motion.button
                                        onClick={handleCloseDetailModal}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X className="w-5 h-5 text-gray-500" />
                                    </motion.button>
                                </div>
                                <div className="flex items-center space-x-4 mt-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                        {selectedTemplateDetails.category}
                                    </span>
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm text-slate-600">{selectedTemplateDetails.rating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Description</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {selectedTemplateDetails.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Detailed Features</h4>
                                        <div className="space-y-2">
                                            {selectedTemplateDetails.detailedFeatures.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-2">
                                                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-slate-600 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedTemplateDetails.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-200">
                                    <motion.button
                                        className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleCloseDetailModal}
                                    >
                                        Close
                                    </motion.button>
                                    <motion.button
                                        className="flex-1 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleContactFromDetails}
                                    >
                                        Contact About This
                                    </motion.button>
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
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                        >
                            {/* Modal Header */}
                            <div className="relative p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {selectedPackageDetails.title}
                                    </h3>
                                    <motion.button
                                        onClick={handleClosePackageModal}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X className="w-5 h-5 text-gray-500" />
                                    </motion.button>
                                </div>
                                <div className="flex items-center space-x-4 mt-2">
                                    <div className="text-2xl font-bold text-blue-600">
                                        {selectedPackageDetails.price}
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                                        Delivery: {selectedPackageDetails.delivery}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Package Description</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {selectedPackageDetails.detailedDescription}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Complete Features</h4>
                                        <div className="space-y-2">
                                            {selectedPackageDetails.fullFeatures.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-2">
                                                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-slate-600 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-200">
                                    <motion.button
                                        className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleClosePackageModal}
                                    >
                                        Close
                                    </motion.button>
                                    <motion.button
                                        className="flex-1 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleContactFromPackageDetails}
                                    >
                                        Get This Package
                                    </motion.button>
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