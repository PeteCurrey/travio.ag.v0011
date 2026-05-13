import React from 'react';
import { TrendingUp, AlertTriangle, Zap, CheckCircle2 } from 'lucide-react';

const DriverScoring = () => {
  const metrics = [
    { label: 'Harsh Braking', value: 92, status: 'Excellent', color: 'bg-green-500' },
    { label: 'Acceleration', value: 84, status: 'Good', color: 'bg-[#2D5A27]' },
    { label: 'Cornering', value: 76, status: 'Average', color: 'bg-yellow-500' },
    { label: 'Idling Time', value: 88, status: 'Good', color: 'bg-[#2D5A27]' }
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-light">Driver Performance</h3>
          <p className="text-xs text-white/40">Fleet-wide average: 82/100</p>
        </div>
        <div className="w-12 h-12 rounded-full border-4 border-[#2D5A27] flex items-center justify-center font-bold text-lg">
          82
        </div>
      </div>

      <div className="space-y-6 flex-grow">
        {metrics.map((m, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-white/60 uppercase tracking-widest">{m.label}</span>
              <span className="text-white font-medium">{m.value}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div 
                className={`h-full ${m.color} transition-all duration-1000`}
                style={{ width: `${m.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
        <div className="bg-black/20 rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 text-[#2D5A27] mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase">Efficiency</span>
          </div>
          <p className="text-lg font-medium">+12.4%</p>
          <p className="text-[10px] text-white/30">vs last month</p>
        </div>
        <div className="bg-black/20 rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 text-yellow-500 mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase">Risk Profile</span>
          </div>
          <p className="text-lg font-medium italic">Low</p>
          <p className="text-[10px] text-white/30">Tier-1 Safety</p>
        </div>
      </div>
    </div>
  );
};

export default DriverScoring;
