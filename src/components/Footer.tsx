import { Flame } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Architecture', href: '#dataflow' },
      { name: 'Technology', href: '#techstack' },
      { name: 'Live Dashboard', href: '#dashboard' },
    ],
    company: [
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'Documentation', href: '#dataflow' },
      { name: 'Help Center', href: '#faq' },
      { name: 'Request Demo', href: '#contact' },
      { name: 'System Status', href: '#dashboard' },
    ],
  };

  return (
    <footer className="border-t border-white/8 bg-surface/60">
      <div className="site-container pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 mb-4"
            >
              <div className="w-9 h-9 rounded-lg bg-surface-light border border-white/10 flex items-center justify-center">
                <Flame className="w-4 h-4 text-orange-accent" />
              </div>
              <span className="brand-mark text-lg">
                Fire<span>Smart</span>
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Enterprise IoT fire safety platform for residential, commercial, and institutional properties across the Philippines.
            </p>
          </div>

          {[
            { title: 'Product', items: links.product },
            { title: 'Company', items: links.company },
            { title: 'Support', items: links.support },
          ].map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold mb-4 text-text-primary">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.items.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gradient-divider mb-8" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>&copy; {currentYear} FireSmart IoT Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
