import { NextRequest, NextResponse } from 'next/server'
import type { TrackingEvent, TrackingResponse } from '@/types/tracking'

export async function POST(req: NextRequest): Promise<NextResponse<TrackingResponse>> {
  const event: TrackingEvent = await req.json()

  console.log('[track]', JSON.stringify(event, null, 2))

  return NextResponse.json({ success: true, message: 'Event logged' })
}
