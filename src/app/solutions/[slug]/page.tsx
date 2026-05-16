"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import { solutions } from '@/data/solutions';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Minus,
  Quote,
  Shield,
  Clock,
  Settings,
  Tool
} from 'lucide-react';
import './SolutionPage.css';

const SolutionPage = () => {
  const { slug } = useParams();
  const data = solutions[slug as string] || solutions.car;
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const primaryProduct = products.find(p => p.id === data.recommendations.primaryId);
  const secondaryProduct = data.recommendations.secondaryId ? products.find(p => p.id === data.recommendations.secondaryId) : null;

  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      {/* COMPONENT 1: HERO */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Parallax Background Placeholder */}
        <div className="absolute inset-0 bg-travio-black">
           <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-travio-black via-travio-black/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 animate-fade-up">
          <div className="max-w-2xl">
            <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-6 block">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-white text-[72px] md:text-[96px] font-display font-black leading-[0.92] uppercase mb-6">
              {data.hero.headline}
            </h1>
            <p className="text-white/70 text-[18px] font-body max-w-[500px] mb-10 leading-relaxed">
              {data.hero.subcopy}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-travio-accent hover:bg-travio-accent-dk text-white h-[48px] px-8 text-[14px] font-body font-bold uppercase tracking-[0.05em] transition-all rounded-[2px]">
                {data.hero.cta}
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white/10 h-[48px] px-8 text-[14px] font-body font-bold uppercase tracking-[0.05em] transition-all rounded-[2px]">
                How it works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 2: WHY [VEHICLE TYPE] OWNERS NEED TRACKING */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <h2 className="text-[42px] md:text-[52px] font-display font-black text-travio-black leading-tight uppercase mb-12">
              {data.problem.headline}
            </h2>
            <div className="space-y-10">
              {data.problem.painPoints.map((point, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-[14px] font-body font-bold text-travio-black uppercase tracking-wider">
                    {point.title}
                  </h3>
                  <p className="text-[15px] font-body text-travio-mid leading-relaxed max-w-[540px]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-travio-off-white p-12 border border-travio-subtle space-y-12">
              {data.problem.stats.map((stat, i) => (
                <div key={i} className="pb-8 border-b border-travio-subtle last:border-0 last:pb-0">
                  <div className="text-[64px] font-display font-black text-travio-black leading-none uppercase mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[14px] font-body text-travio-mid uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 3: STAT STRIP */}
      <section className="bg-travio-black py-20">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {data.darkStats.map((stat, i) => (
              <div key={i} className="text-center px-4 lg:border-r border-white/10 last:border-0">
                <div className="text-[32px] md:text-[48px] font-display font-black text-white leading-none uppercase mb-2">
                  {stat.value}
                </div>
                <div className="text-[12px] font-body text-white/50 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENT 4: RECOMMENDED PRODUCTS */}
      <section className="py-24 bg-travio-off-white">
        <div className="container">
          <div className="mb-16 animate-fade-up">
            <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-4 block">
              MATCHED TO YOUR VEHICLE
            </span>
            <h2 className="text-[48px] font-display font-black text-travio-black leading-[1] uppercase">
              RECOMMENDED FOR {data.name}S
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[primaryProduct, secondaryProduct].filter(Boolean).map((product, i) => (
              <div key={product?.id} className="group bg-white border border-travio-subtle p-0 transition-all hover:border-travio-black flex flex-col h-full relative" style={{ borderRadius: '2px' }}>
                <div className="bg-travio-accent text-white text-[12px] font-body font-medium uppercase tracking-widest py-3 px-6 text-center">
                  {i === 0 ? data.recommendations.primaryBadge : data.recommendations.secondaryBadge || 'SECONDARY OPTION'}
                </div>
                
                <div className="p-8 flex flex-col h-full">
                  <div className="aspect-square relative mb-8 bg-travio-off-white flex items-center justify-center p-12 transition-all group-hover:scale-[1.02]">
                    <div className="w-32 h-24 bg-travio-charcoal/5 border border-travio-charcoal/10 relative"></div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-[11px] font-body font-bold uppercase tracking-[0.15em] text-travio-accent">
                      {product?.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-black mb-3 uppercase">{product?.name}</h3>
                  <p className="text-travio-mid text-[15px] font-body mb-8 flex-grow leading-relaxed">{product?.tagline}</p>
                  
                  <div className="pt-6 border-t border-travio-subtle mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-body font-semibold text-travio-black">£{product?.price.toFixed(2)}</span>
                      <span className="text-[12px] font-body text-travio-mid uppercase">from {product?.subscriptionFrom}</span>
                    </div>
                    <a 
                      href={`/products/${product?.id}`}
                      className="bg-travio-black hover:bg-travio-charcoal text-white px-8 py-3 text-[13px] font-body font-bold uppercase tracking-widest transition-all"
                      style={{ borderRadius: '2px' }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-up">
            <a href="/products" className="text-travio-accent text-[14px] font-body font-bold uppercase tracking-[0.06em] hover:underline">
              VIEW ALL PRODUCTS →
            </a>
          </div>
        </div>
      </section>

      {/* COMPONENT 5: CUSTOMER STORY */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-4xl animate-fade-up">
           <Quote size={100} className="text-travio-subtle opacity-30 mx-auto mb-8" />
           <blockquote className="text-[28px] md:text-[32px] font-display font-bold italic text-travio-black leading-tight mb-8">
            &quot;{data.customerStory.quote}&quot;
           </blockquote>
           <cite className="block text-[16px] font-body text-travio-mid not-italic uppercase tracking-widest mb-16">
            — {data.customerStory.attribution}
           </cite>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {data.customerStory.outcomes.map((outcome, i) => (
               <div key={i} className="space-y-1">
                 <div className="text-[28px] font-display font-black text-travio-accent uppercase">
                   {outcome.value}
                 </div>
                 <div className="text-[14px] font-body text-travio-mid uppercase tracking-wide">
                   {outcome.label}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* COMPONENT 6: INSTALLATION OPTIONS */}
      <section className="py-24 bg-travio-off-white">
        <div className="container">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white border border-travio-subtle p-10 space-y-6" style={{ borderRadius: '2px' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-travio-off-white text-travio-accent">
                   <Settings size={24} />
                </div>
                <h3 className="text-[24px] font-display font-black text-travio-black uppercase tracking-tight">Self-Install</h3>
                <p className="text-[15px] font-body text-travio-mid leading-relaxed">
                  Most customers are up and running in 20-30 minutes with our included guide and video walkthrough.
                </p>
                <a href="/installation" className="inline-block text-travio-accent text-[14px] font-body font-bold uppercase tracking-widest hover:underline">
                  View Guides →
                </a>
             </div>

             <div className="bg-white border border-travio-subtle p-10 space-y-6" style={{ borderRadius: '2px' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-travio-off-white text-travio-accent">
                   <Shield size={24} />
                </div>
                <h3 className="text-[24px] font-display font-black text-travio-black uppercase tracking-tight">Professional</h3>
                <p className="text-[15px] font-body text-travio-mid leading-relaxed">
                  Our nationwide network of certified technicians comes to your door, 7 days a week, across the UK.
                </p>
                <button className="text-travio-accent text-[14px] font-body font-bold uppercase tracking-widest hover:underline">
                  Book Fitment →
                </button>
             </div>

             <div className="bg-white border border-travio-subtle p-10 space-y-6" style={{ borderRadius: '2px' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-travio-off-white text-travio-accent">
                   <Clock size={24} />
                </div>
                <h3 className="text-[24px] font-display font-black text-travio-black uppercase tracking-tight">Rapid Tracking</h3>
                <p className="text-[15px] font-body text-travio-mid leading-relaxed">
                  Need protection today? Choose the Travio PLUG for 30-second setup with zero tools required.
                </p>
                <a href="/products/plug" className="inline-block text-travio-accent text-[14px] font-body font-bold uppercase tracking-widest hover:underline">
                  See Plug & Play →
                </a>
             </div>
           </div>
        </div>
      </section>

      {/* COMPONENT 7: FAQ — VEHICLE SPECIFIC */}
      <section className="py-24 bg-white">
        <div className="container max-w-3xl">
           <div className="text-center mb-16">
             <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-4 block">
                QUESTIONS
             </span>
             <h2 className="text-[48px] font-display font-black text-travio-black uppercase">FAQ</h2>
           </div>
           
           <div className="space-y-4">
             {data.faqs.map((faq, i) => (
               <div key={i} className="border-b border-travio-subtle last:border-0">
                 <button 
                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
                   className="w-full flex items-center justify-between py-6 text-left"
                 >
                   <span className="text-[15px] font-body font-medium text-travio-black uppercase tracking-tight">
                     {faq.question}
                   </span>
                   <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                     {openFaq === i ? <Minus size={18} className="text-travio-mid" /> : <Plus size={18} className="text-travio-mid" />}
                   </div>
                 </button>
                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                   <p className="text-[15px] font-body text-travio-mid max-w-[720px] leading-relaxed">
                     {faq.answer}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* COMPONENT 8: PRE-FOOTER CTA */}
      <section className="bg-travio-accent py-24">
         <div className="container text-center">
            <h2 className="text-white text-[48px] md:text-[64px] font-display font-black uppercase mb-10 leading-[1]">
              PROTECT YOUR {data.name} TODAY.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-travio-accent hover:bg-travio-off-white h-[48px] px-10 text-[14px] font-body font-bold uppercase tracking-widest transition-all rounded-[2px]">
                Shop Trackers
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white/10 h-[48px] px-10 text-[14px] font-body font-bold uppercase tracking-widest transition-all rounded-[2px]">
                Contact Expert
              </button>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
};

export default SolutionPage;
