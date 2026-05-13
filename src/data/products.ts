export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  subscriptionFrom: string;
  description: string;
  features: string[];
  specs: {
    gnss: ProductSpec[];
    cellular: ProductSpec[];
    power: ProductSpec[];
    interface: ProductSpec[];
    physical: ProductSpec[];
  };
  compat: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 'one',
    name: 'Travio ONE',
    tagline: "The UK's most capable compact tracker.",
    category: 'Hardwired',
    price: 89,
    subscriptionFrom: '£4.99/mo',
    description: 'The FMC920 is a compact, smart tracker with 4G LTE Cat 1 connectivity and internal High Gain GNSS and GSM antennas. Perfect for cars, vans and motorbikes where space is limited but performance is critical.',
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
    image: '/products/pro-4g.png' // Reusing existing assets for now
  },
  {
    id: 'pro',
    name: 'Travio PRO',
    tagline: "Professional-grade tracking. Seriously.",
    category: 'Hardwired',
    price: 139,
    subscriptionFrom: '£5.99/mo',
    description: 'Advanced hardwired 4G tracker with fuel monitoring, driver behaviour analytics, and CAN bus data. For vans, motorhomes, and fleet operators who want the full picture.',
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
    image: '/products/pro-4g.png'
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
    image: '/products/pro-4g.png'
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
    image: '/products/pro-4g.png'
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
    image: '/products/pro-4g.png'
  }
];
