import { motion } from 'framer-motion';
import { Award, Check, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';

const slideshowItems = [
  {
    id: 1,
    title: 'IT Faculty',
    caption: 'Project documentation and faculty collaboration highlights.',
    imageUrl: new URL('../../pictures/1.jpg', import.meta.url).href,
  },
  {
    id: 2,
    title: 'ICT Month Achievement',
    caption: 'Second place recognition at the capstone showcase.',
    imageUrl: new URL('../../pictures/2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Project Demonstration',
    caption: 'Live project demonstration in front of judges.',
    imageUrl: new URL('../../pictures/3.jpg', import.meta.url).href,
  },
  {
    id: 4,
    title: 'IT Faculty Context',
    caption: 'Additional faculty context from the project presentation.',
    imageUrl: new URL('../../pictures/4.jpg', import.meta.url).href,
  },
  {
    id: 5,
    title: 'Demo Scene',
    caption: 'Demonstration scene from the judge presentation.',
    imageUrl: new URL('../../pictures/5.jpg', import.meta.url).href,
  },
  {
    id: 6,
    title: 'Mga Pasikaton',
    caption: 'Project promotion and outreach highlights.',
    imageUrl: new URL('../../pictures/6.jpg', import.meta.url).href,
  },
  {
    id: 7,
    title: 'FireSmart IoT Device',
    caption: 'Prototype hardware image showcasing FireSmart technology.',
    imageUrl: new URL('../../pictures/7.png', import.meta.url).href,
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowItems.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = slideshowItems[currentSlide];

  return (
    <section id="achievements" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="Project Highlights"
          badgeColor="orange"
          title="Visual documentation and deployment highlights"
          description="A rotating gallery of project milestones, field deployments, and verified safety outcomes."
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.6fr_1fr]">
          <motion.article
            key={activeSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.5)]"
          >
            <img
              src={activeSlide.imageUrl}
              alt={activeSlide.title}
              className="h-[520px] w-full object-cover transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-accent/90">
                {activeSlide.caption}
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-white">
                {activeSlide.title}
              </h3>
            </div>
            <div className="absolute bottom-5 right-5 flex gap-2">
              {slideshowItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full border border-white/30 transition duration-200 ${
                    index === currentSlide ? 'bg-cyan-accent' : 'bg-white/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.article>

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
