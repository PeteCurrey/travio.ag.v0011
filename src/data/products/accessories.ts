import { Product } from './types';

export const accessories: Product[] = [
  {
    id: 'can-control',
    slug: 'can-control',
    name: 'CAN-CONTROL Adapter',
    tagline: 'Unlock deep vehicle data and control.',
    category: 'Accessory',
    price: 45,
    priceIncVat: 54,
    subscriptionFrom: 'N/A',
    description: 'An adapter module that interfaces between the Travio PRO tracker and your vehicle\'s CAN bus, allowing read access to fuel levels, odometer, and fault codes, plus write access to central locking and windows on supported models.',
    features: [
      'Read exact fuel level and odometer directly from the dashboard',
      'Read engine RPM and accelerator pedal position',
      'Control vehicle doors remotely (on supported models)',
      'Read diagnostic trouble codes (DTCs)'
    ],
    specs: {
      physical: [
        { label: 'Compatibility', value: 'Over 1500 vehicle models supported' }
      ]
    },
    compat: ['Travio PRO'],
    image: '/products/pro-4g.png', // Placeholder
    stockStatus: 'In Stock'
  }
];
