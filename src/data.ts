import { ServiceItem, IndustryItem, FleetVehicle, Testimonial, ProjectItem, FAQItem } from './types';

export const COMPANY_INFO = {
  name: 'Haulm Transport',
  phone: '+1 (902) 210-5062',
  phoneRaw: '19022105062',
  email: 'Haulmtransport@hotmail.com',
  address: '71 Simmonds Rd, North Preston, NS B2Z 1A3',
  serviceArea: 'Halifax Regional Municipality (HRM), Dartmouth, Cape Breton, Truro, Annapolis Valley, and across Nova Scotia',
  hours: [
    { days: 'Monday - Friday', times: '6:00 AM - 6:00 PM' },
    { days: 'Saturday', times: '7:00 AM - 2:00 PM' },
    { days: 'Sunday', times: 'Emergency & Scheduled Infrastructure Support Only (24Hr)' }
  ],
  logoUrl: '/logo.png?v=7'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'aggregate-hauling',
    title: 'Aggregate Hauling',
    description: 'Reliable delivery of gravel, sand, crushed stone, and slag from local quarries straight to your active project site.',
    fullDetails: [
      'Gravel (all sizes & grades: A, B, clear, crusher run)',
      'Crushed Stone (limestone, recycled concrete aggregates)',
      'High-quality Sand (concrete, brick, fill, cable sand)',
      'Industrial Slag and specialized aggregate materials',
      'Direct quarry-to-site supply chain management'
    ],
    iconName: 'Layers',
    image: '/aggregate_hauling.jpg?v=2'
  },
  {
    id: 'earth-moving',
    title: 'Earth Moving & Site Materials',
    description: 'Bulk delivery and clean-fill transport of topsoil, clay, fill dirt, and excavated rock for grading and site preparation.',
    fullDetails: [
      'Premium screened Topsoil for landscaping and parks',
      'Structural Fill Dirt and clay for grading operations',
      'Excavated Rock hauling and mass earthworks coordination',
      'Clean fill relocation with full environmental manifest support',
      'Precision volume scheduling for continuous excavator support'
    ],
    iconName: 'TrendingDown',
    image: '/earth_moving.jpg?v=1'
  },
  {
    id: 'construction-waste',
    title: 'Construction Waste Removal',
    description: 'Safe and prompt removal of concrete debris, asphalt millings, demolition waste, and scrap metal from job sites.',
    fullDetails: [
      'Heavy Concrete Debris hauling (reinforced or clean)',
      'Asphalt Millings and roadway excavation transport',
      'Demolition Waste haulage to licensed recycling facilities',
      'Scrap Metal and heavy structural waste disposal',
      'Nova Scotia Environment & Climate Change (NSECC) compliant manifest logging'
    ],
    iconName: 'Trash2',
    image: '/construction_waste.jpg?v=1'
  },
  {
    id: 'seasonal-services',
    title: 'Seasonal Material Delivery',
    description: 'Year-round support including bulk mulch delivery, commercial road salt haulage, and municipal winter operations support.',
    fullDetails: [
      'Bulk Mulch and landscape compost delivery in spring/summer',
      'High-tonnage winter Road Salt transport to municipal yards',
      'Pre-season stockpiling and continuous refilling logistics',
      '24Hr support for emergency snow removal clearing and heavy haulage',
      'Specialized moisture-controlled material logistics'
    ],
    iconName: 'CloudSnow',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'site-support',
    title: 'Site Support Services',
    description: 'On-site continuous shuttle loops, excavator-to-stockpile transfers, and dedicated truck-by-the-hour contract operations.',
    fullDetails: [
      'Continuous shuttle service for active trenching and tunneling',
      'On-site materials stockpile relocation loops',
      'Integrated logistics synchronization with paving and milling fleets',
      'Hourly rate packages with experienced safety-certified operators',
      'Radio-dispatched vehicles for instant on-site routing adjustments'
    ],
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'construction',
    name: 'Construction Companies',
    description: 'Sourcing and moving high volumes of bulk aggregates, structural fill, and foundation sand for structural developments.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'general-contractors',
    name: 'General Contractors',
    description: 'Flexible hauling schedules that adapt to multi-phase commercial and residential structural projects.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'municipal',
    name: 'Municipal Infrastructure',
    description: 'Public roads, watermain excavations, salt stockpiling, and regional transit development support.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'landscaping',
    name: 'Landscaping Companies',
    description: 'Prompt delivery of topsoil, structural sub-bases, river rocks, premium decorative mulch, and sod foundations.',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'developers',
    name: 'Property Developers',
    description: 'Mass earthworks coordination, heavy site clearing, and aggregate delivery for large subdivisions and industrial parks.',
    iconName: 'HardHat',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'road-builders',
    name: 'Road Building Contractors',
    description: 'Synchronized gravel supply and immediate asphalt milling hauling for highway and street reconstruction.',
    iconName: 'Map',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'excavation',
    name: 'Excavation Companies',
    description: 'Fast, high-frequency dump truck shuttle loops to clear soil, clay, and fractured rock from deep foundation holes.',
    iconName: 'Construction',
    image: '/earth_moving.jpg?v=1'
  }
];

export const FLEET: FleetVehicle[] = [
  {
    id: 'tri-axle',
    name: 'Tri-Axle Dump Trucks',
    tagline: 'The heavy-lifter of urban and commercial job sites.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    capacity: '20 - 22 Metric Tons',
    bestFor: 'Medium to large commercial sites, municipal roadworks, and aggregate delivery with tight turning requirements.',
    specifications: {
      payloadCapacity: 'Up to 22,000 kg (48,500 lbs)',
      axleConfig: '3 Active Axles + 1 Lift Axle',
      volumeCapacity: '15 - 18 Cubic Yards',
      materialType: 'Heavy aggregates, soil, broken concrete, asphalt millings'
    }
  },
  {
    id: 'tandem',
    name: 'Tandem Dump Trucks',
    tagline: 'Excellent maneuverability for residential and tight urban slots.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
    capacity: '12 - 14 Metric Tons',
    bestFor: 'Residential driveways, tight municipal alleyways, landscaping deliveries, and light site-clearing support.',
    specifications: {
      payloadCapacity: 'Up to 14,000 kg (30,800 lbs)',
      axleConfig: 'Dual Rear Axles',
      volumeCapacity: '10 - 12 Cubic Yards',
      materialType: 'Topsoil, screened gravel, premium mulch, sand'
    }
  },
  {
    id: 'heavy-haul',
    name: 'Heavy Haul Multi-Axle Equipment',
    tagline: 'High-volume aggregate movement and industrial bulk transport.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    capacity: '30 - 36 Metric Tons',
    bestFor: 'Mass quarry-to-quarry transfers, mega-infrastructure developments, and massive landfill clean-fill operations.',
    specifications: {
      payloadCapacity: 'Up to 36,000 kg (79,300 lbs)',
      axleConfig: 'Multi-axle Trailer combination / Pony trains',
      volumeCapacity: '24 - 30 Cubic Yards',
      materialType: 'Dry run-of-mine aggregates, major infrastructure sub-base'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    company: 'Atlantic Infrastructure Group',
    role: 'Senior Project Manager',
    rating: 5,
    content: 'Haulm Transport is our primary choice for dump truck logistics across Nova Scotia. During the Highway 102 expansion project, they supplied over 15,000 tons of clear stone on an absolute clockwork schedule. Not a single delayed load.',
    date: 'June 14, 2026'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    company: 'Halifax Landscaping & Excavating',
    role: 'Operations Director',
    rating: 5,
    content: 'Their tandem fleet is fantastic for residential grading jobs. Operators are safe, polite, and can back into tight spaces without hitting trees or structures. Excellent pricing and super fast quote delivery.',
    date: 'May 28, 2026'
  },
  {
    id: 't3',
    name: 'Arthur Pendelton',
    company: 'Halifax Regional Municipality - Public Works',
    role: 'Contracts Supervisor',
    rating: 5,
    content: 'We contracted Haulm for our seasonal watermain aggregate delivery and emergency road salt storage. Their safety standards and commercial manifest transparency are impeccable. Fully insured and highly professional.',
    date: 'April 10, 2026'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Highway 102 Corridor Upgrade',
    category: 'Infrastructure',
    location: 'Halifax, NS',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
    stats: '12,500 Tons of Asphalt Millings Removed'
  },
  {
    id: 'p2',
    title: 'Dartmouth Commercial Excavation',
    category: 'Commercial excavation',
    location: 'Dartmouth, NS',
    image: '/earth_moving.jpg?v=1',
    stats: '8,200 Cubic Yards of Clay Hauled'
  },
  {
    id: 'p3',
    title: 'Bedford Subdivision Earthworks Prep',
    category: 'Residential Development',
    location: 'Bedford, NS',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    stats: '15,000 Tons of Base Gravel Delivered'
  },
  {
    id: 'p4',
    title: 'Regional Quarry Supply Link',
    category: 'Aggregate Logistics',
    location: 'Truro Quarry to HRM Sites',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    stats: 'Continuous Daily Supply Loops'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is your service area across Nova Scotia?',
    answer: 'We serve the Halifax Regional Municipality (HRM), Dartmouth, Bedford, Sackville, Truro, Cape Breton, Annapolis Valley, South Shore, and surrounding regions across Nova Scotia.'
  },
  {
    question: 'How do you structure your hauling rates?',
    answer: 'We offer two primary pricing models: Hourly Rates (ideal for local site support, short shuttle loops, and excavator-dependent work) and Per-Ton/Per-Load Rates (excellent for bulk aggregate deliveries directly from quarries to commercial sites).'
  },
  {
    question: 'Are your trucks and drivers fully licensed and insured in Nova Scotia?',
    answer: 'Absolutely. Every truck in the Haulm Transport fleet is fully registered with commercial licensing, NSTIR / Nova Scotia Public Works vehicle compliance, and comprehensive liability insurance. All operators are thoroughly safety-trained.'
  },
  {
    question: 'Can you deliver materials directly from specific quarries?',
    answer: 'Yes. We maintain excellent, long-standing relationships with major Nova Scotia quarries, allowing us to pick up and deliver certified crushed stone, granite, gravel, concrete sand, and topsoil at highly competitive trade prices.'
  },
  {
    question: 'What is the minimum load size you can deliver?',
    answer: 'Our standard tandem trucks carry up to 12 metric tons (approx. 10 cubic yards). We specialize in bulk commercial haulage, so our minimum pricing structures generally start at full tandem loads.'
  },
  {
    question: 'Do you offer emergency or after-hours hauling support?',
    answer: 'Yes. We support active civil infrastructure and municipal projects with 24Hr night-shift hauling, weekend paving links, and emergency winter road-salt logistics.'
  }
];
