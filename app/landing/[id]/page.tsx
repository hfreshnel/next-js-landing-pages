import { notFound } from 'next/navigation'

// Static routes (app/landing/a, app/landing/b) take priority over this dynamic segment.
// This handler covers any unknown landing IDs.
export default async function LandingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  console.warn(`Unknown landing id: "${id}"`)
  notFound()
}
