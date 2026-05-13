"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import './SolutionPage.css';

const solutionData: Record<string, any> = {
  car: {
    name: 'Car',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    headline: 'Every car. Protected.',
    subcopy: 'Professional-grade protection for your pride and joy. Real-time tracking and instant alerts for complete peace of mind.',
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
    heroImage: 'https://images.unsplash.com/photo-1542319630-55fb7f7c944a?q=80&w=1200&auto=format&fit=crop',
    headline: 'Every van. Secured.',
    subcopy: 'Protect your livelihood. Stop tool theft and vehicle loss with the UK’s most reliable van tracking solutions.',
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
  }
};

const SolutionPage = ({ params }: { params: { slug: string } }) => {
  const data = solutionData[params.slug] || solutionData.car;

  return (
    <main className="solution-page">
      <Navbar />

      {/* Hero */}
      <section className="solution-hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${data.heroImage})` }}>
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <span className="eyebrow">{data.name} Gps Tracking</span>
          <h1>{data.headline}</h1>
          <p>{data.subcopy}</p>
          <div className="hero-cta">
            <button className="btn btn-primary">Shop {data.name} trackers</button>
            <button className="btn btn-white-border">How it works</button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section section">
        <div className="container why-grid">
          <div className="why-content">
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
            <div className="image-placeholder" />
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

      {/* Case Study */}
      <section className="case-study section">
        <div className="container centered">
          <svg className="quote-icon" width="120" height="120" viewBox="0 0 24 24" fill="var(--colour-subtle)" opacity="0.2">
            <path d="M3 21h3l2-4H5V7H11V21h3l2-4h-3V7h6V21h3l2-4h-3V7h3V3H3v18z" />
          </svg>
          <blockquote className="quote">
            "My car was taken from my driveway at 3am. I had a location on my phone within 45 seconds. Police recovered it in 20 minutes."
          </blockquote>
          <cite className="attribution">John M., BMW 3 Series, London</cite>
          
          <div className="outcome-stats">
            <div className="outcome">
              <span className="val">18 MINS</span>
              <span className="lbl">Vehicle recovered</span>
            </div>
            <div className="outcome">
              <span className="val">LIVE GPS</span>
              <span className="lbl">Police located via app</span>
            </div>
            <div className="outcome">
              <span className="val">ZERO</span>
              <span className="lbl">Damage to vehicle</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="installation-options section">
        <div className="container">
          <h2 className="centered">Installation options</h2>
          <div className="install-grid">
            <div className="install-card">
              <div className="icon">🛠</div>
              <h3>Self-install</h3>
              <p>Most Travio trackers install in under 10 minutes using our step-by-step video guide.</p>
              <a href="#">Learn More →</a>
            </div>
            <div className="install-card">
              <div className="icon">👷</div>
              <h3>Professional fit</h3>
              <p>Book our nationwide installation service. Engineer comes to you.</p>
              <button className="btn btn-secondary">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SolutionPage;
