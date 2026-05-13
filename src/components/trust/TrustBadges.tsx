import React from 'react';
import { Shield, Lock, Globe, CheckCircle } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6 text-[#2D5A27]" />,
      title: "Insurance Approved",
      description: "Thatcham compliant hardware"
    },
    {
      icon: <Lock className="w-6 h-6 text-[#2D5A27]" />,
      title: "GDPR Compliant",
      description: "Secure data encryption"
    },
    {
      icon: <Globe className="w-6 h-6 text-[#2D5A27]" />,
      title: "Global Connectivity",
      description: "Works in 120+ countries"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#2D5A27]" />,
      title: "Lifetime Support",
      description: "UK-based technical team"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {badges.map((badge, i) => (
        <div key={i} className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#2D5A27]/30 transition-colors group">
          <div className="mb-4 bg-[#2D5A27]/10 p-4 rounded-full group-hover:scale-110 transition-transform">
            {badge.icon}
          </div>
          <h4 className="font-semibold text-white mb-1">{badge.title}</h4>
          <p className="text-xs text-white/50">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
