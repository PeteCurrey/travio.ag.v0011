import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    name: 'John M.',
    vehicle: 'BMW 3 Series',
    useCase: 'Rural Theft Prevention',
    quote: '"My car was taken from my driveway at 3am. I had a location on my phone within 45 seconds. Police recovered it in 20 minutes."',
    stars: 5
  },
  {
    name: 'Sarah T.',
    vehicle: 'Motorhome Owner',
    useCase: 'Holiday Peace of Mind',
    quote: '"Parked up in France for three weeks. Checked in every morning with my coffee. Total peace of mind."',
    stars: 5
  },
  {
    name: 'Dave W.',
    vehicle: 'Plant Contractor',
    useCase: 'Fleet Management',
    quote: '"We\'ve got 12 excavators and 6 dumpers tracked on one account. The fleet view is brilliant."',
    stars: 5
  },
  {
    name: 'Rachel K.',
    vehicle: 'Caravan Owner',
    useCase: 'Security Assurance',
    quote: '"Honestly the best £8 a month I spend. Knowing it\'s sat on the drive and not stolen is worth every penny."',
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow small-label">CUSTOMER STORIES</span>
          <h2>OVER 40,000 PROTECTED. AND COUNTING.</h2>
          
          <div className="trustpilot-score">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="var(--colour-accent)">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="score">4.9/5</span>
            <span className="count">Based on 2,400+ reviews</span>
          </div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div 
              key={review.name} 
              className="testimonial-card reveal in-view"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-stars">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--colour-accent)">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="quote">{review.quote}</p>
              <div className="author-info">
                <span className="name">{review.name}</span>
                <span className="meta">{review.vehicle} · {review.useCase}</span>
              </div>
              <div className="vehicle-badge">
                {review.vehicle.split(' ')[0].toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta centered">
          <button className="btn btn-secondary">Read All Reviews</button>
          <div className="trustpilot-logo-lockup">
            {/* Trustpilot logo placeholder */}
            <span className="tp-text">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
