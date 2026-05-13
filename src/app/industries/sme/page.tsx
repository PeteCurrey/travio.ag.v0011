import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TrustBadges from '@/components/trust/TrustBadges';
import ReviewIntegration from '@/components/trust/ReviewIntegration';
import InstallationNetwork from '@/components/trust/InstallationNetwork';
import { Building2, TrendingUp, ShieldCheck, Map, Users, BarChart } from 'lucide-react';
import Link from 'next/link';

const SMEIndustryPage = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cost Control",
      description: "Reduce fuel costs by monitoring idling time and inefficient driving routes across your fleet."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Asset Protection",
      description: "Get instant alerts if your vehicles move outside of business hours or leave predefined geofences."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Simple Reporting",
      description: "Automated mileage reports for tax compliance and customer invoicing, saving hours of manual admin."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <section className="relative pt-32 pb-24 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5A27]/20 border border-[#2D5A27]/30 text-[#2D5A27] text-xs font-bold uppercase tracking-widest mb-6">
              <Building2 className="w-3 h-3" />
              SME Fleet Management
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Smarter tracking for <span className="text-[#2D5A27]">Small Business</span>.
            </h1>
            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl">
              You don't need a massive fleet to need massive visibility. Travio gives SMEs the professional tools to manage costs and protect assets without the enterprise price tag.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-[#2D5A27] hover:bg-[#23471f] text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                View SME Solutions
              </Link>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/5 transition-colors text-lg">
                Calculate ROI
              </button>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <InstallationNetwork />
          <div className="mt-20">
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ReviewIntegration />
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A] border-t border-white/10 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-light mb-8 max-w-4xl mx-auto">Scale your business with certainty.</h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
            Starting from just 1 vehicle. No long-term contracts for SMEs.
          </p>
          <Link href="/products" className="bg-white text-black px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors inline-block">
            Start Tracking Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SMEIndustryPage;
