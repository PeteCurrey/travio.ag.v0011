import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TrustBadges from '@/components/trust/TrustBadges';
import ReviewIntegration from '@/components/trust/ReviewIntegration';
import InstallationNetwork from '@/components/trust/InstallationNetwork';
import LiveUptime from '@/components/trust/LiveUptime';
import { HardHat, Clock, ShieldCheck, Map, BarChart3, Construction } from 'lucide-react';
import Link from 'next/link';

const ConstructionIndustryPage = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Engine Hour Tracking",
      description: "Automate your servicing schedule based on real-time usage data, reducing downtime and maintenance costs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "IP68 Waterproofing",
      description: "Ruggedized hardware built to withstand the toughest conditions on earth. Dust, mud, and high-pressure jet washing."
    },
    {
      icon: <Construction className="w-6 h-6" />,
      title: "Plant Immobilisation",
      description: "Prevent unauthorised use of equipment after-hours with remote immobilisation via our secure mobile app."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5A27]/20 border border-[#2D5A27]/30 text-[#2D5A27] text-xs font-bold uppercase tracking-widest mb-6">
              <HardHat className="w-3 h-3" />
              Construction & Plant
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Control your <span className="text-[#2D5A27]">Machinery</span>. Protect your Profit.
            </h1>
            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl">
              From diggers and dumpers to specialized plant equipment—Travio provides the ruggedized tracking and engine-hour data you need to manage construction assets at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-[#2D5A27] hover:bg-[#23471f] text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                View Construction Hardware
              </Link>
              <LiveUptime />
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2D5A27]/5 to-transparent pointer-events-none"></div>
      </section>

      {/* Industry Specific Benefits */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-xl flex items-center justify-center text-[#2D5A27]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium">{benefit.title}</h3>
                <p className="text-white/50 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-3xl font-light mb-12">Enterprise Grade Reliability</h2>
            <TrustBadges />
          </div>

          <InstallationNetwork />
        </div>
      </section>

      {/* Review Section */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ReviewIntegration />
        </div>
      </section>

      {/* Industry CTA */}
      <section className="py-32 bg-[#0A0A0A] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-8 max-w-4xl mx-auto">Ready to secure your construction fleet?</h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
            Join hundreds of construction firms already using Travio to monitor millions of pounds worth of equipment.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
              Request Enterprise Quote
            </button>
            <button className="w-full md:w-auto border border-white/20 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/5 transition-colors">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ConstructionIndustryPage;
