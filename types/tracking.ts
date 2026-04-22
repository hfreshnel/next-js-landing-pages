export type EventType = 'view' | 'click' | 'conversion'

export interface TrackingEvent {
  landingId: string
  eventType: EventType
  timestamp: string
  userAgent: string
  referrer: string
  metadata?: Record<string, string>
}

export interface TrackingResponse {
  success: boolean
  message: string
}
