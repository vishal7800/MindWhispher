import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const SignIn = ({ onSwitchToSignUp, onBack }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 👉 Later: Add API call for authentication here
    console.log('Signin:', formData);

    // ✅ Navigate to HomePage after login
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="flex-1 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center text-white px-8">
          <h1 className="text-5xl font-bold mb-6">Elevate Your Business</h1>
          <p className="text-xl opacity-90">Join our platform to reach new clients and expand your reach</p>
        </div>
      </div>

      {/* Right Side - SignIn Form */}
      <div className="flex-1 bg-gray-900 text-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-gray-400">Enter your credentials to access your account</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <button type="button" className="text-blue-400 hover:text-blue-300 text-sm">Forgot Password?</button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Log in
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">
            Don't have an account?{' '}
            <button onClick={onSwitchToSignUp} className="text-blue-400 hover:text-blue-300">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
