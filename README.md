# ТОО «Intertrade and Consulting Group» — корпоративный сайт

React + Vite + Tailwind CSS, React Router. Пять страниц: главная, о компании, услуги, продукция, контакты.

## Запуск

```
npm install
npm run dev      # локальная разработка
npm run build    # сборка в dist/
npm run preview  # просмотр собранной версии
```

## Структура

```
src/
  data/company.js    тексты компании: направления, преимущества, аутсорсинг, специалисты, бренды
  data/catalog.js    каталог продукции: группы, подгруппы, позиции
  components/        шапка, подвал, иконки, чертёжные плашки, общие блоки (ui.jsx)
  pages/             Home, About, Services, Products, Contacts
```

Весь редактируемый контент вынесен в `src/data/` — правка текстов не требует изменения разметки.

## Форма заявки

`src/pages/Contacts.jsx` валидируется на фронтенде (организация, контактное лицо, телефон,
e-mail, текст заявки, согласие). Отправка идёт на адрес из переменной окружения:

```
# .env.local
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Без переменной форма работает в режиме заглушки: проверяет поля, показывает подтверждение,
запрос не уходит. Формат отправки — JSON POST с полями `company, name, phone, email, subject,
message, consent`.

## Дизайн-система

Палитра задана в `tailwind.config.js` (дефолтная палитра Tailwind отключена):

- `graphite` 950–600 — тёмная база, шапка, тёмные секции;
- `steel` 500–50 — текст, разделители, светлые фоны;
- `ochre` 700–400 — единственный акцент (маркировка трубопроводов);
- `signal.red` / `signal.green` — только состояния формы.

Шрифты: `Archivo` (заголовки, крупные числа-индексы), `IBM Plex Sans` (текст),
`IBM Plex Mono` (маркировки, артикулы, технические подписи). Подключены в `index.html`.

Служебные классы — в `src/index.css` (`.shell`, `.tag`, `.btn-*`, `.field`, `.reveal`).

## Изображения

Вместо стоковых фотографий используются чертёжные плашки — inline-SVG в
`src/components/Plates.jsx` (`PipelinePlate`, `RefineryPlate`, `QuarryPlate`).

Замена на реальные фотографии объектов: положить файлы в `public/images/` и подставить
`<img>` с теми же пропорциями на место компонента плашки, например:

```jsx
<img
  src="/images/pipeline.jpg"
  alt="Технологический трубопровод"
  className="w-full grayscale contrast-110"
/>
```

Рекомендация по обработке: десатурация или лёгкий холодный тон, без цветных бликов —
чтобы фото не выпадали из палитры.

## Логотипы производителей

Лента брендов (`BrandStrip` в `src/components/ui.jsx`) выводит список из `brands`
в `src/data/company.js` — сейчас это текстовые плейсхолдеры. Для реальных логотипов
положить SVG/PNG в `public/images/brands/` и заменить содержимое ячейки на `<img>`;
разметка ленты и анимация при этом не меняются.

## Анимации

Только появление блоков при скролле (`src/components/Reveal.jsx`, IntersectionObserver)
и ленточная прокрутка брендов. Оба эффекта отключаются при
`prefers-reduced-motion: reduce`.

## Развёртывание

Статическая сборка `dist/`. Для SPA-маршрутов нужен fallback на `index.html`
(Netlify — `_redirects: /* /index.html 200`, Nginx — `try_files $uri /index.html`).
