'use client'

import { useState } from 'react'
import { T } from '@/lib/design'
import { projects } from '@/lib/homeData'

export default function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null)
  const activeProject = projects.find(p => p.id === openProject) ?? null

  return (
    <>
      <section style={{ background: T.dark, padding: `${T.spLg} 0`, borderTop: `1px solid ${T.border}` }}>
        <div className="wrap">
          <p className="section-label">Références</p>
          <h2 className="section-title">Projets sélectionnés</h2>
          <div className="project-cards">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => setOpenProject(p.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setOpenProject(p.id)}
              >
                <div className="project-thumb">
                  <span style={{
                    fontFamily: T.sans,
                    fontSize: T.fsSm,
                    color: T.mid,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}>
                    {p.id === 'packloop' ? 'À venir' : 'Aperçu'}
                  </span>
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-meta">{p.sector} - {p.type}</p>
                <div className="stack-chips">
                  {p.stack.map((s) => (
                    <span key={s} className="stack-chip">{s}</span>
                  ))}
                </div>
                <span className="card-cta">Voir le projet →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setOpenProject(null)}
        >
          <div className="modal-box">
            <button className="modal-close" onClick={() => setOpenProject(null)}>×</button>

            <h2 style={{
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: T.fsModal,
              color: T.light,
              margin: `0 0 ${T.spXs}`,
              letterSpacing: '-0.02em',
            }}>
              {activeProject.name}
            </h2>
            <p style={{
              fontFamily: T.sans,
              fontSize: T.fsSm,
              fontWeight: 300,
              color: T.mid,
              margin: `0 0 ${T.spMd}`,
              letterSpacing: '0.08em',
            }}>
              {activeProject.sector} - {activeProject.type}
            </p>

            <p className="modal-key">Problème</p>
            <p className="modal-val">{activeProject.problem}</p>

            <p className="modal-key">Solution</p>
            <p className="modal-val">{activeProject.solution}</p>

            <p className="modal-key">Résultat</p>
            <p className="modal-val">{activeProject.result}</p>

            <p className="modal-key">Stack</p>
            <div className="stack-chips" style={{ marginBottom: T.spMd }}>
              {activeProject.stack.map((s) => (
                <span key={s} className="stack-chip">{s}</span>
              ))}
            </div>

            <div className="modal-footer">
              {activeProject.href && (
                <a href={activeProject.href} className="btn-primary" style={{ padding: `${T.spXs} ${T.spSm}` }}>
                  Voir le projet →
                </a>
              )}
              {activeProject.demo && (
                <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Voir la démo →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
