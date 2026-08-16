import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ExportsSection from '@/components/sections/ExportsSection'
import CTABanner from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: 'Fabric Exports | Shree Texfab',
  description:
    'Export-ready woven fabrics with documentation, packaging and logistics support for international buyers.',
}

export default function ExportsPage() {
  return (
    <>
      <PageHero
        label="Global Exports"
        title="Fabric Exports to International Buyers"
        subtitle="We supply woven fabrics to buyers across South Asia, the Middle East, Africa and South-East Asia with complete export documentation and logistics support."
        breadcrumbs={[{ label: 'Exports' }]}
      />

      <ExportsSection />

      <CTABanner
        title="Ready to <span>Export</span> to Your Market?"
        subtitle="Contact our export team with your requirement and destination. We will evaluate supply feasibility and revert."
        buttons={[
          { label: 'Contact Export Team', href: '/contact', variant: 'gold' },
          { label: 'View Products', href: '/products', variant: 'outline-white' },
        ]}
      />
    </>
  )
}
