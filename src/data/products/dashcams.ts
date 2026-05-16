import { Product } from './types';

export const dashcams: Product[] = [
  {
    id: 'dash-pro',
    slug: 'dash-pro',
    name: 'Travio Vision PRO',
    tagline: 'Dual-lens AI dash cam with live remote viewing.',
    category: 'Dash Cam',
    price: 249,
    priceIncVat: 298.80,
    subscriptionFrom: '£9.99/mo',
    description: 'A professional-grade 4G dash cam featuring a road-facing 1080p lens and an inward-facing AI cabin camera. Instantly uploads crash footage to the cloud and allows fleet managers to view live video remotely.',
    features: [
      '1080p Full HD road-facing camera',
      'AI cabin camera for driver fatigue/distraction detection',
      'Live remote video streaming via 4G',
      'Automatic incident cloud upload',
      'Integrated GNSS for location overlay'
    ],
    specs: {
      camera: [
        { label: 'Front Lens', value: '140° FOV, 1080p @ 30fps' },
        { label: 'Cabin Lens', value: '120° FOV, 720p with IR Night Vision' },
        { label: 'Storage', value: 'Up to 256GB MicroSD' }
      ],
      cellular: [
        { label: 'Technology', value: '4G LTE Cat 4' }
      ],
      power: [
        { label: 'Input Voltage', value: '9 - 36 V DC' }
      ]
    },
    compat: ['Van', 'Truck', 'Fleet'],
    image: '/products/pro-4g.png', // Placeholder
    stockStatus: 'Pre-order'
  }
];
