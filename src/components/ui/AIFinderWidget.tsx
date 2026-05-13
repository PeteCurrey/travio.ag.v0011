"use client";

import React, { useState } from 'react';
import './AIFinderWidget.css';

interface AIFinderWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIFinderWidget: React.FC<AIFinderWidgetProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<any>({});

  if (!isOpen) return null;

  const handleNext = (key: string, value: any) => {
    setSelections({ ...selections, [key]: value });
    setStep(step + 1);
  };

  const progress = (step / 5) * 100;

  return (
    <div className="ai-finder-overlay">
      <div className="ai-finder-modal">
        <header className="ai-finder-header">
          <h2>Find my tracker</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </header>
        
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="ai-finder-content">
          {step === 1 && (
            <div className="question-panel">
              <h3>What are you tracking?</h3>
              <p>Select your vehicle type.</p>
              <div className="options-grid">
                {['Car', 'Van', 'Motorhome', 'Motorbike', 'Caravan', 'Plant'].map((v) => (
                  <button key={v} className="option-card" onClick={() => handleNext('vehicle', v)}>
                    <div className="option-icon" />
                    <span>{v}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="question-panel">
              <h3>What matters most?</h3>
              <p>Pick your top priority.</p>
              <div className="options-list">
                {[
                  'Theft protection & recovery',
                  'Insurance discount',
                  'Family safety',
                  'Business/Fleet management',
                  'Long-term storage security'
                ].map((p) => (
                  <button key={p} className="option-row" onClick={() => handleNext('priority', p)}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="question-panel">
              <h3>Installation preference?</h3>
              <p>How hands-on are you?</p>
              <div className="options-row-flex">
                {[
                  { id: 'self', label: 'I\'ll do it myself', icon: '🛠' },
                  { id: 'pro', label: 'Professional fit', icon: '👷' },
                  { id: 'any', label: 'Either is fine', icon: '✓' }
                ].map((i) => (
                  <button key={i.id} className="option-card-large" onClick={() => handleNext('install', i.id)}>
                    <span className="icon">{i.icon}</span>
                    <span>{i.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="question-panel">
              <h3>What's your budget?</h3>
              <div className="options-list">
                {['Under £50', '£50 – £100', '£100 – £200', 'No limit, just the best'].map((b) => (
                  <button key={b} className="option-row" onClick={() => handleNext('budget', b)}>
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="results-panel">
              <h3>Your perfect match.</h3>
              <div className="result-cards">
                <div className="result-card">
                  <span className="recommendation-tag">Best for {selections.priority}</span>
                  <div className="result-main">
                    <div className="result-img-placeholder" />
                    <div className="result-info">
                      <h4>Travio Pro 4G</h4>
                      <p>Hardwired · Real-Time · Thatcham S5+</p>
                      <span className="price">£129.00</span>
                    </div>
                  </div>
                  <div className="result-actions">
                    <button className="btn btn-primary">Add to cart</button>
                    <button className="btn btn-secondary">View details</button>
                  </div>
                </div>
              </div>
              <button className="start-again" onClick={() => setStep(1)}>Start again</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIFinderWidget;
