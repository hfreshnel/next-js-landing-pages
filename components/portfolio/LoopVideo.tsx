'use client'

import { useEffect, useRef, useState } from 'react'

// Boucle muette : lecture seulement quand elle est visible, chargement différé,
// et rien en lecture automatique si l'utilisateur a demandé moins d'animations.

type Props = { src: string; poster: string; width: number; height: number; alt: string; active?: boolean }

export default function LoopVideo({ src, poster, width, height, alt, active = true }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const visible = useRef(false)
  const activeRef = useRef(active)
  const [paused, setPaused] = useState(true)
  const [userPaused, setUserPaused] = useState(false)

  // Dans une visite guidée, seule la vidéo de l'écran affiché tourne.
  useEffect(() => {
    activeRef.current = active
    const video = ref.current
    if (!video) return
    if (active && visible.current && !video.dataset.userPaused && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (video.preload !== 'auto') video.preload = 'auto'
      video.play().catch(() => {})
    } else if (!active) {
      video.pause()
    }
  }, [active])

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setUserPaused(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting
        if (entry.isIntersecting && activeRef.current && !video.dataset.userPaused) {
          if (video.preload !== 'auto') video.preload = 'auto'
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      delete video.dataset.userPaused
      setUserPaused(false)
      video.play().catch(() => {})
    } else {
      video.dataset.userPaused = 'true'
      setUserPaused(true)
      video.pause()
    }
  }

  return (
    <div className="loop" data-paused={paused || userPaused}>
      <video
        ref={ref}
        width={width}
        height={height}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={alt}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      >
        {/* MP4 en premier : plus léger que le WebM pour chacun de nos rendus. */}
        <source src={`${src}.mp4`} type="video/mp4" />
        <source src={`${src}.webm`} type="video/webm" />
      </video>
      <button type="button" className="loop-toggle" onClick={toggle} aria-label={paused ? 'Lire la vidéo' : 'Mettre la vidéo en pause'}>
        {paused ? (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z" fill="currentColor" /></svg>
        )}
      </button>
    </div>
  )
}
