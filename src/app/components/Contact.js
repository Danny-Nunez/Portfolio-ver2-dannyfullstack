'use client'

import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative py-20" id="contact">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-libre text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-3xl p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(59, 130, 246, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Name and Email */}
                <div className="space-y-8">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="flex items-center text-white font-semibold mb-3 font-libre text-lg">
                      <FaUser className="mr-3 text-white" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border-0 outline-0 ring-0 text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '1rem', outline: 'none', border: 'none'}}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="flex items-center text-white font-semibold mb-3 font-libre text-lg">
                      <FaEnvelope className="mr-3 text-white" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border-0 outline-0 ring-0 text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '1rem', outline: 'none', border: 'none'}}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Right Column - Message */}
                <div className="lg:row-span-1">
                  <label htmlFor="message" className="flex items-center text-white font-semibold mb-3 font-libre text-lg">
                    <FaPaperPlane className="mr-3 text-white" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="9"
                    className="w-full h-[calc(100%-3rem)] px-6 py-4 bg-white/10 border-0 outline-0 ring-0 text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all duration-300 resize-none backdrop-blur-sm"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '1rem', outline: 'none', border: 'none'}}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-xl text-center font-semibold ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-8 py-5 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-libre flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FaPaperPlane className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Copyright Footer */}
          <div className="mt-16 text-center border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} dannyfullstack.dev - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

