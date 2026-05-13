"use client";

import React, { useEffect, useRef, useState } from 'react';
import './FeaturesReveal.css';

const features = [
  {
    id: 1,
    title: 'Real-time tracking',
    description: "See your vehicle's exact GPS position, updated every 10 seconds. 4G connectivity means no gaps, no delays.",
    stat: '10 second updates',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Instant theft alerts',
    description: 'The moment your vehicle moves without you, you know. Push notifications delivered in under 30 seconds.',
    stat: '< 30 sec alerts',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Geofence zones',
    description: 'Draw a boundary on the map. Get alerted the moment your vehicle crosses it — perfect for driveways, depots, and school zones.',
    stat: 'Unlimited zones',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Journey history',
    description: 'Replay every route your vehicle has taken — with speed, distance, and stop data. 90 days of history stored in your app.',
    stat: '90 day history',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Insurance recognised',
    description: 'Selected Travio devices carry Thatcham certification, which can reduce your vehicle insurance premium.',
    stat: 'Up to 20% saving',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

const FeaturesReveal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -top / (height - window.innerHeight);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const index = Math.min(
          Math.floor(scrollProgress * features.length),
          features.length - 1
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="features-reveal section" ref={sectionRef}>
      <div className="container features-container">
        {/* Left Column: Sticky */}
        <div className="features-left">
          <div className="sticky-content">
            <span className="eyebrow small-label">Why Travio Gps</span>
            <h2>Every feature you need. Nothing you don't.</h2>
            <p>
              We built Travio GPS to be the tracker you'd choose if you actually understood what matters. 
              No bloat. No confusion. Just precise, reliable protection.
            </p>
            
            <div className="progress-indicator">
              <div className="progress-line" />
              <div 
                className="progress-dot" 
                style={{ top: `${(activeIndex / (features.length - 1)) * 100}%` }} 
              />
            </div>
          </div>
        </div>

        {/* Right Column: Scrollable Panels */}
        <div className="features-right">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feature-panel ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-divider" />
              <div className="feature-stat">{feature.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesReveal;
