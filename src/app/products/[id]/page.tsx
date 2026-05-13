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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
