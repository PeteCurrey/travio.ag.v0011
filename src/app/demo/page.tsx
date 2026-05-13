'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LiveTrackingMap from '@/components/demo/LiveTrackingMap';
import RoutePlayback from '@/components/demo/RoutePlayback';
import DriverScoring from '@/components/demo/DriverScoring';
import AlertCentre from '@/components/demo/AlertCentre';
import ROICalculator from '@/components/demo/ROICalculator';
import { LayoutDashboard, Map as MapIcon, History, BarChart3, Settings, LogOut, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

const DemoPage = () => {
  const [activeView, setActiveView] = useState('DASHBOARD');

  const sidebarItems = [
    { id: 'DASHBOARD', label: 'Fleet Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'TRACKING', label: 'Live Tracking', icon: <MapIcon className="w-5 h-5" /> },
    { id: 'HISTORY', label: 'Route Playback', icon: <History className="w-5 h-5" /> },
    { id: 'ANALYTICS', label: 'Fleet Analytics', icon: <BarChart3 className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      <div className="pt-24 min-h-screen flex flex-col lg:flex-row">
        {/* Sidebar Nav */}
        <aside className="w-full lg:w-72 bg-[#0D0D0D] border-r border-white/10 p-6 flex flex-col">
          <div className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D5A27] mb-6">Demo Portal</h2>
            <div className="flex flex-col gap-2">
              {sidebarItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    activeView === item.id 
                    ? 'bg-[#2D5A27] text-white shadow-lg shadow-[#2D5A27]/20' 
                    : 'text-white/40 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-10 border-t border-white/5">
            <div className="bg-white/5 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2D5A27] flex items-center justify-center font-bold">JD</div>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Demo Admin</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                <LogOut className="w-3 h-3" />
                Exit Demo Mode
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#0A0A0A] p-6 lg:p-12 overflow-y-auto max-h-[calc(100vh-96px)] custom-scrollbar">
          <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-light mb-2">
                {sidebarItems.find(i => i.id === activeView)?.label}
              </h1>
              <p className="text-white/40">Showing real-time data for your fleet of 17 vehicles.</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-medium uppercase tracking-widest">Live Simulation</span>
              </div>
            </div>
          </header>

          {activeView === 'DASHBOARD' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Top Row: Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Active Assets', value: '17', sub: '3 Moving now', icon: <MapIcon className="w-4 h-4" /> },
                  { label: 'Fleet Score', value: '82', sub: 'Good (+2.4%)', icon: <BarChart3 className="w-4 h-4" /> },
                  { label: 'Total Distance', value: '1,242', sub: 'Last 24 hours', icon: <History className="w-4 h-4" /> },
                  { label: 'System Alerts', value: '1', sub: 'Immediate attention', icon: <LayoutDashboard className="w-4 h-4" /> },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#2D5A27]/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</span>
                      <div className="text-[#2D5A27]">{stat.icon}</div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-light">{stat.value}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-tighter">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle Row: Tracking Map and Alerts */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Real-Time Asset Location</h3>
                    <button className="text-xs text-[#2D5A27] hover:underline flex items-center gap-1" onClick={() => setActiveView('TRACKING')}>
                      Expand Map <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                  <LiveTrackingMap />
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Recent Activity</h3>
                  <AlertCentre />
                </div>
              </div>

              {/* Bottom Row: ROI and Driver Scoring */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ROICalculator />
                <DriverScoring />
              </div>
            </div>
          )}

          {activeView === 'TRACKING' && (
            <div className="h-[calc(100vh-250px)] animate-in fade-in slide-in-from-right-4 duration-700">
              <LiveTrackingMap />
            </div>
          )}

          {activeView === 'HISTORY' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
              <RoutePlayback />
            </div>
          )}

          {activeView === 'ANALYTICS' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-right-4 duration-700">
              <DriverScoring />
              <ROICalculator />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DemoPage;
