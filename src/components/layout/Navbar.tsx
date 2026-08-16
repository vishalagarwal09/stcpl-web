'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(false)
  }, [pathname])

  return (
    <nav className={`${styles.nav}${scrolled ? ` ${styles.scrolled}` : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Shree Texfab Creations Home">
            <Image
              src="/logo_with_background.jpeg"
              alt="Shree Texfab Creations Private Limited"
              width={140}
              height={117}
              priority
              className={styles.logoImg}
            />
          </Link>

          <ul className={`${styles.links}${menuOpen ? ` ${styles.open}` : ''}`}>
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/')
              if (link.children) {
                return (
                  <li key={link.href} className={styles.dropdown}>
                    <button
                      className={`${styles.link}${active ? ` ${styles.active}` : ''} ${styles.dropBtn}`}
                      onClick={() => setProductsOpen((o) => !o)}
                      aria-expanded={productsOpen}
                    >
                      {link.label} <span className={styles.caret}>▾</span>
                    </button>
                    {productsOpen && (
                      <ul className={styles.dropMenu}>
                        <li>
                          <Link href={link.href} className={styles.dropLink}>All Products</Link>
                        </li>
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className={styles.dropLink}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`${styles.link}${active ? ` ${styles.active}` : ''}`}>
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>Send Enquiry</Link>

          <button
            className={styles.toggle}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? styles.bar1open : ''} />
            <span className={menuOpen ? styles.bar2open : ''} />
            <span className={menuOpen ? styles.bar3open : ''} />
          </button>
        </div>
      </div>
    </nav>
  )
}
