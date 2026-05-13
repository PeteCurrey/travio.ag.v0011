import React from 'react';
import './TrustTicker.css';

const TrustTicker = () => {
  const items = [
    'Trustpilot Excellent',
    '40,000+ Trackers Installed',
    '4G Live Tracking',
    'Free UK Delivery',
    'Insurance-Approved Options',
    'Thatcham Certified',
    'UK-Based Support',
    '2-Year Warranty'
  ];

  return (
    <div className="trust-ticker">
      <div className="ticker-track">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="ticker-group">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="ticker-item">
                  {item === 'Trustpilot Excellent' && <span className="stars">★★★★★</span>}
                  {item}
                </span>
                <span className="ticker-dot">·</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustTicker;
