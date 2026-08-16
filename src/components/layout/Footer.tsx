import Link from 'next/link'
import Image from 'next/image'
import { footerNavLinks, footerProductLinks, legalLinks } from '@/data/navigation'
import { BRAND, CONTACT } from '@/lib/constants'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Image
              src="/logo_with_background.jpeg"
              alt="Shree Texfab Creations Private Limited"
              width={917}
              height={769}
              className={styles.footerLogo}
            />
            <p className={styles.brandSub}>Textile Manufacturing · Sourcing · Processing · Export</p>
            <p className={styles.tagline}>{BRAND.tagline}</p>
            <p className={styles.desc}>{BRAND.subTagline}<br />Domestic &amp; International B2B Supply.</p>
          </div>

          <div>
            <p className={styles.colTitle}>Navigation</p>
            <ul className={styles.linkList}>
              {footerNavLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Products</p>
            <ul className={styles.linkList}>
              {footerProductLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Contact</p>
            <div className={styles.contactItem}>
              <strong>General</strong>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div className={styles.contactItem}>
              <strong>Sales</strong>
              <a href={`mailto:${CONTACT.emailSales}`}>{CONTACT.emailSales}</a>
            </div>
            <div className={styles.contactItem}>
              <strong>Export</strong>
              <a href={`mailto:${CONTACT.emailExport}`}>{CONTACT.emailExport}</a>
            </div>
            <div className={styles.contactItem}>
              <strong>Phone / WhatsApp</strong>
              <span>{CONTACT.phone}</span>
            </div>
            <div className={styles.contactItem}>
              <strong>Website</strong>
              <span>{BRAND.domain}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {year} {BRAND.name}. All rights reserved.</p>
          <div className={styles.legal}>
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
