"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TechSpecs from '@/components/products/TechSpecs';
import { products } from '@/data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  const [selectedPlan, setSelectedPlan] = useState('STANDARD');
  const [quantity, setQuantity] = useState(1);

  const plans = [
    { id: 'BASIC', name: 'Basic', duration: 'Annual', price: '£3.99/mo' },
    { id: 'STANDARD', name: 'Standard', duration: 'Quarterly', price: '£5.99/mo', popular: true },
    { id: 'PAYG', name: 'Pay-As-You-Go', duration: 'Monthly', price: '£7.99/mo' },
  ];

  return (
    <main className="pdp-page">
      <Navbar />

      <div className="container pdp-hero-section">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span className="sep">/</span>
          <a href="/shop">Shop</a>
          <span className="sep">/</span>
          <span>{product.name}</span>
        </nav>

        <div className="pdp-hero-grid">
          {/* Left: Gallery */}
          <div className="pdp-gallery">
            <div className="main-image">
              <div className="image-placeholder" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
            </div>
            <div className="thumbnail-strip">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`thumb ${i === 0 ? 'active' : ''}`}>
                  <div className="image-placeholder-mini" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="pdp-info">
            <h1 className="pdp-title">{product.name}</h1>
            <p className="pdp-subtitle">{product.tagline}</p>
            
            <div className="pdp-rating-row">
              <div className="stars">★★★★★</div>
              <span className="reviews">156 Reviews</span>
            </div>

            <div className="pdp-price-block">
              <span className="main-price">£{product.price}.00</span>
              <p className="price-meta">One-time payment · Subscription from {product.subscriptionFrom} · VAT included</p>
            </div>

            <div className="pdp-divider" />

            {/* Description */}
            <p className="product-brief">{product.description}</p>

            {/* Plan Selector */}
            <div className="plan-selector">
              <span className="selector-label">Select data plan</span>
              <div className="plans-row">
                {plans.map((plan) => (
                  <div 
                    key={plan.id} 
                    className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && <span className="popular-badge">Most Popular</span>}
                    <span className="plan-name">{plan.name}</span>
                    <span className="plan-duration">{plan.duration}</span>
                    <span className="plan-price">{plan.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility */}
            <div className="pdp-compat">
              <span className="selector-label">Compatible with</span>
              <div className="compat-badges">
                {product.compat.map(c => (
                  <span key={c} className="badge checked">{c} ✓</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pdp-actions">
              <div className="qty-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn btn-primary add-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <section className="pdp-tabs">
        <div className="container">
          <div className="tabs-nav">
            {['Overview', 'Specifications', 'Installation', 'Reviews'].map((tab) => (
              <button 
                key={tab} 
                className={activeTab === tab.toUpperCase() ? 'active' : ''}
                onClick={() => setActiveTab(tab.toUpperCase())}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'OVERVIEW' && (
              <div className="tab-overview">
                <div className="features-highlight">
                  <h3>Professional Features</h3>
                  <div className="features-list-grid">
                    {product.features.map((f, i) => (
                      <div key={i} className="feature-item">
                        <span className="bullet">✓</span>
                        <p>{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'SPECIFICATIONS' && (
              <div className="tab-specs">
                <TechSpecs specs={product.specs} />
              </div>
            )}
            {activeTab === 'INSTALLATION' && (
              <div className="tab-install">
                <h3>Flexible Installation</h3>
                <p>Choose the option that fits your needs. All Travio devices come with lifetime technical support.</p>
                <div className="install-grid-pdp">
                  <div className="install-item">
                    <h4>Self-Installation</h4>
                    <p>Standard hardwired or battery terminal installation in under 30 minutes. Step-by-step video guide included.</p>
                  </div>
                  <div className="install-item">
                    <h4>Professional Fitting</h4>
                    <p>Book our nationwide network of engineers. We come to your home or workplace. Simply select "Professional Installation" at checkout.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pdp-faq section">
        <div className="container">
          <div className="section-header centered">
            <span className="small-label">Common Questions</span>
            <h2>Everything you need to know</h2>
          </div>
          <div className="faq-accordion">
            <div className="faq-item">
              <h4>Will it affect my vehicle battery?</h4>
              <p>No. In sleep mode, Travio devices draw as little as 25mA — less than a standard dashboard clock. Your battery remains safe even during long periods of storage.</p>
            </div>
            <div className="faq-item">
              <h4>Do I need a subscription?</h4>
              <p>For real-time tracking, 90-day history, and push alerts, a data plan is required. Basic SMS location checks are available without a subscription on most models.</p>
            </div>
            <div className="faq-item">
              <h4>Is the tracking worldwide?</h4>
              <p>Yes. Our trackers operate on a global SIM that automatically connects to the strongest network in over 120 countries, including all of Europe and North America.</p>
            </div>
            <div className="faq-item">
              <h4>What happens if it's stolen?</h4>
              <p>Open the app immediately to see the live location. You can share a temporary tracking link directly with the police. Our recovery rates are among the highest in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
