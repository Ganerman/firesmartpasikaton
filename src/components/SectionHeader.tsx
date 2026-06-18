import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  badgeColor?: 'orange' | 'cyan' | 'green' | 'red';
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'center' | 'left';
}

const badgeStyles = {
  orange: 'text-orange-accent bg-orange-accent/10 border-orange-accent/20',
  cyan: 'text-cyan-accent bg-cyan-accent/10 border-cyan-accent/20',
  green: 'text-green-safe bg-green-safe/10 border-green-safe/20',
  red: 'text-red-alert bg-red-alert/10 border-red-alert/20',
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeColor = 'cyan',
  title,
  subtitle,
  description,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 lg:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}
    >
      <span className={`section-label border ${badgeStyles[badgeColor]}`}>
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold mt-5 mb-4 text-text-primary">
        {title}
        {subtitle && (
          <>
            {' '}
            <span className="text-text-secondary font-semibold">{subtitle}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`text-text-secondary text-base sm:text-lg leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
