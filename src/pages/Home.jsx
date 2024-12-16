import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Partners from '../components/home/Partners';
import Steps from '../components/home/Steps';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import AboutUs from '../components/home/AboutUs';
import CTASection from '../components/home/CTASection';

function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Partners />
      <Steps />
      <Testimonials />
      <FAQ />
      <AboutUs />
      <CTASection />
    </div>
  );
}

export default Home;