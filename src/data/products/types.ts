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

export interface SubscriptionPlan {
  name: string;
  duration: string;
  price: string;
  isPopular?: boolean;
}

export interface InTheBoxItem {
  name: string;
  quantity: string;
  icon?: string;
}

export interface ProductStat {
  value: string;
  label: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'Hardwired' | 'Wireless' | 'Battery Terminal' | 'Plug & Play' | 'Dash Cam' | 'Sensor' | 'Accessory';
  badge?: string;
  isBestSeller?: boolean;
  price: number;
  priceIncVat: number;
  subscriptionFrom: string;
  description: string;
  longDescription?: string;
  features: string[];
  specs: {
    connectivity?: ProductSpec[];
    gnss?: ProductSpec[];
    power?: ProductSpec[];
    physical?: ProductSpec[];
    features?: ProductSpec[];
    certifications?: ProductSpec[];
    inTheBox?: ProductSpec[];
    [key: string]: ProductSpec[] | undefined;
  };
  compat: string[];
  image: string;
  gallery?: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Pre-order';
  simDetails?: string;
  faqs?: FAQ[];
  downloads?: Download[];
  installationMethods?: InstallationMethod[];
  subscriptionPlans?: SubscriptionPlan[];
  inTheBox?: InTheBoxItem[];
  stats?: ProductStat[];
  relatedProducts?: string[]; 
}
