import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ProductCard from '@/components/ui/ProductCard'
import CustomDevSection from '@/components/sections/CustomDevSection'
import CTABanner from '@/components/ui/CTABanner'
import { products } from '@/data/products'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Suiting, Shirting & Uniform Fabrics | Shree Texfab',
  description:
    'Explore our fabric collection — suiting, shirting, uniform, corporate, printed and specialty fabrics for domestic and international buyers.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Our Products"
        title="Our Fabric Collection"
        subtitle="Our product portfolio covers a broad range of woven fabrics designed for apparel, uniforms, institutional and specialty applications."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className={styles.grid}>
        <div className="container">
          <div className={styles.productGrid}>
            {products.map((p) => (
              <ProductCard
                key={p.id}
                slug={p.slug}
                icon={p.icon}
                category={p.category}
                title={p.title}
                description={p.shortDesc}
                gradient={p.gradient}
              />
            ))}
          </div>
          <p className={styles.disclaimer}>
            Product specifications shown are indicative. Please contact our team for current availability and confirmed technical specifications.
          </p>
        </div>
      </section>

      <CustomDevSection />
      <CTABanner
        title="Not Sure Which <span>Fabric</span> You Need?"
        subtitle="Tell us your requirement and our team will identify the right fabric solution for your application."
        buttons={[
          { label: 'Send an Enquiry', href: '/contact', variant: 'gold' },
          { label: 'Custom Development', href: '/contact', variant: 'outline-white' },
        ]}
      />
    </>
  )
}
