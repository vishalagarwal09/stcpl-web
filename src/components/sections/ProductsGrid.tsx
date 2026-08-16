import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'
import styles from './ProductsGrid.module.css'

interface Props {
  showViewAll?: boolean
}

export default function ProductsGrid({ showViewAll }: Props) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Our Fabric Collection"
          title="Premium Fabrics for Every Application"
          subtitle="Our product portfolio covers a broad range of woven fabrics designed for apparel, uniforms, institutional and specialty applications."
          center
        />
        <div className={styles.grid}>
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
        {showViewAll && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/products" className="btn btn-primary">View All Products</Link>
          </div>
        )}
      </div>
    </section>
  )
}
