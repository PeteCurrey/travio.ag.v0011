import React from 'react';
import { MapPin, Tool, Check } from 'lucide-react';

const InstallationNetwork = () => {
  const regions = [
    { name: 'Greater London', engineers: 14, status: 'Active' },
    { name: 'South West', engineers: 8, status: 'Active' },
    { name: 'Midlands', engineers: 12, status: 'Active' },
    { name: 'North West', engineers: 9, status: 'Active' },
    { name: 'Scotland', engineers: 5, status: 'Limited' },
    { name: 'Wales', engineers: 4, status: 'Active' }
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <MapPin className="w-64 h-64 text-[#2D5A27]" />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-light mb-2">Nationwide Engineering Network</h3>
        <p className="text-white/50 mb-8 max-w-lg">
          We provide mobile installation at your home or workplace. Our certified engineers cover 98% of the UK mainland.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((region, i) => (
            <div key={i} className="bg-black/20 border border-white/5 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium text-sm">{region.name}</h4>
                <p className="text-xs text-white/40">{region.engineers} Mobile Units</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`h-1.5 w-1.5 rounded-full ${region.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">{region.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Check className="w-4 h-4 text-[#2D5A27]" />
            Fully Insured
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Check className="w-4 h-4 text-[#2D5A27]" />
            Warranty Maintained
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Check className="w-4 h-4 text-[#2D5A27]" />
            MESA Certified
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationNetwork;
