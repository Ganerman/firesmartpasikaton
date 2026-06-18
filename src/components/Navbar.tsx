import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features', id: 'features' },
  { name: 'How It Works', href: '#dataflow', id: 'dataflow' },
  { name: 'Technology', href: '#techstack', id: 'techstack' },
  { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
  { name: 'Pricing', href: '#pricing', id: 'pricing' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-background/90 py-2 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'border-b border-white/5 bg-background/75 py-3 backdrop-blur-xl'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="site-container">
          <div className="grid h-14 grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 justify-self-start"
              aria-label="FireSmart home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-accent/20 bg-orange-accent/10">
                <Flame className="h-4 w-4 text-orange-accent" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <span className="brand-mark text-lg">
                Fire<span>Smart</span>
              </span>
            </a>

            <div className="hidden items-center justify-center gap-0.5 lg:flex lg:justify-self-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent ${
                    activeSection === link.id
                      ? 'bg-white/[0.04] text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px bg-orange-accent"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 justify-self-end lg:col-start-3">
              <a
                href="#contact"
                className="btn-primary group hidden py-2.5 pr-5 pl-4 text-sm md:inline-flex"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
              </a>

              <button
                className="rounded p-1 text-text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card mt-3 rounded-xl border border-white/10 p-4 lg:hidden"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block rounded-md px-3 py-3 text-sm transition-colors ${
                    activeSection === link.id
                      ? 'bg-white/5 text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary mt-3 w-full justify-center text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </a>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
