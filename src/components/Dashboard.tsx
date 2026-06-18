import { AnimatePresence, motion } from 'framer-motion';
import { Activity, AlertTriangle, Battery, CheckCircle, MapPin, Shield, Terminal, Wifi } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

interface LogEntry {
  id: number;
  timestamp: string;
  source: string;
  message: string;
  type: 'info' | 'warning' | 'critical' | 'success';
}

const Dashboard = () => {
  const [status, setStatus] = useState<'safe' | 'critical'>('safe');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isAlerting, setIsAlerting] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

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
      { source: 'Hardware', message: 'Smoke detected in Zone A - Sensor #47', type: 'warning' as const, delay: 0 },
      { source: 'Supabase', message: 'Logged entry #4910 to sensor_logs table', type: 'info' as const, delay: 800 },
      { source: 'API', message: 'Triggering WhatsApp Voice Call to property owner', type: 'warning' as const, delay: 1600 },
      { source: 'SMS', message: 'Dispatching GPS coordinates to Bureau of Fire Protection', type: 'critical' as const, delay: 2400 },
      { source: 'Mobile', message: 'Push notification delivered to iOS & Android devices', type: 'success' as const, delay: 3200 },
      { source: 'System', message: 'Emergency broadcast completed; awaiting response', type: 'critical' as const, delay: 4000 },
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
          description="Simulate a fire event to observe how FireSmart coordinates detection, logging, and emergency notification in real time."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold">Control Center</h3>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-cyan-accent" />
                  <span className="text-text-muted text-sm">Connected</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Activity className="w-5 h-5 text-cyan-accent" />
                    <span className="text-text-muted text-sm">Status</span>
                  </div>
                  <div className={`text-2xl font-bold ${
                    status === 'safe' ? 'text-green-safe' : 'text-red-alert'
                  }`}>
                    {status === 'safe' ? 'SAFE' : 'CRITICAL'}
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Battery className="w-5 h-5 text-green-safe" />
                    <span className="text-text-muted text-sm">Battery</span>
                  </div>
                  <div className="text-2xl font-bold text-text-primary">98%</div>
                </div>

                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-orange-accent" />
                    <span className="text-text-muted text-sm">Location</span>
                  </div>
                  <div className="text-lg font-semibold text-text-primary">Zone A</div>
                </div>
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
                        <p className="text-text-muted">All sensors operational</p>
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
                        <p className="text-text-muted">Smoke detected; emergency broadcast triggered</p>
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

            <div className="border-t lg:border-t-0 lg:border-l border-white/10 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-text-muted" />
                <h4 className="font-semibold text-text-primary">Event Log</h4>
              </div>

              <div
                ref={logContainerRef}
                className="h-[400px] lg:h-full min-h-[300px] overflow-y-auto space-y-2 font-mono text-sm"
              >
                {logs.length === 0 ? (
                  <div className="text-text-muted text-center py-8">
                    {status === 'safe' ? (
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-safe" />
                        <span>No events; system idle</span>
                      </div>
                    ) : (
                      <span className="text-red-alert">Initializing...</span>
                    )}
                  </div>
                ) : (
                  <AnimatePresence>
                    {logs.map((log) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-3 rounded-lg ${
                          log.type === 'critical'
                            ? 'bg-red-alert/10 border-l-2 border-red-alert'
                            : log.type === 'warning'
                            ? 'bg-orange-accent/10 border-l-2 border-orange-accent'
                            : log.type === 'success'
                            ? 'bg-green-safe/10 border-l-2 border-green-safe'
                            : 'bg-surface-light border-l-2 border-cyan-accent'
                        }`}
                      >
                        <div className="text-text-muted text-xs mb-1">{log.timestamp}</div>
                        <div className={`
                          ${log.type === 'critical' ? 'text-red-alert' : ''}
                          ${log.type === 'warning' ? 'text-orange-accent' : ''}
                          ${log.type === 'success' ? 'text-green-safe' : ''}
                          ${log.type === 'info' ? 'text-cyan-accent' : ''}
                        `}>
                          [{log.source}]
                        </div>
                        <div className="text-text-secondary mt-1">{log.message}</div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
