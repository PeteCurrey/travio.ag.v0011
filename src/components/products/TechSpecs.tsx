import React from 'react';
import { ProductSpec } from '@/data/products/types';

interface TechSpecsProps {
  specs: {
    gnss?: ProductSpec[];
    cellular?: ProductSpec[];
    power?: ProductSpec[];
    interface?: ProductSpec[];
    physical?: ProductSpec[];
    camera?: ProductSpec[];
    sensor?: ProductSpec[];
  };
}

const TechSpecs: React.FC<TechSpecsProps> = ({ specs }) => {
  const categories = [
    { id: 'gnss', label: 'GNSS', data: specs.gnss },
    { id: 'cellular', label: 'Cellular', data: specs.cellular },
    { id: 'power', label: 'Power', data: specs.power },
    { id: 'interface', label: 'Interface', data: specs.interface },
    { id: 'physical', label: 'Physical', data: specs.physical },
    { id: 'camera', label: 'Camera', data: specs.camera },
    { id: 'sensor', label: 'Sensors', data: specs.sensor },
  ].filter(cat => cat.data && cat.data.length > 0);

  return (
    <div className="tech-specs-grid grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((cat) => (
        <div key={cat.id} className="specs-category bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="specs-cat-title text-[#2D5A27] font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-4">{cat.label}</h4>
          <div className="specs-list space-y-4">
            {cat.data?.map((spec, i) => (
              <div key={i} className="spec-row flex justify-between gap-4 text-sm border-b border-white/5 pb-2 last:border-0">
                <span className="spec-label text-white/50">{spec.label}</span>
                <span className="spec-value text-white text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechSpecs;
