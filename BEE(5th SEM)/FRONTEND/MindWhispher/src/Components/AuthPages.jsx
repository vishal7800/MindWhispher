import React, { useState } from 'react';
import { Brain, MessageCircle, ArrowLeft, Eye, EyeOff, ChevronDown } from 'lucide-react';

const AuthPages = () => {
  const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

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

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Example: login vs signup
    if (currentPage === "login") {
      const res = await axios.post("http://localhost:5000/api/auth/signin", {
        email: formData.email,
        password: formData.password,
      });
      console.log("Login success:", res.data);
      // you can store token or navigate
    } else {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      console.log("Signup success:", res.data);
    }
  } catch (err) {
    console.error("Error submitting form:", err.response?.data || err.message);
  }
};


  return (
    <div className="min-h-screen flex">
      {/* Left Side - Purple Gradient Background */}
      <div className="flex-1 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-900">
          {/* Animated background elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content overlay */}
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
            onClick={() => window.history.back()}
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

            {currentPage === 'login' ? (
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
                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Password
                    </label>
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
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                  >
                    Log in
                  </button>

                  {/* Sign up link */}
                  <div className="text-center mt-6">
                    <span className="text-gray-400">Don't have an account? </span>
                    <button
                      type="button"
                      onClick={() => setCurrentPage('signup')}
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
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Password */}
                  <div>
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
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
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
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Gender Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
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
                            type="button"
                            onClick={() => handleGenderSelect(gender)}
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {gender}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sign up Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 mt-6"
                  >
                    Sign up
                  </button>

                  {/* Login link */}
                  <div className="text-center mt-6">
                    <span className="text-gray-400">Already have an account? </span>
                    <button
                      type="button"
                      onClick={() => setCurrentPage('login')}
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
};

export default AuthPages;