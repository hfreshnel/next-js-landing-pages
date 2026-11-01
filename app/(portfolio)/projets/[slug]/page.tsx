import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Architecture from '@/components/portfolio/Architecture'
import { Visual } from '@/components/portfolio/Frames'
import ScreenTour from '@/components/portfolio/ScreenTour'
import { RichText } from '@/components/portfolio/notes'
import { getProject, isExperiment, projectsWithFiche } from '@/lib/content/projects'

type Params = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projectsWithFiche.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p?.fiche) return {}
  return {
    title: p.name,
    description: p.fiche.lede,
    openGraph: { title: p.name, description: p.fiche.lede },
  }
}

export default async function FichePage({ params }: Params) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p?.fiche) notFound()
  const f = p.fiche

  const index = projectsWithFiche.findIndex((x) => x.slug === p.slug)
  const count = projectsWithFiche.length
  const prev = projectsWithFiche[(index - 1 + count) % count]
  const next = projectsWithFiche[(index + 1) % count]
  const section = isExperiment(p.slug)
    ? { href: '/#experimentations', label: 'Expérimentations' }
    : { href: '/#projets', label: 'Projets' }

  return (
    <article className="fiche" aria-labelledby="f-title">
      {/* Barre collante : retour aux projets à tout moment, et progression de lecture. */}
      <div className="fiche-bar">
        <Link className="back" href={section.href}>
          ← {section.label}
        </Link>
        <span className="fiche-bar-name" aria-hidden="true">
          {p.name}
        </span>
        <span className="fiche-bar-progress" aria-hidden="true" />
      </div>

      <header className="fiche-head">
        <p className="mono-label">Fiche projet · {p.meta}</p>
        <h1 className="fiche-title display" id="f-title">
          {p.name}
        </h1>
        <p className="fiche-lede">{f.lede}</p>
      </header>

      <dl className="facts">
        <div>
          <dt>Rôle</dt>
          <dd>{f.facts.role}</dd>
        </div>
        <div>
          <dt>Période</dt>
          <dd>{f.facts.period}</dd>
        </div>
        <div>
          <dt>Équipe</dt>
          <dd>{f.facts.team}</dd>
        </div>
        <div>
          <dt>Statut</dt>
          <dd>{f.facts.status}</dd>
        </div>
        <div className="wide">
          <dt>Stack</dt>
          <dd>{f.facts.stack}</dd>
        </div>
      </dl>

      <Visual surface={f.heroSurface} frames={f.hero} palette={p.palette} priority />

      {f.teamNote ? <p className="team-note">{f.teamNote}</p> : null}

      <section className="fiche-sec" aria-labelledby="h-probleme">
        <h2 className="fiche-h display" id="h-probleme">
          Le problème
        </h2>
        {f.problem.map((segs, i) => (
          <RichText key={i} segs={segs} />
        ))}
      </section>

      <section className="fiche-sec" aria-labelledby="h-defis">
        <h2 className="fiche-h display" id="h-defis">
          Trois défis techniques
        </h2>
        <ul className="challenges">
          {f.challenges.map((c) => (
            <li key={c.title}>
              <h3 className="challenge-title">{c.title}</h3>
              <RichText segs={c.body} />
            </li>
          ))}
        </ul>
      </section>

      <section className="fiche-sec fiche-sec--wide" aria-labelledby="h-archi">
        <h2 className="fiche-h display" id="h-archi">
          Architecture
        </h2>
        <figure className="arch-fig">
          <div className="arch-wrap">
            <Architecture id={f.architecture} />
          </div>
          <figcaption>{f.architectureCaption}</figcaption>
        </figure>
      </section>

      <section className="fiche-sec" aria-labelledby="h-decisions">
        <h2 className="fiche-h display" id="h-decisions">
          Décisions clés
        </h2>
        <ul className="plain-list">
          {f.decisions.map((segs, i) => (
            <li key={i}>
              <RichText segs={segs} as="span" />
            </li>
          ))}
        </ul>
      </section>

      <section className="fiche-sec" aria-labelledby="h-limites">
        <h2 className="fiche-h display" id="h-limites">
          Limites assumées
        </h2>
        <ul className="plain-list">
          {f.limits.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      {f.gallery ? (
        <section className="fiche-sec fiche-sec--wide" aria-labelledby="h-galerie">
          <h2 className="fiche-h display" id="h-galerie">
            {f.gallery.title}
          </h2>
          <ScreenTour frames={f.gallery.frames} glow={p.palette?.[0]?.hex} />
        </section>
      ) : null}

      <nav className="fiche-foot" aria-label="Fiches">
        {prev.slug !== p.slug ? (
          <Link href={`/projets/${prev.slug}`} rel="prev">
            <span className="mono-label">Fiche précédente</span>
            <span className="fiche-foot-name display">← {prev.name}</span>
          </Link>
        ) : null}
        {next.slug !== p.slug ? (
          <Link href={`/projets/${next.slug}`} rel="next" className="fiche-foot-next">
            <span className="mono-label">Fiche suivante</span>
            <span className="fiche-foot-name display">{next.name} →</span>
          </Link>
        ) : null}
      </nav>
    </article>
  )
}
