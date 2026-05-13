import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Choose your tracker',
    copy: 'Select the right device for your vehicle type. Hardwired, OBD, or battery — we have a solution for every situation.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M7 7h10M7 12h10M7 17h10" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Install in minutes',
    copy: 'Most devices are self-install in under 10 minutes. Professional installation is also available nationwide.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Track in real time',
    copy: "Open the Travio app and see your vehicle's exact location, journey history, and instant alerts — 24/7.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works section">
      <div className="hiw-background" />
      <div className="hiw-overlay" />
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow small-label">The Process</span>
          <h2 className="white-text">Tracking. Simplified.</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="step-card reveal in-view"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="step-bg-number">{step.number}</span>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-copy">{step.copy}</p>
              {index < steps.length - 1 && <div className="step-divider" />}
            </div>
          ))}
        </div>

        <div className="section-cta centered">
          <button className="btn btn-white-border">See all features</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
