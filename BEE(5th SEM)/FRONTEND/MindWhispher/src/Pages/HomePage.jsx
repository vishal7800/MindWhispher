import React, { useState } from 'react';
import { MessageCircle, Shield, Users, Heart, Phone, BookOpen, Sparkles, ChevronRight, Star, Zap } from 'lucide-react';

const HomePage = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showWellnessTip, setShowWellnessTip] = useState(0);

  const moodOptions = [
    { id: 'great', label: 'Great', icon: '☀️', color: 'bg-yellow-100 border-yellow-300' },
    { id: 'good', label: 'Good', icon: '😊', color: 'bg-blue-100 border-blue-300' },
    { id: 'okay', label: 'Okay', icon: '😐', color: 'bg-gray-100 border-gray-300' },
    { id: 'down', label: 'Down', icon: '☁️', color: 'bg-purple-100 border-purple-300' },
    { id: 'struggling', label: 'Struggling', icon: '☔', color: 'bg-red-100 border-red-300' }
  ];

  const wellnessTips = [
    {
      icon: '🧘',
      title: 'Mindful Breathing',
      description: 'Take 5 deep breaths: inhale for 4 counts, hold for 4, exhale for 6. This activates your parasympathetic nervous system.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '❤️',
      title: 'Gratitude Practice',
      description: 'Name three things you\'re grateful for today, no matter how small. This helps rewire your brain for positivity.',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      icon: '🏃',
      title: 'Movement Matters',
      description: 'Even a 5-minute walk can boost your mood. Physical activity releases endorphins - nature\'s mood lifters.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '🤝',
      title: 'Connect & Share',
      description: 'Reach out to someone you care about. Human connection is fundamental to mental wellbeing.',
      gradient: 'from-purple-400 to-violet-500'
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: '24/7 AI Support',
      description: 'Get instant support whenever you need it with our compassionate AI companion',
      color: 'text-teal-600'
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description: 'Your conversations are completely confidential and encrypted for your safety',
      color: 'text-emerald-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on similar journeys in a safe, supportive environment',
      color: 'text-purple-600'
    }
  ];

  const crisisResources = [
    {
      title: 'Emergency',
      number: '911',
      description: 'If you\'re in immediate danger',
      color: 'bg-red-50 border-red-200'
    },
    {
      title: 'Suicide Prevention',
      number: '988',
      description: 'Free, confidential support 24/7',
      color: 'bg-rose-50 border-rose-200'
    },
    {
      title: 'Crisis Text',
      number: 'Text HOME to 741741',
      description: '24/7 crisis counseling via text',
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800">MindWhisperer</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">Home</a>
              <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">Resources</a>
              <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">Chat Support</a>
              <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">Wellness</a>
            </nav>

            <div className="flex items-center space-x-3">
              <button className="hidden sm:flex items-center space-x-2 text-slate-600 hover:text-teal-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Start Chat</span>
              </button>
              <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                Get Help
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-emerald-100 px-4 py-2 rounded-full text-sm font-medium text-teal-800 mb-6">
            <Star className="w-4 h-4" />
            <span>Your Mental Health</span>
            <Zap className="w-4 h-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Journey Starts
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent block">
              Here
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get personalized support, track your wellness journey, and connect with our 
            AI-powered mental health companion. You're not alone.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-full hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold">
              <MessageCircle className="w-5 h-5" />
              <span>Start Chatting Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:border-teal-300 hover:text-teal-700 transition-all duration-200 flex items-center space-x-2 text-lg font-semibold">
              <Heart className="w-5 h-5" />
              <span>Explore Resources</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mood Check-in & Wellness Tips */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mood Check-in */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-bold text-slate-900">Today's Mood Check-in</h2>
              </div>
              
              <p className="text-slate-600 mb-8">Understanding your emotional patterns is the first step toward better mental health. How are you feeling today?</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 hover:scale-105 ${
                      selectedMood === mood.id 
                        ? `${mood.color} border-current shadow-lg` 
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{mood.icon}</div>
                    <div className="text-sm font-medium text-slate-700">{mood.label}</div>
                  </button>
                ))}
              </div>
              
              <button 
                disabled={!selectedMood}
                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-200 ${
                  selectedMood 
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700' 
                    : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                }`}
              >
                Save Today's Check-in
              </button>
            </div>

            {/* Wellness Tips */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Daily Wellness Tips</h2>
              
              <div className="space-y-6">
                {wellnessTips.map((tip, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer transition-all duration-300 ${
                      showWellnessTip === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setShowWellnessTip(index)}
                  >
                    <div className={`bg-gradient-to-r ${tip.gradient} rounded-2xl p-6 text-white transform transition-all duration-300 ${
                      showWellnessTip === index ? 'scale-105 shadow-lg' : 'hover:scale-102'
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl flex-shrink-0">{tip.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                          <p className="text-white/90 leading-relaxed">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support */}
      <section className="py-20 bg-red-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full text-sm font-medium text-red-800 mb-4">
              <Phone className="w-4 h-4" />
              <span>Emergency & Crisis Support</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Immediate Help?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              If you're experiencing a mental health crisis, these resources provide immediate support. Remember: seeking help is a sign of strength.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {crisisResources.map((resource, index) => (
              <div key={index} className={`${resource.color} rounded-2xl p-6 border-2 hover:shadow-lg transition-all duration-200`}>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h3>
                <div className="text-2xl font-bold text-red-600 mb-2">{resource.number}</div>
                <p className="text-sm text-slate-600">{resource.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Crisis Hotlines</h4>
                <p className="text-sm text-slate-600">24/7 support when you need immediate help</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Self-Help Resources</h4>
                <p className="text-sm text-slate-600">Evidence-based tools and techniques</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Support Groups</h4>
                <p className="text-sm text-slate-600">Connect with others who understand</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Wellness Activities</h4>
                <p className="text-sm text-slate-600">Daily practices for mental health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">MindWhisperer</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Supporting your mental health journey with compassion, technology, and community. 
              You're never alone in this journey.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;