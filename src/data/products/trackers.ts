import { Product } from './types';

export const trackers: Product[] = [
  {
    id: 'one',
    name: 'Travio ONE',
    tagline: "The UK's most capable compact tracker.",
    category: 'Hardwired',
    price: 89,
    subscriptionFrom: '£4.99/mo',
    description: 'The FMC920 is a compact, smart tracker with 4G LTE Cat 1 connectivity and internal High Gain GNSS and GSM antennas. Perfect for cars, vans and motorbikes where space is limited but performance is critical.',
    longDescription: 'Engineered for reliability and discretion, the Travio ONE is the backbone of our tracking ecosystem. Its ultra-compact chassis houses enterprise-grade GNSS and cellular modules, ensuring real-time location accuracy down to 2.5 meters. With built-in fallback to 2G networks, you remain connected even in remote areas. Perfect for individual vehicles or small fleets requiring dependable, continuous monitoring.',
    features: [
      '4G real-time tracking with 2G network fallback',
      'Remote engine immobiliser via app or SMS',
      'Crash and tow detection with instant push alerts',
      'Unlimited geofence zones with entry/exit alerts',
      '90-day journey history with speed and route data'
    ],
    specs: {
      gnss: [
        { label: 'Receiver', value: '33 channel, High Gain internal' },
        { label: 'Sensitivity', value: '-165 dBM' },
        { label: 'Accuracy', value: '< 2.5m CEP' },
        { label: 'Hot Start', value: '< 1s' }
      ],
      cellular: [
        { label: 'Technology', value: '4G LTE Cat 1, 2G Fallback' },
        { label: 'Module', value: 'Quectel EG915U-EU' },
        { label: 'Data', value: 'LTE FDD: Max 10 Mbps (DL)' }
      ],
      power: [
        { label: 'Input Voltage', value: '10 - 30 V DC' },
        { label: 'Internal Battery', value: '170 mAh Li-Ion' },
        { label: 'Draw (Sleep)', value: '25 mA' }
      ],
      interface: [
        { label: 'Digital Inputs', value: '1' },
        { label: 'Digital Outputs', value: '1' },
        { label: 'Bluetooth', value: '4.0 + LE' }
      ],
      physical: [
        { label: 'Dimensions', value: '79 x 43 x 12 mm' },
        { label: 'Weight', value: '54 g' },
        { label: 'Protection', value: 'IP54' }
      ]
    },
    compat: ['Car', 'Van', 'Motorbike', 'Motorhome'],
    image: '/products/pro-4g.png',
    gallery: ['/products/pro-4g.png'],
    stockStatus: 'In Stock',
    simDetails: 'Global roaming multi-network M2M SIM included. Automatically connects to the strongest signal across O2, Vodafone, EE, and Three.',
    faqs: [
      { question: 'Do I need a professional to install this?', answer: 'While possible to self-install if you are competent with 12V vehicle wiring, we highly recommend using one of our certified installation partners for the Travio ONE to ensure warranty validation and hidden placement.' },
      { question: 'Will this drain my vehicle battery?', answer: 'No. The Travio ONE has an intelligent sleep mode drawing only 25mA, and an internal backup battery to protect your main vehicle battery.' }
    ],
    downloads: [
      { name: 'Travio ONE Technical Datasheet', url: '#', type: 'pdf' },
      { name: 'Installation Wiring Diagram', url: '#', type: 'pdf' }
    ],
    installationMethods: [
      {
        name: 'Professional Installation',
        description: 'Our network of certified auto-electricians will install the tracker discreetly at your home or workplace.',
        difficulty: 'Easy',
        timeRequired: '1-2 Hours'
      },
      {
        name: 'Self Installation',
        description: 'Hardwire directly to a 12V/24V power source (e.g., fuse box or battery). Requires basic electrical knowledge.',
        difficulty: 'Medium',
        timeRequired: '30-60 Mins',
        toolsNeeded: ['Multimeter', 'Wire Strippers', 'Crimping Tool']
      }
    ],
    compatibleSubscriptions: [
      { planId: 'standard', features: ['Live Tracking', '90-day History', 'Basic Alerts'] },
      { planId: 'pro', features: ['Live Tracking', '365-day History', 'Advanced Alerts', 'Immobilisation Control'] }
    ],
    relatedProducts: ['pro', 'plug']
  },
  {
    id: 'pro',
    name: 'Travio PRO',
    tagline: "Professional-grade tracking. Seriously.",
    category: 'Hardwired',
    price: 139,
    subscriptionFrom: '£5.99/mo',
    description: 'Advanced hardwired 4G tracker with fuel monitoring, driver behaviour analytics, and CAN bus data. For vans, motorhomes, and fleet operators who want the full picture.',
    longDescription: 'The Travio PRO is our flagship enterprise device. Designed for logistics companies, large fleets, and high-value vehicle owners, it connects directly to the vehicle CAN bus to extract deep telemetry data including real fuel levels, engine RPM, and precise odometer readings. Integrated driver scoring helps fleet managers reduce wear-and-tear and improve safety.',
    features: [
      'Advanced vehicle data via CAN adapter support',
      'Accurate fuel consumption monitoring',
      'Full driver behaviour scoring and analytics',
      'Multiple I/O ports for alarm integration',
      'Multi-vehicle dashboard for fleet management'
    ],
    specs: {
      gnss: [
        { label: 'Receiver', value: 'High-gain internal antenna' },
        { label: 'Accuracy', value: '< 2.5m CEP' },
        { label: 'Sensitivity', value: '-165 dBM' }
      ],
      cellular: [
        { label: 'Technology', value: '4G LTE Cat 1 with 3G/2G fallback' },
        { label: 'Module', value: 'Quectel EC200U-EU' }
      ],
      power: [
        { label: 'Input Voltage', value: '10 - 30 V DC' },
        { label: 'Backup Battery', value: 'Internal Li-Ion' }
      ],
      interface: [
        { label: 'Digital Inputs', value: '3 (Configurable)' },
        { label: 'Digital Outputs', value: '3 (Relay control)' },
        { label: 'Analog Inputs', value: '1 (Fuel/Voltage)' },
        { label: '1-Wire', value: 'Supported' }
      ],
      physical: [
        { label: 'Dimensions', value: '87 x 46 x 22 mm' },
        { label: 'Weight', value: '75 g' },
        { label: 'Protection', value: 'IP41' }
      ]
    },
    compat: ['Van', 'Motorhome', 'Fleet', 'Truck'],
    image: '/products/pro-4g.png',
    gallery: ['/products/pro-4g.png'],
    stockStatus: 'In Stock',
    simDetails: 'Global roaming multi-network M2M SIM included. Automatically connects to the strongest signal across O2, Vodafone, EE, and Three.',
    faqs: [
      { question: 'Does the PRO tracker read fault codes (DTCs)?', answer: 'Yes, when paired with the optional CAN-CONTROL adapter, the PRO can read and transmit standard OBDII diagnostic trouble codes.' }
    ],
    downloads: [
      { name: 'Travio PRO Datasheet', url: '#', type: 'pdf' },
      { name: 'CAN Adapter Compatibility List', url: '#', type: 'pdf' }
    ],
    installationMethods: [
      {
        name: 'Professional Installation',
        description: 'Mandatory for CAN bus integration. A certified technician will connect the device to your vehicle data network safely without voiding warranties.',
        difficulty: 'Hard',
        timeRequired: '2-3 Hours'
      }
    ],
    compatibleSubscriptions: [
      { planId: 'pro', features: ['Live Tracking', '365-day History', 'Advanced Alerts', 'Immobilisation Control'] },
      { planId: 'fleet', features: ['Driver ID', 'Tachograph Download', 'Fuel Analytics', 'API Access'] }
    ],
    relatedProducts: ['one', 'silent']
  },
  {
    id: 'silent',
    name: 'Travio SILENT',
    tagline: "No wires. No signal. No way to find it.",
    category: 'Wireless',
    price: 99,
    subscriptionFrom: '£3.99/mo',
    description: 'Designed to be dormant most of the time — a sleeping tracker is invisible to signal-detection equipment. Only wakes up to report, making it far harder for thieves to locate.',
    features: [
      'Up to 3-year battery life',
      'IP68 fully waterproof and dustproof',
      '4 mounting options: Magnetic, Screw, Tie',
      'Motion wake-up and hibernation modes',
      'LBS cell tower fallback for indoor tracking'
    ],
    specs: {
      gnss: [
        { label: 'Supported Systems', value: 'GPS, GLONASS, Galileo, BeiDou' },
        { label: 'Sensitivity', value: '-165 dBM' },
        { label: 'LBS Fallback', value: 'Supported' }
      ],
      cellular: [
        { label: 'Technology', value: '4G LTE Cat 1 with 2G fallback' },
        { label: 'Module', value: 'Quectel EG915U' }
      ],
      power: [
        { label: 'Battery Type', value: '2200 mAh Li-SOCl2' },
        { label: 'Battery Life', value: 'Up to 3 Years' },
        { label: 'Replacement', value: 'User-replaceable' }
      ],
      interface: [
        { label: 'Bluetooth', value: '5.0 + LE' },
        { label: 'Sensors', value: 'Internal Accelerometer' }
      ],
      physical: [
        { label: 'Dimensions', value: '78 x 63 x 28 mm' },
        { label: 'Weight', value: '115 g' },
        { label: 'Protection', value: 'IP68' }
      ]
    },
    compat: ['Caravan', 'Motorhome', 'Trailer', 'Plant'],
    image: '/products/pro-4g.png',
    gallery: ['/products/pro-4g.png'],
    stockStatus: 'Low Stock',
    simDetails: 'Low-data M2M SIM pre-installed, optimized for infrequent wake-ups and maximum battery conservation.',
    faqs: [
      { question: 'How often does the SILENT update its location?', answer: 'By default, it updates once every 24 hours to conserve battery. In the event of theft, you can activate "Recovery Mode" via the app to force live tracking.' }
    ],
    installationMethods: [
      {
        name: 'Magnetic Mount',
        description: 'Simply attach to any flat metal surface on the chassis or equipment.',
        difficulty: 'Easy',
        timeRequired: '1 Min'
      },
      {
        name: 'Concealed Mounting',
        description: 'Hide within upholstery, panels, or non-metallic compartments using provided VHB tape or zip-ties.',
        difficulty: 'Easy',
        timeRequired: '5 Mins'
      }
    ]
  },
  {
    id: 'volt',
    name: 'Travio VOLT',
    tagline: "Bolt it to the battery. Job done.",
    category: 'Battery Terminal',
    price: 69,
    subscriptionFrom: '£3.99/mo',
    description: 'Waterproof battery-terminal tracker. Clamps directly to your vehicle battery in minutes — no wiring, no drilling. Built-in accelerometer and gyroscope for crash detection.',
    features: [
      'Clamps direct to battery terminal',
      'IP65 waterproof and pressure wash safe',
      'Built-in gyroscope for bike crash detection',
      'Full-size High Gain internal GNSS antenna',
      'No-cut installation in under 2 minutes'
    ],
    specs: {
      gnss: [
        { label: 'Antenna', value: 'Internal HIGH GAIN' },
        { label: 'Sensitivity', value: '-165 dBM' },
        { label: 'Accuracy', value: '< 2.5m CEP' }
      ],
      cellular: [
        { label: 'Technology', value: '2G GSM/GPRS (Quad-band)' },
        { label: 'Network', value: 'Works across UK/Europe' }
      ],
      power: [
        { label: 'Connection', value: 'Battery terminal clamps' },
        { label: 'Input Voltage', value: '10 - 30 V DC' },
        { label: 'Internal Backup', value: '170 mAh Li-Po' }
      ],
      interface: [
        { label: 'Sensors', value: 'Accelerometer + Gyroscope' },
        { label: 'Bluetooth', value: '4.0 + LE' }
      ],
      physical: [
        { label: 'Dimensions', value: '92.5 x 57.6 x 14 mm' },
        { label: 'Weight', value: '63 g' },
        { label: 'Protection', value: 'IP65' }
      ]
    },
    compat: ['Motorbike', 'Classic Car', 'Boat', 'ATV'],
    image: '/products/pro-4g.png',
    gallery: ['/products/pro-4g.png'],
    stockStatus: 'In Stock',
    installationMethods: [
      {
        name: 'Direct Battery Connection',
        description: 'Loosen the battery terminal nuts, slide the U-shaped connectors underneath, and retighten. No wire cutting necessary.',
        difficulty: 'Easy',
        timeRequired: '5 Mins',
        toolsNeeded: ['10mm Spanner']
      }
    ]
  },
  {
    id: 'plug',
    name: 'Travio PLUG',
    tagline: "In the socket. On the map. In 30 seconds.",
    category: 'Plug & Play',
    price: 49,
    subscriptionFrom: '£2.99/mo',
    description: 'Plug-in cigarette lighter tracker. Instant tracking — no wiring, no tools, no professional needed. The simplest GPS tracker you’ll ever use.',
    features: [
      'Plugs into any 12V cigarette lighter',
      'USB phone charging output built-in',
      'Built-in backup battery if unplugged',
      'Zero installation required',
      'Ideal for rentals and temporary tracking'
    ],
    specs: {
      gnss: [
        { label: 'Supported Systems', value: 'GPS, GLONASS, BeiDou, Galileo' },
        { label: 'Accuracy', value: '< 3m CEP' }
      ],
      cellular: [
        { label: 'Technology', value: '2G GSM/GPRS' },
        { label: 'SIM', value: 'Micro-SIM' }
      ],
      power: [
        { label: 'Connection', value: '12V/24V Socket' },
        { label: 'USB Output', value: '5V / 1A' },
        { label: 'Backup Battery', value: '170 mAh Li-Ion' }
      ],
      interface: [
        { label: 'Bluetooth', value: '4.0 + LE' }
      ],
      physical: [
        { label: 'Form Factor', value: 'Compact Lighter Plug' },
        { label: 'Weight', value: '~50 g' },
        { label: 'Protection', value: 'IP31' }
      ]
    },
    compat: ['Car', 'Van', 'Motorhome', 'Rental'],
    image: '/products/pro-4g.png',
    gallery: ['/products/pro-4g.png'],
    stockStatus: 'In Stock',
    installationMethods: [
      {
        name: 'Plug and Play',
        description: 'Insert into the 12V auxiliary power outlet (cigarette lighter) of any vehicle.',
        difficulty: 'Easy',
        timeRequired: '10 Seconds'
      }
    ]
  }
];
