import ContactForm from '@/components/portfolio/ContactForm'
import ProjectCard from '@/components/portfolio/ProjectCard'
import { RichText } from '@/components/portfolio/notes'
import { projects } from '@/lib/content/projects'
import { about, parcours, site, stack } from '@/lib/content/site'

export default function HomePage() {
  return (
    <>
      <section className="sec" id="apropos" aria-labelledby="h-apropos">
        <h2 className="sec-label" id="h-apropos">À propos</h2>
        <div className="prose">
          <p className="big">{about.lede}</p>
          <RichText segs={about.body} />
        </div>
        <p className="hint">
          Les passages <span className="sample">soulignés en pointillé</span> ouvrent une note : un parti pris, une comparaison, une
          étape du projet. Cliquez dessus, ou activez « Afficher toutes les notes ».
        </p>
      </section>

      <section className="sec" id="projets" aria-labelledby="h-projets">
        <h2 className="sec-label" id="h-projets">Projets</h2>
        <div className="projects">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} />
          ))}
        </div>
      </section>

      <section className="sec" id="parcours" aria-labelledby="h-parcours">
        <h2 className="sec-label" id="h-parcours">Parcours</h2>
        <ol className="rows">
          {parcours.map((r) => (
            <li key={r.title}>
              <span className="r-k">{r.years ?? <span className="ph">Années</span>}</span>
              <div>
                <p>{r.title}</p>
                <p className="stack-line">{r.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sec" id="stack" aria-labelledby="h-stack">
        <h2 className="sec-label" id="h-stack">Stack</h2>
        <dl className="rows">
          {stack.map((g) => (
            <div key={g.domain}>
              <dt>{g.domain}</dt>
              <dd>
                <ul className="chips">
                  {g.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="sec" id="contact" aria-labelledby="h-contact">
        <h2 className="sec-label" id="h-contact">Contact</h2>
        <p className="contact-lede display">Une proposition, un projet, une question ?</p>
        <ContactForm />
        <dl className="rows">
          <div>
            <dt>E-mail</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                github.com/hfreshnel ↗
              </a>
            </dd>
          </div>
        </dl>
        <p className="footer">
          Les écrans montrés sont rendus à partir du code de chaque projet, avec des données de démonstration. Les projets d&apos;équipe
          précisent ma part exacte.
        </p>
      </section>
    </>
  )
}
