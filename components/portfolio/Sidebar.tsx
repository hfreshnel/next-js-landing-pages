'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sections, site } from '@/lib/content/site'
import { NotesSwitch } from './notes'

// Sur l'accueil, la navigation suit la section visible. Sur une fiche, elle renvoie à l'accueil
// et marque « Projets ».

export default function Sidebar() {
  const onHome = usePathname() === '/'
  const [current, setCurrent] = useState<string>(onHome ? 'apropos' : 'projets')

  useEffect(() => {
    if (!onHome) {
      setCurrent('projets')
      return
    }
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [onHome])

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`)
  // Le nom est le titre de l'accueil ; sur une fiche, le titre est celui du projet.
  const NameTag = onHome ? 'h1' : 'p'

  return (
    <aside className="side" aria-label="Présentation">
      <div className="side-top">
        <NameTag className="name display">
          <Link href="/">
            Freshnel
            <br />
            Houenou
          </Link>
        </NameTag>
        <p className="mono-label role">{site.role}</p>
        <p className="thesis">{site.thesis}</p>
        <p className="status">{site.status}</p>
        <nav className="nav" aria-label="Sections">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={href(s.id)} aria-current={current === s.id ? 'true' : undefined}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="side-bottom">
        <NotesSwitch />
        <ul className="links">
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
