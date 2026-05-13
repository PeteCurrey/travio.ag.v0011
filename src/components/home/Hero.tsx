"use client";

import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* Background with Parallax */}
      <div 
        className="hero-background"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="eyebrow reveal in-view">Real-time Gps Protection</span>
          <h1 className="hero-headline">
            <span className="reveal in-view" style={{ animationDelay: '0.1s' }}>Know where it is.</span>
            <br />
            <span className="reveal in-view accent-text" style={{ animationDelay: '0.2s' }}>Always.</span>
          </h1>
          <p className="hero-subheadline reveal in-view" style={{ animationDelay: '0.4s' }}>
            Travio GPS trackers give you real-time location, instant theft alerts, and complete peace of mind — for every vehicle you own.
          </p>
          <div className="hero-cta reveal in-view" style={{ animationDelay: '0.6s' }}>
            <button className="btn btn-primary">Find your tracker</button>
            <button className="btn btn-white-border">See how it works</button>
          </div>
          <div className="hero-trust reveal in-view" style={{ animationDelay: '0.8s' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <span>Trusted by 40,000+ vehicle owners across the UK</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
