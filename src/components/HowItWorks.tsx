import { BellRing, CheckCircle2, LayoutDashboard, MapPin, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  { title: 'Fire Detection', desc: 'Smoke, flame, and temperature sensors continuously monitor the environment for early warning signs.', icon: Zap },
  { title: 'Instant Alert', desc: 'Abnormal readings trigger an automated emergency alert without manual intervention.', icon: BellRing },
  { title: 'Location Identification', desc: 'The system pinpoints the incident location using GPS and site registration data.', icon: MapPin },
  { title: 'Real-Time Monitoring', desc: 'The incident appears immediately on the FireSmart dashboard and live map.', icon: LayoutDashboard },
  { title: 'Dispatch Coordination', desc: 'Emergency teams can assign resources and monitor response progress.', icon: CheckCircle2 },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-24">
      <div className="site-container">
        <SectionHeader
          badge="How It Works"
          title="How FireSmart Works"
          subtitle="From detection to resolution"
          description="See the end-to-end flow from incident detection through real-time alerting and response coordination."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {steps.map((s) => {
              const Icon = s.icon as any;
              return (
                <article key={s.title} className="glass-card rounded-lg border p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-background/60">
                      <Icon className="h-5 w-5 text-cyan-accent" />
                    </div>
                    <h4 className="text-sm font-semibold text-text-primary">{s.title}</h4>
                  </div>
                  <p className="text-sm text-text-secondary">{s.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/95 shadow-xl shadow-black/20">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-3xl bg-black"
                src="https://www.youtube.com/embed/NinpYZ8yTEg"
                title="FireSmart system demonstration"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="space-y-2 p-5 text-left">
              <p className="text-sm font-semibold text-text-primary">FireSmart system demonstration</p>
              <p className="text-sm text-text-secondary">Watch a walkthrough of how FireSmart detects events, sends alerts, and coordinates response.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
