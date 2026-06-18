import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BellRing,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Flame,
  LayoutDashboard,
  MapPin,
  Radio,
  ShieldCheck,
  Siren,
  Zap,
} from 'lucide-react';

const trustPoints = [
  { icon: ShieldCheck, text: 'BFP-ready emergency workflows' },
  { icon: Radio, text: 'Live sensor telemetry' },
  { icon: BellRing, text: 'Automated SMS and voice alerts' },
];

const systemStats = [
  { label: 'Detection', value: '<2s' },
  { label: 'Alert dispatch', value: '<5s' },
  { label: 'Uptime target', value: '99.9%' },
];

const eventRows = [
  { source: 'Zone A', message: 'Smoke sensor normal', status: 'Normal', tone: 'text-green-safe' },
  { source: 'Zone B', message: 'Battery health at 98%', status: 'Healthy', tone: 'text-cyan-accent' },
  { source: 'Lobby', message: 'Last inspection synced', status: 'Synced', tone: 'text-orange-accent' },
];

const responseSteps = [
  { label: 'Sensor detects smoke', icon: Zap },
  { label: 'Owner receives alert', icon: BellRing },
  { label: 'BFP receives location', icon: MapPin },
  { label: 'Incident is logged', icon: CheckCircle2 },
];

const Hero = () => {
  return (
    <section className="hero-section relative w-full overflow-hidden pb-20 lg:min-h-[calc(100dvh)] lg:pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,20,25,0.72)_0%,rgba(8,11,18,1)_72%)]" />
      <div
        className="pointer-events-none absolute right-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-cyan-accent/[0.08] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-16rem] bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-accent/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,0.95fr)] lg:gap-10 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <span className="section-label inline-flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-orange-accent/15">
              <Flame className="h-3 w-3 text-orange-accent" strokeWidth={2.25} />
            </span>
            Fire safety intelligence platform
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.06] text-text-primary sm:text-5xl lg:text-[3rem] xl:text-[3.35rem]">
            Monitor fire risk before it becomes an emergency.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg lg:mx-0">
            FireSmart gives property teams a real-time command center for smoke detection,
            device health, emergency routing, and incident response across every building.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#contact" className="btn-primary group px-6 py-3">
              <Calendar className="h-4 w-4" strokeWidth={2.25} />
              Request Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
            </a>
            <a href="#dashboard" className="btn-secondary group px-6 py-3">
              <LayoutDashboard className="h-4 w-4" strokeWidth={2.25} />
              View Dashboard
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {trustPoints.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-3 text-sm text-text-secondary lg:justify-start"
              >
                <Icon className="h-4 w-4 shrink-0 text-cyan-accent" strokeWidth={2.25} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative mx-auto w-full max-w-2xl lg:mx-0"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-cyan-accent/12 via-transparent to-orange-accent/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/95 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-accent/12">
                  <Flame className="h-4 w-4 text-orange-accent" strokeWidth={2.25} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">FireSmart Control Center</p>
                  <p className="text-xs text-text-muted">Metro Heights Manila</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-safe/20 bg-green-safe/10 px-3 py-1 text-xs font-medium text-green-safe">
                <span className="h-1.5 w-1.5 rounded-full bg-green-safe" />
                Online
              </span>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-3">
              {systemStats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/8 bg-background/60 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-text-muted">{item.label}</p>
                  <p className="mt-2 text-2xl font-bold text-text-primary">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 px-5 pb-5 lg:grid-cols-[1fr_0.85fr]">
              <div className="rounded-xl border border-white/8 bg-background/60 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Building Status</p>
                    <p className="text-xs text-text-muted">Live monitoring overview</p>
                  </div>
                  <Activity className="h-5 w-5 text-cyan-accent" strokeWidth={2.25} />
                </div>

                <div className="space-y-3">
                  {eventRows.map((row) => (
                    <div key={row.source} className="flex items-center justify-between gap-3 rounded-lg border border-white/6 bg-white/[0.02] p-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                          <Building2 className="h-4 w-4 text-text-secondary" strokeWidth={2.25} />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-text-primary">{row.source}</p>
                          <p className="truncate text-xs text-text-muted">{row.message}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-semibold ${row.tone}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-orange-accent/20 bg-orange-accent/[0.06] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Response Route</p>
                    <p className="text-xs text-text-muted">Automated escalation path</p>
                  </div>
                  <Siren className="h-5 w-5 text-orange-accent" strokeWidth={2.25} />
                </div>

                <div className="space-y-4">
                  {responseSteps.map(({ label, icon: Icon }, index) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-accent/20 bg-background/70 text-xs font-semibold text-orange-accent">
                        {index + 1}
                      </span>
                      <Icon className="h-4 w-4 text-orange-accent" strokeWidth={2.25} />
                      <span className="text-sm text-text-secondary">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-text-muted transition-colors hover:text-text-secondary lg:block"
        aria-label="Scroll to features"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={2.25} />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;
