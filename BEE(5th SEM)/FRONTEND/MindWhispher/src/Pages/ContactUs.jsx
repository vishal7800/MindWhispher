import React, { useState } from 'react';
import { 
  Brain, 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  Heart,
  Shield,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Users,
  BookOpen,
  Headphones
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
    priority: 'normal'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "AI Chat Support",
      description: "Get instant help from our AI companion",
      detail: "Available 24/7",
      action: "Start Chat",
      highlight: true
    },
    {
      icon: <Mail className="w-8 h-8 text-green-600" />,
      title: "Email Support",
      description: "Send us a detailed message",
      detail: "support@mindwhisperer.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      title: "Phone Support",
      description: "Speak with our support team",
      detail: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-600" />,
      title: "Crisis Support",
      description: "Immediate help when you need it most",
      detail: "24/7 Crisis Hotline",
      action: "Get Help",
      urgent: true
    }
  ];

  const supportCategories = [
    {
      icon: <HelpCircle className="w-6 h-6 text-blue-600" />,
      title: "General Support",
      description: "Questions about using MindWhisperer"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Privacy & Security",
      description: "Data protection and privacy concerns"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Account Issues",
      description: "Login, billing, or account problems"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-600" />,
      title: "Technical Issues",
      description: "App bugs or technical difficulties"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MindWhisperer
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>We're Here to Help</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Support Team
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you need technical support, have questions about your mental health journey, 
            or need immediate assistance, we're here to support you every step of the way.
          </p>
        </div>
      </section>

      {/* Crisis Notice */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-red-700 mb-4">
                  If you're experiencing a mental health crisis or having thoughts of self-harm, 
                  please reach out for immediate professional help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                    Crisis Hotline: 988
                  </button>
                  <button className="border border-red-300 text-red-700 px-6 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors">
                    Emergency Services: 911
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Contact Method
            </h3>
            <p className="text-lg text-gray-600">
              We offer multiple ways to get the support you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  method.highlight ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                } ${method.urgent ? 'border-2 border-red-200' : ''}`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    method.urgent ? 'bg-red-100' : 'bg-gray-50'
                  }`}>
                    {method.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="font-medium text-gray-800 mb-4">
                    {method.detail}
                  </p>
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    method.highlight 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : method.urgent
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {method.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-green-700">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject Category
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="general">General Support</option>
                        <option value="technical">Technical Issues</option>
                        <option value="account">Account Problems</option>
                        <option value="privacy">Privacy & Security</option>
                        <option value="billing">Billing Questions</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority Level
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Please describe your question or concern in detail..."
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">support@mindwhisperer.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">123 Wellness Way<br />San Francisco, CA 94102</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Support Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM PST<br />
                    Weekend: Limited support<br />
                    AI Chat: Available 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h4 className="font-semibold mb-3">Need Immediate Support?</h4>
                <p className="text-blue-100 mb-4 text-sm">
                  Our AI chatbot is available 24/7 to provide immediate assistance and guidance.
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Start AI Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Common Support Categories
            </h3>
            <p className="text-lg text-gray-600">
              Find the right support for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">MindWhisperer</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2025 MindWhisperer. We're here to support your journey.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;