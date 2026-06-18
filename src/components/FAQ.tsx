import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';

const faqs = [
  {
    id: 1,
    question: 'How quickly does FireSmart detect smoke?',
    answer: 'Our IoT device detects smoke in less than 2 seconds thanks to advanced photoelectric sensors and edge computing algorithms. Once detected, emergency alerts are dispatched within 5 seconds.',
  },
  {
    id: 2,
    question: 'Is my data secure on Supabase?',
    answer: 'Yes, we use enterprise-grade security with encryption in transit and at rest. All data is backed up automatically, and we employ Row Level Security (RLS) policies to ensure only authorized users access your information.',
  },
  {
    id: 3,
    question: 'Can I integrate FireSmart with existing systems?',
    answer: 'Absolutely. Our API provides webhooks and RESTful endpoints for integration with smart home platforms, building management systems, and custom applications. Professional and Enterprise plans include dedicated API access.',
  },
  {
    id: 4,
    question: 'How long does battery last?',
    answer: 'With our optimized power management, the IoT device runs for 3+ years on a single battery charge. The device will notify you when battery is low.',
  },
  {
    id: 5,
    question: 'What if I lose internet connection?',
    answer: 'The device works independently and will alert you via SMS even without internet. Once connectivity is restored, all logs sync automatically to the cloud.',
  },
  {
    id: 6,
    question: 'Is installation complicated?',
    answer: 'No. Installation takes about 5 minutes: mount the device on your ceiling with the included bracket, then sync it through the mobile app. Professional and Enterprise plans include professional installation.',
  },
  {
    id: 7,
    question: 'Do you offer a warranty?',
    answer: 'Yes, all devices come with a 2-year hardware warranty and 12-month software support. Extended warranties are available for Enterprise customers.',
  },
  {
    id: 8,
    question: 'How many devices can I add to one account?',
    answer: 'Starter plans support 1 device, Professional supports 5, and Enterprise has unlimited devices. You can upgrade your plan anytime to add more devices.',
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container site-container-narrow relative z-10">
        <SectionHeader
          badge="FAQ"
          badgeColor="cyan"
          title="Frequently asked questions"
          description="Answers to common questions about deployment, security, integrations, and support."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <motion.button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-colors ${
                    isActive
                      ? 'glass-card border-cyan-accent/25 bg-cyan-accent/5'
                      : 'glass-card border-white/8 hover:border-white/14'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          isActive ? 'text-cyan-accent' : 'text-text-muted'
                        }`}
                      />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-text-secondary leading-relaxed border-t border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-4">Still have questions?</p>
          <a href="#contact" className="btn-primary">
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
