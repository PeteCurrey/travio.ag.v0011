'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, Product } from '@/data/products';
import { ChevronRight, Filter, SlidersHorizontal, Check, Shield } from 'lucide-react';
import Image from 'next/image';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hardwired', 'Wireless', 'Battery Terminal', 'Plug & Play'];

  const filteredProducts = products.filter(p => 
    selectedCategory === 'All' ? true : p.category === selectedCategory
  ).filter(p => ['one', 'pro', 'silent', 'volt', 'plug'].includes(p.id)); // Limit to core trackers for now

  return (
    <div className="min-h-screen bg-white text-travio-black pt-32 pb-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-travio-subtle">
          <div className="animate-fade-up">
            <nav className="flex items-center gap-2 text-[12px] font-body text-travio-mid uppercase tracking-wider mb-6">
              <Link href="/" className="hover:text-travio-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-travio-black">Hardware</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4 uppercase leading-[0.9]">Hardware Ecosystem</h1>
            <p className="text-travio-mid max-w-2xl text-[17px] font-body">
              Enterprise-grade tracking devices designed for total asset visibility and recovery.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filtering Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 animate-fade-up">
            <div className="sticky top-32 space-y-10">
              <div>
                <div className="text-travio-black font-body font-bold mb-6 uppercase tracking-widest text-[13px]">
                  Category
                </div>
                <div className="flex flex-col gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-4 py-3 border transition-all text-[13px] font-body font-medium uppercase tracking-wider ${
                        selectedCategory === category 
                          ? 'bg-travio-black text-white border-travio-black' 
                          : 'bg-white text-travio-mid border-travio-subtle hover:border-travio-mid hover:text-travio-black'
                      }`}
                      style={{ borderRadius: '2px' }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-travio-off-white border border-travio-subtle" style={{ borderRadius: '2px' }}>
                <Shield className="w-8 h-8 text-travio-accent mb-4" />
                <h4 className="font-display font-bold text-xl mb-2 uppercase">UK Supported</h4>
                <p className="text-sm font-body text-travio-mid">
                  All hardware is designed, tested, and shipped from the UK.
                </p>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white border border-travio-subtle p-8 hover:border-travio-black transition-all flex flex-col h-full relative" style={{ borderRadius: '2px' }}>
                  {product.badge && (
                    <div className="absolute top-6 left-6 z-10 flex gap-2">
                       <span className={`text-[10px] font-body font-bold px-2 py-1 uppercase tracking-widest ${product.isBestSeller ? 'bg-travio-accent text-white' : 'bg-travio-black text-white'}`} style={{ borderRadius: '2px' }}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-square relative mb-8 bg-travio-off-white flex items-center justify-center p-12 transition-all group-hover:scale-[1.02]">
                    {/* Placeholder Silhouette */}
                    <div className="w-32 h-24 bg-travio-charcoal/5 border border-travio-charcoal/10 relative"></div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-[11px] font-body font-bold uppercase tracking-[0.15em] text-travio-accent">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-black mb-3 uppercase">{product.name}</h3>
                  <p className="text-travio-mid text-[15px] font-body mb-8 flex-grow leading-relaxed">{product.tagline}</p>
                  
                  <div className="pt-6 border-t border-travio-subtle mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-body font-semibold text-travio-black">£{product.price.toFixed(2)}</span>
                      <span className="text-[12px] font-body text-travio-mid uppercase">from {product.subscriptionFrom}</span>
                    </div>
                    <Link 
                      href={`/products/${product.id}`}
                      className="bg-travio-accent hover:bg-travio-accent-dk text-white px-6 py-3 text-[13px] font-body font-bold uppercase tracking-widest transition-all"
                      style={{ borderRadius: '2px' }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
