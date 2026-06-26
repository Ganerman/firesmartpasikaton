import { AnimatePresence, motion } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle, MapPin, Shield, Terminal, Wifi } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

interface LogEntry {
  id: number;
  timestamp: string;
  source: string;
  message: string;
  type: 'info' | 'warning' | 'critical' | 'success';
}

const zoneStatus = [
  { zone: 'Zone A', state: 'Alert', hint: 'Smoke + heat spike detected', tone: 'text-red-alert', badge: 'bg-red-alert/10 border-red-alert/20' },
  { zone: 'Zone B', state: 'Stable', hint: 'Normal environmental readings', tone: 'text-green-safe', badge: 'bg-green-safe/10 border-green-safe/20' },
  { zone: 'Lobby', state: 'Monitoring', hint: 'Motion and access sensors active', tone: 'text-cyan-accent', badge: 'bg-cyan-accent/10 border-cyan-accent/20' },
];

const dashboardMetrics = [
  { label: 'Detection latency', value: '1.8s', icon: Activity, tone: 'text-cyan-accent' },
  { label: 'Alerts dispatched', value: '3', icon: CheckCircle, tone: 'text-green-safe' },
  { label: 'Connected units', value: '22', icon: Wifi, tone: 'text-cyan-accent' },
];

const Dashboard = () => {
  const [status, setStatus] = useState<'safe' | 'critical'>('safe');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isAlerting, setIsAlerting] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const activeZoneLabel = useMemo(() => (status === 'critical' ? 'Zone A' : 'Zone B'), [status]);

  const addLog = (entry: Omit<LogEntry, 'id' | 'timestamp'>) => {
    const newEntry: LogEntry = {
      ...entry,
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
    };
    setLogs((prev) => [...prev, newEntry]);
  };

  const simulateFire = async () => {
    if (isAlerting) return;
    setIsAlerting(true);
    setLogs([]);
    setStatus('critical');

    const sequence = [
      { source: 'Edge sensor', message: 'Smoke detected in Zone A — sensor #47', type: 'warning' as const, delay: 0 },
      { source: 'Gateway', message: 'Telemetry forwarded to FireSmart cloud hub', type: 'info' as const, delay: 700 },
      { source: 'Alert engine', message: 'Automated voice + SMS alert triggered for facility manager', type: 'warning' as const, delay: 1200 },
      { source: 'Dispatch', message: 'BFP notified with exact coordinates and floor plan', type: 'critical' as const, delay: 1800 },
      { source: 'Mobile app', message: 'On-site team confirmed receipt of emergency alert', type: 'success' as const, delay: 2400 },
      { source: 'Control center', message: 'Incident logged and escalation path activated', type: 'critical' as const, delay: 3000 },
    ];

    for (const item of sequence) {
      await new Promise((resolve) => setTimeout(resolve, item.delay));
      addLog(item);
    }

    setTimeout(() => {
      setIsAlerting(false);
    }, 4500);
  };

  const resetSystem = () => {
    setStatus('safe');
    setIsAlerting(false);
    setLogs([]);
  };

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section id="dashboard" className="py-24 lg:py-28 relative border-t border-white/8">
      <div className="site-container relative z-10">
        <SectionHeader
          badge="Live Demonstration"
          badgeColor="red"
          title="Operations dashboard"
          description="Simulate a fire event and see how FireSmart tracks incidents, sends alerts, and coordinates a real-time response."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="grid gap-6 lg:grid-cols-[1.65fr_0.95fr]">
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-text-muted">FireSmart control center</p>
                  <h3 className="mt-2 text-xl font-semibold">Live incident monitoring</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-cyan-accent" />
                  <span className="text-text-muted text-sm">Connected</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {dashboardMetrics.map((item) => {
                  const Icon = item.icon as any;
                  return (
                    <div key={item.label} className="glass-card rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-5 h-5 ${item.tone}`} />
                        <span className="text-text-muted text-sm">{item.label}</span>
                      </div>
                      <div className={`text-2xl font-bold ${item.tone}`}>{item.value}</div>
                    </div>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={status}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`flex items-center justify-center gap-4 p-8 rounded-xl ${
                    status === 'safe'
                      ? 'bg-green-safe/5 border border-green-safe/20'
                      : 'bg-red-alert/10 border border-red-alert/30'
                  }`}
                >
                  {status === 'safe' ? (
                    <>
                      <Shield className="w-16 h-16 text-green-safe" />
                      <div>
                        <p className="text-2xl font-bold text-green-safe">System Normal</p>
                        <p className="text-text-muted">All circuits and sensors are stable.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        <AlertTriangle className="w-16 h-16 text-red-alert" />
                      </motion.div>
                      <div>
                        <p className="text-2xl font-bold text-red-alert">CRITICAL ALERT</p>
                        <p className="text-text-muted">Zone A smoke detection has triggered an emergency response.</p>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={simulateFire}
                  disabled={isAlerting}
                  className={`btn-primary ${isAlerting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isAlerting ? 'Alert in progress...' : 'Simulate Fire Trigger'}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={resetSystem}
                  disabled={status === 'safe'}
                  className={`btn-secondary ${status === 'safe' ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  Reset System
                </motion.button>
              </div>
            </div>

            <div className="space-y-6 p-6 lg:p-8">
              <div className="glass-card rounded-2xl border border-white/10 p-5">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Site status</h4>
                    <p className="text-xs text-text-muted">Active zones and sensor health</p>
                  </div>
                  <span className="rounded-full bg-surface-light px-3 py-1 text-xs font-semibold text-text-muted">{activeZoneLabel}</span>
                </div>
                <div className="space-y-3">
                  {zoneStatus.map((zone) => (
                    <div key={zone.zone} className="flex items-center justify-between gap-3 rounded-2xl border p-3 text-sm bg-background/80 border-white/10">
                      <div className="space-y-1">
                        <p className="font-semibold text-text-primary">{zone.zone}</p>
                        <p className="text-text-muted">{zone.hint}</p>
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${zone.badge} ${zone.tone}`}>{zone.state}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl border border-white/10 p-5">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Site map</h4>
                    <p className="text-xs text-text-muted">Real map view with active zone highlighted</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/20 bg-cyan-accent/10 px-3 py-1 text-xs font-semibold text-cyan-accent">
                    <MapPin className="w-3.5 h-3.5" />
                    {activeZoneLabel}
                  </span>
                </div>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface/95">
                  <iframe
                    title="FireSmart site map"
                    className="h-[280px] w-full rounded-3xl border-0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=121.026%2C14.571%2C121.031%2C14.576&layer=mapnik&marker=14.5735%2C121.0285"
                    loading="lazy"
                    aria-hidden="false"
                  />
                </div>
                <p className="mt-3 text-xs text-text-muted">Map data from OpenStreetMap.</p>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-white/10 p-0">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-5 h-5 text-text-muted" />
                  <h4 className="font-semibold text-text-primary">Event Log</h4>
                </div>
                <div
                  ref={logContainerRef}
                  className="h-[400px] lg:h-full min-h-[300px] overflow-y-auto space-y-2 rounded-3xl border border-white/10 bg-background/60 p-4 font-mono text-sm"
                >
                  {logs.length === 0 ? (
                    <div className="text-text-muted text-center py-8">
                      {status === 'safe' ? (
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-safe" />
                          <span>No events yet — system idle</span>
                        </div>
                      ) : (
                        <span className="text-red-alert">Initializing alert sequence...</span>
                      )}
                    </div>
                  ) : (
                    <AnimatePresence>
                      {logs.map((log) => (
                        <motion.div
                          key={log.id}
                          initial={{ opacity: 0, x: -18 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`p-3 rounded-2xl ${
                            log.type === 'critical'
                              ? 'bg-red-alert/10 border-l-2 border-red-alert'
                              : log.type === 'warning'
                              ? 'bg-orange-accent/10 border-l-2 border-orange-accent'
                              : log.type === 'success'
                              ? 'bg-green-safe/10 border-l-2 border-green-safe'
                              : 'bg-surface-light border-l-2 border-cyan-accent'
                          }`}
                        >
                          <div className="text-text-muted text-[0.65rem] uppercase tracking-[0.18em] mb-1">{log.timestamp}</div>
                          <div className={`text-sm font-semibold ${
                            log.type === 'critical'
                              ? 'text-red-alert'
                              : log.type === 'warning'
                              ? 'text-orange-accent'
                              : log.type === 'success'
                              ? 'text-green-safe'
                              : 'text-cyan-accent'
                          }`}>[{log.source}]</div>
                          <div className="text-text-secondary mt-1">{log.message}</div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
