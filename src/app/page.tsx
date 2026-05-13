import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import TrustTicker from '@/components/home/TrustTicker';
import SolutionHook from '@/components/home/SolutionHook';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FeaturesReveal from '@/components/home/FeaturesReveal';
import Testimonials from '@/components/home/Testimonials';
import AppShowcase from '@/components/home/AppShowcase';
import PreFooterCTA from '@/components/home/PreFooterCTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustTicker />
      <SolutionHook />
      <HowItWorks />
      <FeaturedProducts />
      <FeaturesReveal />
      <Testimonials />
      <AppShowcase />
      <PreFooterCTA />
      <Footer />
    </main>
  );
}
