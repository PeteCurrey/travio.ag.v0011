"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import { 
  Filter, 
  Shield, 
  Truck, 
  RotateCcw, 
  Search,
  ChevronRight,
  Star
} from 'lucide-react';

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  const filteredProducts = products.filter(p => 
    ['one', 'pro', 'silent', 'volt', 'plug'].includes(p.id) &&
    (activeCategory === 'ALL' || p.category.toUpperCase().includes(activeCategory))
  );

  const categories = ['ALL', 'HARDWIRED', 'WIRELESS', 'BATTERY TERMINAL', 'PLUG & PLAY'];

  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      {/* HERO / HEADER */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container animate-fade-up">
          <nav className="flex items-center gap-2 text-[12px] font-body text-travio-mid uppercase tracking-wider mb-8">
            <a href="/" className="hover:text-travio-black transition-colors">Home</a>
            <span>/</span>
            <span className="text-travio-black">Shop</span>
          </nav>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-travio-subtle pb-12">
            <div>
              <h1 className="text-[56px] md:text-[88px] font-display font-black text-travio-black leading-[0.9] uppercase mb-4">
                Hardware Ecosystem
              </h1>
              <p className="text-travio-mid text-[18px] font-body max-w-xl">
                Professional-grade GPS hardware for every vehicle type. UK-designed, enterprise-secured, and recovery-tested.
              </p>
            </div>
            <div className="hidden md:flex gap-12 text-center pb-2">
              <div>
                <div className="text-[24px] font-display font-black text-travio-black uppercase">Free</div>
                <div className="text-[12px] font-body text-travio-mid uppercase tracking-wider">UK Delivery</div>
              </div>
              <div>
                <div className="text-[24px] font-display font-black text-travio-black uppercase">2-Year</div>
                <div className="text-[12px] font-body text-travio-mid uppercase tracking-wider">Warranty</div>
              </div>
              <div>
                <div className="text-[24px] font-display font-black text-travio-black uppercase">30-Day</div>
                <div className="text-[12px] font-body text-travio-mid uppercase tracking-wider">Returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-20 z-40 bg-white border-b border-travio-subtle py-4">
        <div className="container overflow-x-auto no-scrollbar flex items-center gap-8">
          <div className="flex items-center gap-2 text-[12px] font-body font-bold text-travio-black uppercase tracking-widest mr-4">
            <Filter size={14} />
            Filter
          </div>
          <div className="flex gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 text-[13px] font-body font-bold uppercase tracking-widest transition-all rounded-[2px] ${activeCategory === cat ? 'bg-travio-black text-white' : 'bg-travio-off-white text-travio-mid hover:bg-travio-subtle hover:text-travio-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="py-16 bg-white min-h-[600px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <div key={product.id} className="group bg-white border border-travio-subtle p-0 transition-all hover:border-travio-black flex flex-col h-full relative overflow-hidden" style={{ borderRadius: '2px', animationDelay: `${i * 0.1}s` }}>
                {product.badge && (
                  <div className="absolute top-6 left-6 z-10">
                     <span className={`text-[10px] font-body font-bold px-3 py-1 uppercase tracking-widest ${product.isBestSeller ? 'bg-travio-accent text-white' : 'bg-travio-black text-white'}`} style={{ borderRadius: '2px' }}>
                      {product.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  <div className="aspect-square relative mb-8 bg-travio-off-white flex items-center justify-center p-12 transition-all group-hover:scale-[1.02]">
                    {/* Placeholder Silhouette */}
                    <div className="w-32 h-24 bg-travio-charcoal/5 border border-travio-charcoal/10 relative flex items-center justify-center">
                       <div className="text-[8px] font-body text-travio-mid uppercase tracking-[0.2em]">Hardware Render</div>
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-[11px] font-body font-bold uppercase tracking-[0.15em] text-travio-accent">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-black mb-3 uppercase">{product.name}</h3>
                  <p className="text-travio-mid text-[15px] font-body mb-8 flex-grow leading-relaxed">{product.tagline}</p>
                  
                  {/* Stats Row */}
                  <div className="flex gap-4 mb-8">
                     {product.stats?.slice(0, 2).map((stat, si) => (
                       <div key={si} className="flex flex-col">
                          <span className="text-[16px] font-display font-black text-travio-black uppercase">{stat.value}</span>
                          <span className="text-[10px] font-body text-travio-mid uppercase tracking-wider">{stat.label}</span>
                       </div>
                     ))}
                  </div>

                  <div className="pt-6 border-t border-travio-subtle mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-body font-semibold text-travio-black">£{product.price.toFixed(2)}</span>
                      <span className="text-[12px] font-body text-travio-mid uppercase tracking-tight">from {product.subscriptionFrom}</span>
                    </div>
                    <a 
                      href={`/products/${product.id}`}
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
        </div>
      </section>

      {/* TRUST BADGE SECTION */}
      <section className="py-24 bg-travio-off-white">
        <div className="container">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <div className="space-y-4">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-travio-accent shadow-premium">
                    <Shield size={32} strokeWidth={1.5} />
                 </div>
                 <h4 className="text-[18px] font-display font-black uppercase">UK Support</h4>
                 <p className="text-[14px] font-body text-travio-mid px-4">Local technical assistance, 7 days a week.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-travio-accent shadow-premium">
                    <Truck size={32} strokeWidth={1.5} />
                 </div>
                 <h4 className="text-[18px] font-display font-black uppercase">Free Delivery</h4>
                 <p className="text-[14px] font-body text-travio-mid px-4">Next-day UK shipping on all hardware orders.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-travio-accent shadow-premium">
                    <RotateCcw size={32} strokeWidth={1.5} />
                 </div>
                 <h4 className="text-[18px] font-display font-black uppercase">30-Day Returns</h4>
                 <p className="text-[14px] font-body text-travio-mid px-4">No-fuss money-back guarantee for 30 days.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-travio-accent shadow-premium">
                    <Star size={32} strokeWidth={1.5} />
                 </div>
                 <h4 className="text-[18px] font-display font-black uppercase">4.9/5 Rating</h4>
                 <p className="text-[14px] font-body text-travio-mid px-4">Thousands of protected vehicles across the UK.</p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ShopPage;
