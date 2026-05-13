import { trackers } from './products/trackers';
import { dashcams } from './products/dashcams';
import { sensors } from './products/sensors';
import { accessories } from './products/accessories';
import { Product, ProductSpec, FAQ, Download, InstallationMethod, SubscriptionCompatibility } from './products/types';

export const products: Product[] = [
  ...trackers,
  ...dashcams,
  ...sensors,
  ...accessories
];

export { trackers, dashcams, sensors, accessories };
export type { Product, ProductSpec, FAQ, Download, InstallationMethod, SubscriptionCompatibility };
