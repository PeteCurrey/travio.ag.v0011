import React from 'react';
import Link from 'next/link';
import './SolutionHook.css';

const vehicles = [
  { name: 'Car', slug: 'car', image: '/vehicles/car.png' },
  { name: 'Van', slug: 'van', image: '/vehicles/van.png' },
  { name: 'Motorhome', slug: 'motorhome', image: '/vehicles/motorhome.png' },
  { name: 'Motorbike', slug: 'motorbike', image: '/vehicles/motorbike.png' },
  { name: 'Caravan', slug: 'caravan', image: '/vehicles/caravan.png' },
  { name: 'Plant & Equipment', slug: 'plant-equipment', image: '/vehicles/digger.svg' },
];

const SolutionHook = () => {
  return (
    <section className="solution-hook section">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow small-label">What are you protecting?</span>
          <h2>Find the right tracker for your vehicle</h2>
          <p>Every vehicle has different tracking requirements. Choose yours for tailored solutions and recommended products.</p>
        </div>

        <div className="vehicle-grid">
          {vehicles.map((vehicle, index) => (
            <Link 
              key={vehicle.name} 
              href={`/solutions/${vehicle.slug}`}
              className="vehicle-card reveal in-view"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="img-zoom-container">
                <img src={vehicle.image} alt={vehicle.name} />
                <div className="card-overlay" />
                <div className="card-content">
                  <span className="vehicle-name">{vehicle.name}</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionHook;
