"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Package, 
  Settings, 
  Smartphone, 
  Check, 
  Plus, 
  Minus,
  Map,
  Bell,
  Navigation,
  History,
  Users,
  BarChart3,
  ArrowRight,
  HardDrive,
  Shield
} from 'lucide-react';

const HowItWorksPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      {/* HERO */}
      <section className="bg-travio-black py-24 md:py-32 flex items-center min-h-[60vh]">
        <div className="container animate-fade-up">
          <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-4 block">
            THE PROCESS
          </span>
          <h1 className="text-white text-[64px] md:text-[88px] font-display font-black leading-[0.9] uppercase mb-6">
            TRACKING. SIMPLIFIED.
          </h1>
          <p className="text-white/70 text-[18px] font-body max-w-[560px] leading-relaxed">
            Three steps from purchase to live tracking. Most customers are up and running in under 30 minutes.
          </p>
        </div>
      </section>

      {/* SECTION 1: THE 3-STEP PROCESS */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Step 1 */}
            <div className="relative p-10 md:p-12 border-b md:border-b-0 md:border-r border-travio-subtle group">
               <div className="absolute left-10 top-10 text-[120px] font-display font-black text-travio-black opacity-[0.05] leading-none z-0">1</div>
               <div className="relative z-10 space-y-6">
                 <div className="w-10 h-10 text-travio-accent">
                   <Package size={40} strokeWidth={1.5} />
                 </div>
                 <h3 className="text-[32px] md:text-[36px] font-display font-black text-travio-black uppercase leading-tight">
                   CHOOSE YOUR TRACKER
                 </h3>
                 <p className="text-[16px] font-body text-travio-mid leading-relaxed max-w-[280px]">
                   Select the right device for your vehicle type using our tracker finder. Not sure? Our UK team can help.
                 </p>
                 <div className="inline-block px-3 py-1 border border-travio-subtle rounded-[2px] text-[12px] font-body font-medium text-travio-mid uppercase">
                   ~5 min
                 </div>
               </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-10 md:p-12 border-b md:border-b-0 md:border-r border-travio-subtle group">
               <div className="absolute left-10 top-10 text-[120px] font-display font-black text-travio-black opacity-[0.05] leading-none z-0">2</div>
               <div className="relative z-10 space-y-6">
                 <div className="w-10 h-10 text-travio-accent">
                   <Settings size={40} strokeWidth={1.5} />
                 </div>
                 <h3 className="text-[32px] md:text-[36px] font-display font-black text-travio-black uppercase leading-tight">
                   INSTALL IT
                 </h3>
                 <p className="text-[16px] font-body text-travio-mid leading-relaxed max-w-[280px]">
                   Self-install in minutes with our step-by-step guide, or book our nationwide professional installation service.
                 </p>
                 <div className="inline-block px-3 py-1 border border-travio-subtle rounded-[2px] text-[12px] font-body font-medium text-travio-mid uppercase">
                   5–30 min
                 </div>
               </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-10 md:p-12 border-b md:border-b-0 border-travio-subtle group">
               <div className="absolute left-10 top-10 text-[120px] font-display font-black text-travio-black opacity-[0.05] leading-none z-0">3</div>
               <div className="relative z-10 space-y-6">
                 <div className="w-10 h-10 text-travio-accent">
                   <Smartphone size={40} strokeWidth={1.5} />
                 </div>
                 <h3 className="text-[32px] md:text-[36px] font-display font-black text-travio-black uppercase leading-tight">
                   TRACK IN REAL TIME
                 </h3>
                 <p className="text-[16px] font-body text-travio-mid leading-relaxed max-w-[280px]">
                   Open the Travio app. See your vehicle live on the map with instant alerts, journey history, and complete control.
                 </p>
                 <div className="inline-block px-3 py-1 border border-travio-subtle rounded-[2px] text-[12px] font-body font-medium text-travio-mid uppercase">
                   Immediate
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TRAVIO APP — FEATURE WALKTHROUGH */}
      <section className="py-24 bg-travio-off-white">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-4 block">
              THE APP
            </span>
            <h2 className="text-[48px] md:text-[64px] font-display font-black text-travio-black uppercase leading-tight">
              EVERYTHING IN YOUR POCKET.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Map, name: 'Map & Radar', desc: 'Your vehicle on a live map, updated every 10 seconds. Satellite and street view options.' },
              { icon: Bell, name: 'Instant Alerts', desc: 'Push notifications for movement, geofence breach, power loss, or crash detection. Under 30 seconds.' },
              { icon: Navigation, name: 'Geofence Manager', desc: 'Draw zones on the map. Get alerts the moment your vehicle enters or exits. Unlimited zones.' },
              { icon: History, name: 'Journey Playback', desc: 'Replay any journey from the last 90 days. Full speed, route, and stop data.' },
              { icon: Users, name: 'Multi-Vehicle View', desc: 'All your vehicles on one map. Ideal for families, fleets, and trade operators.' },
              { icon: BarChart3, name: 'Driver Scoring', desc: 'Weekly reports on braking, acceleration, cornering, and idle time. Improve driving habits. Reduce fuel.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-travio-subtle p-10 transition-all hover:border-travio-black" style={{ borderRadius: '2px' }}>
                <div className="w-10 h-10 text-travio-accent mb-6">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-[24px] font-display font-black text-travio-black uppercase mb-3">{feature.name}</h3>
                <p className="text-[14px] font-body text-travio-mid leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW THE NETWORK WORKS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
             <h2 className="text-[48px] font-display font-black text-travio-black uppercase">Technical Ecosystem</h2>
          </div>

          <div className="relative">
            {/* Desktop Connective Lines */}
            <div className="absolute top-[60px] left-0 w-full hidden md:block z-0 px-24">
               <div className="h-[2px] w-full bg-travio-subtle relative">
                 <div className="absolute inset-0 bg-travio-accent w-0 animate-network-line"></div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
               {[
                 { title: 'TRACKER DEVICE', desc: 'Positioned in your vehicle. Reports location and telemetry data via 4G LTE.' },
                 { title: '4G MOBILE NETWORK', desc: 'Global Connect M2M SIM. Automatically selects strongest signal: O2, EE, Vodafone, Three.' },
                 { title: 'TRAVIO PLATFORM', desc: 'Encrypted, UK-based servers receive, process, and store all data. ISO 27001 compliant.' },
                 { title: 'YOUR APP', desc: 'iOS and Android. Real-time data pushed to your device in under 10 seconds.' },
               ].map((node, i) => (
                 <div key={i} className="group flex flex-col items-center text-center">
                    <div className="w-[120px] h-[120px] bg-travio-off-white border border-travio-subtle rounded-[4px] flex items-center justify-center mb-6 transition-all group-hover:border-travio-accent group-hover:bg-white group-hover:shadow-premium">
                       <div className="text-travio-accent">
                          {i === 0 ? <HardDrive size={32} /> : i === 1 ? <Navigation size={32} /> : i === 2 ? <Shield size={32} /> : <Smartphone size={32} />}
                       </div>
                    </div>
                    <h4 className="text-[14px] font-body font-bold text-travio-black uppercase tracking-widest mb-3">{node.title}</h4>
                    <p className="text-[13px] font-body text-travio-mid leading-relaxed px-4">{node.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SUBSCRIPTION PLANS EXPLAINED */}
      <section className="py-24 bg-travio-off-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-4 block">
              PRICING
            </span>
            <h2 className="text-[48px] md:text-[56px] font-display font-black text-travio-black uppercase leading-tight">
              SIMPLE, HONEST PRICING.
            </h2>
            <p className="text-travio-mid text-[16px] font-body mt-4">
              No hidden fees. No contract lock-in. Cancel any time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LITE PLAN */}
            <div className="bg-white border border-travio-subtle p-10 flex flex-col" style={{ borderRadius: '2px' }}>
              <div className="mb-8">
                <h3 className="text-[28px] font-display font-black text-travio-black uppercase">LITE PLAN</h3>
                <div className="text-[14px] font-body text-travio-mid mb-6">Best for SILENT, VOLT, PLUG trackers</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-body font-bold text-travio-black">£2.99</span>
                  <span className="text-[14px] font-body text-travio-mid uppercase">/ mo</span>
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {['Live tracking', 'Geofencing', 'Journey history', 'Push alerts', 'App access', 'SMS fallback'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} className="text-travio-accent" />
                    <span className="text-[14px] font-body text-travio-black">{f}</span>
                  </div>
                ))}
                {['Advanced fleet features', 'Multi-vehicle dashboard', 'Driver scoring'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-30">
                    <Minus size={14} className="text-travio-mid" />
                    <span className="text-[14px] font-body text-travio-mid line-through">{f}</span>
                  </div>
                ))}
              </div>
              <button className="w-full h-[48px] bg-travio-black text-white text-[13px] font-body font-bold uppercase tracking-widest rounded-[2px] hover:bg-travio-charcoal transition-all">
                Select Lite
              </button>
            </div>

            {/* STANDARD PLAN */}
            <div className="bg-white border-2 border-travio-accent p-10 flex flex-col relative" style={{ borderRadius: '2px' }}>
              <div className="absolute top-0 left-0 w-full bg-travio-accent text-white text-[11px] font-body font-bold uppercase tracking-[0.2em] py-2 text-center">
                RECOMMENDED
              </div>
              <div className="mb-8 mt-4">
                <h3 className="text-[28px] font-display font-black text-travio-black uppercase">STANDARD PLAN</h3>
                <div className="text-[14px] font-body text-travio-mid mb-6">Best for ONE tracker / personal vehicles</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-body font-bold text-travio-black">£4.99</span>
                  <span className="text-[14px] font-body text-travio-mid uppercase">/ mo</span>
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {['Everything in Lite', 'Journey history (90 days)', 'Driver behaviour reports', 'Multi-vehicle (up to 3)'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} className="text-travio-accent" />
                    <span className="text-[14px] font-body text-travio-black">{f}</span>
                  </div>
                ))}
              </div>
              <button className="w-full h-[48px] bg-travio-accent text-white text-[13px] font-body font-bold uppercase tracking-widest rounded-[2px] hover:bg-travio-accent-dk transition-all">
                Select Standard
              </button>
            </div>

            {/* PRO PLAN */}
            <div className="bg-white border border-travio-subtle p-10 flex flex-col" style={{ borderRadius: '2px' }}>
              <div className="mb-8">
                <h3 className="text-[28px] font-display font-black text-travio-black uppercase">PRO PLAN</h3>
                <div className="text-[14px] font-body text-travio-mid mb-6">Best for PRO tracker / vans, fleet, commercial</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-body font-bold text-travio-black">£5.99</span>
                  <span className="text-[14px] font-body text-travio-mid uppercase">/ mo</span>
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {['Everything in Standard', 'CAN data access', 'Unlimited fleet vehicles', 'Driver scoring', 'API access'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} className="text-travio-accent" />
                    <span className="text-[14px] font-body text-travio-black">{f}</span>
                  </div>
                ))}
              </div>
              <button className="w-full h-[48px] bg-travio-black text-white text-[13px] font-body font-bold uppercase tracking-widest rounded-[2px] hover:bg-travio-charcoal transition-all">
                Select Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS — HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="container max-w-3xl">
           <div className="text-center mb-16">
             <h2 className="text-[48px] font-display font-black text-travio-black uppercase">Common Questions</h2>
           </div>
           
           <div className="space-y-4">
             {[
               { q: 'Do I need a SIM card?', a: 'No. Every Travio device comes with a pre-installed Global Connect M2M SIM. It activates automatically when powered on.' },
               { q: 'What if I go abroad?', a: 'Your tracker works across Europe and most of the world. Our M2M SIM roams automatically. No extra charges for EU travel.' },
               { q: 'Can I use my own SIM?', a: 'Yes. All Travio devices are carrier-unlocked. Insert any standard SIM with a data or SMS plan.' },
               { q: 'How long before I can start tracking?', a: 'Under 5 minutes from power-on. The device acquires GPS and connects to the network automatically.' },
               { q: 'Is my data private?', a: 'Yes. All data is encrypted end-to-end. We do not sell or share your tracking data with third parties. Full GDPR compliance.' },
               { q: 'What happens if the tracker loses signal?', a: 'The device stores up to 1,000 location records internally. When signal is restored, all stored records are uploaded automatically.' },
             ].map((faq, i) => (
               <div key={i} className="border-b border-travio-subtle last:border-0">
                 <button 
                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
                   className="w-full flex items-center justify-between py-6 text-left"
                 >
                   <span className="text-[15px] font-body font-medium text-travio-black uppercase tracking-tight">
                     {faq.q}
                   </span>
                   <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                     {openFaq === i ? <Minus size={18} className="text-travio-mid" /> : <Plus size={18} className="text-travio-mid" />}
                   </div>
                 </button>
                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                   <p className="text-[15px] font-body text-travio-mid max-w-[720px] leading-relaxed">
                     {faq.a}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <section className="bg-travio-accent py-24">
         <div className="container text-center">
            <h2 className="text-white text-[48px] md:text-[64px] font-display font-black uppercase mb-10 leading-[1]">
              READY TO PROTECT YOUR VEHICLE?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-travio-accent hover:bg-travio-off-white h-[48px] px-10 text-[14px] font-body font-bold uppercase tracking-widest transition-all rounded-[2px]">
                Shop Trackers
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white/10 h-[48px] px-10 text-[14px] font-body font-bold uppercase tracking-widest transition-all rounded-[2px]">
                Find my tracker →
              </button>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
};

export default HowItWorksPage;
