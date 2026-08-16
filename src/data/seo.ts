import type { Metadata } from 'next'

const base = 'https://shreetexfab.in'

export const seoData: Record<string, Metadata> = {
  home: {
    title: 'Shree Texfab Creations | Textile Manufacturer & Fabric Supplier India',
    description:
      'Shree Texfab Creations is an Indian textile company supplying suiting, shirting, uniform and specialty fabrics for domestic and international buyers.',
    openGraph: {
      url: base,
      title: 'Shree Texfab Creations | Textile Manufacturer & Fabric Supplier India',
      description:
        'Shree Texfab Creations is an Indian textile company supplying suiting, shirting, uniform and specialty fabrics for domestic and international buyers.',
    },
  },
  about: {
    title: 'About Shree Texfab Creations | Indian Textile Company',
    description:
      'Learn about Shree Texfab Creations — an Indian textile company combining textile expertise, sourcing capabilities and coordinated manufacturing for B2B fabric buyers.',
    openGraph: { url: `${base}/about` },
  },
  products: {
    title: 'Suiting, Shirting & Uniform Fabrics | Shree Texfab',
    description:
      'Explore our fabric collection — suiting, shirting, uniform, corporate, printed and specialty fabrics for domestic and international buyers.',
    openGraph: { url: `${base}/products` },
  },
  'products/suiting': {
    title: 'Suiting Fabric Manufacturer & Supplier in India | Shree Texfab',
    description:
      'Premium suiting fabrics in PV, PC, TR, cotton and specialty blends. Plain, twill, herringbone, dobby constructions. Enquire for specifications and pricing.',
    openGraph: { url: `${base}/products/suiting` },
  },
  'products/shirting': {
    title: 'Shirting Fabric Manufacturer & Supplier in India | Shree Texfab',
    description:
      'Quality shirting fabrics in cotton, PC, PV and blended constructions. Solids, stripes, checks, dobby and prints. Available in 36", 44" and 58" widths.',
    openGraph: { url: `${base}/products/shirting` },
  },
  'products/uniform': {
    title: 'Uniform Fabric Manufacturer & Supplier India | Shree Texfab',
    description:
      'Durable uniform fabrics for schools, corporates, hospitality and industrial applications. Consistent shade and GSM across bulk repeat orders.',
    openGraph: { url: `${base}/products/uniform` },
  },
  'products/corporate': {
    title: 'Corporate & Institutional Fabric Supplier India | Shree Texfab',
    description:
      'Reliable fabric solutions for large-scale corporate and institutional uniform requirements with consistent quality across bulk orders.',
    openGraph: { url: `${base}/products/corporate` },
  },
  'products/printed': {
    title: 'Printed Fabric Supplier India | Shree Texfab',
    description:
      'Printed fabric solutions for fashion, institutional and specialty apparel applications. Custom print development available.',
    openGraph: { url: `${base}/products/printed` },
  },
  'products/specialty': {
    title: 'Specialty & Custom Fabric Development | Shree Texfab',
    description:
      'Custom fabric development for specific performance, construction and finishing requirements. Share your specification and we will develop the solution.',
    openGraph: { url: `${base}/products/specialty` },
  },
  capabilities: {
    title: 'Textile Manufacturing Capabilities | Shree Texfab',
    description:
      'Our coordinated textile manufacturing ecosystem covers yarn sourcing, weaving, dyeing, processing, finishing and quality control.',
    openGraph: { url: `${base}/capabilities` },
  },
  quality: {
    title: 'Fabric Quality Assurance | Shree Texfab',
    description:
      'Our quality approach covers specification review, raw material checks, production monitoring, processing control, final inspection and dispatch.',
    openGraph: { url: `${base}/quality` },
  },
  exports: {
    title: 'Textile & Fabric Exporter from India | Shree Texfab',
    description:
      'Shree Texfab supports international buyers with product development, sourcing, quality inspection, documentation and logistics coordination.',
    openGraph: { url: `${base}/exports` },
  },
  applications: {
    title: 'Fabric Solutions for Multiple Industries | Shree Texfab',
    description:
      'Fabric solutions for corporate, education, hospitality, industrial, fashion, retail, institutional and export applications.',
    openGraph: { url: `${base}/applications` },
  },
  contact: {
    title: 'Contact Shree Texfab | Fabric Supplier & Textile Partner',
    description:
      'Send your fabric enquiry to Shree Texfab. We respond to product requirements, custom development enquiries and bulk fabric requirements.',
    openGraph: { url: `${base}/contact` },
  },
  privacy: {
    title: 'Privacy Policy | Shree Texfab Creations',
    description: 'Privacy policy for Shree Texfab Creations Private Limited.',
    openGraph: { url: `${base}/privacy` },
  },
  terms: {
    title: 'Terms & Conditions | Shree Texfab Creations',
    description: 'Terms and conditions for Shree Texfab Creations Private Limited.',
    openGraph: { url: `${base}/terms` },
  },
}
