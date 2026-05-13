export interface ProductSpec {
  label: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Download {
  name: string;
  url: string;
  type: 'pdf' | 'video' | 'software';
}

export interface InstallationMethod {
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeRequired: string;
  toolsNeeded?: string[];
}

export interface SubscriptionCompatibility {
  planId: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Hardwired' | 'Wireless' | 'Battery Terminal' | 'Plug & Play' | 'Dash Cam' | 'Sensor' | 'Accessory';
  price: number;
  subscriptionFrom: string;
  description: string;
  longDescription?: string;
  features: string[];
  specs: {
    gnss?: ProductSpec[];
    cellular?: ProductSpec[];
    power?: ProductSpec[];
    interface?: ProductSpec[];
    physical?: ProductSpec[];
    camera?: ProductSpec[]; // For dash cams
    sensor?: ProductSpec[]; // For sensors
  };
  compat: string[];
  image: string;
  gallery?: string[];
  
  // New Enhanced Fields
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Pre-order';
  simDetails?: string;
  faqs?: FAQ[];
  downloads?: Download[];
  installationMethods?: InstallationMethod[];
  compatibleSubscriptions?: SubscriptionCompatibility[];
  relatedProducts?: string[]; // IDs of related products
}
