// Единый line-стиль: сетка 48×48, штрих 1.5, без скруглений, тематика трубопроводной арматуры.
const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
  'aria-hidden': true,
}

const Svg = ({ className = 'h-12 w-12', children }) => (
  <svg {...base} className={className}>
    {children}
  </svg>
)

/* Задвижка / клапан на трубе — снабжение */
export const IconValve = (p) => (
  <Svg {...p}>
    <path d="M2 24h11M35 24h11" />
    <path d="M13 15v18M35 15v18" />
    <path d="M13 17l22 14M35 17L13 31" />
    <path d="M24 24V10M18 10h12" />
    <path d="M20 6h8v4h-8z" />
  </Svg>
)

/* Фланец в разрезе — продукция */
export const IconFlange = (p) => (
  <Svg {...p}>
    <path d="M14 8h6v32h-6zM28 8h6v32h-6z" />
    <path d="M20 18h8v12h-8z" />
    <circle cx="17" cy="14" r="1.5" />
    <circle cx="17" cy="34" r="1.5" />
    <circle cx="31" cy="14" r="1.5" />
    <circle cx="31" cy="34" r="1.5" />
    <path d="M6 24h8M34 24h8" />
  </Svg>
)

/* Контейнер на платформе — логистика */
export const IconFreight = (p) => (
  <Svg {...p}>
    <path d="M4 12h30v18H4z" />
    <path d="M11 12v18M18 12v18M25 12v18" />
    <path d="M34 18h6l4 7v5h-10" />
    <circle cx="13" cy="36" r="4" />
    <circle cx="37" cy="36" r="4" />
    <path d="M2 30h2M44 30h2" />
  </Svg>
)

/* Манометр — технический аудит */
export const IconGauge = (p) => (
  <Svg {...p}>
    <circle cx="24" cy="20" r="14" />
    <path d="M24 20l8-6" />
    <path d="M24 6v3M38 20h-3M10 20h3M14 10l2 2M34 10l-2 2" />
    <path d="M21 34h6v8h-6z" />
    <path d="M17 44h14" />
  </Svg>
)

/* Заводской корпус — производители */
export const IconPlant = (p) => (
  <Svg {...p}>
    <path d="M4 42V22l11 7V22l11 7V14h18v28z" />
    <path d="M32 20h6M32 27h6M32 34h6" />
    <path d="M9 14h5v8" />
    <path d="M2 42h44" />
  </Svg>
)

/* Склад / стеллаж — склады */
export const IconWarehouse = (p) => (
  <Svg {...p}>
    <path d="M4 18L24 8l20 10v24H4z" />
    <path d="M11 42V26h26v16" />
    <path d="M11 34h26" />
    <path d="M20 26v8M28 34v8" />
  </Svg>
)

/* Рукопожатие-контракт — клиенты */
export const IconAgreement = (p) => (
  <Svg {...p}>
    <path d="M8 10h24l8 8v20H8z" />
    <path d="M32 10v8h8" />
    <path d="M13 26h10M13 32h18" />
    <path d="M28 22l4 4 8-8" />
  </Svg>
)

/* Компенсатор (сильфон) */
export const IconBellows = (p) => (
  <Svg {...p}>
    <path d="M2 24h8M38 24h8" />
    <path d="M10 14h4v20h-4zM34 14h4v20h-4z" />
    <path d="M14 18l4 12 4-12 4 12 4-12 4 12" />
  </Svg>
)

/* Гибкий шланг в бухте */
export const IconHose = (p) => (
  <Svg {...p}>
    <path d="M6 16h6v8H6zM36 24h6v8h-6z" />
    <path d="M12 20h8c6 0 6 12 12 12h4" />
    <path d="M12 16h8c9 0 9 16 16 16h6" />
  </Svg>
)

/* Конденсатоотводчик — паровая система */
export const IconSteamTrap = (p) => (
  <Svg {...p}>
    <path d="M2 30h10M36 30h10" />
    <path d="M12 20h24v20H12z" />
    <circle cx="24" cy="30" r="6" />
    <path d="M18 14c0-3 4-3 4-6M26 14c0-3 4-3 4-6" />
  </Svg>
)

/* Электропривод */
export const IconActuator = (p) => (
  <Svg {...p}>
    <path d="M2 38h14M32 38h14" />
    <path d="M16 32h16v12H16z" />
    <path d="M20 32V20h8v12" />
    <path d="M14 8h20v12H14z" />
    <path d="M24 20v-4" />
    <path d="M19 14h10" />
  </Svg>
)

export const IconArrow = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const IconPlus = ({ className = 'h-4 w-4', open = false }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
    <path d="M4 12h16" />
    {!open && <path d="M12 4v16" />}
  </svg>
)
