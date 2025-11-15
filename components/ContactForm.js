// components/ContactForm.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Send, User, Mail, MessageSquare, Briefcase, CheckCircle, FileText, Calendar, DollarSign, Image, Link, BookOpen, Users, Code, Palette, Globe, Building, Target } from 'lucide-react';

export default function ContactForm({ isOpen, onClose, selectedTemplate, selectedPackage }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    timeline: '',
    projectType: '',
    
    // Template-specific information
    projectCount: '',
    hasContent: '',
    colorPreference: '',
    logo: '',
    socialLinks: '',
    githubUsername: '',
    skills: '',
    projects: '',
    teamSize: '',
    memberProfiles: '',
    communityType: '',
    organizationSize: '',
    collaborationTools: '',
    targetAudience: ''
  });

  // Timeline to budget mapping
  const timelineBudgetMap = {
    '1-2 weeks': '₹5,000 - ₹10,000',
    '2-4 weeks': '₹3,000 - ₹7,000', 
    '1-2 months': '₹1,000 - ₹3,000',
    'ASAP': 'Custom Quote (Express Delivery)'
  };

  const FORM_SUBMIT_EMAIL = 'ayushrawarkar2004@gmail.com';

  // Auto-update budget when timeline changes
  useEffect(() => {
    if (formData.timeline && timelineBudgetMap[formData.timeline]) {
      setFormData(prev => ({
        ...prev,
        budget: timelineBudgetMap[formData.timeline]
      }));
    }
  }, [formData.timeline]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      
      // Basic information
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('budget', formData.budget);
      formDataToSend.append('timeline', formData.timeline);
      
      // Template/package info
      if (selectedTemplate) {
        formDataToSend.append('selected_template', selectedTemplate.title);
        formDataToSend.append('template_category', selectedTemplate.category);
        
        // Template-specific information
        formDataToSend.append('has_content', formData.hasContent);
        formDataToSend.append('color_preference', formData.colorPreference);
        formDataToSend.append('has_logo', formData.logo);
        formDataToSend.append('social_links', formData.socialLinks);
        
        // Developer template specific
        if (selectedTemplate.category === 'developer') {
          formDataToSend.append('github_username', formData.githubUsername);
          formDataToSend.append('skills_list', formData.skills);
          formDataToSend.append('projects_description', formData.projects);
          formDataToSend.append('project_count', formData.projectCount);
        }
        
        // Personal template specific
        if (selectedTemplate.category === 'personal') {
          formDataToSend.append('project_count', formData.projectCount);
        }
        
        // Community template specific
        if (selectedTemplate.category === 'community') {
          formDataToSend.append('team_size', formData.teamSize);
          formDataToSend.append('member_profiles', formData.memberProfiles);
          formDataToSend.append('community_type', formData.communityType);
          formDataToSend.append('organization_size', formData.organizationSize);
          formDataToSend.append('collaboration_tools', formData.collaborationTools);
          formDataToSend.append('target_audience', formData.targetAudience);
        }
      }
      
      if (selectedPackage) {
        formDataToSend.append('selected_package', selectedPackage.title);
        formDataToSend.append('package_price', selectedPackage.price);
        formDataToSend.append('project_type', formData.projectType);
      }

      // Subject
      const subject = selectedPackage 
        ? `🎯 Custom Package: ${selectedPackage.title}`
        : selectedTemplate
          ? `📄 ${selectedTemplate.title} Setup Request`
          : '📧 New Portfolio Inquiry';
      
      formDataToSend.append('_subject', subject);
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_captcha', 'false');

      const response = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form
        setFormData({ 
          name: '', email: '', message: '', budget: '', timeline: '', projectType: '',
          projectCount: '', hasContent: '', colorPreference: '', logo: '', socialLinks: '',
          githubUsername: '', skills: '', projects: '', teamSize: '', memberProfiles: '',
          communityType: '', organizationSize: '', collaborationTools: '', targetAudience: ''
        });
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  const isTemplateInquiry = selectedTemplate && !selectedPackage;
  const isPackageInquiry = selectedPackage;
  const isGeneralInquiry = !selectedTemplate && !selectedPackage;

  // Template-specific configuration
  const getTemplateQuestions = () => {
    if (!selectedTemplate) return null;

    // Common questions for all templates
    const commonQuestions = (
      <>
        {/* Content Ready */}
        <div>
          <label htmlFor="hasContent" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <BookOpen className="w-4 h-4 mr-2" />
            Do you have your content ready? *
          </label>
          <select
            id="hasContent"
            name="hasContent"
            required
            value={formData.hasContent}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select content status</option>
            <option value="yes">Yes, I have all content ready</option>
            <option value="partial">I have some content, need help with rest</option>
            <option value="no">No, I need content creation help</option>
          </select>
        </div>

        {/* Color Preference */}
        <div>
          <label htmlFor="colorPreference" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Palette className="w-4 h-4 mr-2" />
            Do you have specific color preferences?
          </label>
          <select
            id="colorPreference"
            name="colorPreference"
            value={formData.colorPreference}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select color preference</option>
            <option value="brand-colors">Use my brand colors</option>
            <option value="template-default">Keep template default colors</option>
            <option value="need-suggestions">Need color scheme suggestions</option>
          </select>
        </div>

        {/* Logo */}
        <div>
          <label htmlFor="logo" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Image className="w-4 h-4 mr-2" />
            Do you have a logo?
          </label>
          <select
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select logo status</option>
            <option value="yes">Yes, I have a logo</option>
            <option value="need-design">No, I need logo design</option>
            <option value="not-needed">Not needed for now</option>
          </select>
        </div>

        {/* Social Links */}
        <div>
          <label htmlFor="socialLinks" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Link className="w-4 h-4 mr-2" />
            Social media links to include
          </label>
          <input
            type="text"
            id="socialLinks"
            name="socialLinks"
            value={formData.socialLinks}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., LinkedIn, GitHub, Twitter, Instagram URLs"
          />
        </div>
      </>
    );

    // Developer Portfolio Pro specific questions
    const developerQuestions = selectedTemplate.category === 'developer' && (
      <>
        <div>
          <label htmlFor="projectCount" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Code className="w-4 h-4 mr-2" />
            How many coding projects to showcase? *
          </label>
          <select
            id="projectCount"
            name="projectCount"
            required
            value={formData.projectCount}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select number of projects</option>
            <option value="1-3">1-3 projects</option>
            <option value="4-6">4-6 projects</option>
            <option value="7-10">7-10 projects</option>
            <option value="10+">More than 10 projects</option>
          </select>
        </div>

        <div>
          <label htmlFor="githubUsername" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Code className="w-4 h-4 mr-2" />
            GitHub Username
          </label>
          <input
            type="text"
            id="githubUsername"
            name="githubUsername"
            value={formData.githubUsername}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Your GitHub username for integration"
          />
        </div>

        <div>
          <label htmlFor="skills" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Code className="w-4 h-4 mr-2" />
            Technical Skills to Highlight *
          </label>
          <textarea
            id="skills"
            name="skills"
            required
            rows={3}
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="List your main technologies, frameworks, and skills (e.g., React, Node.js, Python, UI/UX Design)"
          />
        </div>

        <div>
          <label htmlFor="projects" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <FileText className="w-4 h-4 mr-2" />
            Project Descriptions
          </label>
          <textarea
            id="projects"
            name="projects"
            rows={3}
            value={formData.projects}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Briefly describe your key projects or provide GitHub links"
          />
        </div>
      </>
    );

    // Personal Portfolio Elegance specific questions
    const personalQuestions = selectedTemplate.category === 'personal' && (
      <>
        <div>
          <label htmlFor="projectCount" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <FileText className="w-4 h-4 mr-2" />
            How many creative projects to showcase? *
          </label>
          <select
            id="projectCount"
            name="projectCount"
            required
            value={formData.projectCount}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select number of projects</option>
            <option value="1-3">1-3 projects</option>
            <option value="4-6">4-6 projects</option>
            <option value="7-10">7-10 projects</option>
            <option value="10+">More than 10 projects</option>
          </select>
        </div>

        <div>
          <label htmlFor="projectType" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Briefcase className="w-4 h-4 mr-2" />
            What type of creative work do you do? *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select your field</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="photography">Photography</option>
            <option value="illustration">Illustration</option>
            <option value="writing">Writing/Content Creation</option>
            <option value="other-creative">Other Creative Field</option>
          </select>
        </div>
      </>
    );

    // Community Portfolio Hub specific questions
    const communityQuestions = selectedTemplate.category === 'community' && (
      <>
        <div>
          <label htmlFor="communityType" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Users className="w-4 h-4 mr-2" />
            What type of community/organization? *
          </label>
          <select
            id="communityType"
            name="communityType"
            required
            value={formData.communityType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select community type</option>
            <option value="business-team">Business Team</option>
            <option value="non-profit">Non-Profit Organization</option>
            <option value="creative-collective">Creative Collective</option>
            <option value="professional-network">Professional Network</option>
            <option value="educational-institution">Educational Institution</option>
            <option value="other-community">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="organizationSize" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Building className="w-4 h-4 mr-2" />
            Organization/Community Size *
          </label>
          <select
            id="organizationSize"
            name="organizationSize"
            required
            value={formData.organizationSize}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 members</option>
            <option value="11-25">11-25 members</option>
            <option value="26-50">26-50 members</option>
            <option value="51-100">51-100 members</option>
            <option value="100+">100+ members</option>
          </select>
        </div>

        <div>
          <label htmlFor="targetAudience" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Target className="w-4 h-4 mr-2" />
            Who is your target audience? *
          </label>
          <select
            id="targetAudience"
            name="targetAudience"
            required
            value={formData.targetAudience}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select target audience</option>
            <option value="general-public">General Public</option>
            <option value="clients-customers">Clients/Customers</option>
            <option value="members-only">Members Only</option>
            <option value="investors-partners">Investors/Partners</option>
            <option value="students-learners">Students/Learners</option>
          </select>
        </div>

        <div>
          <label htmlFor="collaborationTools" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Globe className="w-4 h-4 mr-2" />
            What collaboration features are needed?
          </label>
          <textarea
            id="collaborationTools"
            name="collaborationTools"
            rows={3}
            value={formData.collaborationTools}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., Member directories, project galleries, event calendars, discussion forums, contact forms..."
          />
        </div>

        <div>
          <label htmlFor="memberProfiles" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Users className="w-4 h-4 mr-2" />
            Member Profile Information Needed
          </label>
          <textarea
            id="memberProfiles"
            name="memberProfiles"
            rows={3}
            value={formData.memberProfiles}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="What information should we include for each member? (e.g., role, bio, skills, contact info, social links)"
          />
        </div>
      </>
    );

    return (
      <>
        {commonQuestions}
        {developerQuestions}
        {personalQuestions}
        {communityQuestions}
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {isSuccess ? 'Success!' : 
               isPackageInquiry ? 'Get Custom Package' : 
               isTemplateInquiry ? `Setup ${selectedTemplate.title}` : 
               'Start Your Project'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            {isSuccess 
              ? "We've received your information and will start working on your portfolio!"
              : isTemplateInquiry 
                ? `Let's gather information to set up your ${selectedTemplate.title}`
                : 'Tell us about your project requirements'
            }
          </p>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Template/Package Info */}
            {(selectedTemplate || selectedPackage) && (
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Selected {selectedTemplate ? 'Template' : 'Package'}:
                </h3>
                <p className="text-blue-700 font-medium">
                  {selectedTemplate?.title || selectedPackage?.title}
                </p>
                {selectedTemplate && (
                  <p className="text-blue-600 text-sm mt-1">
                    <strong>Category:</strong> {selectedTemplate.category} • 
                    <strong> Features:</strong> {selectedTemplate.features.join(', ')}
                  </p>
                )}
              </div>
            )}

            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Template-Specific Questions */}
            {isTemplateInquiry && getTemplateQuestions()}

            {/* Timeline & Budget - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Budget - Left Side */}
              <div>
                <label htmlFor="budget" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Estimated Budget *
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  required
                  readOnly
                  value={formData.budget}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-700"
                  placeholder="Select timeline first"
                />
              </div>

              {/* Timeline - Right Side */}
              <div>
                <label htmlFor="timeline" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Project Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select timeline</option>
                  <option value="1-2 weeks">1-2 Weeks</option>
                  <option value="2-4 weeks">2-4 Weeks</option>
                  <option value="1-2 months">1-2 Months</option>
                  <option value="ASAP">ASAP (Express)</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 mr-2" />
                Additional Notes or Special Requests
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Any additional information, special requirements, or questions..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {isTemplateInquiry ? 'Submit Template Requirements' :
                     isPackageInquiry ? 'Get Package Quote' :
                     'Send Inquiry'}
                  </>
                )}
              </span>
            </motion.button>
          </form>
        ) : (
          /* Success State */
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-green-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isTemplateInquiry ? 'Requirements Submitted!' :
               isPackageInquiry ? 'Package Quote Requested!' :
               'Inquiry Sent!'}
            </h3>
            <p className="text-gray-600 mb-6">
              {isTemplateInquiry 
                ? `We've received your ${selectedTemplate.title} requirements and will start preparing your portfolio setup. We'll contact you within 24 hours.`
                : 'Thank you for your inquiry. We\'ll get back to you within 24 hours.'
              }
            </p>
            <motion.button
              onClick={onClose}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}