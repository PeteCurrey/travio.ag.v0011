"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import './SolutionPage.css';

interface Solution {
  name: string;
  heroImage: string;
  headline: string;
  subcopy: string;
  primaryProductId: string;
  secondaryProductId?: string;
  stats: { label: string; value: string }[];
  painPoints: { title: string; desc: string }[];
}

const solutionData: Record<string, Solution> = {
  car: {
    name: 'Car',
    heroImage: '/vehicles/car.png',
    headline: 'Every car. Protected.',
    subcopy: 'Professional-grade protection for your pride and joy. Real-time tracking and instant alerts for complete peace of mind.',
    primaryProductId: 'one',
    secondaryProductId: 'plug',
    stats: [
      { label: 'Cars stolen annually', value: '1 in 50' },
      { label: 'Alert delivery time', value: '< 30 sec' },
      { label: 'Network uptime', value: '99.9%' },
      { label: 'Journey history', value: '90 days' },
    ],
    painPoints: [
      { title: 'High theft rates', desc: 'Luxury and performance cars are prime targets for organized theft gangs.' },
      { title: 'Keyless relay theft', desc: 'Protect against the latest high-tech theft methods with motion alerts.' },
      { title: 'Insurance requirements', desc: 'Many insurers now require a certified GPS tracker for premium vehicles.' },
    ]
  },
  van: {
    name: 'Van',
    heroImage: '/vehicles/van.png',
    headline: 'Every van. Secured.',
    subcopy: 'Protect your livelihood. Stop tool theft and vehicle loss with the UK’s most reliable van tracking solutions.',
    primaryProductId: 'pro',
    secondaryProductId: 'one',
    stats: [
      { label: 'Avg theft loss', value: '£6,500' },
      { label: 'Alert delivery time', value: '< 30 sec' },
      { label: 'Network uptime', value: '99.9%' },
      { label: 'Journey history', value: '90 days' },
    ],
    painPoints: [
      { title: 'Tool theft protection', desc: 'Get notified the moment your van is tampered with or moved.' },
      { title: 'Fleet management', desc: 'Track multiple vans on one account with detailed driver behaviour reports.' },
      { title: 'Business continuity', desc: 'Minimize downtime with real-time location data for your entire team.' },
    ]
  },
  motorhome: {
    name: 'Motorhome',
    heroImage: '/vehicles/motorhome.png',
    headline: 'Every motorhome. Tracked.',
    subcopy: 'Adventure without anxiety. Keep your motorhome safe in storage or on the road with specialized GPS tracking.',
    primaryProductId: 'silent',
    secondaryProductId: 'pro',
    stats: [
      { label: 'Motorhomes stolen', value: '1,200+' },
      { label: 'Recovery rate', value: '94%' },
      { label: 'Battery life', value: '3 Years' },
      { label: 'Network', value: 'Global 4G' },
    ],
    painPoints: [
      { title: 'Off-site storage', desc: 'Monitor your motorhome even when it is stored miles away with zero power source.' },
      { title: 'Journey tracking', desc: 'Share your adventures and keep a digital log of every trip you take.' },
      { title: 'Signal detection protection', desc: 'Our Silent range is invisible to scanners used by professional thieves.' },
    ]
  },
  motorbike: {
    name: 'Motorbike',
    heroImage: '/vehicles/motorbike.png',
    headline: 'Every bike. Safe.',
    subcopy: 'The ultimate motorcycle security. Waterproof, compact, and featuring built-in crash detection for riders.',
    primaryProductId: 'volt',
    secondaryProductId: 'one',
    stats: [
      { label: 'Bikes stolen daily', value: '100+' },
      { label: 'Crash alert time', value: 'Instant' },
      { label: 'Waterproof rating', value: 'IP65' },
      { label: 'Install time', value: '2 Mins' },
    ],
    painPoints: [
      { title: 'Rider safety', desc: 'Automatic crash detection sends an alert to your emergency contacts if you go down.' },
      { title: 'Small form factor', desc: 'Tiny devices designed to be hidden under seats or behind fairings.' },
      { title: 'Low battery draw', desc: 'Engineered specifically for smaller motorcycle batteries to prevent drainage.' },
    ]
  },
  caravan: {
    name: 'Caravan',
    heroImage: '/vehicles/caravan.png',
    headline: 'Every caravan. Guarded.',
    subcopy: 'Long-term battery protection for non-powered assets. Magnetic mount, waterproof, and zero maintenance.',
    primaryProductId: 'silent',
    stats: [
      { label: 'Caravans stolen', value: '4,000+' },
      { label: 'Battery life', value: '3 Years' },
      { label: 'Install time', value: '5 Secs' },
      { label: 'Protection', value: 'IP68' },
    ],
    painPoints: [
      { title: 'Zero power access', desc: 'Designed for assets without their own battery. No wiring needed.' },
      { title: 'Magnetic mounting', desc: 'Clicks onto any metal chassis member in seconds. Hide it anywhere.' },
      { title: 'Tamper alerts', desc: 'Get a notification the moment the device is disturbed or moved.' },
    ]
  },
  'plant-equipment': {
    name: 'Plant & Equipment',
    heroImage: '/vehicles/digger.jpg',
    headline: 'Every machine. Controlled.',
    subcopy: 'Ruggedized tracking for the construction industry. IP68 waterproof, shock-resistant, and engine-hour monitoring.',
    primaryProductId: 'silent',
    secondaryProductId: 'pro',
    stats: [
      { label: 'Industry loss', value: '£800m' },
      { label: 'Downtime cost', value: 'High' },
      { label: 'Protection', value: 'IP68' },
      { label: 'Updates', value: 'FOTA' },
    ],
    painPoints: [
      { title: 'Theft on site', desc: 'Protect expensive machinery in vulnerable or remote locations.' },
      { title: 'Engine hour monitoring', desc: 'Keep track of actual machine usage for maintenance and billing.' },
      { title: 'Harsh environments', desc: 'Built to survive mud, pressure washing, and heavy vibration.' },
    ]
  }
};

const SolutionPage = ({ params }: { params: { slug: string } }) => {
  const data = solutionData[params.slug] || solutionData.car;
  
  const primaryProduct = products.find(p => p.id === data.primaryProductId);
  const secondaryProduct = data.secondaryProductId ? products.find(p => p.id === data.secondaryProductId) : null;

  return (
    <main className="solution-page">
      <Navbar />

      {/* Hero */}
      <section className="solution-hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${data.heroImage})` }}>
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <span className="eyebrow small-label">{data.name} GPS TRACKING</span>
          <h1>{data.headline}</h1>
          <p>{data.subcopy}</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' })}>
              View Recommendations
            </button>
            <button className="btn btn-white-border">How it works</button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section section">
        <div className="container why-grid">
          <div className="why-content">
            <span className="small-label">Why Travio?</span>
            <h2>Why {data.name} owners need tracking</h2>
            <div className="pain-points">
              {data.painPoints.map((point: any, i: number) => (
                <div key={i} className="point">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="why-image">
             <img src={data.heroImage} alt={data.name} className="reveal in-view" />
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <section className="stat-strip">
        <div className="container stat-grid">
          {data.stats.map((stat: any, i: number) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section id="recommendations" className="recommendations-section section">
        <div className="container">
          <div className="section-header centered">
            <span className="small-label">Expert Picks</span>
            <h2>Recommended for your {data.name}</h2>
            <p>Based on {data.name}-specific theft patterns and power requirements, we recommend these trackers.</p>
          </div>

          <div className="recommendations-grid">
            {primaryProduct && (
              <div className="rec-card primary">
                <div className="rec-badge">PRIMARY CHOICE</div>
                <ProductCard product={primaryProduct} />
                <div className="rec-reason">
                  <h4>Why we recommend this:</h4>
                  <p>{getRecommendationReason(data.name, primaryProduct.id)}</p>
                </div>
              </div>
            )}
            {secondaryProduct && (
              <div className="rec-card secondary">
                <div className="rec-badge">SECONDARY OPTION</div>
                <ProductCard product={secondaryProduct} />
                <div className="rec-reason">
                  <h4>Why we recommend this:</h4>
                  <p>{getRecommendationReason(data.name, secondaryProduct.id)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="case-study section">
        <div className="container centered">
          <svg className="quote-icon" width="80" height="80" viewBox="0 0 24 24" fill="var(--colour-accent)" opacity="0.1">
            <path d="M3 21h3l2-4H5V7H11V21h3l2-4h-3V7h6V21h3l2-4h-3V7h3V3H3v18z" />
          </svg>
          <blockquote className="quote">
            "My {data.name.toLowerCase()} was taken from my driveway at 3am. I had a location on my phone within 45 seconds. Police recovered it in 20 minutes."
          </blockquote>
          <cite className="attribution">Real Travio Customer, United Kingdom</cite>
        </div>
      </section>

      <Footer />
    </main>
  );
};

function getRecommendationReason(vehicle: string, productId: string): string {
  if (productId === 'one') return 'The ONE is the perfect balance of compact size and full 4G connectivity. It fits invisibly into any vehicle.';
  if (productId === 'pro') return 'Professional-grade tracking with advanced analytics. Best for high-value assets and business usage.';
  if (productId === 'silent') return 'The silent range is invisible to thieves\' scanners and offers 3 years of battery life for non-powered assets.';
  if (productId === 'volt') return 'Specifically designed for motorcycle batteries with gyroscope crash detection and IP65 waterproofing.';
  if (productId === 'plug') return 'The easiest entry into tracking. No tools, no wiring, just plug and go.';
  return '';
}

export default SolutionPage;
