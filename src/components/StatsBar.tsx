import { motion } from 'framer-motion';

const stats = [
  { value: '<2s', label: 'Detection time' },
  { value: '99.9%', label: 'System accuracy' },
  { value: '500+', label: 'Properties protected' },
  { value: '24/7', label: 'Monitoring coverage' },
];

const StatsBar = () => {
  return (
    <section className="relative border-y border-white/8 bg-surface/35">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-none lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white/[0.025] px-4 py-7 text-center lg:px-8 lg:py-9 lg:text-left"
            >
              <p className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
