import React, { useState } from 'react';
import { Brain, MessageCircle, Star, ArrowRight, Menu, X, Shield, Heart, ArrowLeft, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const MindWhispererApp = () => {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'login', 'signup'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    mobile: '',
    confirmPassword: '',
    gender: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setFormData({ ...formData, gender });
    setIsGenderDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 AI Support",
      description: "Get instant support whenever you need it with our intelligent chatbot"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your conversations are encrypted and completely confidential"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Care",
      description: "Tailored responses that adapt to your unique mental health journey"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "MindWhisperer has been a game-changer for my anxiety. Having 24/7 support gives me so much peace of mind."
    },
    {
      name: "David K.",
      rating: 5,
      text: "The AI understands me better than I expected. It's like having a therapist in my pocket."
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "I love how private and safe this feels. Finally, a place where I can be completely honest."
    }
  ];

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                MindWhisperer
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
             <button
                onClick={() => navigate("/about")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                ABOUT
              </button>
<button
  onClick={() => navigate("/contact")}
  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
>
  CONTACT
</button>
              <button 
                onClick={() => setCurrentView('login')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                LOGIN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">
                ABOUT
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">
                CONTACT
              </a>
              <button 
                onClick={() => setCurrentView('login')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                LOGIN
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  <span>Trusted by 10,000+ users</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Mental Health
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Companion</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get instant, personalized mental health support through our AI-powered chatbot. 
                  Available 24/7, completely private, and designed to understand you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentView('signup')}
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  Start Chatting Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4 ml-8">
                    <p className="text-gray-700">I'm feeling overwhelmed with work stress lately...</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-4 mr-8">
                    <p>I understand how challenging work stress can be. Let's explore some coping strategies together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MindWhisperer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with genuine care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have found support with MindWhisperer.
          </p>
          <button 
            onClick={() => setCurrentView('signup')}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center"
          >
            Get Started for Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );

  // Auth Pages Component
  const AuthPages = () => (
    <div className="min-h-screen flex">
      {/* Left Side - Purple Gradient Background */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-900">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center p-12">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Elevate Your Mental Health
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Join our platform to reach better mental wellness and expand your emotional growth
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full max-w-md lg:max-w-lg bg-gray-900 flex flex-col">
        {/* Back to Home Button */}
        <div className="p-6">
          <button 
            onClick={() => setCurrentView('landing')}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-6 pt-0">
          <div className="w-full max-w-sm">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            {currentView === 'login' ? (
              // Login Form
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Welcome Back, User!
                  </h2>
                  <p className="text-gray-400">
                    Enter your credentials to access your mental health companion
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                  >
                    Log in
                  </button>

                  <div className="text-center mt-6">
                    <span className="text-gray-400">Don't have an account? </span>
                    <button
                      onClick={() => setCurrentView('signup')}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Sign up for free
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Signup Form
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Get Started with Us!
                  </h2>
                  <p className="text-gray-400">
                    New to our platform? Register today to connect with your mental health companion.
                  </p>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm Password"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                    />
                    <button
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-left text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all flex items-center justify-between"
                    >
                      <span className={selectedGender ? 'text-white' : 'text-gray-500'}>
                        {selectedGender || 'Select Gender'}
                      </span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${isGenderDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isGenderDropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                        {['Male', 'Female', 'Other', 'Prefer not to say'].map((gender) => (
                          <button
                            key={gender}
                            onClick={() => handleGenderSelect(gender)}
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {gender}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 mt-6"
                  >
                    Sign up
                  </button>

                  <div className="text-center mt-6">
                    <span className="text-gray-400">Already have an account? </span>
                    <button
                      onClick={() => setCurrentView('login')}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Main App Render
  return (
    <div>
      {currentView === 'landing' ? <LandingPage /> : <AuthPages />}
    </div>
  );
};

export default MindWhispererApp;