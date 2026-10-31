// Règle de rédaction du portfolio : jamais de tiret cadratin (U+2014) dans le contenu affiché.
// Lancé avant chaque build (`prebuild`) ; échoue en listant les occurrences.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOTS = ['app/(portfolio)', 'components/portfolio', 'lib/content']
const EXT = /\.(tsx?|css|md)$/
const DASH = '—'

const hits = []
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (EXT.test(name)) {
      readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
        if (line.includes(DASH)) hits.push(`${p}:${i + 1}: ${line.trim()}`)
      })
    }
  }
}
ROOTS.forEach(walk)

if (hits.length) {
  console.error(`Tiret cadratin interdit (${hits.length}) : remplacer par une virgule, deux-points ou un tiret simple.\n${hits.join('\n')}`)
  process.exit(1)
}
console.log('Aucun tiret cadratin.')
