"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, Target, Users, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-24 bg-travio-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <div className="w-[1000px] h-[1000px] border border-white rotate-45 translate-x-1/2 -translate-y-1/4"></div>
        </div>
        <div className="container relative z-10 animate-fade-up">
           <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-4 block">
              OUR MISSION
           </span>
           <h1 className="text-[56px] md:text-[88px] font-display font-black uppercase leading-[0.9] mb-8 max-w-4xl">
              PROTECTING WHAT MATTERS TO YOU.
           </h1>
           <p className="text-white/70 text-[18px] font-body max-w-2xl leading-relaxed">
              Travio was founded with a single goal: to provide vehicle owners with the same level of security and oversight that was previously only available to large-scale commercial fleets.
           </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-8 animate-fade-up">
              <h2 className="text-[42px] font-display font-black text-travio-black uppercase leading-[1]">A NEW STANDARD IN SECURITY.</h2>
              <div className="space-y-6 text-[16px] font-body text-travio-mid leading-relaxed">
                 <p>
                    For too long, vehicle tracking was expensive, complex, and poorly supported. We saw a gap in the market for high-quality, 4G-enabled hardware that was actually easy to use.
                 </p>
                 <p>
                    Today, Travio protects thousands of vehicles across the UK — from family hatchbacks and luxury motorcycles to multi-million pound plant fleets. Our hardware is designed in the UK, our support team is based in Manchester, and our recovery network is nationwide.
                 </p>
              </div>
           </div>
           <div className="bg-travio-off-white aspect-square border border-travio-subtle relative flex items-center justify-center p-24">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-20"></div>
              <div className="relative z-10 text-center space-y-4">
                 <div className="text-[88px] font-display font-black text-travio-black leading-none uppercase">10k+</div>
                 <div className="text-[14px] font-body font-bold text-travio-mid uppercase tracking-[0.2em]">Vehicles Protected</div>
              </div>
           </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-travio-off-white">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: Shield, title: 'Security First', desc: 'Enterprise-grade encryption on every packet of tracking data.' },
                 { icon: Zap, title: 'Rapid Response', desc: 'Alerts delivered to your device in under 30 seconds, 24/7.' },
                 { icon: Target, title: 'High Precision', desc: 'Dual-band GNSS modules for accuracy within 2.5 metres.' },
                 { icon: Users, title: 'Human Support', desc: 'No bots. Real UK technicians on the phone when you need us.' },
               ].map((v, i) => (
                 <div key={i} className="bg-white p-10 border border-travio-subtle space-y-6" style={{ borderRadius: '2px' }}>
                    <div className="text-travio-accent">
                       <v.icon size={40} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-[24px] font-display font-black text-travio-black uppercase">{v.title}</h4>
                    <p className="text-[14px] font-body text-travio-mid leading-relaxed">{v.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
