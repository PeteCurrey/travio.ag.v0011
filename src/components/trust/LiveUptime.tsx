'use client';

import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

const LiveUptime = () => {
  const [ms, setMs] = useState(124);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMs(prev => {
        const variation = Math.floor(Math.random() * 10) - 5;
        const next = prev + variation;
        return next > 80 && next < 160 ? next : prev;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-4 bg-black/40 border border-white/10 rounded-full px-6 py-3">
      <div className="flex items-center gap-2">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
        <span className="text-sm font-medium text-white/90 uppercase tracking-widest">Systems Online</span>
      </div>
      <div className="h-4 w-px bg-white/20"></div>
      <div className="flex items-center gap-2 text-sm text-white/60">
        <Activity className="w-4 h-4 text-[#2D5A27]" />
        <span>99.99% Uptime</span>
      </div>
      <div className="h-4 w-px bg-white/20"></div>
      <div className="text-sm font-mono text-white/40">
        API Latency: <span className="text-[#2D5A27]">{ms}ms</span>
      </div>
    </div>
  );
};

export default LiveUptime;
