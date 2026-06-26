import groupPhoto from '../../pictures/1.jpg';
import SectionHeader from './SectionHeader';

const teamMembers = [
  { name: 'Jaspher Arota', role: 'Full Stack Developer' },
  { name: 'Karl Christian Trabuco', role: 'Project Manager' },
  { name: 'Fritz Joshua Santiago', role: 'UI/UX & Multi-role' },
  { name: 'Ceballos Mark June Sulogoon', role: 'Team Member' },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="site-container">
        <SectionHeader
          badge="About"
          badgeColor="orange"
          title="About FireSmart"
          subtitle="Built by Team Pasikaton"
          description="FireSmart is an IoT-powered fire safety platform that delivers early detection, real-time monitoring, and rapid emergency dispatch coordination. It captures incidents instantly, locates the source, automates escalation, and preserves incident history for reporting."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card rounded-3xl border border-white/10 p-8 bg-surface/95">
            <p className="text-text-secondary leading-relaxed">
              Our product is designed and developed by a dedicated team with deep experience in full-stack development, project management, and user experience design. FireSmart combines responsive IoT monitoring with smart alert automation to protect people and property.
            </p>
            <p className="mt-6 text-text-secondary leading-relaxed">
              We build practical fire safety tools that are easy to deploy, simple to monitor, and reliable under pressure. Every member of Team Pasikaton contributes to the solution from sensing to dispatch.
            </p>
            <div className="mt-8 rounded-3xl overflow-hidden border border-white/10 bg-black/20">
              <img src={groupPhoto} alt="Team Pasikaton group photo" className="w-full object-cover" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <article key={member.name} className="glass-card rounded-3xl border border-white/10 p-6">
                <p className="text-lg font-semibold text-text-primary">{member.name}</p>
                <p className="mt-2 text-sm text-text-muted">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
