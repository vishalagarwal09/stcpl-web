import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ProductDetail from '@/components/sections/ProductDetail'
import { products, getProductBySlug } from '@/data/products'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.title} | Shree Texfab`,
    description: product.shortDesc,
  }
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <>
      <PageHero
        label={product.category}
        title={product.title}
        subtitle={product.shortDesc}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: product.shortTitle },
        ]}
      />
      <ProductDetail product={product} />
    </>
  )
}
