import Link from 'next/link'
import type { Product } from '@/data/products'
import styles from './ProductDetail.module.css'

interface Props {
  product: Product
}

export default function ProductDetail({ product }: Props) {
  return (
    <div className={styles.wrap}>
      <div className="container">

        {/* Overview */}
        <section className={styles.overview}>
          <div className={styles.overviewGrid}>
            <div>
              <span className="section-label">{product.category}</span>
              <h2 className="section-title">{product.title}</h2>
              <p className="section-sub">{product.fullDesc}</p>
              <div className={styles.quickSpecs}>
                <div className={styles.qSpec}>
                  <span className={styles.qLabel}>GSM Range</span>
                  <span className={styles.qVal}>{product.gsmRange}</span>
                </div>
                <div className={styles.qSpec}>
                  <span className={styles.qLabel}>Widths</span>
                  <span className={styles.qVal}>{product.widths.join(', ')}</span>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                Enquire About This Fabric
              </Link>
            </div>
            <div className={styles.imgPlaceholder} style={{ background: product.gradient }}>
              <span className={styles.imgIcon}>{product.icon}</span>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className={styles.specs}>
          <div className={styles.specsGrid}>
            <div className={styles.specBlock}>
              <h3 className={styles.specTitle}>Compositions</h3>
              <ul className={styles.specList}>
                {product.compositions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className={styles.specBlock}>
              <h3 className={styles.specTitle}>Constructions</h3>
              <ul className={styles.specList}>
                {product.constructions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className={styles.specBlock}>
              <h3 className={styles.specTitle}>Finishes Available</h3>
              <ul className={styles.specList}>
                {product.finishes.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className={styles.specBlock}>
              <h3 className={styles.specTitle}>Additional Details</h3>
              {product.specs.map((s) => (
                <div key={s.label} className={styles.specRow}>
                  <span className={styles.specRowLabel}>{s.label}</span>
                  <span className={styles.specRowVal}>{s.values.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className={styles.apps}>
          <h3 className={styles.appsTitle}>Key Applications</h3>
          <div className={styles.appsList}>
            {product.applications.map((a) => (
              <span key={a} className="tag-navy">{a}</span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h3>Interested in {product.shortTitle} Fabrics?</h3>
            <p>Share your specification and our team will get back with details on availability, pricing and sampling.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-gold">Enquire Now</Link>
              <Link href="/products" className="btn btn-outline">View All Products</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
