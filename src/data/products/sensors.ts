import { Product } from './types';

export const sensors: Product[] = [
  {
    id: 'sensor-temp',
    name: 'Travio BLE Temperature Sensor',
    tagline: 'Wireless temperature monitoring for cold chain logistics.',
    category: 'Sensor',
    price: 35,
    subscriptionFrom: '£1.00/mo',
    description: 'A rugged Bluetooth Low Energy (BLE) sensor that broadcasts ambient temperature data to a compatible Travio tracker. Ideal for refrigerated vans and pharmaceutical transport.',
    features: [
      'Wireless Bluetooth 5.0 LE communication',
      'Up to 5 years battery life',
      'IP67 waterproof rating',
      'Transmission range up to 200 meters'
    ],
    specs: {
      sensor: [
        { label: 'Measurement Range', value: '-40°C to +85°C' },
        { label: 'Accuracy', value: '±0.5°C' }
      ]
    },
    compat: ['Travio ONE', 'Travio PRO'],
    image: '/products/pro-4g.png', // Placeholder
    stockStatus: 'In Stock'
  }
];
