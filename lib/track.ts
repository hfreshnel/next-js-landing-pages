import type { EventType, TrackingEvent, TrackingResponse } from '@/types/tracking'

export async function trackEvent(
  landingId: string,
  eventType: EventType,
  metadata?: Record<string, string>
): Promise<TrackingResponse> {
  const event: TrackingEvent = {
    landingId,
    eventType,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    metadata,
  }

  const res = await fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  })

  return res.json() as Promise<TrackingResponse>
}
