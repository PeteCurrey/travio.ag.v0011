"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Plus, Minus, Search } from 'lucide-react';

const FaqPage = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('GENERAL');

  const categories = ['GENERAL', 'HARDWARE', 'SUBSCRIPTIONS', 'APP & TRACKING', 'INSTALLATION'];

  const faqs = [
    { cat: 'GENERAL', q: 'How does Travio GPS work?', a: 'Travio devices use GNSS (GPS, GLONASS, Galileo) to determine their exact location. This data is then sent via the 4G LTE mobile network to our secure servers, which you access via the Travio app.' },
    { cat: 'GENERAL', q: 'Do I need a contract?', a: 'No. All Travio subscriptions are month-to-month and can be cancelled at any time through your account portal.' },
    { cat: 'HARDWARE', q: 'Is the hardware waterproof?', a: 'All Travio trackers have a minimum IP65 rating. The SILENT and PRO models are IP68 rated, meaning they can be fully submerged in water.' },
    { cat: 'HARDWARE', q: 'What is the battery life?', a: 'Hardwired trackers like the ONE and PRO run off your vehicle battery. The SILENT model has an internal battery that lasts up to 3 years.' },
    { cat: 'SUBSCRIPTIONS', q: 'What does the subscription cover?', a: 'Your subscription covers the M2M SIM card data, roaming across the UK and Europe, secure cloud storage for your journey data, and access to the Travio app.' },
    { cat: 'APP & TRACKING', q: 'How accurate is the location?', a: 'In clear sky conditions, Travio GPS is accurate to within 2.5 metres.' },
    { cat: 'INSTALLATION', q: 'Can I install it myself?', a: 'Yes. We provide detailed guides for all models. The PLUG model requires zero tools and takes 30 seconds.' },
  ];

  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      <section className="pt-32 pb-24 bg-travio-off-white">
        <div className="container text-center animate-fade-up">
          <h1 className="text-[56px] md:text-[88px] font-display font-black text-travio-black uppercase leading-[0.9] mb-8">
            HELP CENTER
          </h1>
          <div className="max-w-2xl mx-auto relative">
             <input 
               type="text" 
               placeholder="Search for a question..." 
               className="w-full h-[64px] px-8 bg-white border border-travio-subtle font-body text-[16px] outline-none focus:border-travio-black transition-all rounded-[2px]"
             />
             <div className="absolute right-6 top-1/2 -translate-y-1/2 text-travio-mid">
                <Search size={24} />
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Categories */}
            <aside className="w-full lg:w-64 flex-shrink-0">
               <div className="sticky top-32 space-y-2">
                 {categories.map((cat) => (
                   <button
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`w-full text-left px-6 py-4 text-[13px] font-body font-bold uppercase tracking-widest transition-all border ${activeCategory === cat ? 'bg-travio-black text-white border-travio-black' : 'bg-white text-travio-mid border-travio-subtle hover:border-travio-mid'}`}
                     style={{ borderRadius: '2px' }}
                   >
                     {cat}
                   </button>
                 ))}
               </div>
            </aside>

            {/* FAQ List */}
            <div className="flex-1 space-y-4">
              {faqs.filter(f => f.cat === activeCategory).map((faq, i) => (
                <div key={i} className="border-b border-travio-subtle last:border-0">
                  <button 
                    onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                    className="w-full flex items-center justify-between py-8 text-left group"
                  >
                    <span className="text-[18px] font-display font-black text-travio-black uppercase tracking-tight transition-colors group-hover:text-travio-accent">
                      {faq.q}
                    </span>
                    <div className={`transition-transform duration-300 ${openFaq === faq.q ? 'rotate-180' : ''}`}>
                      {openFaq === faq.q ? <Minus size={20} className="text-travio-mid" /> : <Plus size={20} className="text-travio-mid" />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === faq.q ? 'max-h-96 pb-12' : 'max-h-0'}`}>
                    <p className="text-[16px] font-body text-travio-mid max-w-[800px] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FaqPage;
