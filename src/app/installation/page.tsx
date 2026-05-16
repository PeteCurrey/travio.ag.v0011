"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Check, 
  Settings, 
  Shield, 
  Smartphone, 
  Play,
  FileText,
  MapPin,
  Calendar,
  Tool,
  Clock
} from 'lucide-react';

const InstallationPage = () => {
  const [activeTab, setActiveTab] = useState('SELF');

  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      <section className="pt-32 pb-24 bg-travio-black text-white">
        <div className="container animate-fade-up">
           <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-4 block">
              SETTING UP
           </span>
           <h1 className="text-[56px] md:text-[88px] font-display font-black uppercase leading-[0.9] mb-8 max-w-4xl">
              INSTALLATION GUIDE
           </h1>
           <p className="text-white/70 text-[18px] font-body max-w-2xl leading-relaxed">
              Nationwide professional fitment or simple self-installation. Choose the path that works for you.
           </p>
        </div>
      </section>

      {/* TABS SELECTOR */}
      <section className="bg-white border-b border-travio-subtle sticky top-20 z-40">
        <div className="container flex gap-12">
           <button 
             onClick={() => setActiveTab('SELF')}
             className={`py-8 text-[14px] font-body font-bold uppercase tracking-widest relative transition-all ${activeTab === 'SELF' ? 'text-travio-black' : 'text-travio-mid hover:text-travio-black'}`}
           >
              Self-Installation
              {activeTab === 'SELF' && <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-travio-accent"></div>}
           </button>
           <button 
             onClick={() => setActiveTab('PROFESSIONAL')}
             className={`py-8 text-[14px] font-body font-bold uppercase tracking-widest relative transition-all ${activeTab === 'PROFESSIONAL' ? 'text-travio-black' : 'text-travio-mid hover:text-travio-black'}`}
           >
              Professional Fitment
              {activeTab === 'PROFESSIONAL' && <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-travio-accent"></div>}
           </button>
        </div>
      </section>

      {/* CONTENT PANELS */}
      <section className="py-24 bg-white">
        <div className="container">
           {activeTab === 'SELF' && (
             <div className="animate-fade-up space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div className="space-y-8">
                      <h2 className="text-[42px] font-display font-black text-travio-black uppercase leading-[1]">YOU&apos;VE GOT THIS.</h2>
                      <p className="text-[16px] font-body text-travio-mid leading-relaxed">
                         Most Travio devices are designed for rapid setup. Whether you&apos;re plugging into an OBD port or connecting to a battery terminal, we provide everything you need to get tracking in minutes.
                      </p>
                      <div className="space-y-4">
                         {[
                           'Visual step-by-step PDF guides',
                           '4K Video walkthroughs for every model',
                           'Live technical support via chat',
                           'All mounting accessories included'
                         ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <Check size={18} className="text-travio-accent" />
                              <span className="text-[15px] font-body text-travio-black">{item}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="aspect-video bg-travio-off-white border border-travio-subtle flex items-center justify-center group cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 bg-travio-black/5 group-hover:bg-travio-black/10 transition-all"></div>
                      <div className="w-16 h-16 bg-travio-accent text-white rounded-full flex items-center justify-center relative z-10 shadow-premium transition-transform group-hover:scale-110">
                         <Play size={24} fill="white" />
                      </div>
                      <div className="absolute bottom-6 left-6 text-[10px] font-body font-bold text-travio-mid uppercase tracking-widest">Watch Installation Video</div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {[
                     { title: 'TRAVIO ONE', time: '20 Mins', type: 'Hardwired' },
                     { title: 'TRAVIO PRO', time: '30 Mins', type: 'Advanced Hardwire' },
                     { title: 'TRAVIO VOLT', time: '5 Mins', type: 'Battery Terminal' },
                     { title: 'TRAVIO SILENT', time: '1 Min', type: 'Magnetic' },
                     { title: 'TRAVIO PLUG', time: '30 Secs', type: 'OBDII Plug' },
                   ].map((item, i) => (
                     <div key={i} className="bg-travio-off-white p-8 border border-travio-subtle space-y-4" style={{ borderRadius: '2px' }}>
                        <div className="flex justify-between items-start">
                           <h4 className="text-[20px] font-display font-black text-travio-black uppercase">{item.title}</h4>
                           <div className="text-[10px] font-body font-bold text-travio-accent uppercase border border-travio-accent px-2 py-0.5">{item.type}</div>
                        </div>
                        <div className="flex items-center gap-2 text-travio-mid text-[13px] font-body uppercase tracking-wider">
                           <Clock size={14} />
                           Est. Time: {item.time}
                        </div>
                        <button className="w-full h-[44px] bg-white border border-travio-subtle text-travio-black text-[12px] font-body font-bold uppercase tracking-widest hover:border-travio-black transition-all flex items-center justify-center gap-2">
                           <FileText size={14} />
                           Download Guide
                        </button>
                     </div>
                   ))}
                </div>
             </div>
           )}

           {activeTab === 'PROFESSIONAL' && (
             <div className="animate-fade-up space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div className="space-y-8">
                      <h2 className="text-[42px] font-display font-black text-travio-black uppercase leading-[1]">NATIONWIDE COVERAGE.</h2>
                      <p className="text-[16px] font-body text-travio-mid leading-relaxed">
                         Don&apos;t want to handle the wiring? Let our certified technicians take care of it. We offer nationwide mobile installation, meaning we come to your home or workplace at a time that suits you.
                      </p>
                      <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <div className="text-[24px] font-display font-black text-travio-black uppercase">£79.99</div>
                            <div className="text-[12px] font-body text-travio-mid uppercase tracking-widest leading-tight">Fixed Price Fitment</div>
                         </div>
                         <div className="space-y-2">
                            <div className="text-[24px] font-display font-black text-travio-black uppercase">7 Days</div>
                            <div className="text-[12px] font-body text-travio-mid uppercase tracking-widest leading-tight">Work/Home Visits</div>
                         </div>
                      </div>
                   </div>
                   <div className="bg-travio-off-white aspect-video border border-travio-subtle flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-10"></div>
                       <div className="relative z-10 text-center space-y-4">
                          <MapPin size={48} className="text-travio-accent mx-auto" />
                          <div className="text-[14px] font-body font-bold text-travio-black uppercase tracking-[0.2em]">120+ Certified Installers UK-Wide</div>
                       </div>
                   </div>
                </div>

                <div className="max-w-4xl mx-auto bg-travio-black text-white p-12 space-y-10" style={{ borderRadius: '2px' }}>
                   <div className="text-center">
                      <h3 className="text-[32px] font-display font-black uppercase mb-2">Book Your Fitment</h3>
                      <p className="text-white/60 font-body">Fill in your details and our team will contact you within 2 hours to confirm a slot.</p>
                   </div>
                   <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[11px] font-body font-bold text-white/50 uppercase tracking-widest">Order Number (Optional)</label>
                         <input type="text" className="w-full h-[52px] bg-white/10 border border-white/20 px-4 outline-none focus:border-travio-accent text-white" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[11px] font-body font-bold text-white/50 uppercase tracking-widest">Postcode</label>
                         <input type="text" className="w-full h-[52px] bg-white/10 border border-white/20 px-4 outline-none focus:border-travio-accent text-white" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[11px] font-body font-bold text-white/50 uppercase tracking-widest">Preferred Date</label>
                         <input type="date" className="w-full h-[52px] bg-white/10 border border-white/20 px-4 outline-none focus:border-travio-accent text-white" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[11px] font-body font-bold text-white/50 uppercase tracking-widest">Vehicle Model</label>
                         <input type="text" className="w-full h-[52px] bg-white/10 border border-white/20 px-4 outline-none focus:border-travio-accent text-white" />
                      </div>
                      <button className="md:col-span-2 h-[56px] bg-travio-accent hover:bg-travio-accent-dk text-white text-[14px] font-body font-bold uppercase tracking-widest transition-all rounded-[2px]">
                         Submit Booking Request
                      </button>
                   </form>
                </div>
             </div>
           )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InstallationPage;
