import { motion } from 'framer-motion';
import { Cloud, Cpu, Database, Smartphone } from 'lucide-react';
import SectionHeader from './SectionHeader';

const techStack = [
  {
    icon: Cpu,
    name: 'IoT Hardware',
    description: 'Sensors and edge controllers',
    techs: ['ESP32', 'Photoelectric sensors', 'NTC thermistors'],
  },
  {
    icon: Database,
    name: 'Supabase',
    description: 'Backend and realtime data layer',
    techs: ['PostgreSQL', 'WebSockets', 'Row Level Security'],
  },
  {
    icon: Smartphone,
    name: 'React Native',
    description: 'Cross-platform mobile application',
    techs: ['TypeScript', 'Push notifications', 'Maps API'],
  },
  {
    icon: Cloud,
    name: 'Vercel',
    description: 'Edge-optimized web deployment',
    techs: ['Edge functions', 'Global CDN', 'Auto SSL'],
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="Technology Stack"
          badgeColor="green"
          title="Built on proven infrastructure"
          description="FireSmart combines reliable hardware, secure cloud services, and modern application tooling into a production-ready safety platform."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-xl p-6 border border-white/8"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-cyan-accent" />
                </div>

                <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
                <p className="text-text-muted text-sm mb-4">{tech.description}</p>

                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-light text-text-secondary border border-white/8"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
