// Технические «плашки» — чертёжные сцены вместо стоковых фотографий.
// Каждая плашка рассчитана на тёмный фон и держит общую палитру.
// При появлении реальных фотографий объектов плашка заменяется на <img>
// с теми же пропорциями (см. README, раздел «Изображения»).

const STROKE = '#7E8F9C'
const LIGHT = '#C6D0D7'
const ACC = '#C96A0E'

function Ticks({ x, y, w, count = 12 }) {
  return (
    <g stroke={STROKE} strokeWidth="1" opacity="0.5">
      {Array.from({ length: count }).map((_, i) => (
        <line
          key={i}
          x1={x + (i * w) / (count - 1)}
          y1={y}
          x2={x + (i * w) / (count - 1)}
          y2={y + (i % 5 === 0 ? 12 : 6)}
        />
      ))}
    </g>
  )
}

/* Узел трубопровода: фланцевые соединения, задвижка, компенсатор */
export function PipelinePlate({ className = '' }) {
  return (
    <svg viewBox="0 0 620 520" className={className} role="img" aria-label="Схема узла трубопровода: фланцевые соединения, задвижка, компенсатор">
      <defs>
        <pattern id="pl-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0v40" fill="none" stroke={STROKE} strokeOpacity="0.16" strokeWidth="1" />
        </pattern>
        <pattern id="pl-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke={ACC} strokeOpacity="0.45" strokeWidth="2" />
        </pattern>
      </defs>

      <rect width="620" height="520" fill="url(#pl-grid)" />

      {/* магистраль */}
      <g fill="none" stroke={LIGHT} strokeWidth="2">
        <path d="M0 250h96M136 250h108M300 250h96M436 250h184" />
        <path d="M0 292h96M136 292h108M300 292h96M436 292h184" />
      </g>

      {/* фланцевая пара слева */}
      <g stroke={LIGHT} strokeWidth="2" fill="none">
        <rect x="96" y="228" width="14" height="86" />
        <rect x="122" y="228" width="14" height="86" />
        <line x1="110" y1="248" x2="122" y2="248" />
        <line x1="110" y1="294" x2="122" y2="294" />
      </g>
      <g fill={ACC}>
        <circle cx="103" cy="238" r="3" />
        <circle cx="103" cy="304" r="3" />
        <circle cx="129" cy="238" r="3" />
        <circle cx="129" cy="304" r="3" />
      </g>

      {/* компенсатор (сильфон) */}
      <g stroke={LIGHT} strokeWidth="2" fill="none">
        <path d="M244 250l14 42 14-42 14 42 14-42" />
        <path d="M244 292h56" />
        <rect x="238" y="234" width="8" height="74" />
        <rect x="298" y="234" width="8" height="74" />
      </g>

      {/* задвижка со штурвалом */}
      <g stroke={LIGHT} strokeWidth="2" fill="none">
        <rect x="396" y="222" width="12" height="98" />
        <rect x="424" y="222" width="12" height="98" />
        <path d="M408 232l16 76M436 232l-16 76" />
        <path d="M416 222v-58M392 164h48" />
        <rect x="400" y="140" width="32" height="24" />
      </g>
      <rect x="408" y="222" width="28" height="98" fill="url(#pl-hatch)" opacity="0.5" />

      {/* выносная линия и размер */}
      <g stroke={ACC} strokeWidth="1.5">
        <line x1="96" y1="360" x2="436" y2="360" />
        <line x1="96" y1="352" x2="96" y2="368" />
        <line x1="436" y1="352" x2="436" y2="368" />
      </g>
      <text x="96" y="388" fill={ACC} fontFamily="IBM Plex Mono, monospace" fontSize="13" letterSpacing="1.5">
        DN 300 / PN 40
      </text>

      <g stroke={STROKE} strokeWidth="1" opacity="0.6">
        <line x1="103" y1="228" x2="103" y2="176" />
        <line x1="270" y1="234" x2="270" y2="176" />
        <line x1="416" y1="140" x2="416" y2="112" />
      </g>
      <g fill={LIGHT} fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="1.4">
        <text x="96" y="166">ФЛАНЕЦ WN</text>
        <text x="238" y="166">КОМПЕНСАТОР</text>
        <text x="380" y="102">ПРИВОД</text>
      </g>

      <Ticks x={40} y={452} w={540} count={19} />
      <text x="40" y="486" fill={STROKE} fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
        ICG / УЗЕЛ ТРУБОПРОВОДА / ЛИСТ 01
      </text>
    </svg>
  )
}

/* Силуэт технологической установки — НПЗ */
export function RefineryPlate({ className = '' }) {
  return (
    <svg viewBox="0 0 620 360" className={className} role="img" aria-label="Силуэт технологической установки">
      <defs>
        <pattern id="rf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0v40" fill="none" stroke={STROKE} strokeOpacity="0.14" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="620" height="360" fill="url(#rf-grid)" />
      <g fill="none" stroke={LIGHT} strokeWidth="2">
        <path d="M30 300V150h44v150M52 150v-26M38 124h28" />
        <path d="M104 300v-96h34v96M104 232h34M104 264h34" />
        <path d="M168 300V96h26v204M168 130h26M168 170h26M168 210h26" />
        <path d="M224 300v-64h58v64M224 268h58" />
        <path d="M312 300V116h40v184M312 156h40M312 200h40M312 244h40" />
        <path d="M382 300v-52h44v52" />
        <path d="M456 300V140h34v160M456 180h34M456 220h34" />
        <path d="M520 300v-84h58v84M520 248h58" />
      </g>
      <g fill="none" stroke={ACC} strokeWidth="2">
        <path d="M74 176h30v56h64" />
        <path d="M194 148h118" />
        <path d="M352 176h104" />
        <path d="M490 264h30" />
      </g>
      <path d="M0 300h620" stroke={LIGHT} strokeWidth="2" />
      <path d="M0 316h620M0 332h620" stroke={STROKE} strokeWidth="1" strokeOpacity="0.4" />
      <g fill={STROKE} fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
        <text x="30" y="348">НЕФТЕГАЗ / ГОРНОДОБЫЧА / ПРОИЗВОДСТВО</text>
      </g>
    </svg>
  )
}

/* Карьерные уступы — горнодобывающие предприятия */
export function QuarryPlate({ className = '' }) {
  return (
    <svg viewBox="0 0 620 300" className={className} role="img" aria-label="Схема карьерных уступов">
      <g fill="none" stroke={STROKE} strokeWidth="2">
        <path d="M0 60h140l40 40h120l40 40h120l40 40h120" />
        <path d="M0 96h160l40 40h120l40 40h120l40 40h140" />
        <path d="M0 132h180l40 40h120l40 40h140" />
      </g>
      <g stroke={ACC} strokeWidth="2">
        <path d="M440 140v-40M420 100h40" />
        <circle cx="440" cy="92" r="5" fill={ACC} stroke="none" />
      </g>
      <g fill={STROKE} fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
        <text x="0" y="252">КАРЬЕР / УСТУПЫ / ОТМЕТКИ 60—180</text>
      </g>
    </svg>
  )
}
