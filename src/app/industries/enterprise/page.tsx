import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TrustBadges from '@/components/trust/TrustBadges';
import ReviewIntegration from '@/components/trust/ReviewIntegration';
import InstallationNetwork from '@/components/trust/InstallationNetwork';
import LiveUptime from '@/components/trust/LiveUptime';
import { Globe, Database, Cpu, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const EnterpriseIndustryPage = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "API Integration",
      description: "Seamlessly push tracking data into your existing ERP, CRM, or fleet management software with our robust REST API."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Custom Dashboards",
      description: "Bespoke analytics and reporting tailored to your specific operational KPIs and regional structures."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hardware Customisation",
      description: "Need a specific sensor or I/O configuration? Our engineering team can customize hardware for large-scale deployments."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <section className="relative pt-32 pb-48 border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              Enterprise Fleet Solutions
            </div>
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
              Enterprise-Grade <br/>
              <span className="text-[#2D5A27]">Asset Intelligence.</span>
            </h1>
            <p className="text-2xl text-white/60 mb-12 leading-relaxed max-w-3xl">
              Secure, scalable, and fully integrated. Travio Enterprise provides the data infrastructure required to power the world's most complex logistics operations.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-[#2D5A27] hover:bg-[#23471f] text-white px-10 py-5 rounded-xl font-bold text-lg transition-colors">
                Contact Enterprise Team
              </button>
              <LiveUptime />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="w-16 h-16 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium">{feature.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl md:text-5xl font-light mb-8">Security & Compliance</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#2D5A27] mt-1" />
                  <div>
                    <h4 className="text-xl font-medium mb-2">ISO 27001 Certified Infrastructure</h4>
                    <p className="text-white/50">Your data is hosted in Tier-4 data centres with full redundancy and military-grade encryption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#2D5A27] mt-1" />
                  <div>
                    <h4 className="text-xl font-medium mb-2">Dedicated Account Management</h4>
                    <p className="text-white/50">Enterprise clients receive a dedicated success manager and 24/7 priority technical support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2D5A27]/5 flex items-center justify-center opacity-20 pointer-events-none">
              <Database className="w-96 h-96" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <TrustBadges />
          <div className="mt-24">
            <ReviewIntegration />
          </div>
        </div>
      </section>

      <section className="py-48 bg-[#0A0A0A] text-center border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-5xl md:text-7xl font-light mb-12">Empower your fleet.</h2>
          <button className="bg-white text-black px-16 py-6 rounded-2xl font-bold text-xl hover:bg-gray-200 transition-colors">
            Request Enterprise Presentation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EnterpriseIndustryPage;
