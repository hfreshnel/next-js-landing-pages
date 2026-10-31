import type { MetadataRoute } from 'next'
import { projectsWithFiche } from '@/lib/content/projects'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

// Portfolio uniquement : ni les landing pages de validation ni le scrapbook.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'monthly', priority: 1 },
    ...projectsWithFiche.map((p) => ({ url: `${siteUrl}/projets/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
