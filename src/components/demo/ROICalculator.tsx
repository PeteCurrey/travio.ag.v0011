'use client';

import React, { useState } from 'react';
import { Calculator, PoundSterling, TrendingUp, Zap } from 'lucide-react';

const ROICalculator = () => {
  const [fleetSize, setFleetSize] = useState(10);
  const [mileagePerMonth, setMileagePerMonth] = useState(2500);
  const [fuelPrice, setFuelPrice] = useState(1.45);

  // Simulated ROI Calculations
  // Avg fuel saving: 12% through idling reduction and better routing
  // Avg admin saving: £15 per vehicle per month
  // Avg insurance saving: 10%
  const fuelSavings = (fleetSize * mileagePerMonth * 0.12 * (1/30) * fuelPrice).toFixed(0);
  const adminSavings = (fleetSize * 15).toFixed(0);
  const totalSavings = (parseInt(fuelSavings) + parseInt(adminSavings));

  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 h-full">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-[#2D5A27] p-3 rounded-xl">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-light">ROI Calculator</h3>
          <p className="text-sm text-white/40">Estimated monthly savings with Travio</p>
        </div>
      </div>

      <div className="space-y-10 mb-12">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm text-white/80">Fleet Size</label>
            <span className="text-[#2D5A27] font-bold">{fleetSize} Vehicles</span>
          </div>
          <input 
            type="range" min="1" max="100" value={fleetSize} 
            onChange={(e) => setFleetSize(parseInt(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#2D5A27]"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm text-white/80">Avg Monthly Mileage (per vehicle)</label>
            <span className="text-[#2D5A27] font-bold">{mileagePerMonth} miles</span>
          </div>
          <input 
            type="range" min="500" max="10000" step="500" value={mileagePerMonth} 
            onChange={(e) => setMileagePerMonth(parseInt(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#2D5A27]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/10">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Estimated Monthly Saving</p>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-light text-[#2D5A27]">£{totalSavings}</span>
            <span className="text-white/20 mb-1">/ mo</span>
          </div>
        </div>
        <div className="p-6 bg-[#2D5A27]/10 rounded-2xl border border-[#2D5A27]/20">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Annual Projection</p>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-light text-white">£{totalSavings * 12}</span>
            <span className="text-white/20 mb-1">/ yr</span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-xl border border-white/5">
        <div className="bg-yellow-500/10 p-2 rounded-lg">
          <Zap className="w-4 h-4 text-yellow-500" />
        </div>
        <p className="text-[10px] text-white/50 leading-relaxed italic">
          *Calculations based on fleet averages of 12% fuel reduction and £15 monthly admin saving per vehicle. Individual results may vary.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;
