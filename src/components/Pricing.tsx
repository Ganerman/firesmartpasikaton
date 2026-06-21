import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeader from './SectionHeader';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For residential and single-property deployments',
    price: 'PHP 5,999',
    period: '/month',
    popular: false,
    features: [
      '1 IoT device',
      'Real-time SMS alerts',
      'Email notifications',
      'Basic dashboard',
      'Email support',
      '3 months data history',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For expanding commercial and multi-site deployments',
    price: 'PHP 12,999',
    period: '/month',
    popular: true,
    features: [
      'Up to 5 IoT devices',
      'WhatsApp voice + SMS alerts',
      'GPS coordinate tracking',
      'Advanced analytics',
      'Priority support',
      '1 year data history',
      'API access',
      'Team dashboard',
    ],
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom safety requirements',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      'Unlimited IoT devices',
      'Custom alert routing',
      'Integration APIs',
      'Dedicated account manager',
      '24/7 phone support',
      'Unlimited data history',
      'Custom SLAs',
      'On-premise options',
    ],
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="Pricing"
          badgeColor="green"
          title="Transparent plans"
          subtitle="for every deployment size"
          description="All plans include a 14-day evaluation period. Scale device count, alert channels, and support level as your requirements grow."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative rounded-xl ${
                plan.popular
                  ? 'glass-card border border-orange-accent/40 ring-1 ring-orange-accent/20'
                  : 'glass-card border border-white/8'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="section-label border-orange-accent/20 bg-orange-accent/10 text-orange-accent text-[10px]">
                    Recommended
                  </span>
                </div>
              )}

              <div className="p-7">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-text-muted text-sm mb-6">{plan.description}</p>

                <div className="mb-6 pb-6 border-b border-white/8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight">{plan.price}</span>
                    {plan.period && <span className="text-text-muted text-sm">{plan.period}</span>}
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`block w-full mb-7 text-center ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.cta}
                </a>

                <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-4">
                  Included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-green-safe flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-text-muted text-sm">
          Questions about billing or deployment?{' '}
          <a href="#faq" className="text-cyan-accent hover:underline font-medium">
            Review our FAQ
          </a>{' '}
          or{' '}
          <a href="#contact" className="text-cyan-accent hover:underline font-medium">
            contact sales
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Pricing;
