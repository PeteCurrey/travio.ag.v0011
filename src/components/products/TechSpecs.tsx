import React from 'react';
import { ProductSpec } from '@/data/products';

interface TechSpecsProps {
  specs: {
    gnss: ProductSpec[];
    cellular: ProductSpec[];
    power: ProductSpec[];
    interface: ProductSpec[];
    physical: ProductSpec[];
  };
}

const TechSpecs: React.FC<TechSpecsProps> = ({ specs }) => {
  const categories = [
    { id: 'gnss', label: 'Gnss', data: specs.gnss },
    { id: 'cellular', label: 'Cellular', data: specs.cellular },
    { id: 'power', label: 'Power', data: specs.power },
    { id: 'interface', label: 'Interface', data: specs.interface },
    { id: 'physical', label: 'Physical', data: specs.physical },
  ];

  return (
    <div className="tech-specs-grid">
      {categories.map((cat) => (
        <div key={cat.id} className="specs-category">
          <h4 className="specs-cat-title">{cat.label}</h4>
          <div className="specs-list">
            {cat.data.map((spec, i) => (
              <div key={i} className="spec-row">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechSpecs;
