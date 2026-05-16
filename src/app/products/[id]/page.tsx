"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Star, 
  Shield, 
  Package, 
  RotateCcw, 
  Phone, 
  Check, 
  Plus, 
  Minus,
  HardDrive,
  Plug,
  Info,
  Cpu,
  ChevronDown
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const { addToCart } = useCart();
  
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to tabs section when tab changes
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const element = document.getElementById('product-tabs');
    if (element) {
      const offset = 100; // Adjust for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedPlan);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const getVehicleCompatibility = () => {
    const vehicles = ['CAR', 'VAN', 'MOTORBIKE', 'MOTORHOME', 'CARAVAN', 'PLANT'];
    return vehicles.map(v => ({
      name: v,
      isCompatible: product.compat.some(c => c.toUpperCase() === v || (c.toUpperCase() === 'PLANT & EQUIPMENT' && v === 'PLANT'))
    }));
  };

  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      {/* BREADCRUMB */}
      <div className="container pt-32 pb-4">
        <nav className="flex items-center gap-2 text-[12px] font-body text-travio-mid uppercase tracking-wider">
          <a href="/" className="hover:text-travio-black transition-colors">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-travio-black transition-colors">Hardware</a>
          <span>/</span>
          <span className="text-travio-black">{product.name}</span>
        </nav>
      </div>

      {/* PRODUCT HERO */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN: GALLERY */}
          <div className="space-y-6">
            <div className="aspect-square bg-travio-off-white border border-travio-subtle flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Product Image Placeholder Silhouette */}
              <div className="w-48 h-32 bg-travio-charcoal/10 border-2 border-travio-charcoal/20 relative flex items-center justify-center">
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-travio-mid"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-travio-mid"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-travio-mid"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-travio-mid"></div>
                <div className="text-center">
                  <div className="text-[10px] font-body text-travio-mid mb-1 tracking-[0.2em] uppercase">Hardware Unit</div>
                  <div className="text-[14px] font-display font-black text-travio-black tracking-tight">{product.name}</div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-[10px] font-body text-travio-mid tracking-widest uppercase">
                Model: {product.id.toUpperCase()}-4G v1.2
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className={`w-[72px] h-[72px] border flex items-center justify-center cursor-pointer transition-all ${i === 1 ? 'border-travio-black' : 'border-travio-subtle hover:border-travio-mid'}`}
                >
                  <div className="w-8 h-6 bg-travio-charcoal/5 border border-travio-charcoal/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] text-travio-mid font-body text-center leading-tight p-1">
                      {i === 1 ? 'FRONT' : i === 2 ? 'SIDE' : i === 3 ? 'INSTALL' : i === 4 ? 'BOX' : 'APP'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: INFO */}
          <div className="lg:pl-12 flex flex-col">
            {/* Badge Row */}
            <div className="flex gap-2 mb-4">
              <span className="bg-travio-charcoal text-white text-[11px] font-medium font-body uppercase tracking-[0.12em] px-[10px] py-[3px] rounded-[2px]">
                {product.category}
              </span>
              {product.isBestSeller && (
                <span className="bg-travio-accent text-white text-[11px] font-medium font-body uppercase tracking-[0.12em] px-[10px] py-[3px] rounded-[2px]">
                  BEST SELLER
                </span>
              )}
            </div>

            <h1 className="text-[52px] font-display font-black text-travio-black leading-[1.0] uppercase mb-2">
              {product.name}
            </h1>
            <p className="text-[17px] font-body text-travio-mid mb-6">
              {product.tagline}
            </p>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-travio-subtle">
              <div className="flex items-center gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C8A84B" color="#C8A84B" />
                ))}
              </div>
              <span className="text-travio-mid text-[13px] font-body">(127 reviews)</span>
              <button className="text-travio-accent text-[13px] font-body hover:underline transition-all">Read Reviews →</button>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] font-body font-semibold text-travio-black">£{product.price.toFixed(2)}</span>
                <span className="text-travio-mid text-[13px] font-body">inc. VAT (£{(product.price / 1.2).toFixed(2)} ex. VAT)</span>
              </div>
              <p className="text-travio-mid text-[14px] font-body mt-1">Subscription from {product.subscriptionFrom}</p>
            </div>

            {/* SUBSCRIPTION PLAN SELECTOR */}
            <div className="mb-8">
              <div className="text-[12px] font-body font-medium text-travio-charcoal uppercase tracking-[0.1em] mb-4">
                SELECT DATA PLAN
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {product.subscriptionPlans?.map((plan, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedPlan(index)}
                    className={`relative p-4 border cursor-pointer transition-all ${selectedPlan === index ? 'border-travio-accent bg-travio-accent/[0.04]' : 'border-travio-subtle hover:border-travio-mid'}`}
                  >
                    {plan.isPopular && (
                      <div className="absolute top-2 right-2 border border-travio-accent text-travio-accent text-[11px] font-body font-medium px-2 py-0.5 uppercase">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="text-[16px] font-display font-bold text-travio-black mb-1">{plan.name}</div>
                    <div className="text-[12px] font-body text-travio-mid mb-2 uppercase">{plan.duration}</div>
                    <div className="text-[18px] font-body font-semibold text-travio-black">{plan.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPATIBLE VEHICLES */}
            <div className="mb-8">
              <div className="text-[12px] font-body font-medium text-travio-charcoal uppercase tracking-[0.1em] mb-4">
                COMPATIBLE WITH
              </div>
              <div className="flex flex-wrap gap-2">
                {getVehicleCompatibility().map((v, i) => (
                  <div 
                    key={i}
                    className={`px-3 py-1 text-[11px] font-body font-medium uppercase tracking-[0.08em] rounded-[2px] ${v.isCompatible ? 'bg-travio-black text-white' : 'bg-travio-subtle text-travio-mid line-through opacity-50'}`}
                  >
                    {v.name}
                  </div>
                ))}
              </div>
            </div>

            {/* QUANTITY + ADD TO CART */}
            <div className="flex gap-3 mb-3">
              <div className="flex border border-travio-subtle h-[48px] w-[120px]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 flex items-center justify-center hover:bg-travio-off-white transition-all border-r border-travio-subtle"
                >
                  <Minus size={14} />
                </button>
                <div className="flex-1 flex items-center justify-center font-body text-[16px] font-medium">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 flex items-center justify-center hover:bg-travio-off-white transition-all border-l border-travio-subtle"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className={`flex-1 h-[48px] text-[14px] font-body font-semibold uppercase tracking-[0.06em] transition-all rounded-[2px] ${addedToCart ? 'bg-travio-black text-white' : 'bg-travio-accent hover:bg-travio-accent-dk text-white'}`}
              >
                {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>
            <button className="w-full h-[48px] bg-travio-black hover:bg-travio-charcoal text-white text-[14px] font-body font-semibold uppercase tracking-[0.06em] transition-all rounded-[2px]">
              Buy It Now
            </button>

            {/* TRUST SIGNALS */}
            <div className="grid grid-cols-4 pt-6 mt-8 border-t border-travio-subtle text-center">
              <div className="flex flex-col items-center gap-2">
                <Shield size={16} className="text-travio-accent" />
                <span className="text-[11px] font-body text-travio-mid leading-tight uppercase">2-Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Package size={16} className="text-travio-accent" />
                <span className="text-[11px] font-body text-travio-mid leading-tight uppercase">Free UK Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw size={16} className="text-travio-accent" />
                <span className="text-[11px] font-body text-travio-mid leading-tight uppercase">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone size={16} className="text-travio-accent" />
                <span className="text-[11px] font-body text-travio-mid leading-tight uppercase">UK Support</span>
              </div>
            </div>

            {/* KEY FEATURES LIST */}
            <div className="mt-12">
              <div className="text-[13px] font-body font-bold text-travio-black uppercase tracking-[0.06em] mb-4">
                WHAT&apos;S INCLUDED
              </div>
              <div className="space-y-0">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-t border-travio-subtle">
                    <div className="w-5 h-5 flex items-center justify-center text-travio-accent">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-body text-travio-black leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section id="product-tabs" className="bg-white">
        <div className="sticky top-20 z-40 bg-white border-t border-b border-travio-subtle">
          <div className="container overflow-x-auto no-scrollbar">
            <div className="flex gap-10">
              {['OVERVIEW', 'SPECIFICATIONS', 'INSTALLATION', 'FAQS'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`py-6 text-[14px] font-body font-medium tracking-wider uppercase transition-all relative ${activeTab === tab ? 'text-travio-black' : 'text-travio-mid hover:text-travio-black'}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-travio-accent animate-slide-in"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TAB PANELS */}
        <div className="min-h-[500px]">
          
          {/* OVERVIEW PANEL */}
          {activeTab === 'OVERVIEW' && (
            <div className="bg-travio-off-white py-24 animate-fade-up">
              <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="aspect-[16/9] bg-travio-black/5 border border-travio-subtle flex flex-col items-center justify-center relative overflow-hidden group">
                    {/* Cinematic Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-travio-charcoal to-travio-black opacity-10"></div>
                    <div className="w-64 h-48 border border-white/10 relative">
                       <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                          <div className="text-[10px] font-body text-travio-mid mb-4 tracking-[0.3em] uppercase">Cinematic Render</div>
                          <div className="w-12 h-0.5 bg-travio-accent mb-4"></div>
                          <div className="text-[16px] font-display font-black text-travio-black tracking-widest uppercase">Professional Installation Shot — Coming Soon</div>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-12">
                  {product.stats?.map((stat, i) => (
                    <div key={i} className="pb-8 border-b border-travio-subtle last:border-0">
                      <div className="text-[56px] font-display font-black text-travio-black leading-tight uppercase">{stat.value}</div>
                      <div className="text-[15px] font-body text-travio-mid uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}

                  <div className="pt-4">
                    <h4 className="text-[16px] font-display font-black text-travio-black uppercase tracking-widest mb-6">What&apos;s in the box</h4>
                    <div className="space-y-4">
                      {product.inTheBox?.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 py-3 border-b border-travio-subtle last:border-0">
                          <div className="w-10 h-10 bg-white border border-travio-subtle flex items-center justify-center text-travio-accent">
                            {item.icon === 'HardDrive' ? <HardDrive size={18} /> : 
                             item.icon === 'Plug' ? <Plug size={18} /> : 
                             item.icon === 'Info' ? <Info size={18} /> : 
                             item.icon === 'Cpu' ? <Cpu size={18} /> : 
                             item.icon === 'Shield' ? <Shield size={18} /> : <Package size={18} />}
                          </div>
                          <div className="flex-1 flex justify-between items-center">
                            <span className="text-[14px] font-body font-medium text-travio-black uppercase">{item.name}</span>
                            <span className="text-[13px] font-body text-travio-mid">× {item.quantity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SPECIFICATIONS PANEL */}
          {activeTab === 'SPECIFICATIONS' && (
            <div className="bg-white py-24 animate-fade-up">
              <div className="container max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  {Object.entries(product.specs).map(([category, specs], catIdx) => {
                    if (!specs || !Array.isArray(specs)) return null;
                    return (
                      <div key={catIdx} className="space-y-4">
                        <h4 className="text-[11px] font-body font-medium text-travio-mid uppercase tracking-[0.12em] border-t border-travio-subtle pt-6">
                          {category}
                        </h4>
                        <div className="space-y-0">
                          {specs.map((spec, i) => (
                            <div key={i} className="flex justify-between py-4 border-b border-travio-subtle last:border-0">
                              <span className="text-[13px] font-body font-medium text-travio-mid uppercase">{spec.label}</span>
                              <div className="text-[14px] font-body text-travio-black text-right max-w-[60%] flex items-center justify-end">
                                {spec.value === '✓' ? <Check size={14} className="text-travio-accent" /> : spec.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* INSTALLATION PANEL */}
          {activeTab === 'INSTALLATION' && (
            <div className="bg-travio-off-white py-24 animate-fade-up">
              <div className="container max-w-4xl space-y-16">
                {product.installationMethods?.[0]?.description.split('\n').map((step, i) => (
                  <div key={i} className="relative pl-24 pb-16 border-b border-travio-subtle last:border-0">
                    <div className="absolute left-0 top-0 text-[96px] font-display font-black text-travio-black opacity-[0.06] leading-none">
                      {i + 1}
                    </div>
                    <h3 className="text-[28px] font-display font-bold text-travio-black mb-4 uppercase">
                      {step.split(' — ')[0]}
                    </h3>
                    <p className="text-[15px] font-body text-travio-mid max-w-[600px] leading-relaxed">
                      {step.split(' — ')[1]}
                    </p>
                  </div>
                ))}

                {(product.id === 'one' || product.id === 'pro') && (
                  <div className="bg-white border border-travio-subtle p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
                    <div className="max-w-xl">
                      <h3 className="text-[28px] font-display font-bold text-travio-black mb-4 uppercase">Want us to fit it?</h3>
                      <p className="text-[15px] font-body text-travio-mid leading-relaxed">
                        Our nationwide installation service brings a qualified technician to your door. Available across the UK, 7 days a week.
                      </p>
                    </div>
                    <button className="bg-travio-accent hover:bg-travio-accent-dk text-white h-[48px] px-10 text-[14px] font-body font-bold uppercase tracking-widest transition-all rounded-[2px] whitespace-nowrap">
                      Book Installation
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* FAQS PANEL */}
          {activeTab === 'FAQS' && (
            <div className="bg-white py-24 animate-fade-up">
              <div className="container max-w-3xl space-y-4">
                {product.faqs?.map((faq, i) => (
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
          )}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-travio-off-white py-24">
        <div className="container">
          <h2 className="text-[36px] font-display font-black text-travio-black mb-12 uppercase tracking-tight">
            Customers also bought
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.relatedProducts?.slice(0, 3).map((relId) => {
              const rel = products.find(p => p.id === relId);
              if (!rel) return null;
              return (
                <div key={rel.id} className="group bg-white border border-travio-subtle p-8 transition-all hover:border-travio-black flex flex-col h-full relative overflow-hidden">
                  <div className="aspect-square bg-travio-off-white mb-8 flex items-center justify-center p-8 transition-all group-hover:scale-[1.03]">
                    {/* Placeholder for related product */}
                    <div className="w-24 h-16 bg-travio-charcoal/5 border border-travio-charcoal/10 relative"></div>
                  </div>
                  <div className="mb-2">
                    <span className="text-[11px] font-body font-medium text-travio-accent uppercase tracking-widest">{rel.category}</span>
                  </div>
                  <h3 className="text-[24px] font-display font-black text-travio-black mb-2 uppercase">{rel.name}</h3>
                  <p className="text-[14px] font-body text-travio-mid mb-8 flex-grow">{rel.tagline}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                       <span className="text-[18px] font-body font-semibold text-travio-black">£{rel.price.toFixed(2)}</span>
                       <span className="text-[12px] font-body text-travio-mid">from {rel.subscriptionFrom}</span>
                    </div>
                    <a href={`/products/${rel.id}`} className="text-travio-accent text-[13px] font-body font-bold uppercase tracking-widest hover:underline transition-all">
                      View Details →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
