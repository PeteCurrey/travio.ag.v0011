import React from 'react';
import { Star } from 'lucide-react';

const ReviewIntegration = () => {
  const reviews = [
    {
      author: "David M.",
      role: "Fleet Manager, CourierPro",
      content: "Switched our entire 50-van fleet to Travio. The installation was seamless, and the dashboard is leagues ahead of our previous provider.",
      rating: 5
    },
    {
      author: "Sarah L.",
      role: "SME Owner",
      content: "Peace of mind for my motorhome. The SILENT tracker is exactly what I was looking for. Highly recommended.",
      rating: 5
    },
    {
      author: "James T.",
      role: "Construction Site Lead",
      content: "Tough hardware that handles the dust and rain on-site without any issues. The engine-hour tracking is a game-changer for our servicing schedule.",
      rating: 5
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-light mb-2">Trusted by 2,000+ Businesses</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[#2D5A27]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="text-white/60 font-medium">4.9/5 on Trustpilot</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center gap-1 text-[#2D5A27] mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-white/80 leading-relaxed italic mb-6 flex-grow">"{review.content}"</p>
            <div>
              <p className="font-semibold text-white">{review.author}</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewIntegration;
