export interface ProductSpec {
  label: string
  values: string[]
}

export interface Product {
  id: string
  slug: string
  title: string
  shortTitle: string
  category: string
  icon: string
  gradient: string
  shortDesc: string
  fullDesc: string
  compositions: string[]
  constructions: string[]
  widths: string[]
  gsmRange: string
  finishes: string[]
  applications: string[]
  specs: ProductSpec[]
}

export const products: Product[] = [
  {
    id: 'suiting',
    slug: 'suiting',
    title: 'Suiting Fabrics',
    shortTitle: 'Suiting',
    category: 'Woven · Multiple Blends',
    icon: '🧥',
    gradient: 'linear-gradient(135deg, #0d2b5e, #1a3d7c)',
    shortDesc:
      'Refined fabrics engineered for formalwear, uniforms and contemporary tailoring.',
    fullDesc:
      'Our suiting portfolio combines functionality, comfort and visual appeal for formalwear, corporate uniforms and contemporary apparel. Available across a broad range of fibre compositions and woven constructions with multiple finish options.',
    compositions: [
      'Polyester',
      'Polyester / Viscose (PV)',
      'Polyester / Cotton (PC)',
      'Cotton',
      'Cotton Blends',
      'TR (Terylene/Rayon)',
      'Specialty Blends',
    ],
    constructions: [
      'Plain',
      'Twill',
      '2/2 Twill',
      'Herringbone',
      'Self-Design',
      'Dobby',
      'Structured Weaves',
    ],
    widths: ['58"', '60"'],
    gsmRange: '130 – 280 GSM',
    finishes: ['Soft Finish', 'Stiff Finish', 'Anti-Pilling', 'Shrinkage Controlled'],
    applications: [
      'Formalwear',
      'Corporate Uniforms',
      'Blazers & Trousers',
      'School Uniforms',
      'Institutional Uniforms',
    ],
    specs: [
      { label: 'Available Colours', values: ['Solids', 'Melange', 'Checks', 'Stripes', 'Fancy Constructions'] },
      { label: 'MOQ', values: ['Available on enquiry'] },
      { label: 'Price', values: ['Available on enquiry'] },
    ],
  },
  {
    id: 'shirting',
    slug: 'shirting',
    title: 'Shirting Fabrics',
    shortTitle: 'Shirting',
    category: 'Cotton · PC · PV · Printed',
    icon: '👔',
    gradient: 'linear-gradient(135deg, #1a3a2a, #2a5e40)',
    shortDesc:
      'Comfortable and versatile fabrics designed for formal, corporate and everyday apparel.',
    fullDesc:
      'Our shirting range is designed for comfort, appearance, durability and versatile apparel applications. Available in a wide range of fibres, constructions, patterns and widths to suit different end requirements.',
    compositions: [
      'Cotton',
      'Polyester / Cotton (PC)',
      'Polyester / Viscose (PV)',
      'Polyester',
      'Blended Fabrics',
    ],
    constructions: [
      'Plain',
      'Poplin',
      'Oxford',
      'Dobby',
      'Self Designs',
      'Printed',
      'Stripes',
      'Checks',
    ],
    widths: ['36"', '44"', '58"'],
    gsmRange: '80 – 160 GSM',
    finishes: ['Soft Finish', 'Wrinkle-Resistant', 'Easy Care', 'Mercerised'],
    applications: [
      'Formal Shirts',
      'Corporate Uniforms',
      'Casual Shirts',
      'School Shirts',
      'Hospitality Uniforms',
    ],
    specs: [
      { label: 'Designs', values: ['Solids', 'Stripes', 'Checks', 'Dobby', 'Prints', 'Contemporary Patterns'] },
      { label: 'MOQ', values: ['Available on enquiry'] },
      { label: 'Price', values: ['Available on enquiry'] },
    ],
  },
  {
    id: 'uniform',
    slug: 'uniform',
    title: 'Uniform Fabrics',
    shortTitle: 'Uniform',
    category: 'Durable · Consistent · Bulk',
    icon: '🏫',
    gradient: 'linear-gradient(135deg, #3d1a0a, #6b2f10)',
    shortDesc:
      'Durable, practical and consistent fabrics for schools, corporates, institutions and workwear.',
    fullDesc:
      'Uniform fabrics require more than appearance. They need durability, colour consistency, comfort, easy maintenance and reliable repeatability. We supply fabric solutions for educational institutions, corporates, hospitality, industrial organisations and other institutional applications.',
    compositions: [
      'Polyester / Viscose (PV)',
      'Polyester / Cotton (PC)',
      'Polyester',
      'Cotton',
      'TR Fabric',
    ],
    constructions: ['Plain', 'Twill', '2/2 Twill', 'Structured Weaves'],
    widths: ['44"', '58"', '60"'],
    gsmRange: '140 – 260 GSM',
    finishes: ['Stiff Finish', 'Easy Care', 'Anti-Pilling', 'Shrinkage Controlled'],
    applications: [
      'School Uniforms',
      'Corporate Uniforms',
      'Hotel Uniforms',
      'Security Uniforms',
      'Industrial Uniforms',
      'Workwear',
      'Institutional Uniforms',
    ],
    specs: [
      { label: 'Key Features', values: ['Consistent Shade', 'Consistent GSM', 'Bulk Availability', 'Repeat Production', 'Easy Maintenance'] },
      { label: 'MOQ', values: ['Available on enquiry'] },
      { label: 'Price', values: ['Available on enquiry'] },
    ],
  },
  {
    id: 'corporate',
    slug: 'corporate',
    title: 'Corporate & Institutional Fabrics',
    shortTitle: 'Corporate',
    category: 'Bulk · Institutional',
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #1a1a3d, #2d2d6b)',
    shortDesc:
      'Reliable fabric solutions for large-scale uniform and institutional requirements.',
    fullDesc:
      'Our institutional fabric solutions are designed for buyers who require consistent specifications and dependable bulk supply across repeated orders. Key parameters — shade, GSM, width and construction — are maintained across production runs.',
    compositions: [
      'Polyester / Viscose (PV)',
      'Polyester / Cotton (PC)',
      'Polyester',
      'Cotton',
    ],
    constructions: ['Plain', 'Twill', 'Structured Weaves'],
    widths: ['44"', '58"', '60"'],
    gsmRange: '140 – 280 GSM',
    finishes: ['Standard Finish', 'Easy Care', 'Anti-Pilling'],
    applications: [
      'Corporate Offices',
      'Banks & Financial Institutions',
      'Government Departments',
      'Airlines & Hospitality Chains',
      'Large Retail Chains',
    ],
    specs: [
      { label: 'Key Requirements', values: ['Consistent Shade', 'Consistent GSM', 'Consistent Width', 'Durability', 'Bulk Availability'] },
      { label: 'MOQ', values: ['Available on enquiry'] },
      { label: 'Price', values: ['Available on enquiry'] },
    ],
  },
  {
    id: 'printed',
    slug: 'printed',
    title: 'Printed Fabrics',
    shortTitle: 'Printed',
    category: 'Fashion · Specialty',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #3d1a2a, #6b1040)',
    shortDesc:
      'Printed and digitally developed fabrics for fashion, institutional and specialty applications.',
    fullDesc:
      'We offer printed fabric solutions across selected fibre compositions and constructions for apparel, institutional and specialty requirements. Custom prints can be developed to meet specific design or branding requirements.',
    compositions: [
      'Cotton',
      'Polyester / Cotton (PC)',
      'Polyester',
      'Polyester / Viscose (PV)',
    ],
    constructions: ['Plain', 'Poplin', 'Twill'],
    widths: ['36"', '44"', '58"'],
    gsmRange: '90 – 180 GSM',
    finishes: ['Soft Finish', 'Easy Care'],
    applications: [
      'Fashion Apparel',
      'Institutional Garments',
      'Hospitality Uniforms',
      'Promotional Garments',
      'Specialty Applications',
    ],
    specs: [
      { label: 'Print Options', values: ['Custom Designs', 'Brand Prints', 'Institutional Prints', 'Fashion Prints'] },
      { label: 'MOQ', values: ['Available on enquiry'] },
      { label: 'Price', values: ['Available on enquiry'] },
    ],
  },
  {
    id: 'specialty',
    slug: 'specialty',
    title: 'Specialty Fabrics',
    shortTitle: 'Specialty',
    category: 'Custom · Performance',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #1a2d3d, #2a4a5e)',
    shortDesc:
      'Custom-developed fabrics engineered around specific performance, construction and finishing requirements.',
    fullDesc:
      'Every application does not fit into a standard catalogue. We work with customers to develop fabrics around specific construction, performance, appearance, weight, width and finishing requirements. Share your requirement and our team will evaluate and coordinate development.',
    compositions: [
      'As per customer requirement',
      'Specialty Blends',
      'Performance Fibres',
    ],
    constructions: ['As per customer requirement', 'Custom Woven Structures'],
    widths: ['As per requirement'],
    gsmRange: 'As per requirement',
    finishes: ['As per requirement', 'Special Performance Finishes'],
    applications: [
      'Performance Workwear',
      'Technical Applications',
      'Specialty Uniforms',
      'Custom Brand Fabrics',
      'Export Development',
    ],
    specs: [
      { label: 'Development Process', values: ['Specification Review', 'Sample Development', 'Approval', 'Production'] },
      { label: 'MOQ', values: ['Available on enquiry'] },
      { label: 'Price', values: ['Available on enquiry'] },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
