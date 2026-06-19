import { motion } from 'framer-motion';
import { Award, Check, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

const galleryItems = [
  {
    id: 1,
    title: 'Facility monitoring',
    caption: '24/7 rooftop and lobby coverage',
    imageUrl: new URL('../../pictures/1.jpg', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Incident verification',
    caption: 'Verified alerts before escalation',
    imageUrl: new URL('../../pictures/2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Control room visibility',
    caption: 'Dashboard-led incident response',
    imageUrl: new URL('../../pictures/3.jpg', import.meta.url).href,
  },
  {
    id: 4,
    title: 'Safety workflow',
    caption: 'Fast coordination across teams',
    imageUrl: new URL('../../pictures/4.jpg', import.meta.url).href,
  },
];

const achievementStats = [
  { id: 1, value: '120+', label: 'Protected facilities' },
  { id: 2, value: '15K+', label: 'Verified alerts sent' },
  { id: 3, value: '98%', label: 'False alarm reduction' },
  { id: 4, value: '2 min', label: 'Average response gain' },
];

const highlightItems = [
  'Live gallery of real deployment scenes',
  'Safety outcomes backed by field data',
  'Deployments across residential and commercial sites',
  'Proven reduction of false alarms and wasted response',
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="Achievement Gallery"
          badgeColor="orange"
          title="Achievements displayed visually"
          description="A gallery of real deployment wins, milestones, and measurable safety outcomes from FireSmart."
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.6fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {galleryItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-accent/90">
                    {item.caption}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-[2rem] border border-white/10 p-8"
            >
              <div className="flex items-center gap-2 text-orange-accent mb-4">
                <Award className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.32em]">Achievement</span>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary">
                Measurable safety wins, shown visually.
              </h3>
              <p className="mt-4 text-text-secondary leading-relaxed">
                These story tiles capture how FireSmart combines live monitoring, fast alerts, and verified outcomes for real properties.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {achievementStats.map((item) => (
                  <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold text-text-primary">{item.value}</p>
                    <p className="mt-2 text-sm text-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-[2rem] border border-white/10 p-8"
            >
              <div className="flex items-center gap-2 text-cyan-accent mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.32em]">Highlights</span>
              </div>
              <ul className="space-y-4 text-text-secondary">
                {highlightItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-accent">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
