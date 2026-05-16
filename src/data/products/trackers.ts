import { Product } from './types';

export const trackers: Product[] = [
  {
    id: 'one',
    slug: 'one',
    name: 'TRAVIO ONE',
    tagline: 'Engineered for reliability and discretion.',
    category: 'Hardwired',
    badge: 'HARDWIRED',
    isBestSeller: true,
    price: 89,
    priceIncVat: 106.80,
    subscriptionFrom: '£4.99/mo',
    description: 'Engineered for reliability and discretion. The Travio ONE uses enterprise-grade Teltonika FMC920 hardware — 4G LTE Cat 1 with automatic 2G fallback, multi-constellation GNSS accurate to under 2.5 metres. In a chassis just 12mm tall, it hides anywhere, works everywhere.',
    features: [
      '4G LTE real-time tracking with automatic 2G fallback — always connected',
      'Remote engine immobiliser — disable your vehicle via app or SMS',
      'Crash and tow detection with instant push notification alerts',
      'Unlimited geofence zones with configurable entry/exit alerts',
      '90-day journey history with full speed and route data playback'
    ],
    specs: {
      connectivity: [
        { label: 'Network', value: '4G LTE Cat 1 + 2G (GSM/GPRS) fallback' },
        { label: 'Module', value: 'Teltonika FMC920 / Quectel EG915U-EU' },
        { label: 'SIM', value: 'Micro-SIM (pre-installed Global Connect M2M SIM)' },
        { label: 'Bluetooth', value: '4.0 + LE' }
      ],
      gnss: [
        { label: 'Supported Systems', value: 'GPS · GLONASS · BeiDou · Galileo · SBAS · QZSS · DGPS · AGPS' },
        { label: 'Receiver', value: '33-channel high-gain internal antenna' },
        { label: 'Tracking Sensitivity', value: '−165 dBm' },
        { label: 'Positional Accuracy', value: '< 2.5 m CEP' },
        { label: 'Cold Start', value: '< 30 seconds typical' }
      ],
      power: [
        { label: 'Input Voltage', value: '10 – 30 V DC' },
        { label: 'Active Draw', value: '90 mA' },
        { label: 'Sleep Draw', value: '25 mA' },
        { label: 'Backup Battery', value: '170 mAh Li-Ion (reports during power loss)' }
      ],
      physical: [
        { label: 'Dimensions', value: '79 × 43 × 12 mm' },
        { label: 'Weight', value: '54 g' },
        { label: 'IP Rating', value: 'IP54 (splash-proof)' },
        { label: 'Operating Temp', value: '−40°C to +85°C' }
      ],
      features: [
        { label: 'Remote Immobiliser', value: '✓' },
        { label: 'Crash Detection', value: '✓' },
        { label: 'Towing Detection', value: '✓' },
        { label: 'Geofencing', value: '✓ Unlimited zones' },
        { label: 'Journey History', value: '✓ 90 days' },
        { label: 'Green Driving Score', value: '✓' },
        { label: 'Overspeed Alert', value: '✓' },
        { label: 'Jamming Detection', value: '✓' },
        { label: 'Bluetooth Sensors', value: '✓ Temperature, humidity, liquid level' },
        { label: 'FOTA Updates', value: '✓' }
      ],
      certifications: [
        { label: 'Standards', value: 'CE · UKCA · E-Mark · RoHS · REACH' }
      ],
      inTheBox: [
        { label: 'Package Contents', value: 'Travio ONE device (FMC920) × 1 / Power cable with 4-pin connector × 1 / Installation guide × 1 / Pre-installed M2M SIM × 1' }
      ]
    },
    compat: ['Car', 'Van', 'Motorbike', 'Motorhome'],
    image: '/products/one.png',
    stockStatus: 'In Stock',
    subscriptionPlans: [
      { name: 'Basic Annual', duration: 'paid annually', price: '£4.99/mo' },
      { name: 'Standard Quarterly', duration: 'paid quarterly', price: '£6.49/mo', isPopular: true },
      { name: 'Pay Monthly', duration: 'paid monthly', price: '£7.99/mo' }
    ],
    inTheBox: [
      { name: 'Travio ONE device (FMC920)', quantity: '1', icon: 'HardDrive' },
      { name: 'Power cable (4-pin)', quantity: '1', icon: 'Plug' },
      { name: 'Installation guide', quantity: '1', icon: 'Info' },
      { name: 'Pre-installed M2M SIM', quantity: '1', icon: 'Cpu' }
    ],
    stats: [
      { value: '2.5m', label: 'GPS Accuracy' },
      { value: '< 30 sec', label: 'Theft alert delivery' },
      { value: '90 days', label: 'Journey history stored' }
    ],
    faqs: [
      { question: 'Will this affect my car battery?', answer: 'No. In sleep mode the Travio ONE draws only 25mA — far less than your factory alarm or dashboard clock. It will not drain your battery even after weeks of non-use.' },
      { question: 'Do I need a subscription to track?', answer: 'For real-time tracking, alerts, and journey history you need a data plan from £4.99/mo. For basic location by SMS command only, no subscription is required — just insert a SIM with SMS capability.' },
      { question: 'Can I install it myself?', answer: 'Yes. Most customers self-install in 20–30 minutes using our included guide and video walkthrough. We also offer nationwide professional installation.' },
      { question: 'What network does it use?', answer: '4G LTE Cat 1, with automatic fallback to 2G. The pre-installed Global Connect M2M SIM automatically connects to the strongest signal across O2, Vodafone, EE, and Three.' }
    ],
    installationMethods: [
      {
        name: 'Hardwired Installation',
        description: 'Step 1 — Locate the fuse box (usually under the dashboard or in the boot)\nStep 2 — Connect the red wire to a constant 12V supply, black to earth\nStep 3 — Connect the yellow wire to ignition-switched live (for ignition detection)\nStep 4 — Route and secure the device in a hidden location — behind the dash panel is ideal\nStep 5 — Power on the vehicle and check the LED status light: solid green = GPS locked, blinking = searching\nStep 6 — Open the Travio app, add the device using the IMEI number printed on the label',
        difficulty: 'Medium',
        timeRequired: '20–30 minutes'
      }
    ],
    relatedProducts: ['pro', 'plug']
  },
  {
    id: 'pro',
    slug: 'pro',
    name: 'TRAVIO PRO',
    tagline: 'Professional fleet standard.',
    category: 'Hardwired',
    badge: 'HARDWIRED',
    isBestSeller: false,
    price: 139,
    priceIncVat: 166.80,
    subscriptionFrom: '£5.99/mo',
    description: 'Everything the ONE does, plus CAN bus data reading, multi-channel I/O, fuel monitoring, and advanced driver behaviour analytics. Built on the Teltonika FMC130 — the professional fleet standard. For van operators, motorhome owners, and anyone who wants the full picture.',
    features: [
      'All Travio ONE features plus advanced vehicle data via CAN adapter',
      'Accurate fuel consumption monitoring — detect inefficiency or theft',
      'Full driver behaviour scoring: braking, acceleration, cornering, idle time',
      'Door, alarm, seatbelt, and panic button status via configurable inputs',
      'Multi-vehicle fleet dashboard — manage unlimited vehicles from one account'
    ],
    specs: {
      connectivity: [
        { label: 'Network', value: '4G LTE Cat 1 + 3G (UMTS) + 2G (GSM/GPRS) fallback' },
        { label: 'Module', value: 'Teltonika FMC130' },
        { label: 'SIM', value: 'Nano-SIM (pre-installed Global Connect M2M SIM)' },
        { label: 'Bluetooth', value: '4.0 + LE' }
      ],
      gnss: [
        { label: 'Supported Systems', value: 'GPS · GLONASS · BeiDou · Galileo · SBAS · QZSS' },
        { label: 'Positional Accuracy', value: '< 2.5 m CEP' },
        { label: 'Tracking Sensitivity', value: '−165 dBm' }
      ],
      power: [
        { label: 'Input Voltage', value: '10 – 30 V DC' },
        { label: 'Backup Battery', value: 'Internal Li-Ion' }
      ],
      physical: [
        { label: 'Dimensions', value: '87 × 46 × 22 mm' },
        { label: 'Weight', value: '75 g' },
        { label: 'IP Rating', value: 'IP41 (indoor mount)' },
        { label: 'Operating Temp', value: '−40°C to +85°C' }
      ],
      features: [
        { label: 'CAN Bus Data Reading', value: '✓ (with optional CAN adapter)' },
        { label: 'Fuel Level Monitoring', value: '✓ Analog input + sensor' },
        { label: 'Door/Window Status', value: '✓ Via digital inputs' },
        { label: 'Driver Behaviour Score', value: '✓ Advanced — configurable thresholds' },
        { label: 'Tachograph Data', value: '✓ Via RS232 accessory' },
        { label: 'Multi-Vehicle Fleet View', value: '✓ Unlimited vehicles on one account' },
        { label: 'All Travio ONE features', value: '✓' }
      ],
      certifications: [
        { label: 'Standards', value: 'CE · UKCA · E-Mark · FCC · RoHS · REACH' }
      ],
      inTheBox: [
        { label: 'Package Contents', value: 'Travio PRO device (FMC130) × 1 / Power cable harness (6-pin) × 1 / Professional installation guide × 1 / Pre-installed M2M SIM × 1 / Warranty documentation × 1' }
      ]
    },
    compat: ['Car', 'Van', 'Motorhome', 'Plant'],
    image: '/products/pro.png',
    stockStatus: 'In Stock',
    subscriptionPlans: [
      { name: 'Professional Annual', duration: 'paid annually', price: '£5.99/mo' },
      { name: 'Professional Quarterly', duration: 'paid quarterly', price: '£7.49/mo' },
      { name: 'Pay Monthly', duration: 'paid monthly', price: '£9.99/mo' }
    ],
    inTheBox: [
      { name: 'Travio PRO device (FMC130)', quantity: '1', icon: 'HardDrive' },
      { name: 'Power cable harness (6-pin)', quantity: '1', icon: 'Plug' },
      { name: 'Professional installation guide', quantity: '1', icon: 'Info' },
      { name: 'Pre-installed M2M SIM', quantity: '1', icon: 'Cpu' },
      { name: 'Warranty documentation', quantity: '1', icon: 'Shield' }
    ],
    stats: [
      { value: 'CAN Bus', label: 'Data Integration' },
      { value: '3x DOUT', label: 'Accessory Control' },
      { value: 'Multi-Network', label: 'Global Coverage' }
    ],
    installationMethods: [
      {
        name: 'Professional Installation',
        description: 'Professional installation strongly recommended to use all features. We offer a nationwide fitment service — book via the app or call our UK team.',
        difficulty: 'Hard',
        timeRequired: '2-3 Hours'
      }
    ],
    relatedProducts: ['one', 'silent']
  },
  {
    id: 'silent',
    slug: 'silent',
    name: 'TRAVIO SILENT',
    tagline: 'Up to 3 years on a single battery.',
    category: 'Wireless',
    badge: 'WIRELESS',
    isBestSeller: false,
    price: 99,
    priceIncVat: 118.80,
    subscriptionFrom: '£3.99/mo',
    description: 'Designed to be dormant. A sleeping tracker is invisible to the jammers and signal detectors thieves use. The Travio SILENT (Teltonika TAT140) wakes only to report — then vanishes back into silence. No wires. Up to 3 years on a single battery. IP68 waterproof. Magnetically mounts anywhere in 30 seconds.',
    features: [
      'Up to 3-year battery life — no wires, no charging, no maintenance required',
      'IP68 rated — fully waterproof, dustproof, and survives submersion',
      'Sleep mode makes it invisible to signal-detection equipment used by thieves',
      'Recovery mode — if tampered with, it switches to urgent rapid reporting',
      'LBS cell tower fallback — approximate location even inside garages and buildings'
    ],
    specs: {
      connectivity: [
        { label: 'Network', value: '4G LTE Cat 1 + 2G (GSM/GPRS) fallback' },
        { label: 'Module', value: 'Teltonika TAT140 / Quectel EG915U' },
        { label: 'Bluetooth', value: '5.0 + LE' },
        { label: 'LBS', value: '✓ Cell tower triangulation when GNSS unavailable' }
      ],
      gnss: [
        { label: 'Supported Systems', value: 'GPS · GLONASS · BeiDou · Galileo · SBAS · QZSS' },
        { label: 'Positional Accuracy', value: '< 2.5 m CEP' },
        { label: 'Tracking Sensitivity', value: '−165 dBm' }
      ],
      power: [
        { label: 'Type', value: '2200 mAh Li-SOCl2 (2 cells, 7.2V) — Lithium Thionyl Chloride' },
        { label: 'Standby Life', value: 'Up to 3 YEARS (reporting once daily when stationary)' },
        { label: 'Active Life', value: 'Up to 6 months (reporting every 15 minutes when moving)' },
        { label: 'Technology', value: 'Extremely low self-discharge — does not drain simply from sitting' },
        { label: 'Replacement', value: 'User-replaceable battery available separately' }
      ],
      physical: [
        { label: 'Dimensions', value: '78 × 63 × 28 mm' },
        { label: 'Weight', value: '115 g (with batteries)' },
        { label: 'IP Rating', value: 'IP68 — fully waterproof, dustproof, submersion-rated' },
        { label: 'Operating Temp', value: '−35°C to +75°C' },
        { label: 'Mounting', value: '4 options — Magnetic / M4 screw / Cable tie / Free placement' }
      ],
      features: [
        { label: 'Motion Wake-Up', value: '✓ Accelerometer — wakes on movement, sleeps when still' },
        { label: 'Recovery Mode', value: '✓ Tamper/removal triggers rapid frequent reporting' },
        { label: 'Tamper Detection', value: '✓ Alert on unauthorised movement or removal' },
        { label: 'Geofencing', value: '✓ Enter/exit alerts' },
        { label: 'Periodic Tracking', value: '✓ Configurable from every 10 seconds to once per day' },
        { label: 'LBS Indoor Location', value: '✓ Approximate location without GNSS fix' },
        { label: 'Bluetooth Sensors', value: '✓ BLE 5.0 — temperature, humidity, door sensors' },
        { label: 'SMS Commands', value: '✓ Full standalone operation without subscription' },
        { label: 'FOTA Updates', value: '✓' },
        { label: 'Sleep Scheduler', value: '✓ Active tracking windows with timezone support' }
      ],
      certifications: [
        { label: 'Standards', value: 'CE · UKCA · RoHS · REACH · IP68 Certified' }
      ],
      inTheBox: [
        { label: 'Package Contents', value: 'Travio SILENT device (TAT140) × 1 / Magnetic mount holder × 1 / Screw mount bracket × 1 / Quick start guide × 1' }
      ]
    },
    compat: ['Van', 'Motorhome', 'Caravan', 'Plant', 'Boat'],
    image: '/products/silent.png',
    stockStatus: 'In Stock',
    subscriptionPlans: [
      { name: 'Lite Annual', duration: 'paid annually', price: '£3.99/mo', isPopular: true },
      { name: 'Lite Quarterly', duration: 'paid quarterly', price: '£4.99/mo' },
      { name: 'Pay Monthly', duration: 'paid monthly', price: '£5.99/mo' }
    ],
    inTheBox: [
      { name: 'Travio SILENT device (TAT140)', quantity: '1', icon: 'HardDrive' },
      { name: 'Magnetic mount holder', quantity: '1', icon: 'Settings' },
      { name: 'Screw mount bracket', quantity: '1', icon: 'Settings' },
      { name: 'Quick start guide', quantity: '1', icon: 'Info' }
    ],
    stats: [
      { value: '3 Years', label: 'Battery Life' },
      { value: 'IP68', label: 'Submersion Rated' },
      { value: 'Magnetic', label: 'Instant Mount' }
    ],
    installationMethods: [
      {
        name: 'Wireless Installation',
        description: 'Step 1 — Choose your mounting location (hidden inside a storage compartment, under a wheel arch, behind a panel)\nStep 2 — Attach the magnetic mount to a metal surface — it clicks into place securely\nStep 3 — Alternatively, use the screw bracket or cable tie mounts for non-magnetic surfaces\nStep 4 — Insert the pre-installed SIM and power on using the button\nStep 5 — Register the device in the Travio app using the IMEI on the label',
        difficulty: 'Easy',
        timeRequired: 'Under 2 minutes'
      }
    ],
    relatedProducts: ['one', 'volt']
  },
  {
    id: 'volt',
    slug: 'volt',
    name: 'TRAVIO VOLT',
    tagline: 'Clamps directly to the battery terminal.',
    category: 'Battery Terminal',
    badge: 'BATTERY TERMINAL',
    isBestSeller: false,
    price: 69,
    priceIncVat: 82.80,
    subscriptionFrom: '£3.99/mo',
    description: 'Clamps directly to the vehicle battery terminal — no cutting wires, no drilling, no professionals needed. IP65 waterproof. Built on the Teltonika FMT100, it has the class\'s largest internal GNSS antenna and a 3-axis gyroscope for real crash and tip-over detection. Made for bikes, classics, quads, and anything with a battery.',
    features: [
      'Battery terminal clamp — installs in 5 minutes with zero wire-cutting',
      'IP65 waterproof — designed to survive rain, road spray, and mud',
      'Gyroscope + accelerometer crash detection — detects motorbike tip-overs',
      'Largest internal GNSS antenna in class — precise even under bonnets',
      'Bluetooth — pairs with temperature, tilt, and OBDII Bluetooth sensors'
    ],
    specs: {
      connectivity: [
        { label: 'Network', value: '2G GSM/GPRS (Quad-band — works across Europe and worldwide)' },
        { label: 'SIM', value: 'Micro-SIM (pre-installed M2M SIM)' },
        { label: 'Bluetooth', value: '4.0 + LE (supports OBDII dongle, temperature sensors, headset)' }
      ],
      gnss: [
        { label: 'Supported Systems', value: 'GPS · GLONASS · BeiDou · Galileo · SBAS · QZSS · DGPS · AGPS' },
        { label: 'Antenna', value: 'Internal HIGH GAIN — Teltonika\'s largest internal GNSS antenna in class' },
        { label: 'Positional Accuracy', value: '< 2.5 m CEP' },
        { label: 'Tracking Sensitivity', value: '−165 dBm' }
      ],
      power: [
        { label: 'Connection', value: 'Battery terminal clamp (12V/24V)' },
        { label: 'Input Voltage', value: '10 – 30 V DC' },
        { label: 'Backup Battery', value: '170 mAh Li-Po internal' },
        { label: 'Connector', value: 'Special clamp connector included — fast, no-cut connection' }
      ],
      physical: [
        { label: 'Dimensions', value: '92.5 × 57.6 × 14 mm' },
        { label: 'Weight', value: '63 g' },
        { label: 'IP Rating', value: 'IP65 — waterproof, dustproof, pressure-wash safe' },
        { label: 'Operating Temp', value: '−40°C to +85°C' }
      ],
      features: [
        { label: 'Crash Detection', value: '✓ Gyroscope + accelerometer — RTA impacts AND motorbike tip-overs' },
        { label: 'Towing Detection', value: '✓' },
        { label: 'Unplug Detection', value: '✓ Alert if device disconnected' },
        { label: 'Green Driving', value: '✓' },
        { label: 'Geofencing', value: '✓' },
        { label: 'Journey History', value: '✓ 90 days' },
        { label: 'Overspeed Alert', value: '✓' },
        { label: 'Jamming Detection', value: '✓' },
        { label: 'GNSS Fuel Counter', value: '✓ Distance-based fuel estimation' },
        { label: 'Bluetooth Sensors', value: '✓ Temperature, humidity, OBDII, universal BLE' }
      ],
      certifications: [
        { label: 'Standards', value: 'CE · UKCA · E-Mark · EAC · RoHS · REACH · IP65 Rated' }
      ],
      inTheBox: [
        { label: 'Package Contents', value: 'Travio VOLT device (FMT100) × 1 / Battery clamp connector cable × 1 / Cable tie mounts × 2 / Installation guide × 1' }
      ]
    },
    compat: ['Car', 'Motorbike', 'Classic Car', 'Van', 'Boat', 'ATV'],
    image: '/products/volt.png',
    stockStatus: 'In Stock',
    subscriptionPlans: [
      { name: 'Basic Annual', duration: 'paid annually', price: '£3.99/mo' },
      { name: 'Basic Quarterly', duration: 'paid quarterly', price: '£4.99/mo' },
      { name: 'Pay Monthly', duration: 'paid monthly', price: '£5.99/mo' }
    ],
    inTheBox: [
      { name: 'Travio VOLT device (FMT100)', quantity: '1', icon: 'HardDrive' },
      { name: 'Battery clamp connector cable', quantity: '1', icon: 'Plug' },
      { name: 'Cable tie mounts', quantity: '2', icon: 'Settings' },
      { name: 'Installation guide', quantity: '1', icon: 'Info' }
    ],
    stats: [
      { value: '5 Min', label: 'Installation' },
      { value: 'IP65', label: 'Weatherproof' },
      { value: 'Gyro', label: 'Crash Detection' }
    ],
    installationMethods: [
      {
        name: 'Battery Terminal Installation',
        description: 'Step 1 — Open the bonnet or access the vehicle battery\nStep 2 — Attach the red clamp to the positive (+) terminal\nStep 3 — Attach the black clamp to the negative (−) terminal\nStep 4 — Route the device to a hidden but accessible location\nStep 5 — Secure with cable ties — use the included mounts for a clean finish\nStep 6 — Register in the Travio app using the IMEI on the device label',
        difficulty: 'Easy',
        timeRequired: '5 minutes'
      }
    ],
    relatedProducts: ['one', 'silent']
  },
  {
    id: 'plug',
    slug: 'plug',
    name: 'TRAVIO PLUG',
    tagline: 'Plugs into any 12V cigarette lighter socket.',
    category: 'Plug & Play',
    badge: 'PLUG & PLAY',
    isBestSeller: false,
    price: 49,
    priceIncVat: 58.80,
    subscriptionFrom: '£2.99/mo',
    description: 'Plugs into any 12V cigarette lighter socket. No tools. No wiring. No installation. Just plug in, open the app, and your vehicle is on the map in under 30 seconds. Built on the Teltonika FMP100 with Bluetooth sensors, a backup battery, and a USB charging output so it doubles as your car charger.',
    features: [
      'Plugs into any 12V cigarette lighter socket — zero installation',
      'Built-in backup battery — keeps tracking if removed from the socket',
      'USB output — charges your phone simultaneously, no extra adaptors',
      'Bluetooth — pairs with temperature and movement sensors',
      'Overvoltage protection — safe in all standard UK vehicles'
    ],
    specs: {
      connectivity: [
        { label: 'Network', value: '2G GSM/GPRS (Quad-band: B2, B3, B5, B8)' },
        { label: 'Note', value: 'UK 2G networks remain active. Check coverage in your area if rural.' },
        { label: 'SIM', value: 'Micro-SIM (pre-installed M2M SIM)' },
        { label: 'Bluetooth', value: '4.0 + LE' }
      ],
      gnss: [
        { label: 'Supported Systems', value: 'GPS · GLONASS · BeiDou · Galileo' },
        { label: 'Positional Accuracy', value: '< 3 m CEP' }
      ],
      power: [
        { label: 'Connection', value: '12V/24V cigarette lighter socket' },
        { label: 'Backup Battery', value: '170 mAh Li-Ion internal' },
        { label: 'USB Output', value: '5V / 1A — phone charging port' }
      ],
      physical: [
        { label: 'Form', value: 'Cigarette lighter form factor' },
        { label: 'Weight', value: '~50 g' },
        { label: 'IP Rating', value: 'IP31 — indoor/vehicle use' },
        { label: 'Operating Temp', value: '−20°C to +65°C' }
      ],
      features: [
        { label: 'Real-Time Tracking', value: '✓' },
        { label: 'Geofencing', value: '✓' },
        { label: 'Journey History', value: '✓' },
        { label: 'Overspeed Alert', value: '✓' },
        { label: 'Jamming Detection', value: '✓' },
        { label: 'Virtual Odometer', value: '✓' },
        { label: 'Bluetooth Sensors', value: '✓' },
        { label: 'USB Phone Charging', value: '✓ 5V/1A' },
        { label: 'Overvoltage Protection', value: '✓' },
        { label: 'SMS Commands', value: '✓' },
        { label: 'FOTA Updates', value: '✓' }
      ],
      certifications: [
        { label: 'Standards', value: 'CE · RoHS · REACH' }
      ],
      inTheBox: [
        { label: 'Package Contents', value: 'Travio PLUG device (FMP100) × 1 / Quick start card × 1 / Pre-installed M2M SIM × 1' }
      ]
    },
    compat: ['Car', 'Van', 'Motorhome', 'Boat', 'Caravan'],
    image: '/products/plug.png',
    stockStatus: 'In Stock',
    subscriptionPlans: [
      { name: 'Lite Annual', duration: 'paid annually', price: '£2.99/mo', isPopular: true },
      { name: 'Lite Quarterly', duration: 'paid quarterly', price: '£3.99/mo' },
      { name: 'Pay Monthly', duration: 'paid monthly', price: '£4.99/mo' }
    ],
    inTheBox: [
      { name: 'Travio PLUG device (FMP100)', quantity: '1', icon: 'HardDrive' },
      { name: 'Quick start card', quantity: '1', icon: 'Info' },
      { name: 'Pre-installed M2M SIM', quantity: '1', icon: 'Cpu' }
    ],
    stats: [
      { value: '30 Sec', label: 'Installation' },
      { value: 'USB', label: 'Phone Charging' },
      { value: 'Plug & Play', label: 'Zero Tools' }
    ],
    installationMethods: [
      {
        name: 'Plug & Play Installation',
        description: 'Step 1 — Insert the pre-installed SIM into the SIM tray (already done in factory — just confirm it\'s seated)\nStep 2 — Plug the Travio PLUG into your vehicle\'s 12V cigarette lighter socket\nStep 3 — The LED will flash — device is searching for GPS signal\nStep 4 — Open the Travio app and add the device using the IMEI on the label\nStep 5 — Once the LED is solid, your vehicle is live on the map',
        difficulty: 'Easy',
        timeRequired: '30 seconds'
      }
    ],
    relatedProducts: ['one', 'volt']
  }
];
