import { motion } from 'framer-motion';
import { BellRing, Cloud, Eye } from 'lucide-react';
import SectionHeader from './SectionHeader';

const features = [
  {
    icon: Eye,
    title: 'Sense',
    accentColor: 'orange',
    description:
      'Continuous environmental monitoring with photoelectric smoke and temperature sensors. Edge processing reduces false positives while maintaining sub-two-second detection.',
    stats: [
      { label: 'Detection speed', value: '<2s' },
      { label: 'Accuracy rate', value: '99.9%' },
    ],
  },
  {
    icon: Cloud,
    title: 'Sync',
    accentColor: 'cyan',
    description:
      'Secure, real-time data pipeline to Supabase with WebSocket subscriptions, encrypted storage, and full audit history for compliance and reporting.',
    stats: [
      { label: 'Sync latency', value: '<100ms' },
      { label: 'Data retention', value: 'Unlimited' },
    ],
  },
  {
    icon: BellRing,
    title: 'Alert',
    accentColor: 'red',
    description:
      'Automated escalation to property owners and the Bureau of Fire Protection via WhatsApp voice, SMS, and mobile push - with precise GPS coordinates.',
    stats: [
      { label: 'Alert dispatch', value: '<5s' },
      { label: 'Delivery rate', value: '100%' },
    ],
  },
];

const colorMap = {
  orange: {
    border: 'border-orange-accent/20',
    text: 'text-orange-accent',
    iconBg: 'bg-orange-accent/10',
  },
  cyan: {
    border: 'border-cyan-accent/20',
    text: 'text-cyan-accent',
    iconBg: 'bg-cyan-accent/10',
  },
  red: {
    border: 'border-red-alert/20',
    text: 'text-red-alert',
    iconBg: 'bg-red-alert/10',
  },
};

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-28 relative">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="Platform Capabilities"
          badgeColor="cyan"
          title="End-to-end protection"
          subtitle="in three integrated layers"
          description="Sense, Sync, and Alert work together as a unified safety system - from hardware detection through cloud logging to emergency response."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const colors = colorMap[feature.accentColor as keyof typeof colorMap];
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card flex h-full flex-col rounded-xl border ${colors.border} p-7`}
              >
                <div className={`mb-6 flex h-11 w-11 items-center justify-center rounded-lg ${colors.iconBg}`}>
                  <Icon className={`h-5 w-5 ${colors.text}`} />
                </div>

                <p className={`mb-3 text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
                  {feature.title}
                </p>
                <p className="mb-7 flex-grow text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>

                <div className="space-y-2.5 border-t border-white/8 pt-5">
                  {feature.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">{stat.label}</span>
                      <span className={`font-semibold ${colors.text}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
