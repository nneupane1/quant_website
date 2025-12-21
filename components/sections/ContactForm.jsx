'use client';

import { useState } from 'react';
import { contactSchema } from '@/schemas/contactSchema';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      // Validate form data
      contactSchema.parse(formData);

      // Send to API
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: '' });
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass neon-border rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors resize-none"
              placeholder="Your message..."
              required
            />
          </div>

          {/* Status Messages */}
          {status.success && (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-200">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {status.error && (
            <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200">
              {status.error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};
