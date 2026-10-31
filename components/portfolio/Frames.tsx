import Image from 'next/image'
import type { Frame, Swatch } from '@/lib/content/types'
import LoopVideo from './LoopVideo'

// Le site pose lui-même les rendus bruts dans un cadre : téléphone ou fenêtre.

function MediaView({ frame, sizes, priority }: { frame: Frame; sizes: string; priority?: boolean }) {
  const m = frame.media
  if (m.type === 'video') return <LoopVideo src={m.src} poster={m.poster} width={m.width} height={m.height} alt={m.alt} />
  return <Image src={m.src} alt={m.alt} width={m.width} height={m.height} sizes={sizes} priority={priority} />
}

export function FrameView({ frame, priority, gallery }: { frame: Frame; priority?: boolean; gallery?: boolean }) {
  if (frame.frame === 'phone') {
    return (
      <figure className="frame">
        <div className="phone">
          <div className="phone-screen">
            <MediaView frame={frame} sizes={gallery ? '200px' : '230px'} priority={priority} />
          </div>
        </div>
        {frame.caption ? <figcaption>{frame.caption}</figcaption> : null}
      </figure>
    )
  }
  return (
    <figure className="frame frame--window">
      <div className="window">
        <div className="window-bar" aria-hidden="true"><i /><i /><i /></div>
        <MediaView frame={frame} sizes="(min-width: 1220px) 680px, (min-width: 960px) 55vw, 100vw" priority={priority} />
      </div>
      {frame.caption ? <figcaption>{frame.caption}</figcaption> : null}
    </figure>
  )
}

export function Swatches({ palette, inline }: { palette: Swatch[]; inline?: boolean }) {
  return (
    <ul className={inline ? 'swatches swatches--inline' : 'swatches'} aria-label="Palette du projet">
      <li><span className="sw-k">Palette</span></li>
      {palette.map((s) => (
        <li key={s.hex}>
          <i style={{ ['--c' as string]: s.hex }} />
          {s.hex}
        </li>
      ))}
    </ul>
  )
}

export function Visual({
  surface,
  frames,
  palette,
  priority,
  gallery,
}: {
  surface: 'panel' | 'paper'
  frames: Frame[]
  palette?: Swatch[]
  priority?: boolean
  gallery?: boolean
}) {
  return (
    <div className={`vis vis--${surface}`}>
      <div className={gallery ? 'frames frames--gallery' : 'frames'}>
        {frames.map((f, i) => (
          <FrameView key={i} frame={f} priority={priority && i === 0} gallery={gallery} />
        ))}
      </div>
      {palette ? <Swatches palette={palette} /> : null}
    </div>
  )
}
