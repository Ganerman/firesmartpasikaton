import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Cloud, Phone, Smartphone, ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  {
    id: 1,
    icon: Cpu,
    title: 'IoT Hardware',
    subtitle: 'ESP32/Sensors',
    shortDesc: 'Triggers on smoke or rapid temperature rise',
    fullDesc: 'Our ESP32-based hardware continuously monitors the environment through multiple sensors including photoelectric smoke detection and NTC thermistors. The device performs edge computing to filter false positives and triggers alerts within 2 seconds of detecting anomalies. Low-power design ensures 3+ years of battery life.',
    color: 'orange',
    details: [
      'Photoelectric smoke sensor',
      'NTC thermistor temperature sensor',
      'Edge computing for false positive filtering',
      'WiFi 802.11 b/g/n connectivity',
    ],
  },
  {
    id: 2,
    icon: Cloud,
    title: 'Cloud Sync',
    subtitle: 'Supabase Backend',
    shortDesc: 'Real-time data logging via WebSockets',
    fullDesc: 'Sensor data streams directly to Supabase PostgreSQL database through persistent WebSocket connections. Each reading is timestamped, geo-tagged, and stored with redundancy. RLS policies ensure data privacy while real-time subscriptions enable instant notification dispatch.',
    color: 'cyan',
    details: [
      'PostgreSQL with automatic backups',
      'WebSocket real-time subscriptions',
      'Row Level Security enabled',
      'Automatic geo-tagging',
    ],
  },
  {
    id: 3,
    icon: Phone,
    title: 'Emergency Broadcast',
    subtitle: 'API Triggers',
    shortDesc: 'WhatsApp Voice + SMS to Fire Dept',
    fullDesc: 'Critical alerts trigger an automated cascade: WhatsApp Business API initiates a voice call to the property owner while simultaneously dispatching an SMS with GPS coordinates to the Bureau of Fire Protection. The system confirms delivery and retries on failure.',
    color: 'red',
    details: [
      'WhatsApp Business API voice calls',
      'SMS alerts to BFP with GPS',
      'Automatic retry on delivery failure',
      'Escalation to secondary contacts',
    ],
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Mobile View',
    subtitle: 'React Native App',
    shortDesc: 'Push notifications & visual alerts',
    fullDesc: 'Property owners receive instant push notifications on their iOS/Android devices, complete with sensor data, location mapping, and one-tap emergency services access. The app provides a real-time dashboard showing system health, battery levels, and historical incident logs.',
    color: 'green',
    details: [
      'Cross-platform (iOS/Android)',
      'Real-time push notifications',
      'Interactive incident map',
      'System health monitoring',
    ],
  },
];

const colorClasses = {
  orange: {
    bg: 'bg-orange-accent/10',
    border: 'border-orange-accent',
    text: 'text-orange-accent',
    ring: 'ring-orange-accent/30',
    glow: 'shadow-orange-accent/30',
  },
  cyan: {
    bg: 'bg-cyan-accent/10',
    border: 'border-cyan-accent',
    text: 'text-cyan-accent',
    ring: 'ring-cyan-accent/30',
    glow: 'shadow-cyan-accent/30',
  },
  red: {
    bg: 'bg-red-alert/10',
    border: 'border-red-alert',
    text: 'text-red-alert',
    ring: 'ring-red-alert/30',
    glow: 'shadow-red-alert/30',
  },
  green: {
    bg: 'bg-green-safe/10',
    border: 'border-green-safe',
    text: 'text-green-safe',
    ring: 'ring-green-safe/30',
    glow: 'shadow-green-safe/30',
  },
};

const Dataflow = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section id="dataflow" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="System Architecture"
          badgeColor="orange"
          title="How data flows"
          subtitle="from sensor to response"
          description="Select a stage below to review the technical components that power detection, synchronization, and emergency dispatch."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-white/8" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              const Icon = step.icon;
              const isSelected = selectedStep === step.id;

              return (
                <div key={step.id} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 z-20 -translate-y-1/2">
                      <ChevronRight className="w-4 h-4 text-text-muted" />
                    </div>
                  )}

                  <motion.button
                    onClick={() => setSelectedStep(isSelected ? null : step.id)}
                    className={`w-full relative z-10 p-6 rounded-xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? `${colors.bg} ${colors.border} border`
                        : 'glass-card border-white/8 hover:border-white/14'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <span className={`text-3xl font-bold ${colors.text}`}>0{step.id}</span>
                    </div>

                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-text-muted text-sm mb-3">{step.subtitle}</p>
                    <p className="text-text-secondary text-sm">{step.shortDesc}</p>

                    <motion.div
                      className="mt-4 flex items-center gap-2 text-sm"
                      animate={{ x: isSelected ? 5 : 0 }}
                    >
                      <span className={colors.text}>
                        {isSelected ? 'View Details' : 'Click to expand'}
                      </span>
                      <ArrowRight className={`w-4 h-4 ${colors.text}`} />
                    </motion.div>
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          {selectedStep && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 overflow-hidden"
            >
              {(() => {
                const step = steps.find((s) => s.id === selectedStep)!;
                const colors = colorClasses[step.color as keyof typeof colorClasses];

                return (
                  <div className={`glass-card rounded-2xl p-8 border ${colors.border}`}>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
                          {step.title} - Detailed Overview
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-6">{step.fullDesc}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <span className={`w-2 h-2 rounded-full ${colors.bg.replace('/10', '')} ${colors.text}`} style={{ backgroundColor: 'currentColor', opacity: 0.5 }} />
                              <span className="text-text-secondary">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Dataflow;
