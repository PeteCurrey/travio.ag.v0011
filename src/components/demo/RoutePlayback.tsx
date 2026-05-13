'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, FastForward, Navigation } from 'lucide-react';

const RoutePlayback = () => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const routePoints = [
    { x: 100, y: 400 }, { x: 150, y: 380 }, { x: 220, y: 350 },
    { x: 300, y: 340 }, { x: 380, y: 300 }, { x: 450, y: 250 },
    { x: 520, y: 180 }, { x: 580, y: 120 }, { x: 650, y: 100 }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 100);
    } else {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  const currentPointIndex = Math.floor((progress / 100) * (routePoints.length - 1));
  const currentPoint = routePoints[currentPointIndex];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-light mb-1">Route History</h3>
          <p className="text-xs text-white/40">12 May 2024 · 08:42 — 10:15</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => { setProgress(0); setIsPlaying(true); }}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-white/60" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-[#2D5A27] text-white p-3 rounded-full hover:bg-[#23471f] transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
          </button>
        </div>
      </div>

      <div className="relative aspect-[16/9] bg-black/40 rounded-xl border border-white/5 overflow-hidden mb-8">
        <svg className="absolute inset-0 w-full h-full p-8">
          {/* Historical Path */}
          <path 
            d={`M ${routePoints.map(p => `${p.x} ${p.y}`).join(' L ')}`}
            stroke="#2D5A27"
            strokeWidth="3"
            strokeDasharray="8 4"
            fill="none"
            className="opacity-20"
          />
          {/* Completed Path */}
          <path 
            d={`M ${routePoints.slice(0, currentPointIndex + 1).map(p => `${p.x} ${p.y}`).join(' L ')}`}
            stroke="#2D5A27"
            strokeWidth="3"
            fill="none"
          />
          {/* Animated Marker */}
          {currentPoint && (
            <g transform={`translate(${currentPoint.x}, ${currentPoint.y})`}>
              <circle r="6" fill="#2D5A27" className="animate-pulse" />
              <Navigation className="w-4 h-4 text-white -translate-x-2 -translate-y-2" style={{ transform: 'rotate(90deg)' }} />
            </g>
          )}
        </svg>

        <div className="absolute top-4 right-4 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-lg p-3 text-[10px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <span className="text-white/40 uppercase">Speed</span>
            <span className="text-right">54 mph</span>
            <span className="text-white/40 uppercase">Fuel</span>
            <span className="text-right">62%</span>
            <span className="text-white/40 uppercase">RPM</span>
            <span className="text-right">2,450</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#2D5A27] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-[10px] text-white/40 uppercase tracking-widest">
          <span>08:42 Start</span>
          <span>{Math.floor(progress)}% Journey</span>
          <span>10:15 Arrival</span>
        </div>
      </div>
    </div>
  );
};

export default RoutePlayback;
