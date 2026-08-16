export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Suiting Fabrics', href: '/products/suiting' },
      { label: 'Shirting Fabrics', href: '/products/shirting' },
      { label: 'Uniform Fabrics', href: '/products/uniform' },
      { label: 'Corporate & Institutional', href: '/products/corporate' },
      { label: 'Printed Fabrics', href: '/products/printed' },
      { label: 'Specialty Fabrics', href: '/products/specialty' },
    ],
  },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Quality', href: '/quality' },
  { label: 'Applications', href: '/applications' },
  { label: 'Exports', href: '/exports' },
  { label: 'Contact', href: '/contact' },
]

export const footerNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Quality', href: '/quality' },
  { label: 'Applications', href: '/applications' },
  { label: 'Exports', href: '/exports' },
  { label: 'Contact', href: '/contact' },
]

export const footerProductLinks: NavLink[] = [
  { label: 'Suiting Fabrics', href: '/products/suiting' },
  { label: 'Shirting Fabrics', href: '/products/shirting' },
  { label: 'Uniform Fabrics', href: '/products/uniform' },
  { label: 'Corporate & Institutional', href: '/products/corporate' },
  { label: 'Printed Fabrics', href: '/products/printed' },
  { label: 'Specialty Fabrics', href: '/products/specialty' },
  { label: 'Custom Development', href: '/contact' },
]

export const legalLinks: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]
