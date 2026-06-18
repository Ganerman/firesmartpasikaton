import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    id: 1,
    name: 'Maria Santos',
    role: 'Residential Complex Manager',
    company: 'Metro Heights Manila',
    content:
      'FireSmart identified an incident our legacy system missed. The automated alerts and response workflow gave us confidence during a critical event.',
    initials: 'MS',
  },
  {
    id: 2,
    name: 'Juan Mercado',
    role: 'Fire Safety Director',
    company: 'Bureau of Fire Protection',
    content:
      'GPS-enabled dispatch and structured notifications reduced our average response time from eight minutes to under two.',
    initials: 'JM',
  },
  {
    id: 3,
    name: 'Angela Cruz',
    role: 'Business Owner',
    company: 'Cruz Manufacturing Inc.',
    content:
      'Implementation was straightforward, and the platform delivers consistent visibility across our facilities. A strong investment in operational safety.',
    initials: 'AC',
  },
  {
    id: 4,
    name: 'Carlos Reyes',
    role: 'Building Safety Officer',
    company: 'Corporate Plaza BGC',
    content:
      'The dashboard, alert logs, and support team meet the standards we require for a commercial-grade safety solution.',
    initials: 'CR',
  },
];

const avatarColors = [
  'bg-cyan-accent/15 text-cyan-accent',
  'bg-orange-accent/15 text-orange-accent',
  'bg-green-safe/15 text-green-safe',
  'bg-red-alert/15 text-red-alert',
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="Client Testimonials"
          badgeColor="green"
          title="Trusted by safety professionals"
          description="Organizations across the Philippines rely on FireSmart for reliable detection, faster response, and operational peace of mind."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-xl p-6 border border-white/8 flex flex-col h-full"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange-accent/80 text-orange-accent/80" />
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <footer className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold ${avatarColors[index % avatarColors.length]}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-sm text-text-primary block">
                    {testimonial.name}
                  </cite>
                  <p className="text-text-muted text-xs mt-0.5">{testimonial.role}</p>
                  <p className="text-text-muted text-xs">{testimonial.company}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
