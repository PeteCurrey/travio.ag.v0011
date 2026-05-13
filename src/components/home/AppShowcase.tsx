import React from 'react';
import './AppShowcase.css';

const appFeatures = [
  { title: 'Live Map View', description: 'See your vehicle in real-time on a detailed map.' },
  { title: 'Push Alert Notifications', description: 'Instant alerts for movement, geofence, and power.' },
  { title: 'Geofence Manager', description: 'Set custom boundaries and get notified on entry/exit.' },
  { title: 'Journey History Playback', description: 'Replay any journey from the last 90 days.' },
  { title: 'Multi-Vehicle Dashboard', description: 'Manage all your vehicles in a single interface.' },
  { title: 'Driver Behaviour Reports', description: 'Analyze speeding, braking, and idle times.' },
];

const AppShowcase = () => {
  return (
    <section className="app-showcase">
      <div className="showcase-left">
        <div className="showcase-content">
          <span className="eyebrow small-label">The Travio App</span>
          <h2>Everything you need. <br />In your pocket.</h2>
          <p>
            The Travio mobile app gives you complete control over your vehicle tracking. 
            From real-time position to historical journey replays and geofence alerts.
          </p>
          
          <div className="app-buttons">
            <button className="btn btn-app">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.96.44-1.94.88-3 .89-.95 0-1.21-.61-2.31-.61-1.12 0-1.42.6-2.31.62-1.04.01-2.14-.52-3.13-1.47-2.01-1.94-2.58-4.96-1.39-7.23.59-1.13 1.74-1.85 3.01-1.87 1.01-.02 1.95.66 2.56.66.6 0 1.76-.84 2.96-.72.5-.01 1.91.17 2.82 1.5-.07.04-1.68.98-1.67 2.97.01 2.45 2.12 3.31 2.15 3.32-.02.06-.34 1.15-1.12 2.27zM12.03 7.25c-.02-2.3 1.9-4.27 4.16-4.25.16 2.42-1.9 4.38-4.16 4.25z" />
              </svg>
              App Store
            </button>
            <button className="btn btn-app">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17l14 8.5L3 20.5zM5 18l10.5-6L5 6v12z" />
              </svg>
              Google Play
            </button>
          </div>

          <div className="phone-mockup">
            <div className="phone-bezel">
              <div className="phone-screen">
                <div className="map-interface">
                  <div className="pulse-dot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase-right">
        <div className="features-list">
          {appFeatures.map((feature, index) => (
            <div key={index} className="app-feature-item reveal in-view" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-top-border" />
              <div className="feature-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--colour-accent)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
