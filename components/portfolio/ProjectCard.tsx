import Link from 'next/link'
import type { Project } from '@/lib/content/types'
import { Swatches, Visual } from './Frames'
import { RichText } from './notes'

export default function ProjectCard({ project: p, priority }: { project: Project; priority?: boolean }) {
  const titleId = `t-${p.slug}`
  return (
    <article className={p.compact ? 'proj proj--compact' : 'proj'} aria-labelledby={titleId}>
      {p.card ? <Visual surface={p.card.surface} frames={p.card.frames} palette={p.compact ? undefined : p.palette} priority={priority} /> : null}
      <div className="proj-body">
        <p className="mono-label">{p.meta}</p>
        <h3 className="proj-title display" id={titleId}>
          {p.fiche ? <Link href={`/projets/${p.slug}`}>{p.name}</Link> : p.name}
        </h3>
        <RichText segs={p.lede} className={p.compact ? 'proj-text' : 'proj-lede'} />
        {p.text ? <RichText segs={p.text} className="proj-text" /> : null}
        <ul className="state">
          {p.state.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="stack-line">{p.stack}</p>
        {!p.card || p.compact ? <Swatches palette={p.palette} inline /> : null}
        <div className="actions">
          {p.fiche ? (
            <Link className="more" href={`/projets/${p.slug}`}>
              Lire la fiche →
            </Link>
          ) : null}
          {p.links?.map((l) => (
            <a key={l.href} className="more" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} ↗
            </a>
          ))}
          {!p.fiche && !p.links?.length ? <span className="later">Fiche à venir</span> : null}
        </div>
      </div>
    </article>
  )
}
