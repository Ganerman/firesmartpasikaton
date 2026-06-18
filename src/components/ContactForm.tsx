import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      setErrorMessage('Formspree endpoint is missing. Add VITE_FORMSPREE_ENDPOINT to your .env.local file.');
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          team: 'Team PASIKATON',
        }),
      });

      if (!response.ok) {
        throw new Error('Formspree rejected the message.');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your Formspree form and try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="Contact"
          badgeColor="orange"
          title="Speak with our team"
          description="Request a demo, discuss deployment options, or ask about enterprise pricing. We respond within one business day."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="glass-card rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-text-muted text-sm break-all">jaspheraruta@gmail.com</p>
                  <p className="text-text-secondary text-xs mt-1">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-text-muted text-sm">09651469325</p>
                  <p className="text-text-secondary text-xs mt-1">Monday-Friday, 9AM-6PM Philippine time</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass-card rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-safe/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-safe" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-text-muted text-sm">Valencia City, Bukidnon</p>
                  <p className="text-text-secondary text-xs mt-1">Team PASIKATON</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 transition-colors"
                    placeholder="Maria Santos"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 transition-colors"
                    placeholder="maria@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 transition-colors"
                    placeholder="+63 (2) 1234-5678"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold mb-2">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white focus:outline-none focus:border-cyan-accent/50 transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Schedule Demo</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Question</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-cyan-accent/50 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-green-safe/10 border border-green-safe/30 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-safe flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-safe font-semibold text-sm">Message sent successfully!</p>
                    <p className="text-text-secondary text-sm">We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-red-alert/10 border border-red-alert/30 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-alert flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-alert font-semibold text-sm">Error sending message</p>
                    <p className="text-text-secondary text-sm">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={status === 'loading'}
                type="submit"
                className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
