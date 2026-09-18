// Данные, не зависящие от языка. Тексты обеих версий — в src/i18n/ru.js и en.js.
export const contacts = {
  phone: '+7 702 201 23 33',
  phoneHref: 'tel:+77022012333',
  email: 'request.icg@gmail.com',
  emailHref: 'mailto:request.icg@gmail.com',
}

// Плейсхолдеры под ленту брендов. Заменяются на реальные логотипы
// (SVG/PNG в public/images/brands/) без изменения разметки.
export const brands = [
  'Rotork',
  'Spirax',
  'Auma',
  'Emerson',
  'Flowserve',
  'Bettis',
  'Velan',
  'KSB',
  'Samson',
  'Metso',
  'ARI-Armaturen',
  'Bosch Rexroth',
  'SKF',
  'Parker',
  'Swagelok',
  'Gestra',
  'Yokogawa',
  'Danfoss',
  'Festo',
  'Klinger',
  'Witzenmann',
  'Senior Flexonics',
  'Zimmermann',
  'Hyspan',
  'Belman',
  'Garlock',
  'Victaulic',
  'Pentair',
]

// Позиций в каталоге — считается по каталогу текущего языка.
export const countPositions = (catalog) =>
  catalog.reduce((sum, c) => sum + c.groups.reduce((s, g) => s + g.items.length, 0), 0)
