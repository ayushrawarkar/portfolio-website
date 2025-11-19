"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Star, Users, Briefcase, Code, MessageCircle, Home, X, Check, Palette, Sparkles, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function AllTemplatesPage() {
    const router = useRouter();
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedTemplateDetails, setSelectedTemplateDetails] = useState(null);

    // Extended template data with 3 templates for each category
    const allTemplates = [
        // Developer Portfolios
        {
            id: 1,
            title: 'Developer Portfolio Pro',
            description: 'Clean, technical portfolio template perfect for developers, engineers, and tech professionals to showcase coding projects.',
            icon: Code,
            image: '/images/templates/d1.png',
            liveUrl: 'https://dtemplate1.vercel.app/',
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
            title: 'Code Master Portfolio',
            description: 'Modern developer portfolio with interactive code editor and live project demos.',
            icon: Code,
            image: '/images/templates/d2.png',
            liveUrl: 'https://dtemplate2.vercel.app/',
            features: ['Interactive Code Editor', 'Live Demos', 'Skill Metrics', 'Blog Integration'],
            rating: 4,
            category: 'developer',
            detailedFeatures: [
                'Interactive code editor component',
                'Live project demonstrations',
                'Skill progress metrics',
                'Technical blog section',
                'API documentation ready',
                'Mobile-first design'
            ],
            technologies: ['React', 'TypeScript', 'CSS3'],
            gradient: 'from-blue-400 to-indigo-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-200/50'
        },
        {
            id: 3,
            title: 'Tech Innovator Portfolio',
            description: 'Cutting-edge portfolio for tech innovators and startup founders showcasing groundbreaking projects.',
            icon: Code,
            image: '/images/templates/d3.png',
            liveUrl: 'https://dtemplate3.vercel.app/',
            features: ['Innovation Showcase', 'Team Collaboration', 'Product Demos', 'Investor Portal'],
            rating: 5,
            category: 'developer',
            detailedFeatures: [
                'Innovation timeline',
                'Team member profiles',
                'Interactive product demos',
                'Investor information section',
                'Media coverage display',
                'Patent showcase'
            ],
            technologies: ['Next.js', 'Three.js', 'Framer Motion'],
            gradient: 'from-purple-400 to-pink-500',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-200/50'
        },

        // Personal Portfolios
        {
            id: 4,
            title: 'Personal Portfolio Elegance',
            description: 'Elegant personal portfolio template designed for designers, artists, and creative professionals.',
            icon: Users,
            image: '/images/templates/p1.png',
            liveUrl: 'https://ptemplate1.vercel.app/',
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
            id: 5,
            title: 'Creative Artist Portfolio',
            description: 'Visually stunning portfolio for artists, photographers, and creative professionals.',
            icon: Users,
            image: '/images/templates/p2.png',
            liveUrl: 'https://ptemplate2.vercel.app/',
            features: ['Image Gallery', 'Artwork Showcase', 'Exhibition History', 'Commission Info'],
            rating: 5,
            category: 'personal',
            detailedFeatures: [
                'High-resolution image gallery',
                'Artwork categorization',
                'Exhibition timeline',
                'Commission information',
                'Print shop integration',
                'Client testimonials'
            ],
            technologies: ['Next.js', 'Framer Motion', 'Cloudinary'],
            gradient: 'from-rose-400 to-pink-500',
            bgColor: 'bg-rose-500/10',
            borderColor: 'border-rose-200/50'
        },
        {
            id: 6,
            title: 'Professional Resume Portfolio',
            description: 'Sophisticated portfolio template for professionals showcasing career achievements and expertise.',
            icon: Users,
            image: '/images/templates/p3.png',
            liveUrl: 'https://ptemplate3.vercel.app/',
            features: ['Resume Integration', 'Career Timeline', 'Skill Matrix', 'Achievement Showcase'],
            rating: 4,
            category: 'personal',
            detailedFeatures: [
                'Interactive resume section',
                'Career progression timeline',
                'Skill proficiency matrix',
                'Achievement badges',
                'Certification display',
                'Professional network integration'
            ],
            technologies: ['React', 'Chart.js', 'Tailwind CSS'],
            gradient: 'from-orange-400 to-red-500',
            bgColor: 'bg-orange-500/10',
            borderColor: 'border-orange-200/50'
        },

        // Community Portfolios
        {
            id: 7,
            title: 'Community Portfolio Hub',
            description: 'Collaborative platform template for communities, teams, and organizations to showcase collective work.',
            icon: Briefcase,
            image: '/images/templates/c1.png',
            liveUrl: 'https://ctemplate1.vercel.app/',
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
        },
        {
            id: 8,
            title: 'Non-Profit Organization',
            description: 'Portfolio template for non-profit organizations and charitable foundations.',
            icon: Briefcase,
            image: '/images/templates/c2.png',
            liveUrl: 'https://ctemplate2-xqx2.vercel.app/',
            features: ['Donation System', 'Volunteer Portal', 'Impact Metrics', 'Event Management'],
            rating: 4,
            category: 'community',
            detailedFeatures: [
                'Integrated donation system',
                'Volunteer registration portal',
                'Impact measurement metrics',
                'Event management system',
                'Annual report showcases',
                'Partner organization listings'
            ],
            technologies: ['Next.js', 'Stripe', 'SendGrid'],
            gradient: 'from-green-400 to-emerald-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-200/50'
        },
        {
            id: 9,
            title: 'Educational Institution',
            description: 'Comprehensive portfolio platform for schools, universities, and educational organizations.',
            icon: Briefcase,
            image: '/images/templates/c3.png',
            liveUrl: 'https://ctemplate3.vercel.app/',
            features: ['Course Catalog', 'Faculty Profiles', 'Student Showcases', 'Research Portal'],
            rating: 5,
            category: 'community',
            detailedFeatures: [
                'Course and program listings',
                'Faculty and staff directories',
                'Student project galleries',
                'Research publication database',
                'Event and workshop calendar',
                'Alumni network integration'
            ],
            technologies: ['Next.js', 'PostgreSQL', 'Prisma'],
            gradient: 'from-cyan-400 to-blue-500',
            bgColor: 'bg-cyan-500/10',
            borderColor: 'border-cyan-200/50'
        }
    ];

    // Group templates by category
    const developerTemplates = allTemplates.filter(t => t.category === 'developer');
    const personalTemplates = allTemplates.filter(t => t.category === 'personal');
    const communityTemplates = allTemplates.filter(t => t.category === 'community');

    const handleTemplateClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleContactClick = (template = null) => {
        setSelectedTemplate(template);
        setIsContactFormOpen(true);
    };

    const handleCloseContactForm = () => {
        setIsContactFormOpen(false);
        setSelectedTemplate(null);
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

    // Fix the back button to go to templates page
    const handleBackClick = () => {
        router.push('/templates');
    };

    // Fix the home button to go to main page
    const handleHomeClick = () => {
        router.push('/');
    };

    // Enhanced animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/10 to-teal-50/10 overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-coral-400/5 to-pink-400/5 rounded-full blur-xl animate-pulse-slow" />
                <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-xl animate-pulse-slower" />
            </div>

            {/* Header */}
            <motion.header
                className="relative z-50 py-4 px-4 sm:px-6 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo/Brand */}
                        <motion.div
                            className="flex items-center space-x-3"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <motion.button
                                onClick={handleBackClick}
                                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md border border-gray-200 hover:border-teal-200 transition-all duration-200"
                                whileHover={{ scale: 1.05, x: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeft className="w-5 h-5 text-slate-700" />
                            </motion.button>
                            <motion.div
                                className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Palette className="w-5 h-5 text-white" />
                            </motion.div>
                            <div>
                                <h1 className="text-xl font-bold text-slate-900">Creator Research</h1>
                                <p className="text-xs text-slate-600">All Templates</p>
                            </div>
                        </motion.div>

                        {/* Navigation */}
                        <div className="flex items-center space-x-4">
                            <motion.button
                                onClick={handleHomeClick}
                                className="group flex items-center space-x-2 px-4 py-2.5 bg-white text-slate-700 font-medium rounded-xl shadow-sm hover:shadow-md border border-slate-200 hover:border-teal-200 transition-all duration-200"
                                whileHover={{ scale: 1.05, y: -1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Page Title Section */}
                    <motion.div
                        className="text-center mt-8 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full border border-slate-200 shadow-sm mb-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                        >
                            <Sparkles className="w-4 h-4 text-teal-500" />
                            <span className="text-sm font-medium text-slate-700">Complete Template Collection</span>
                        </motion.div>
                        
                        <motion.h1
                            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            All Portfolio
                            <motion.span 
                                className="block bg-gradient-to-r from-teal-600 via-coral-600 to-indigo-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                Templates
                            </motion.span>
                        </motion.h1>
                        
                        <motion.p
                            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            Explore our complete collection of professionally designed portfolio templates, organized by category.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.header>

            {/* Templates Sections */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-6">
                {/* Developer Portfolios Section */}
                <motion.section
                    className="mb-20"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">
                            Developer Portfolios
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Professional templates for developers and tech professionals to showcase coding projects and technical skills.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {developerTemplates.map((template, index) => (
                            <TemplateCard 
                                key={template.id} 
                                template={template} 
                                index={index}
                                onViewDemo={handleTemplateClick}
                                onViewDetails={handleViewDetails}
                                onContact={handleContactClick}
                            />
                        ))}
                    </motion.div>
                </motion.section>

                {/* Personal Portfolios Section */}
                <motion.section
                    className="mb-20"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">
                            Personal Portfolios
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Beautiful portfolios for creatives, artists, designers, and professionals to showcase personal work and achievements.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {personalTemplates.map((template, index) => (
                            <TemplateCard 
                                key={template.id} 
                                template={template} 
                                index={index}
                                onViewDemo={handleTemplateClick}
                                onViewDetails={handleViewDetails}
                                onContact={handleContactClick}
                            />
                        ))}
                    </motion.div>
                </motion.section>

                {/* Community Portfolios Section */}
                <motion.section
                    className="mb-20"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">
                            Community Portfolios
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Collaborative platforms for teams, organizations, and communities to showcase collective work and engage members.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {communityTemplates.map((template, index) => (
                            <TemplateCard 
                                key={template.id} 
                                template={template} 
                                index={index}
                                onViewDemo={handleTemplateClick}
                                onViewDetails={handleViewDetails}
                                onContact={handleContactClick}
                            />
                        ))}
                    </motion.div>
                </motion.section>

                {/* Contact CTA Section */}
                <motion.section
                    className="text-center mt-16 mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl relative overflow-hidden">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-slate-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                            Found the perfect template? Contact us to get your portfolio set up and customized to your needs.
                        </p>
                        <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleContactClick()}
                        >
                            <MessageCircle className="w-5 h-5 mr-3" />
                            <span>Contact Us Now</span>
                        </motion.button>
                    </div>
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
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.4 }}
                        >
                            {/* Modal Header */}
                            <div className="relative p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {selectedTemplateDetails.title}
                                    </h3>
                                    <button
                                        onClick={handleCloseDetailModal}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5 text-gray-500" />
                                    </button>
                                </div>
                                <div className="flex items-center space-x-4 mt-2">
                                    <span className={`px-3 py-1 ${selectedTemplateDetails.bgColor} text-teal-600 text-sm font-medium rounded-full border ${selectedTemplateDetails.borderColor}`}>
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
                                                <motion.div 
                                                    key={index} 
                                                    className="flex items-start space-x-3"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-slate-600 text-sm">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedTemplateDetails.technologies.map((tech, index) => (
                                                <motion.span
                                                    key={index}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-200">
                                    <motion.button
                                        className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleCloseDetailModal}
                                    >
                                        Close
                                    </motion.button>
                                    <motion.button
                                        className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200"
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

            <ContactForm
                isOpen={isContactFormOpen}
                onClose={handleCloseContactForm}
                selectedTemplate={selectedTemplate}
            />
        </div>
    );
}

// Enhanced Template Card Component
const TemplateCard = ({ template, index, onViewDemo, onViewDetails, onContact }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardHoverVariants = {
        initial: { scale: 1, y: 0, rotateX: 0 },
        hover: {
            scale: 1.03,
            y: -8,
            rotateX: 2,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const imageHoverVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const buttonHoverVariants = {
        hover: {
            scale: 1.05,
            y: -1,
            transition: {
                type: "spring",
                stiffness: 400
            }
        },
        tap: { scale: 0.95 }
    };

    return (
        <motion.div
            className="group"
            variants={{
                hidden: { y: 30, opacity: 0, scale: 0.9 },
                visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                        type: "spring",
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                    }
                }
            }}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer relative"
                variants={cardHoverVariants}
            >
                {/* Template Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        variants={{
                            hover: { opacity: 1 }
                        }}
                    />

                    <motion.div 
                        className="w-full h-full relative"
                        variants={imageHoverVariants}
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
                            className="hidden w-full h-full bg-gradient-to-br from-teal-100 to-cyan-100 items-center justify-center"
                            style={{ display: 'none' }}
                        >
                            <template.icon className="w-16 h-16 text-teal-600 opacity-50" />
                            <span className="absolute bottom-3 text-sm text-teal-600 font-medium">
                                Template Preview
                            </span>
                        </div>
                    </motion.div>

                    {/* External link icon */}
                    <motion.div
                        className={`absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg z-20 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ExternalLink className="w-4 h-4 text-teal-600" />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${template.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>

                {/* Template Content */}
                <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-3">
                        <motion.span 
                            className={`px-3 py-1 ${template.bgColor} text-teal-600 text-sm font-medium rounded-full border ${template.borderColor}`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {template.category}
                        </motion.span>
                        <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-slate-600 font-medium">{template.rating}</span>
                        </div>
                    </div>

                    <motion.h3 
                        className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-200"
                        whileHover={{ x: 2 }}
                    >
                        {template.title}
                    </motion.h3>

                    <p className="text-slate-600 mb-3 leading-relaxed text-sm">
                        {template.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                        {template.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center text-sm text-slate-600"
                                whileHover={{ x: 2 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <motion.div 
                                    className={`w-1.5 h-1.5 bg-gradient-to-r ${template.gradient} rounded-full mr-3`}
                                    whileHover={{ scale: 1.3 }}
                                />
                                {feature}
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                        <motion.button
                            className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 relative overflow-hidden group/btn"
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => onViewDemo(template.liveUrl)}
                        >
                            <span className="flex items-center justify-center relative z-10">
                                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                                View Live Demo
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200" />
                        </motion.button>

                        <div className="flex space-x-3">
                            <motion.button
                                className="flex-1 py-2 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-200 border border-gray-200 group/details"
                                variants={buttonHoverVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => onViewDetails(template)}
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <Info className="w-4 h-4 group-hover/details:scale-110 transition-transform duration-200" />
                                    <span>Details</span>
                                </div>
                            </motion.button>
                            
                            <motion.button
                                className="flex-1 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 group/contact"
                                variants={buttonHoverVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => onContact(template)}
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <MessageCircle className="w-4 h-4 group-hover/contact:scale-110 transition-transform duration-200" />
                                    <span>Contact</span>
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};