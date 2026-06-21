import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="site-container">
        <SectionHeader
          badge="About"
          badgeColor="orange"
          title="About FireSmart"
          subtitle="IoT-powered fire monitoring and emergency response"
          description="FireSmart is an IoT-powered fire safety platform that delivers early detection, real-time monitoring, and rapid emergency dispatch coordination. It captures incidents instantly, locates the source, automates escalation, and preserves incident history for reporting."
        />
      </div>
    </section>
  );
};

export default About;
