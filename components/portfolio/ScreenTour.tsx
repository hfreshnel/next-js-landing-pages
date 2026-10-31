'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { Frame } from '@/lib/content/types'
import LoopVideo from './LoopVideo'

// Visite guidée des écrans d'un projet.
// Téléphone : l'appareil reste fixe pendant que les étapes défilent, l'écran suit l'étape centrée.
// Fenêtre : lecteur qui enchaîne les écrans, une barre de progression par écran.

/** « Kwabo : feed plein écran… » → « Feed plein écran… » : le texte alternatif sert de légende détaillée. */
function describe(alt: string) {
  const i = alt.indexOf(' : ')
  const s = i >= 0 ? alt.slice(i + 3) : alt
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Shot({ frame, active, sizes }: { frame: Frame; active: boolean; sizes: string }) {
  const m = frame.media
  if (m.type === 'video') return <LoopVideo src={m.src} poster={m.poster} width={m.width} height={m.height} alt={m.alt} active={active} />
  return <Image src={m.src} alt={m.alt} width={m.width} height={m.height} sizes={sizes} />
}

const pad = (n: number) => String(n).padStart(2, '0')

function PhoneTour({ frames, glow }: { frames: Frame[]; glow?: string }) {
  const [active, setActive] = useState(0)
  const steps = useRef<Array<HTMLLIElement | null>>([])

  useEffect(() => {
    // L'étape active est celle qui traverse la ligne médiane de l'écran.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i))
      },
      { rootMargin: '-48% 0px -48% 0px' },
    )
    steps.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const go = (i: number) => steps.current[i]?.scrollIntoView({ block: 'center', behavior: reducedMotion() ? 'auto' : 'smooth' })
  const progress = frames.length > 1 ? active / (frames.length - 1) : 1

  return (
    <div className="tour" style={{ '--glow': glow ?? 'transparent' } as CSSProperties}>
      <ol className="tour-steps" style={{ '--p': progress } as CSSProperties}>
        {frames.map((f, i) => (
          <li key={f.media.src} className="tour-step" data-i={i} ref={(el) => { steps.current[i] = el }}>
            <button type="button" onClick={() => go(i)} aria-current={i === active ? 'step' : undefined}>
              <span className="tour-n" aria-hidden="true">{pad(i + 1)}</span>
              <span className="tour-txt">
                <span className="tour-title">{f.caption}</span>
                <span className="tour-desc">{describe(f.media.alt)}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div className="tour-stage">
        <div className="phone">
          <div className="phone-screen tour-screens">
            {frames.map((f, i) => (
              <div key={f.media.src} className="tour-shot" data-state={i === active ? 'on' : i < active ? 'past' : 'next'} aria-hidden={i !== active}>
                <Shot frame={f} active={i === active} sizes="260px" />
              </div>
            ))}
          </div>
        </div>
        <p className="tour-count" aria-hidden="true">
          {pad(active + 1)} / {pad(frames.length)}
        </p>
      </div>
    </div>
  )
}

function WindowTour({ frames }: { frames: Frame[] }) {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (reducedMotion()) setPlaying(false)
    const el = root.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const running = playing && visible && !hover
  const n = frames.length
  const current = frames[active]
  // Une vidéo reste plus longtemps à l'écran qu'une image fixe.
  const duration = current.media.type === 'video' ? 10 : 5.5

  return (
    <div
      ref={root}
      className="reel"
      data-running={running}
      style={{ '--dur': `${duration}s` } as CSSProperties}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="window">
        <div className="window-bar" aria-hidden="true"><i /><i /><i /></div>
        <div className="reel-stage">
          {frames.map((f, i) => (
            <div key={f.media.src} className="reel-shot" data-on={i === active} aria-hidden={i !== active}>
              <Shot frame={f} active={i === active && running} sizes="(min-width: 1220px) 680px, (min-width: 960px) 55vw, 100vw" />
            </div>
          ))}
        </div>
      </div>

      <div className="reel-segs" role="group" aria-label="Écrans">
        {frames.map((f, i) => (
          <button
            key={f.media.src}
            type="button"
            className="reel-seg"
            aria-label={f.caption}
            data-state={i === active ? 'on' : i < active ? 'past' : 'next'}
            aria-current={i === active ? 'step' : undefined}
            onClick={() => setActive(i)}
          >
            <span className="reel-track">
              {i === active ? <i key={active} className="reel-fill" onAnimationEnd={() => setActive((active + 1) % n)} /> : null}
            </span>
            <span className="reel-label">{f.caption}</span>
          </button>
        ))}
      </div>

      <div className="reel-foot">
        <p className="reel-desc" aria-live="polite">
          <span className="reel-n">{pad(active + 1)} / {pad(n)}</span> {describe(current.media.alt)}
        </p>
        <button type="button" className="reel-play" onClick={() => setPlaying((v) => !v)} aria-label={playing ? 'Mettre la visite en pause' : 'Lancer la visite'}>
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z" fill="currentColor" /></svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default function ScreenTour({ frames, glow }: { frames: Frame[]; glow?: string }) {
  return frames.every((f) => f.frame === 'phone') ? <PhoneTour frames={frames} glow={glow} /> : <WindowTour frames={frames} />
}
