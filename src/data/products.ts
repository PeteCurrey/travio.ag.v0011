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
    id: 'pro-4g',
    name: 'Travio Pro 4G',
    tagline: 'Advanced Hardwired Gps Tracker',
    category: 'Hardwired',
    price: 129,
    description: 'The FMC130 is an advanced 4G LTE Cat 1 tracker with a backup battery and flexible inputs, perfect for professional fleet management and high-value vehicle security.',
    features: [
      '4G LTE Cat 1 connectivity with 2G fallback',
      'Extensive remote monitoring possibilities',
      'CAN data reading support',
      'Internal backup battery',
      'Digital/Analog inputs & outputs'
    ],
    specs: {
      gnss: [
        { label: 'Receiver', value: '33 channel' },
        { label: 'Tracking Sensitivity', value: '-165 dBM' },
        { label: 'Accuracy', value: '< 2.5m CEP' },
        { label: 'Hot Start', value: '< 1s' }
      ],
      cellular: [
        { label: 'Technology', value: 'LTE Cat 1, GSM/GPRS' },
        { label: '2G Bands', value: 'B2/B3/B5/B8' },
        { label: '4G Bands', value: 'B1/B3/B7/B8/B20/B28' },
        { label: 'Data Support', value: 'SMS, GPRS' }
      ],
      power: [
        { label: 'Input Voltage', value: '10 - 30 V DC' },
        { label: 'Backup Battery', value: '170 mAh Li-Ion' },
        { label: 'Power Consumption', value: '< 3 mA (Deep Sleep)' }
      ],
      interface: [
        { label: 'Digital Inputs', value: '3' },
        { label: 'Digital Outputs', value: '3' },
        { label: 'Analog Inputs', value: '2' },
        { label: 'GNSS/Cellular Antennas', value: 'Internal High Gain' }
      ],
      physical: [
        { label: 'Dimensions', value: '65 x 56.6 x 20.6 mm' },
        { label: 'Weight', value: '55 g' },
        { label: 'Ingress Protection', value: 'IP41' }
      ]
    },
    compat: ['Car', 'Van', 'Truck', 'Bus'],
    image: '/products/pro-4g.png'
  },
  {
    id: 'plug-4g',
    name: 'Travio Plug 4G',
    tagline: 'OBDII Plug & Play Tracker',
    category: 'OBD',
    price: 89,
    description: 'The FMB003 is an ultra-small plug and track device with LTE Cat M1/NB-IoT/GSM connectivity. Designed for easy installation, it plugs directly into the vehicle OBDII port.',
    features: [
      'Instant installation via OBDII port',
      'OEM Power & Fuel data reading',
      'Bluetooth for external sensors',
      'Crash detection & analysis',
      'Ultra-compact design'
    ],
    specs: {
      gnss: [
        { label: 'Receiver', value: '33 channel' },
        { label: 'Accuracy', value: '< 2.5m CEP' },
        { label: 'Hot Start', value: '< 1s' }
      ],
      cellular: [
        { label: 'Technology', value: 'LTE Cat M1, NB-IoT, GSM' },
        { label: 'Data Support', value: 'SMS, GPRS' }
      ],
      power: [
        { label: 'Input Voltage', value: '10 - 30 V DC' },
        { label: 'Backup Battery', value: '170 mAh Li-Ion' }
      ],
      interface: [
        { label: 'Connection', value: 'OBDII Socket' },
        { label: 'Bluetooth', value: '4.0 + LE' }
      ],
      physical: [
        { label: 'Dimensions', value: '52.6 x 29.1 x 26 mm' },
        { label: 'Weight', value: '30 g' }
      ]
    },
    compat: ['Car', 'Van', 'Rental'],
    image: '/products/plug-4g.png'
  },
  {
    id: 'guard-s5',
    name: 'Travio Guard S5',
    tagline: 'Insurance Approved Gps Security',
    category: 'Hardwired',
    price: 199,
    description: 'The FMB204 is a specialized waterproof tracker with high capacity battery and internal High Gain GNSS and GSM antennas, designed for Thatcham S5+ security requirements.',
    features: [
      'Thatcham S5+ security certification',
      'Waterproof IP67 casing',
      'Large 1800 mAh backup battery',
      'Advanced anti-theft sensors',
      'Remote immobilization support'
    ],
    specs: {
      gnss: [
        { label: 'Receiver', value: '33 channel' },
        { label: 'Tracking Sensitivity', value: '-165 dBM' },
        { label: 'Hot Start', value: '< 1s' }
      ],
      cellular: [
        { label: 'Technology', value: 'LTE Cat 1 with 2G fallback' },
        { label: '4G Bands', value: 'B1/B3/B7/B8/B20/B28' }
      ],
      power: [
        { label: 'Input Voltage', value: '6 - 30 V DC' },
        { label: 'Backup Battery', value: '1800 mAh Li-Ion' }
      ],
      interface: [
        { label: 'Digital Inputs', value: '3' },
        { label: 'Digital Outputs', value: '2' },
        { label: 'Bluetooth', value: '4.0 + LE' }
      ],
      physical: [
        { label: 'Dimensions', value: '72.5 x 73 x 27.3 mm' },
        { label: 'Weight', value: '205 g' },
        { label: 'Ingress Protection', value: 'IP67' }
      ]
    },
    compat: ['Luxury Car', 'Motorhome', 'Plant'],
    image: '/products/guard-s5.png'
  },
  {
    id: 'lite-4g',
    name: 'Travio Lite 4G',
    tagline: 'Compact & Reliable Tracking',
    category: 'Hardwired',
    price: 69,
    description: 'The FMB920 is a compact, smart tracker with Bluetooth connectivity, internal High Gain GNSS and GSM antennas and integrated backup battery.',
    features: [
      'Ultra-compact dimensions',
      'Bluetooth for wireless sensors',
      'Built-in 170 mAh battery',
      'Crash and towing detection',
      'Easy hidden installation'
    ],
    specs: {
      gnss: [
        { label: 'Receiver', value: '33 channel' },
        { label: 'Hot Start', value: '< 1s' }
      ],
      cellular: [
        { label: 'Technology', value: 'LTE Cat 1/GSM' }
      ],
      power: [
        { label: 'Input Voltage', value: '6 - 30 V DC' },
        { label: 'Power Consumption', value: '< 2 mA (Ultra Deep Sleep)' }
      ],
      interface: [
        { label: 'Digital Inputs', value: '1' },
        { label: 'Digital Outputs', value: '1' }
      ],
      physical: [
        { label: 'Dimensions', value: '79 x 43 x 12 mm' },
        { label: 'Weight', value: '54 g' }
      ]
    },
    compat: ['Car', 'Bike', 'Scooter'],
    image: '/products/lite-4g.png'
  }
];
