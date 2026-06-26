import About from './components/About';
import Achievements from './components/Achievements';
import BackToTop from './components/BackToTop';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';
import Dataflow from './components/Dataflow';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import ScrollProgress from './components/ScrollProgress';
import StatsBar from './components/StatsBar';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <About />
        <Features />
        <HowItWorks />
        <Dataflow />
        <TechStack />
        <Dashboard />
        <Achievements />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
