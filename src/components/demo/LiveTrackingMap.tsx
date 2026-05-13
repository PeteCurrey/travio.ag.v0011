'use client';

import React, { useState, useEffect } from 'react';
import { Navigation, Shield, Battery, Signal, MapPin, Clock } from 'lucide-react';

const LiveTrackingMap = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: 'VAN-01 (Ford Transit)', x: 120, y: 150, speed: 42, status: 'Moving' },
    { id: 2, name: 'CAR-04 (VW Polo)', x: 450, y: 320, speed: 0, status: 'Parked' },
    { id: 3, name: 'PLANT-09 (Excavator)', x: 280, y: 180, speed: 4, status: 'Working' },
    { id: 4, name: 'VAN-22 (Mercedes Sprinter)', x: 600, y: 80, speed: 58, status: 'Moving' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prev => prev.map(v => {
        if (v.status === 'Moving') {
          return {
            ...v,
            x: v.x + (Math.random() * 2 - 0.5),
            y: v.y + (Math.random() * 2 - 0.5),
            speed: Math.floor(Math.random() * 10 + 40)
          };
        }
        if (v.status === 'Working') {
          return {
            ...v,
            x: v.x + (Math.random() * 0.5 - 0.25),
            y: v.y + (Math.random() * 0.5 - 0.25),
            speed: Math.floor(Math.random() * 5)
          };
        }
        return v;
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-[#0D0D0D] rounded-2xl border border-white/10 overflow-hidden group">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'radial-gradient(#2D5A27 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>

      {/* Simulated Roadmap Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <path d="M0 100 L800 100 M200 0 L200 600 M500 0 L500 600 M0 400 L800 400" stroke="#2D5A27" strokeWidth="2" fill="none" />
      </svg>

      {/* Vehicles */}
      {vehicles.map(v => (
        <div 
          key={v.id}
          className="absolute transition-all duration-1000 ease-linear"
          style={{ left: `${(v.x / 800) * 100}%`, top: `${(v.y / 600) * 100}%` }}
        >
          <div className="relative group/marker">
            <div className={`p-2 rounded-lg bg-[#0A0A0A] border shadow-xl transition-colors ${v.status === 'Moving' ? 'border-green-500/50' : v.status === 'Working' ? 'border-orange-500/50' : 'border-white/20'}`}>
              <Navigation className={`w-4 h-4 ${v.status === 'Moving' ? 'text-green-500' : v.status === 'Working' ? 'text-orange-500' : 'text-white/40'}`} style={{ transform: v.status === 'Moving' ? 'rotate(45deg)' : 'none' }} />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-[#111111] border border-white/10 rounded-xl p-3 opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl">
              <p className="text-xs font-bold mb-2">{v.name}</p>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="flex items-center gap-1 text-white/50"><Clock className="w-3 h-3" /> {v.status}</div>
                <div className="flex items-center gap-1 text-white/50"><Navigation className="w-3 h-3" /> {v.speed} mph</div>
                <div className="flex items-center gap-1 text-white/50"><Battery className="w-3 h-3 text-green-500" /> 94%</div>
                <div className="flex items-center gap-1 text-white/50"><Signal className="w-3 h-3 text-[#2D5A27]" /> Strong</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Map Controls */}
      <div className="absolute top-6 left-6 flex flex-col gap-2">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-2 flex flex-col gap-4">
          <div className="w-8 h-8 flex items-center justify-center hover:bg-white/5 rounded cursor-pointer">+</div>
          <div className="h-px bg-white/10"></div>
          <div className="w-8 h-8 flex items-center justify-center hover:bg-white/5 rounded cursor-pointer">−</div>
        </div>
        <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-2 flex items-center justify-center hover:bg-white/5 cursor-pointer">
          <MapPin className="w-4 h-4" />
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 right-6 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 text-[10px] text-white/40 flex items-center gap-4">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> 3 Moving</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-white/20"></div> 12 Parked</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500"></div> 1 Working</div>
      </div>
    </div>
  );
};

export default LiveTrackingMap;
