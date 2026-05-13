import React from 'react';
import './PreFooterCTA.css';

const PreFooterCTA = () => {
  const trustItems = [
    { label: 'Secure Checkout', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    )},
    { label: 'Free UK Delivery', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )},
    { label: '2-Year Warranty', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )},
    { label: 'UK Support', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    )}
  ];

  return (
    <section className="pre-footer-cta">
      <div className="container centered">
        <h2 className="white-text">PROTECT YOUR VEHICLE TODAY.</h2>
        <p className="sub-copy">Trackers from £49. Free UK delivery. 14-day free trial.</p>
        
        <div className="cta-buttons">
          <button className="btn btn-white">SHOP TRACKERS</button>
          <button className="btn btn-white-border">SPEAK TO US</button>
        </div>

        <div className="trust-row">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
