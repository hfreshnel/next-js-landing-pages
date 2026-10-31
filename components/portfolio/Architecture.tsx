import type { ArchitectureId } from '@/lib/content/types'

// Schémas simplifiés, tirés des profils de projets. Couleurs via les classes de portfolio.css :
// les schémas suivent le thème clair ou sombre.

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-ah`} className="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L8,4 L0,8 z" />
      </marker>
      <marker id={`${id}-ahh`} className="ah-hook" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L8,4 L0,8 z" />
      </marker>
    </defs>
  )
}

function PulaPay() {
  const ah = 'url(#pp-ah)'
  const ahh = 'url(#pp-ahh)'
  return (
    <svg className="arch" viewBox="0 0 640 430" role="img" aria-labelledby="arch-pp">
      <title id="arch-pp">
        Architecture de PulaPay : l&apos;app mobile appelle une API Express hexagonale, reliée à Circle, Coinbase CDP et CoinGecko, avec
        PostgreSQL et Redis.
      </title>
      <Markers id="pp" />
      <path className="ln" d="M95,60 V26 H555 V48" markerEnd={ah} />
      <text className="lbl" x="325" y="18" textAnchor="middle">SDK natif · signature par PIN</text>

      <rect className="box" x="20" y="60" width="150" height="110" rx="6" />
      <text className="t" x="36" y="88">App mobile</text>
      <text className="s" x="36" y="108">Expo · React Native</text>
      <text className="s" x="36" y="126">Zustand · i18next</text>
      <text className="s" x="36" y="144">Sentry · PostHog</text>

      <line className="ln" x1="172" y1="115" x2="228" y2="115" markerStart={ah} markerEnd={ah} />
      <text className="lbl" x="200" y="106" textAnchor="middle">HTTPS</text>

      <rect className="box--core" x="230" y="40" width="200" height="232" rx="6" />
      <text className="t" x="246" y="64">API Express</text>
      <text className="s" x="246" y="81">architecture hexagonale</text>
      <rect className="layer" x="244" y="96" width="172" height="36" rx="3" />
      <text className="tl" x="256" y="111">HTTP</text>
      <text className="s" x="256" y="125">routes, validation Zod</text>
      <rect className="layer" x="244" y="138" width="172" height="36" rx="3" />
      <text className="tl" x="256" y="153">Application</text>
      <text className="s" x="256" y="167">commandes et requêtes</text>
      <rect className="layer" x="244" y="180" width="172" height="36" rx="3" />
      <text className="tl" x="256" y="195">Domaine</text>
      <text className="s" x="256" y="209">ledger · XState · Money</text>
      <rect className="layer" x="244" y="222" width="172" height="36" rx="3" />
      <text className="tl" x="256" y="237">Infrastructure</text>
      <text className="s" x="256" y="251">adapters · jobs BullMQ</text>

      <rect className="box" x="490" y="50" width="130" height="52" rx="6" />
      <text className="t" x="504" y="72">Circle W3S</text>
      <text className="s" x="504" y="90">wallets · transferts</text>
      <rect className="box" x="490" y="122" width="130" height="52" rx="6" />
      <text className="t" x="504" y="144">Coinbase CDP</text>
      <text className="s" x="504" y="162">onramp · offramp</text>
      <rect className="box" x="490" y="194" width="130" height="52" rx="6" />
      <text className="t" x="504" y="216">CoinGecko</text>
      <text className="s" x="504" y="234">taux de change</text>

      <line className="ln" x1="432" y1="68" x2="488" y2="68" markerEnd={ah} />
      <line className="ln ln--hook" x1="490" y1="86" x2="434" y2="86" markerEnd={ahh} />
      <line className="ln" x1="432" y1="140" x2="488" y2="140" markerEnd={ah} />
      <line className="ln ln--hook" x1="490" y1="158" x2="434" y2="158" markerEnd={ahh} />
      <line className="ln" x1="432" y1="212" x2="488" y2="212" markerEnd={ah} />

      <line className="ln" x1="277" y1="274" x2="277" y2="310" markerEnd={ah} />
      <line className="ln" x1="382" y1="274" x2="382" y2="310" markerEnd={ah} />
      <rect className="box" x="230" y="312" width="95" height="58" rx="6" />
      <text className="t" x="242" y="336">PostgreSQL</text>
      <text className="s" x="242" y="354">Prisma · ledger</text>
      <rect className="box" x="335" y="312" width="95" height="58" rx="6" />
      <text className="t" x="347" y="336">Redis</text>
      <text className="s" x="347" y="354">BullMQ · cache</text>

      <line className="ln" x1="20" y1="408" x2="50" y2="408" markerEnd={ah} />
      <text className="lbl" x="58" y="412">appel</text>
      <line className="ln ln--hook" x1="110" y1="408" x2="140" y2="408" markerEnd={ahh} />
      <text className="lbl" x="148" y="412">webhook signé : RSA-SHA256 (Circle), HMAC-SHA256 (Coinbase)</text>
    </svg>
  )
}

function Legend({ y }: { y: number }) {
  return (
    <>
      <rect className="box--mine" x="20" y={y - 10} width="22" height="14" rx="3" />
      <text className="lbl" x="50" y={y + 1}>mon périmètre</text>
      <rect className="box--team" x="160" y={y - 10} width="22" height="14" rx="3" />
      <text className="lbl" x="190" y={y + 1}>équipe</text>
    </>
  )
}

function Kwabo() {
  const ah = 'url(#kw-ah)'
  const ahh = 'url(#kw-ahh)'
  return (
    <svg className="arch" viewBox="0 0 640 430" role="img" aria-labelledby="arch-kw">
      <title id="arch-kw">
        Architecture de Kwabo : l&apos;app Android, branchée soit sur son faux backend en mode mocks, soit sur la passerelle de
        l&apos;équipe, qui mène à l&apos;API Spring Boot et à Keycloak.
      </title>
      <Markers id="kw" />

      <rect className="box--mine" x="20" y="30" width="190" height="236" rx="6" />
      <text className="t" x="36" y="54">App Android</text>
      <text className="s" x="36" y="71">Expo · React Native · TypeScript</text>
      <rect className="layer" x="34" y="84" width="162" height="36" rx="3" />
      <text className="tl" x="46" y="99">Écrans</text>
      <text className="s" x="46" y="113">expo-router</text>
      <rect className="layer" x="34" y="126" width="162" height="36" rx="3" />
      <text className="tl" x="46" y="141">Features</text>
      <text className="s" x="46" y="155">un mapper par endpoint</text>
      <rect className="layer" x="34" y="168" width="162" height="36" rx="3" />
      <text className="tl" x="46" y="183">État</text>
      <text className="s" x="46" y="197">TanStack Query · Zustand</text>
      <rect className="layer" x="34" y="210" width="162" height="40" rx="3" />
      <text className="tl" x="46" y="225">Client HTTP</text>
      <text className="s" x="46" y="240">axios · refresh sur 401</text>

      <line className="ln" x1="115" y1="268" x2="115" y2="318" markerEnd={ah} />
      <text className="lbl" x="124" y="298">mode mocks</text>
      <rect className="box--mine" x="20" y="320" width="190" height="60" rx="6" />
      <text className="t" x="36" y="344">Faux backend</text>
      <text className="s" x="36" y="362">46 routes · servi aux tests par MSW</text>

      <line className="ln" x1="212" y1="152" x2="268" y2="152" markerEnd={ah} />
      <text className="lbl" x="240" y="143" textAnchor="middle">HTTPS</text>
      <rect className="box--team" x="270" y="118" width="120" height="66" rx="6" />
      <text className="t" x="284" y="144">Gateway</text>
      <text className="s" x="284" y="162">nginx · même origine</text>

      <line className="ln" x1="392" y1="138" x2="438" y2="100" markerEnd={ah} />
      <text className="lbl" x="404" y="110">/api/</text>
      <line className="ln" x1="392" y1="168" x2="438" y2="262" markerEnd={ah} />
      <text className="lbl" x="420" y="226">/auth/</text>

      <rect className="box--team" x="440" y="30" width="180" height="186" rx="6" />
      <text className="t" x="456" y="54">API Spring Boot</text>
      <text className="s" x="456" y="72">équipe backend</text>
      <text className="s" x="456" y="100">PostgreSQL · MongoDB</text>
      <text className="s" x="456" y="118">Meilisearch · Rustfs</text>
      <text className="s" x="456" y="146">FeexPay · demande USSD</text>
      <text className="s" x="456" y="164">Termii · SMS</text>
      <text className="s" x="456" y="182">Firebase Admin · push</text>

      <rect className="box--team" x="440" y="240" width="180" height="56" rx="6" />
      <text className="t" x="456" y="264">Keycloak</text>
      <text className="s" x="456" y="282">connexion · refresh</text>

      <path className="ln ln--hook" d="M440,186 C330,226 280,236 214,240" markerEnd={ahh} />
      <text className="lbl lbl--accent" x="300" y="246">push FCM</text>

      <Legend y={412} />
    </svg>
  )
}

function Metrique() {
  const ah = 'url(#mq-ah)'
  return (
    <svg className="arch" viewBox="0 0 640 440" role="img" aria-labelledby="arch-mq">
      <title id="arch-mq">
        Architecture simplifiée de Métrique : le navigateur appelle l&apos;API FastAPI et reçoit les messages par Centrifugo ; en accent,
        le catalogue, la recherche, le social et la messagerie que j&apos;ai développés.
      </title>
      <Markers id="mq" />

      <rect className="box--team" x="20" y="130" width="150" height="66" rx="6" />
      <text className="t" x="36" y="156">SPA React</text>
      <text className="s" x="36" y="174">front de l&apos;équipe</text>

      <line className="ln" x1="172" y1="163" x2="228" y2="163" markerEnd={ah} />
      <text className="lbl" x="200" y="154" textAnchor="middle">HTTPS</text>

      <rect className="box--core" x="230" y="30" width="210" height="262" rx="6" />
      <text className="t" x="246" y="54">API FastAPI</text>
      <text className="s" x="246" y="71">REST · validation des JWT</text>
      <rect className="box--mine" x="244" y="84" width="182" height="34" rx="3" />
      <text className="tl" x="256" y="99">Catalogue</text>
      <text className="s" x="256" y="112">services · packs</text>
      <rect className="box--mine" x="244" y="124" width="182" height="34" rx="3" />
      <text className="tl" x="256" y="139">Recherche</text>
      <text className="s" x="256" y="152">plein texte (co-écrit)</text>
      <rect className="box--mine" x="244" y="164" width="182" height="34" rx="3" />
      <text className="tl" x="256" y="179">Social</text>
      <text className="s" x="256" y="192">likes · favoris · avis</text>
      <rect className="box--mine" x="244" y="204" width="182" height="34" rx="3" />
      <text className="tl" x="256" y="219">Messagerie</text>
      <text className="s" x="256" y="232">chat par commande · direct</text>
      <rect className="box--team" x="244" y="244" width="182" height="34" rx="3" />
      <text className="tl" x="256" y="259">Commandes · paiement</text>
      <text className="s" x="256" y="272">séquestre multi-PSP</text>

      <rect className="box" x="500" y="40" width="120" height="52" rx="6" />
      <text className="t" x="514" y="62">PostgreSQL</text>
      <text className="s" x="514" y="80">métier · plein texte</text>
      <rect className="box" x="500" y="112" width="120" height="52" rx="6" />
      <text className="t" x="514" y="134">MongoDB</text>
      <text className="s" x="514" y="152">messages par jour</text>
      <rect className="box" x="500" y="236" width="120" height="56" rx="6" />
      <text className="t" x="514" y="258">Keycloak</text>
      <text className="s" x="514" y="276">OIDC · JWKS</text>

      <line className="ln" x1="442" y1="66" x2="498" y2="66" markerEnd={ah} />
      <line className="ln" x1="442" y1="138" x2="498" y2="138" markerEnd={ah} />
      <line className="ln" x1="442" y1="264" x2="498" y2="264" markerEnd={ah} />
      <text className="lbl" x="470" y="256" textAnchor="middle">JWKS</text>

      <line className="ln" x1="335" y1="294" x2="335" y2="326" markerEnd={ah} />
      <text className="lbl" x="344" y="314">publish</text>
      <rect className="box--mine" x="230" y="328" width="210" height="54" rx="6" />
      <text className="t" x="246" y="351">Centrifugo</text>
      <text className="s" x="246" y="369">WebSocket · JWT Keycloak</text>

      <path className="ln" d="M228,355 H95 V198" markerEnd={ah} />
      <text className="lbl" x="104" y="346">WebSocket</text>
      <path className="ln" d="M442,355 H560 V294" markerEnd={ah} />
      <text className="lbl" x="568" y="330">JWKS</text>

      <Legend y={420} />
    </svg>
  )
}

export default function Architecture({ id }: { id: ArchitectureId }) {
  if (id === 'pulapay') return <PulaPay />
  if (id === 'kwabo') return <Kwabo />
  return <Metrique />
}
