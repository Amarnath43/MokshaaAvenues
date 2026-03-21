import { 
  Bus, 
  TrainFront, 
  MapPin, 
  Hospital, 
  School, 
  GraduationCap, 
  Building2, 
  TreePine, 
  Film, 
  Navigation, 
  Fuel, 
  TramFront 
} from 'lucide-react';

export const COMPANY = {
  name: 'Mokshaa Avenues Pvt. Ltd.',
  project: 'MND Avenue',
  phone: '+917780579811',
  email: 'info@mokshaaavenues.com',
  address: '12/A, MIGH, 1st Floor, SR Nagar, Hyderabad, Telangana',
  siteAddress: 'Near Medchal Bus Station, Medchal Court Road, Hyderabad',
  hmda: '006024/LO/HMDA/1287/MED/2023',
  visitHours: 'Monday – Sunday: 9:00 AM – 6:00 PM',
}

export const APPROVALS = [
  { icon: '🏛️', label: 'HMDA Approved', value: `L.P No.: ${COMPANY.hmda}` },
  { icon: '📋', label: 'TG RERA',        value: 'Telangana RERA Registered' },
  { icon: '🏦', label: 'Bank Finance',   value: 'All Leading Banks Available' },
  { icon: '📝', label: 'Registration',   value: 'Clear Title & Spot Registration' },
  { icon: '🧭', label: 'Vastu',          value: 'Designed as per Vastu Shastra' },
]

export const HIGHLIGHTS = [
  { icon: '🏛️', title: 'HMDA Approved Layout',       desc: 'Fully approved by HMDA — zero legal risk, 100% safe investment.'},
  { icon: '🛣️', title: '30 Feet Wide BT Road',       desc: 'All internal roads are 30 ft wide, Black Topped — smooth access to every plot.'},
  { icon: '🏠', title: 'Residential Zone — R1',      desc: 'Premium R1 residential classification ensuring a clean, peaceful neighbourhood.' },
  { icon: '💧', title: 'Underground Drainage',       desc: 'Complete underground drainage with modern septic tank infrastructure.' },
  { icon: '💡', title: 'Electricity Ready',          desc: 'Transformer, underground cabling, and street lights installed across the layout.' },
  { icon: '🌳', title: 'Avenue Plantation',          desc: 'Beautiful tree-lined avenues throughout the layout — green, serene living.' },
  { icon: '📜', title: 'Clear Title',                desc: 'Immediate registration with clear title — no encumbrances, no disputes.'},
  { icon: '🧭', title: 'Vastu Designed',             desc: 'Every plot is designed as per Vastu Shastra for prosperity and wellbeing.'},
]



export const LOCATION_ADVANTAGES = [
  { icon: Bus,           name: 'Medchal Bus Stand',           time: '5 Mins' },
  { icon: TrainFront,    name: 'Medchal Railway Station',     time: '10 Mins' },
  { icon: MapPin,        name: 'ORR Exit No. 6',              time: '13 Mins' },
  { icon: Hospital,      name: 'Hospitals',                   time: '5 Mins' },
  { icon: School,        name: 'Schools',                     time: '5–10 Mins' },
  { icon: GraduationCap, name: 'Colleges',                    time: '5–30 Mins' },
  { icon: Building2,     name: 'Kompally',                    time: '20 Mins' },
  { icon: TreePine,      name: 'OXYGEN Park',                 time: '12 Mins' },
  { icon: Film,          name: 'Cine Planet Kompally',        time: '25 Mins' },
  { icon: Navigation,    name: "Suchitra 'X' Roads",          time: '30 Mins' },
  { icon: Fuel,          name: 'HP Petrol Bunk',              time: '5 Mins' },
  { icon: TramFront,     name: 'Secunderabad Railway Station', time: '50 Mins' },
];

export const FEATURES = [
  {
    
    icon: null,
    number: 'HMDA',
    title: 'Government Approved',
    desc: 'Fully approved by HMDA with valid LP Number. Zero legal hassle — 100% safe investment.',
    wide: false,
  },
  {
    icon: '⚡',
    number: null,
    title: 'Ready Infrastructure',
    desc: 'Electricity, transformer, street lights, roads — everything is done. You just build your home.',
    wide: false,
  },
  {
    
    icon: '🌱',
    number: null,
    title: 'Green Avenue',
    desc: 'Tree-lined roads throughout the entire layout create a lush, serene living environment.',
    wide: false,
  },
  {
    
    icon: '📈',
    number: null,
    title: 'High Appreciation Zone — Medchal Corridor',
    desc: 'Medchal sits on the ORR growth corridor with rapid infrastructure, IT Parks, and residential expansion — one of the highest-appreciating micro-markets in Greater Hyderabad. Early buyers have seen 2–3x returns.',
    wide: true,
  },
  {
    icon: '🏦',
    number: null,
    title: 'Bank Loan Available',
    desc: 'Approved by all leading banks. Easy EMI options to help you own your plot today.',
    wide: false,
  },
  {
    
    icon: '📝',
    number: null,
    title: 'Spot Registration',
    desc: 'Same-day registration. Clear title, no complications, immediate ownership transfer.',
    wide: false,
  },
]

// export const TESTIMONIALS = [
//   {
//     stars: 5,
//     text: '"Excellent experience with Mokshaa Avenues. The HMDA approval and clear title gave us complete confidence. Medchal location is perfect — close to the city but so peaceful."',
//     initials: 'R',
//     name: 'Rajesh Sharma',
//     location: 'Plot Owner, MND Avenue',
//     featured: false,
//   },
//   {
//     stars: 5,
//     text: '"We searched for 2 years and finally found the right plot here. The roads, drainage, lights — everything was done. We started construction within a month of registration!"',
//     initials: 'P',
//     name: 'Priya & Suresh K.',
//     location: 'Villa under construction, Medchal',
//     featured: true,
//   },
//   {
//     stars: 5,
//     text: '"As an NRI investor, the clear legal status and bank approval were critical. The team at Mokshaa was transparent and responsive throughout. Highly recommended."',
//     initials: 'V',
//     name: 'Venkat Reddy',
//     location: 'NRI Investor, Dubai',
//     featured: false,
//   },
// ]

export const MARQUEE_ITEMS = [
  'HMDA Approved Layout',
  'Residential Zone R1',
  '30 Feet Wide BT Roads',
  'Underground Drainage',
  'Avenue Plantation',
  'Street Lights & Transformer',
  'Spot Registration',
  'Bank Loan Available',
]

export const NAV_LINKS = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Location',   href: '#location' },
  { label: 'Features',   href: '#features' },
  { label: 'Contact',    href: '#contact' },
]