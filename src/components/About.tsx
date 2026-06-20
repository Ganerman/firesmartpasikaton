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
          description="FireSmart is an IoT-powered fire monitoring and emergency response platform designed to provide early fire detection, real-time incident monitoring, and rapid emergency dispatch coordination. It surfaces incidents in real time, pinpoints locations, automates escalation, and stores incident history for reporting and analysis."
        />
      </div>
    </section>
  );
};

export default About;
