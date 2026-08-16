export interface Value {
  title: string
  description: string
  fullWidth?: boolean
}

export const values: Value[] = [
  {
    title: 'Integrity',
    description: 'We conduct business with transparency and responsibility.',
  },
  {
    title: 'Quality',
    description: 'We focus on consistency in every metre supplied.',
  },
  {
    title: 'Reliability',
    description: 'We value dependable commitments and timely execution.',
  },
  {
    title: 'Innovation',
    description:
      'We continuously explore new constructions, blends, finishes and applications.',
  },
  {
    title: 'Partnership',
    description:
      'We build long-term relationships with customers, suppliers and manufacturing partners.',
    fullWidth: true,
  },
]

export interface ProcessStep {
  icon: string
  label: string
}

export const processSteps: ProcessStep[] = [
  { icon: '🧶', label: 'Yarn' },
  { icon: '🪡', label: 'Weaving' },
  { icon: '🎨', label: 'Dyeing' },
  { icon: '⚙️', label: 'Processing' },
  { icon: '✨', label: 'Finishing' },
  { icon: '🔍', label: 'Inspection' },
  { icon: '📦', label: 'Packing' },
  { icon: '🚛', label: 'Delivery' },
]

export interface QualityStep {
  num: string
  title: string
  description: string
}

export const qualitySteps: QualityStep[] = [
  {
    num: '01',
    title: 'Specification Review',
    description: "Understand the customer's technical requirement.",
  },
  {
    num: '02',
    title: 'Raw Material Check',
    description: 'Review yarn/fabric quality against specification.',
  },
  {
    num: '03',
    title: 'Production Monitoring',
    description: 'Coordinate production and monitor quality parameters.',
  },
  {
    num: '04',
    title: 'Processing Control',
    description: 'Monitor shade, width, GSM, finish and shrinkage.',
  },
  {
    num: '05',
    title: 'Final Inspection',
    description: 'Inspect finished fabric before dispatch.',
  },
  {
    num: '06',
    title: 'Packing & Dispatch',
    description: 'Pack according to customer requirements.',
  },
]

export const qualityParams = [
  'GSM',
  'Width',
  'Shade',
  'Construction',
  'Shrinkage',
  'Colour Fastness',
  'Appearance',
  'Finish',
  'Defects',
  'Packing',
]

export interface Application {
  icon: string
  title: string
  description: string
}

export const applications: Application[] = [
  {
    icon: '🏢',
    title: 'Corporate',
    description:
      'Corporate uniforms and formalwear for offices, service organizations and professional environments.',
  },
  {
    icon: '🎓',
    title: 'Education',
    description:
      'School and college uniforms — durable fabrics designed for regular use and repeated laundering.',
  },
  {
    icon: '🏨',
    title: 'Hospitality',
    description:
      'Fabrics for hotel, restaurant and hospitality personnel uniforms with consistent appearance.',
  },
  {
    icon: '⚙️',
    title: 'Industrial',
    description:
      'Functional fabrics for workwear and industrial applications requiring durability and performance.',
  },
  {
    icon: '✂️',
    title: 'Fashion & Apparel',
    description:
      'Contemporary fabrics for designers, brands and garment manufacturers across apparel categories.',
  },
  {
    icon: '🛍️',
    title: 'Retail',
    description:
      'Suiting and shirting collections for retail fabric buyers, wholesalers and distributors.',
  },
  {
    icon: '🏛️',
    title: 'Institutional',
    description:
      'Large-volume fabric requirements for hospitals, security organizations and government institutions.',
  },
  {
    icon: '🌏',
    title: 'Export',
    description:
      'International apparel and textile supply with full coordination from development to dispatch.',
  },
]

export interface ExportService {
  icon: string
  title: string
  description: string
}

export const exportServices: ExportService[] = [
  { icon: '🔬', title: 'Product Development', description: 'Development based on buyer specification.' },
  { icon: '🔗', title: 'Sourcing', description: 'From appropriate Indian manufacturing partners.' },
  { icon: '✅', title: 'Quality Control', description: 'Pre-dispatch quality coordination and inspection.' },
  { icon: '📄', title: 'Documentation', description: 'Commercial and shipping documentation coordination.' },
  { icon: '📦', title: 'Packing', description: 'Export-oriented packing as required.' },
  { icon: '🚢', title: 'Logistics', description: 'Coordination with logistics and shipping partners.' },
]

export const exportMarkets = ['Europe', 'Middle East', 'Africa', 'Southeast Asia', 'Latin America']

export const exportBuyerProcess = [
  'Enquiry',
  'Requirement Understanding',
  'Sample / Development',
  'Price & Commercial Discussion',
  'Order Confirmation',
  'Production & Quality Control',
  'Dispatch',
]

export const whyUsPoints = [
  {
    icon: '🔬',
    title: 'Textile Expertise',
    description:
      'Deep understanding of fabric construction, processing, market requirements and end-use applications built over decades in the textile industry.',
  },
  {
    icon: '📦',
    title: 'Wide Product Capability',
    description:
      'Multiple fibre compositions, constructions, weights, widths, colours and finishes — from standard qualities to custom developments.',
  },
  {
    icon: '⚙️',
    title: 'Custom Development',
    description:
      'Fabrics can be developed around specific customer specifications — composition, construction, GSM, width, colour, finish and performance.',
  },
  {
    icon: '✅',
    title: 'Quality Focus',
    description:
      'Structured quality checks throughout sourcing, production, processing and final dispatch for consistency in every metre supplied.',
  },
  {
    icon: '🚚',
    title: 'Reliable Supply',
    description:
      'Coordinated production and sourcing enables dependable fulfilment of bulk requirements with repeatability and timely execution.',
  },
  {
    icon: '🤝',
    title: 'Long-Term Partnerships',
    description:
      'We believe in building relationships beyond individual transactions — consistency, responsiveness and commitment are central to how we work.',
  },
]

export const customSpecItems = [
  { icon: '📄', label: 'Fabric Sample' },
  { icon: '📷', label: 'Fabric Photo' },
  { icon: '📐', label: 'Technical Spec' },
  { icon: '🧵', label: 'Composition' },
  { icon: '⚖️', label: 'GSM Requirement' },
  { icon: '📏', label: 'Width Required' },
  { icon: '🎨', label: 'Colour Requirement' },
  { icon: '🏷️', label: 'End Application' },
  { icon: '💰', label: 'Target Price' },
  { icon: '📦', label: 'Quantity Needed' },
]
