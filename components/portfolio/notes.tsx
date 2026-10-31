'use client'

import { createContext, Fragment, useContext, useEffect, useId, useState, type KeyboardEvent } from 'react'
import type { Claim, Rich } from '@/lib/content/types'

// Passages soulignés : chacun ouvre une note placée après son paragraphe.
// L'interrupteur de la barre latérale ouvre ou ferme toutes les notes à la fois.

type NotesState = { allOpen: boolean; setAllOpen: (open: boolean) => void }

const NotesContext = createContext<NotesState>({ allOpen: false, setAllOpen: () => {} })

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [allOpen, setAllOpen] = useState(false)
  return <NotesContext.Provider value={{ allOpen, setAllOpen }}>{children}</NotesContext.Provider>
}

export function NotesSwitch() {
  const { allOpen, setAllOpen } = useContext(NotesContext)
  return (
    <button className="switch" role="switch" aria-checked={allOpen} type="button" onClick={() => setAllOpen(!allOpen)}>
      <span className="track" aria-hidden="true" />
      <span>Afficher toutes les notes</span>
    </button>
  )
}

const isClaim = (s: string | Claim): s is Claim => typeof s !== 'string'

/** Paragraphe de texte riche suivi de ses notes. `as="span"` pour un texte inline sans paragraphe. */
export function RichText({ segs, className, as: Tag = 'p' }: { segs: Rich; className?: string; as?: 'p' | 'span' }) {
  const { allOpen } = useContext(NotesContext)
  const base = useId()
  const claims = segs.filter(isClaim)
  const [open, setOpen] = useState<boolean[]>(() => claims.map(() => false))

  useEffect(() => {
    setOpen(claims.map(() => allOpen))
    // Seul l'interrupteur global doit réinitialiser l'état des notes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allOpen])

  const toggle = (i: number) => setOpen((prev) => prev.map((v, j) => (j === i ? !v : v)))
  const onKey = (i: number) => (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(i)
    }
  }

  let k = -1
  return (
    <>
      <Tag className={className}>
        {segs.map((s, idx) => {
          if (!isClaim(s)) return <Fragment key={idx}>{s}</Fragment>
          k += 1
          const i = k
          return (
            <span
              key={idx}
              className="claim"
              role="button"
              tabIndex={0}
              aria-expanded={open[i] ?? false}
              aria-controls={`${base}-n${i}`}
              onClick={() => toggle(i)}
              onKeyDown={onKey(i)}
            >
              {s.claim}
            </span>
          )
        })}
      </Tag>
      {claims.map((c, i) => (
        <div className="note" id={`${base}-n${i}`} key={i} data-open={open[i] ?? false} aria-hidden={!open[i]}>
          <span className="note-k">{c.kind}</span>
          <p>{c.note}</p>
        </div>
      ))}
    </>
  )
}
