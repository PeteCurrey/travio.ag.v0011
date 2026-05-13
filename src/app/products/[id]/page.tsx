"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TechSpecs from '@/components/products/TechSpecs';
import { products } from '@/data/products';
import { Download, Info, Settings, Shield, Clock, HardDrive, Cpu, Plug, CheckCircle2 } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  const [selectedPlan, setSelectedPlan] = useState(product.compatibleSubscriptions?.[0]?.planId || 'STANDARD');
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-32 pb-16">
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-12">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-white transition-colors">Hardware</a>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
              {product.stockStatus !== 'In Stock' && (
                <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-orange-500/30">
                  {product.stockStatus}
                </div>
              )}
              <div 
                className="w-full h-full mix-blend-screen"
                style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} 
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {(product.gallery || [product.image]).map((img, i) => (
                <div key={i} className={`aspect-square bg-white/5 border rounded-xl p-2 cursor-pointer transition-colors ${i === 0 ? 'border-[#2D5A27]' : 'border-white/10 hover:border-white/30'}`}>
                  <div 
                    className="w-full h-full mix-blend-screen opacity-70 hover:opacity-100"
                    style={{ backgroundImage: `url(${img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-sm font-medium uppercase tracking-wider text-[#2D5A27]">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-4">{product.name}</h1>
            <p className="text-xl text-white/60 mb-6">{product.tagline}</p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1 text-[#2D5A27]">
                ★★★★★
              </div>
              <span className="text-white/60 text-sm">Engineered in the UK</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-light">£{product.price}.00</span>
                <span className="text-white/60 mb-1">ex. VAT</span>
              </div>
              <p className="text-sm text-white/50">Subscription required from {product.subscriptionFrom}</p>
            </div>

            {/* Description */}
            <p className="text-white/80 leading-relaxed mb-8">{product.longDescription || product.description}</p>

            {/* SIM Details */}
            {product.simDetails && (
              <div className="flex items-start gap-4 bg-[#2D5A27]/10 border border-[#2D5A27]/30 rounded-xl p-4 mb-8">
                <div className="bg-[#2D5A27] p-2 rounded-lg flex-shrink-0">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Global Connect SIM Included</h4>
                  <p className="text-sm text-white/70">{product.simDetails}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/10">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg h-14 w-32">
                <button className="flex-1 hover:bg-white/10 h-full transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <div className="flex-1 flex items-center justify-center font-medium">{quantity}</div>
                <button className="flex-1 hover:bg-white/10 h-full transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="flex-1 bg-[#2D5A27] hover:bg-[#23471f] text-white h-14 rounded-lg font-medium transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex overflow-x-auto hide-scrollbar border-b border-white/10">
            {['Overview', 'Specifications', 'Installation', 'Downloads', 'FAQs'].map((tab) => {
              // Hide tabs if data is missing
              if (tab === 'Downloads' && (!product.downloads || product.downloads.length === 0)) return null;
              if (tab === 'FAQs' && (!product.faqs || product.faqs.length === 0)) return null;
              
              return (
                <button 
                  key={tab} 
                  className={`px-8 py-6 font-medium whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.toUpperCase() ? 'border-[#2D5A27] text-white' : 'border-transparent text-white/50 hover:text-white'}`}
                  onClick={() => setActiveTab(tab.toUpperCase())}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="py-16">
            {activeTab === 'OVERVIEW' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-light mb-8">Professional Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#2D5A27]/20 p-1 rounded-full text-[#2D5A27] flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-white/80">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'SPECIFICATIONS' && (
              <div className="max-w-5xl">
                <TechSpecs specs={product.specs} />
              </div>
            )}

            {activeTab === 'INSTALLATION' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-light mb-8">Flexible Installation Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.installationMethods ? (
                    product.installationMethods.map((method, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-medium">{method.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded border ${method.difficulty === 'Easy' ? 'bg-green-500/10 border-green-500/20 text-green-400' : method.difficulty === 'Medium' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                            {method.difficulty}
                          </span>
                        </div>
                        <p className="text-white/60 mb-6 min-h-[60px]">{method.description}</p>
                        <div className="flex items-center gap-4 text-sm text-white/50">
                          <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {method.timeRequired}</div>
                          {method.toolsNeeded && (
                            <div className="flex items-center gap-1"><Settings className="w-4 h-4" /> {method.toolsNeeded.length} Tools</div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-white/50">Installation instructions not available for this product.</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'DOWNLOADS' && product.downloads && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-light mb-8">Resources & Documentation</h3>
                <div className="space-y-4">
                  {product.downloads.map((doc, i) => (
                    <a key={i} href={doc.url} className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-3 rounded-lg group-hover:bg-[#2D5A27]/20 group-hover:text-[#2D5A27] transition-colors">
                          <Download className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{doc.name}</span>
                      </div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">{doc.type}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'FAQS' && product.faqs && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-light mb-8">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {product.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-white/10 pb-6">
                      <h4 className="text-lg font-medium mb-3">{faq.question}</h4>
                      <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-24 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h2 className="text-3xl font-light mb-12">Related Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.relatedProducts.map(relId => {
                const rel = products.find(p => p.id === relId);
                if (!rel) return null;
                return (
                  <a key={rel.id} href={`/products/${rel.id}`} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#2D5A27]/50 transition-colors flex flex-col h-full">
                    <div className="mb-2">
                      <span className="text-xs font-medium uppercase tracking-wider text-[#2D5A27]">{rel.category}</span>
                    </div>
                    <h3 className="text-xl font-light mb-2">{rel.name}</h3>
                    <p className="text-white/60 text-sm">{rel.tagline}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ProductDetail;
