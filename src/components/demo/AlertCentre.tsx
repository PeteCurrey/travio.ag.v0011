import React from 'react';
import { Bell, MapPin, Zap, Shield, AlertTriangle } from 'lucide-react';

const AlertCentre = () => {
  const alerts = [
    {
      id: 1,
      type: 'security',
      title: 'Geofence Breach',
      vehicle: 'VAN-04',
      time: '2 mins ago',
      icon: <Shield className="w-4 h-4 text-red-500" />,
      bg: 'bg-red-500/10'
    },
    {
      id: 2,
      type: 'power',
      title: 'Ignition ON',
      vehicle: 'PLANT-09',
      time: '14 mins ago',
      icon: <Zap className="w-4 h-4 text-[#2D5A27]" />,
      bg: 'bg-[#2D5A27]/10'
    },
    {
      id: 3,
      type: 'safety',
      title: 'Harsh Braking',
      vehicle: 'CAR-22',
      time: '42 mins ago',
      icon: <AlertTriangle className="w-4 h-4 text-yellow-500" />,
      bg: 'bg-yellow-500/10'
    },
    {
      id: 4,
      type: 'location',
      title: 'Arrival: Zone A',
      vehicle: 'VAN-01',
      time: '1 hour ago',
      icon: <MapPin className="w-4 h-4 text-blue-500" />,
      bg: 'bg-blue-500/10'
    }
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-light flex items-center gap-2">
          Alert Centre
          <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">1</span>
        </h3>
        <button className="text-xs text-white/40 hover:text-white transition-colors">Clear All</button>
      </div>

      <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
        {alerts.map((alert) => (
          <div key={alert.id} className="group p-4 bg-black/20 border border-white/5 rounded-xl hover:border-white/10 transition-colors cursor-pointer">
            <div className="flex gap-4">
              <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${alert.bg}`}>
                {alert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-medium truncate">{alert.title}</h4>
                  <span className="text-[10px] text-white/30 whitespace-nowrap">{alert.time}</span>
                </div>
                <p className="text-xs text-white/50">{alert.vehicle} · View Map</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all">
        View History
      </button>
    </div>
  );
};

export default AlertCentre;
