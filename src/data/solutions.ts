export interface SolutionData {
  id: string;
  name: string;
  hero: {
    eyebrow: string;
    headline: string;
    subcopy: string;
    cta: string;
  };
  problem: {
    headline: string;
    painPoints: { title: string; description: string }[];
    stats: { value: string; label: string }[];
  };
  darkStats: { value: string; label: string }[];
  recommendations: {
    primaryId: string;
    secondaryId?: string;
    primaryBadge?: string;
    secondaryBadge?: string;
  };
  customerStory: {
    quote: string;
    attribution: string;
    outcomes: { value: string; label: string }[];
  };
  faqs: { question: string; answer: string }[];
}

export const solutions: Record<string, SolutionData> = {
  car: {
    id: 'car',
    name: 'CAR',
    hero: {
      eyebrow: 'CAR GPS TRACKING',
      headline: 'EVERY CAR. PROTECTED.',
      subcopy: 'From driveways to motorways, Travio GPS gives you real-time location, instant theft alerts, and complete peace of mind for your car.',
      cta: 'SHOP CAR TRACKERS'
    },
    problem: {
      headline: 'YOUR CAR IS MORE AT RISK THAN YOU THINK.',
      painPoints: [
        { title: 'Keyless theft is rising', description: 'Relay attacks can unlock and start your car in 10 seconds. A GPS tracker recovers what a lock can\'t prevent.' },
        { title: 'Driveway theft overnight', description: '52% of UK car thefts happen between midnight and 6am — when you\'re asleep and your car is unprotected.' },
        { title: 'Standard insurance isn\'t enough', description: 'Average payout takes weeks. With a tracker, recovery happens in hours — often with no damage.' }
      ],
      stats: [
        { value: '52%', label: 'Of car thefts happen overnight' },
        { value: '< 18 min', label: 'Average recovery time with GPS tracker' },
        { value: '< 2.5m', label: 'Travio GPS accuracy' }
      ]
    },
    darkStats: [
      { value: '1 IN 50', label: 'Cars stolen in the UK each year' },
      { value: '< 30 SEC', label: 'Alert delivery time' },
      { value: '99.9%', label: 'Network uptime' },
      { value: '90 DAYS', label: 'Journey data stored' }
    ],
    recommendations: {
      primaryId: 'one',
      secondaryId: 'plug',
      primaryBadge: 'RECOMMENDED CHOICE'
    },
    customerStory: {
      quote: "My 3 Series was taken from outside my house at 3am on a Tuesday. I had a location pinged to my phone within 45 seconds. I called 999, gave them the live map link, and they had it back on my drive before 4am — not a scratch on it.",
      attribution: "John M., BMW 3 Series, Cheshire",
      outcomes: [
        { value: '45 seconds', label: 'From movement to alert' },
        { value: '18 minutes', label: 'Recovery time' },
        { value: 'Zero damage', label: 'To the vehicle' }
      ]
    },
    faqs: [
      { question: 'Will a hardwired tracker affect my warranty?', answer: 'No — professional installation leaves your car\'s systems intact and warranty-compliant.' },
      { question: 'Can thieves detect and jam the tracker?', answer: 'Travio trackers include jamming detection — you\'re alerted before the vehicle even moves.' },
      { question: 'Does it work if my battery is disconnected?', answer: 'Yes — the built-in backup battery keeps reporting for several hours after main power is cut.' },
      { question: 'How do I share my location with police?', answer: 'The Travio app generates a shareable live-tracking link. Send it directly to the 999 operator or your local police.' }
    ]
  },
  van: {
    id: 'van',
    name: 'VAN',
    hero: {
      eyebrow: 'VAN GPS TRACKING',
      headline: 'EVERY VAN. EVERY MILE.',
      subcopy: 'Tools, stock, livelihood — it\'s all in that van. Travio GPS protects it with real-time tracking, driver behaviour monitoring, and instant theft alerts.',
      cta: 'SHOP VAN TRACKERS'
    },
    problem: {
      headline: 'YOUR VAN ISN\'T JUST A VEHICLE. IT\'S YOUR BUSINESS.',
      painPoints: [
        { title: 'Tools and stock are the real target', description: 'The average van break-in costs £3,000–£6,500 in tools alone — and weeks of lost work.' },
        { title: 'Unattended overnight risk', description: 'Vans parked at residential addresses are the number one target for organised tool theft gangs.' },
        { title: 'Insurance premiums rising', description: 'Van fleet insurance costs have risen 40% since 2020. Driver behaviour data and GPS tracking can reverse that.' }
      ],
      stats: [
        { value: '£6,500', label: 'Average van theft loss' },
        { value: '40%', label: 'Rise in van insurance costs since 2020' },
        { value: '2.5m', label: 'Travio GPS accuracy' }
      ]
    },
    darkStats: [
      { value: '1 IN 20', label: 'Vans broken into each year' },
      { value: '48 HOURS', label: 'Average police response to van theft' },
      { value: '£6,500', label: 'Average loss per incident' },
      { value: '40%', label: 'Insurance premium reduction possible' }
    ],
    recommendations: {
      primaryId: 'pro',
      secondaryId: 'one',
      primaryBadge: 'BEST FOR FLEETS'
    },
    customerStory: {
      quote: "I run a team of 4 plumbers, all with fully stocked vans. The PRO tracks every van in real time and gives me a driver score each week. Two of my guys have massively improved their driving — fuel bill dropped 18% in the first quarter.",
      attribution: "Mike D., Plumbing Contractor, Birmingham",
      outcomes: [
        { value: '18%', label: 'Fuel cost reduction' },
        { value: '4 vans', label: 'Managed from one screen' },
        { value: '£0', label: 'Theft losses since installation' }
      ]
    },
    faqs: [
      { question: 'Can I track multiple vans on one account?', answer: 'Yes — the Travio PRO fleet view shows unlimited vehicles on a single map with individual driver scores.' },
      { question: 'Does it log when drivers arrive and leave job sites?', answer: 'Yes — geofences around client sites or your depot send automatic arrival/departure alerts.' },
      { question: 'Can I prove my driver wasn\'t speeding?', answer: 'Yes — every journey is logged with timestamp, route, and speed data at every point.' },
      { question: 'What happens to the data if the van is stolen?', answer: 'The tracker continues reporting regardless of ignition state — live location is available in the app instantly.' }
    ]
  },
  motorhome: {
    id: 'motorhome',
    name: 'MOTORHOME',
    hero: {
      eyebrow: 'MOTORHOME GPS TRACKING',
      headline: 'YOUR HOME. WHEREVER IT IS.',
      subcopy: 'Motorhomes are high-value, often unattended for extended periods, and increasingly targeted. Travio GPS gives you peace of mind whether you\'re in it or not.',
      cta: 'SHOP MOTORHOME TRACKERS'
    },
    problem: {
      headline: 'MOTORHOMES ARE THE UK\'S FASTEST-GROWING THEFT TARGET.',
      painPoints: [
        { title: 'Extended unattended storage', description: 'Most motorhomes sit unmonitored in driveways or storage sites for weeks at a time. That\'s ample time for thieves.' },
        { title: 'High value, slow police response', description: 'Average motorhome value: £45,000+. Average recovery rate without a tracker: under 10%.' },
        { title: 'Remote locations with poor oversight', description: 'Travelling in Europe? Many sites have limited security. A tracker gives you oversight anywhere with a cell signal.' }
      ],
      stats: [
        { value: '£45,000', label: 'Average motorhome value' },
        { value: '< 10%', label: 'Recovery rate without tracker' },
        { value: '3 YEARS', label: 'Travio SILENT battery life' }
      ]
    },
    darkStats: [
      { value: '£45,000', label: 'Average motorhome value' },
      { value: '< 10%', label: 'Recovery rate without tracker' },
      { value: '3 YEARS', label: 'Travio SILENT battery life' },
      { value: 'IP68', label: 'Waterproof rating of SILENT tracker' }
    ],
    recommendations: {
      primaryId: 'silent',
      secondaryId: 'pro',
      primaryBadge: 'BEST FOR STORAGE'
    },
    customerStory: {
      quote: "We were in the south of France for 6 weeks. Every morning with my coffee, I'd open the app and check the motorhome was still on the site. Three times I got geofence alerts — each time it was nothing (site staff moving it slightly). But I knew instantly. That's worth every penny of the subscription.",
      attribution: "Sarah T., Motorhome Owner, Yorkshire",
      outcomes: [
        { value: '6 Weeks', label: 'Unattended tracking' },
        { value: '3 Alerts', label: 'Instant notifications' },
        { value: 'Global', label: 'Coverage tested' }
      ]
    },
    faqs: [
      { question: 'Does it work across Europe?', answer: 'Yes. Our M2M SIM automatically roams across Europe and most of the world at no extra cost.' },
      { question: 'Will the SILENT battery really last 3 years?', answer: 'Yes, if set to report location once per day when stationary. More frequent updates will reduce battery life.' }
    ]
  },
  motorbike: {
    id: 'motorbike',
    name: 'MOTORBIKE',
    hero: {
      eyebrow: 'MOTORBIKE GPS TRACKING',
      headline: 'RIDE FREE. TRACK SMART.',
      subcopy: 'Motorcycles are stolen in under 30 seconds. Travio GPS gives you real-time tracking, crash detection, and gyroscope tip-over alerts — built for bikes.',
      cta: 'SHOP MOTORBIKE TRACKERS'
    },
    problem: {
      headline: 'A MOTORCYCLE CAN BE LOADED INTO A VAN IN 20 SECONDS FLAT.',
      painPoints: [
        { title: 'No time to react', description: 'By the time you hear anything, it\'s gone. GPS tracking means recovery starts the moment it moves.' },
        { title: 'Crash detection matters', description: 'If you come off, our gyroscope detects the tip. If you don\'t respond in the app within 60 seconds, it automatically alerts your emergency contact.' },
        { title: 'No wiring required', description: 'The Travio VOLT clamps to your battery in 5 minutes — no cutting wires, no voiding warranties, no fuss.' }
      ],
      stats: [
        { value: '20 SECONDS', label: 'Average motorcycle theft time' },
        { value: 'IP65', label: 'VOLT waterproof rating' },
        { value: '5 MINS', label: 'VOLT installation time' }
      ]
    },
    darkStats: [
      { value: '20 SECONDS', label: 'Average motorcycle theft time' },
      { value: 'IP65', label: 'VOLT waterproof rating' },
      { value: '5 MINS', label: 'VOLT installation time' },
      { value: '90 DAYS', label: 'Journey history' }
    ],
    recommendations: {
      primaryId: 'volt',
      secondaryId: 'one',
      primaryBadge: 'RECOMMENDED CHOICE'
    },
    customerStory: {
      quote: "My Ducati was taken from my locked garage at 2am. I had a location on the app before the police even answered. They recovered it 3 miles away — it was being loaded into a transit. The tracker paid for itself in the first year. A hundred times over.",
      attribution: "Pete A., Ducati Panigale V4, Manchester",
      outcomes: [
        { value: '2 AM', label: 'Theft detection' },
        { value: '3 Miles', label: 'Recovery distance' },
        { value: '1 Year', label: 'ROI achieved' }
      ]
    },
    faqs: [
      { question: 'Is it waterproof?', answer: 'Yes, the VOLT is IP65 rated, designed to survive road spray, rain, and pressure washing.' }
    ]
  },
  caravan: {
    id: 'caravan',
    name: 'CARAVAN',
    hero: {
      eyebrow: 'CARAVAN GPS TRACKING',
      headline: 'IT SITS THERE. TRAVIO WATCHES IT.',
      subcopy: 'Caravans spend most of their lives parked. Often away from home. Often without power. The Travio SILENT was built exactly for this.',
      cta: 'SHOP CARAVAN TRACKERS'
    },
    problem: {
      headline: 'MOST CARAVAN THEFTS HAPPEN WHEN IT\'S IN STORAGE.',
      painPoints: [
        { title: 'No power when unhitched', description: 'Standard hardwired trackers need vehicle power. The SILENT runs for 3 years on its own internal battery — no connection needed.' },
        { title: 'Storage sites are targets', description: 'Organised gangs case storage sites for high-value caravans. A hidden SILENT tracker is completely undetectable in sleep mode.' },
        { title: 'Standard insurance is slow', description: 'Without a tracker, recovery rates for caravans are under 8%. With GPS: the majority are found within 24 hours.' }
      ],
      stats: [
        { value: '3 YEARS', label: 'SILENT battery life' },
        { value: '< 8%', label: 'Caravan recovery rate without tracker' },
        { value: 'IP68', label: 'SILENT waterproof rating' }
      ]
    },
    darkStats: [
      { value: '3 YEARS', label: 'SILENT battery life' },
      { value: '< 8%', label: 'Caravan recovery rate without tracker' },
      { value: 'IP68', label: 'SILENT waterproof rating' },
      { value: '30 SECS', label: 'Magnetic mount installation' }
    ],
    recommendations: {
      primaryId: 'silent',
      primaryBadge: 'BEST FOR CARAVANS'
    },
    customerStory: {
      quote: "Ours was stored 12 miles away at a secure site — or so we thought. Got an alert at 11pm that it had left the geofence. We called police with the live location. They stopped it on the A1 an hour later. Our insurance wouldn't have covered the full value. The tracker saved us £28,000.",
      attribution: "Rachel K., Caravan Owner, Lincolnshire",
      outcomes: [
        { value: '11 PM', label: 'Theft alert' },
        { value: '1 Hour', label: 'Recovery time' },
        { value: '£28k', label: 'Asset saved' }
      ]
    },
    faqs: [
      { question: 'Does it need an external battery?', answer: 'No, the SILENT is fully self-powered with its own internal 3-year battery.' }
    ]
  },
  'plant-equipment': {
    id: 'plant-equipment',
    name: 'PLANT & EQUIPMENT',
    hero: {
      eyebrow: 'PLANT & EQUIPMENT GPS TRACKING',
      headline: 'YOUR SITE. SECURED.',
      subcopy: 'Diggers, dumpers, generators, trailers — plant theft costs UK businesses £800 million per year. Travio GPS tracks everything, everywhere.',
      cta: 'SHOP PLANT TRACKERS'
    },
    problem: {
      headline: 'PLANT THEFT COSTS UK BUSINESSES £800 MILLION EVERY YEAR.',
      painPoints: [
        { title: 'No power when not running', description: 'Plant equipment is often unattended for days. The Travio SILENT runs for 3 years on battery — no wiring to powered equipment needed.' },
        { title: 'Remote and unsecured sites', description: 'Construction sites are the most targeted location for equipment theft. Overnight and weekend theft is endemic.' },
        { title: 'One stolen machine is a week of lost productivity', description: 'Even with insurance, replacing plant takes time. GPS recovery means getting back on site in hours, not weeks.' }
      ],
      stats: [
        { value: '£800M', label: 'Plant theft cost to UK businesses annually' },
        { value: '3 YEARS', label: 'SILENT battery life' },
        { value: 'IP68', label: 'All-weather waterproof' }
      ]
    },
    darkStats: [
      { value: '£800M', label: 'Plant theft cost to UK businesses annually' },
      { value: '3 YEARS', label: 'SILENT battery life' },
      { value: 'IP68', label: 'All-weather waterproof' },
      { value: '24 HRS', label: 'Average recovery time with GPS tracker' }
    ],
    recommendations: {
      primaryId: 'silent',
      secondaryId: 'pro',
      primaryBadge: 'BEST FOR NON-POWERED'
    },
    customerStory: {
      quote: "We had a 360° excavator taken from a site on a Friday night. By Monday morning, we had 72 hours of movement data, the yard it was sitting in, and police had it back by lunchtime. The SILENT was hidden in the counterweight — they had no idea. We've put them on every machine now.",
      attribution: "Dave W., Plant Contractor, West Midlands",
      outcomes: [
        { value: '72 Hours', label: 'Movement history' },
        { value: 'Lunchtime', label: 'Recovery complete' },
        { value: '100%', label: 'Fleet coverage' }
      ]
    },
    faqs: [
      { question: 'Is it rugged enough for plant?', answer: 'Yes, the SILENT is IP68 rated and designed for high-vibration environments.' }
    ]
  }
};
