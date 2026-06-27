# 🚗 AI Agent Prompt — Bulgarian Driving School Website
## "Better Than The Competition" Edition

---

## YOUR MISSION

You are a senior frontend engineer and UI/UX designer.
Build a **complete, production-ready, single-file driving school website** in Bulgarian.
The result must feel **premium, energetic, and modern** — clearly superior to typical
Bulgarian driving school websites. Reference competitor for context only: nikolov2011.com.

Do NOT imitate the competitor. **Beat it.**

The site should feel like a **premium consumer app** — think Airbnb or Revolut energy,
applied to a driving school. Every section should feel intentional and designed.

---

## BRAND IDENTITY

- **School name:** [АВТОШКОЛА ИМЕ] — use as placeholder throughout
- **Tagline:** "Шофирай с увереност." (use consistently)
- **City:** [ГРАД], България
- **Tone:** Confident, young, energetic, trustworthy. Never corporate or stiff.
- **Language:** Bulgarian (BG) everywhere. `<html lang="bg">`.

---

## COLOR SYSTEM — STRICT

| Token | Value | Usage |
|---|---|---|
| `--clr-primary` | `#FF5C1A` | CTAs, highlights, accents, active states |
| `--clr-primary-light` | `#FFF0EA` | Tinted backgrounds, card hovers |
| `--clr-primary-dark` | `#D94A10` | Button hover states |
| `--clr-dark` | `#1A1A2E` | Navigation, footer, headings |
| `--clr-dark-2` | `#2D2D44` | Footer secondary bg |
| `--clr-bg` | `#F4F4F5` | Page background |
| `--clr-surface` | `#FFFFFF` | Cards, navbar, modals |
| `--clr-text` | `#1A1A2E` | Body text |
| `--clr-text-muted` | `#6B7280` | Subtitles, captions |
| `--clr-border` | `#E5E7EB` | Dividers, card borders |

**RULE:** No other colors. No red, no blue, no green unless explicitly stated.
Orange `#FF5C1A` is the ONLY accent color.

---

## TYPOGRAPHY

- **Font:** `Inter` from Google Fonts — weights 400, 500, 600, 700, 900
- **Display headings:** 700–900 weight, tight letter-spacing (`-0.03em`)
- **Body:** 400–500 weight, `line-height: 1.7`
- **Buttons/labels:** 600 weight, slight letter-spacing (`0.01em`)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
```

---

## SITE ARCHITECTURE — ALL ON ONE PAGE

### SECTION 0 — TOP INFO BAR
- Slim bar, `background: var(--clr-dark)`, height ~40px
- Left: `📍 [Адрес 1]` · `📍 [Адрес 2]`
- Right: `📞 +359 XXX XXX XXX` · `✉ info@avtoshkola.bg` · Facebook icon
- Text: white, 13px. On mobile: hide addresses, show only phone + icons.

---

### SECTION 1 — STICKY NAVIGATION
- Background: `white`, `box-shadow` on scroll (JS)
- Left: Logo — bold "АВТОШКОЛА" in `--clr-dark` + "[ИМЕ]" in `--clr-primary`, 20px
- Center: Nav links — `Начало | Курсове | Категории ▾ | Услуги ▾ | За нас | Контакти`
  - **Dropdown "Категории":** Кат. A/А1/А2 · Кат. B · Кат. B78 (Автоматик) · Кат. BE · Кат. C · Кат. CE · Кат. D · Кат. D1
  - **Dropdown "Услуги":** Проф. компетентност · Възстановяване на точки · Опреснителни часове · АДР · Мотокари / ПСМ
  - Dropdowns: white card, `border-radius: 12px`, subtle shadow, slide-down animation
- Right: CTA button "ЗАПИШИ СЕ" — `background: --clr-primary`, white text, `border-radius: 8px`, hover: `--clr-primary-dark`
- **Mobile:** Hamburger → full-screen slide-in drawer, dark bg `--clr-dark`, orange accents

---

### SECTION 2 — HERO (FULL VIEWPORT)
**This is the most important section. Make it exceptional.**

Layout: Full-height (`100vh`), split layout on desktop:
- **Left half (60%):** Text content, vertically centered
  - Small orange pill badge: `🏆 #1 Автошкола в [ГРАД]`
  - H1 (massive, 72px desktop / 44px mobile, weight 900):
    `Твоят път към` ← normal color
    `свободата` ← in `--clr-primary`, italic
    `започва тук.`
  - Subtitle (18px, muted): "Записвай се онлайн. Гъвкав график. Опитни инструктори. Всички категории."
  - Two CTA buttons side by side:
    - Primary: "ЗАПИШИ СЕ ОНЛАЙН" — orange fill, white text
    - Secondary: "Виж курсовете ↓" — transparent, orange border + text
  - Trust bar below buttons (small, muted text with icons):
    `✓ Над 1000 успешни курсисти` · `✓ Лицензирана школа` · `✓ Безплатна консултация`

- **Right half (40%):** Hero image — use a high-quality Unsplash image of a person
  driving confidently (happy, young driver). Apply a subtle orange-tinted clip or
  angled geometric shape as frame (CSS clip-path polygon). NOT a plain rectangle.
  Image URL: `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800`

- **Background:** White. Large decorative blurred orange circle (opacity 0.07) behind
  the text — adds energy without noise. CSS: `border-radius: 50%; filter: blur(80px); background: #FF5C1A; opacity: 0.07;`

- **Scroll indicator:** Animated bouncing arrow at bottom center.

---

### SECTION 3 — STATS TICKER
**Full-width dark bar (`--clr-dark`), height ~90px.**
4 stats in a row, separated by vertical dividers:
- `1000+` Успешни курсисти
- `15+` Години опит
- `98%` Успеваемост
- `4` Категории

Each stat: number in large orange (`--clr-primary`) bold text, label below in white/muted.
On mobile: 2×2 grid.

---

### SECTION 4 — COURSE CATEGORIES
Title: `Всички категории` (centered, large H2)
Subtitle: `От мотоциклет до камион — обучаваме за всички видове превозни средства.`

**8 category cards in a responsive grid (4 cols desktop / 2 cols mobile):**
Each card:
- Icon (large emoji or SVG icon: 🏍 🚗 🚌 🚛 etc.)
- Category label: "Категория B"
- Short Bulgarian description (1 line)
- Bottom: orange "→ Детайли" link
- Card style: white bg, `border: 1px solid --clr-border`, `border-radius: 16px`,
  `padding: 24px`, hover: `border-color: --clr-primary`, lift with `transform: translateY(-4px)`
- On hover: top border becomes thick orange: `border-top: 3px solid --clr-primary`

Cards:
1. 🏍 Категория А / А1 / А2 — "Мотоциклети и мотопеди"
2. 🚗 Категория B — "Леки автомобили — ръчна скоростна кутия"
3. 🚗 Категория B78 — "Леки автомобили — автоматична скоростна кутия"
4. 🚗 Категория BE — "Лек автомобил с ремарке"
5. 🚛 Категория C — "Товарни автомобили над 3.5т"
6. 🚛 Категория CE — "Товарен автомобил с ремарке"
7. 🚌 Категория D — "Автобуси — превоз на пътници"
8. 🚌 Категория D1 — "Микробуси до 16 места"

---

### SECTION 5 — WHY CHOOSE US
**Alternating background: `--clr-bg`**
Left: Large bold text block:
- Small orange label: `ЗАЩО НИЕ`
- H2 (56px, weight 900): `Различни от всички останали.`
- Body text (18px): explanation paragraph
- List of 5 key points with orange checkmarks ✓

Right: 2×2 grid of feature cards (white, rounded, bordered):
1. 📅 Гъвкав график — "Записвай в удобен за теб ден и час"
2. 👨‍🏫 Опитни инструктори — "Търпеливи, ясни, подкрепящи"
3. 🚗 Модерни автомобили — "Поддържан и безопасен автопарк"
4. 📱 Онлайн записване — "Запиши се за 2 минути от телефона"

---

### SECTION 6 — SERVICES
**Background: `--clr-dark`** (dark section for contrast)
Title: white H2 — `Допълнителни услуги`
Subtitle: muted white — `Не само шофьорски курсове.`

**5 service cards in a horizontal row (scroll on mobile):**
Each card: dark surface `#2D2D44`, `border-radius: 16px`, orange icon (emoji),
white title, muted subtitle, orange "→" link at bottom.

Services:
1. 🔄 Възстановяване на точки
2. 📋 Професионална компетентност (Карта за квалификация)
3. ⏱ Опреснителни часове
4. ⚠️ АДР — Опасни товари
5. 🏗 Мотокари и ПСМ

---

### SECTION 7 — HOW IT WORKS (PROCESS)
**Background: white**
Title: `Как работи?` (centered H2)
Subtitle: `Три стъпки до шофьорска книжка.`

**3-step horizontal timeline:**
Step 1: Orange numbered circle "1" → "Запиши се онлайн" — fill form, pick schedule
Step 2: Orange numbered circle "2" → "Премини обучението" — theory + practice
Step 3: Orange numbered circle "3" → "Вземи книжката" — pass the exam, drive free

Connected by dashed orange line on desktop.
On mobile: vertical stack.

---

### SECTION 8 — TESTIMONIALS
**Background: `--clr-bg`**
Title: `Какво казват нашите курсисти`

**Carousel/slider with 4 cards (JS, auto-scroll every 4s):**
Each card: white bg, rounded, 5 orange stars ★★★★★, quote text (Bulgarian),
reviewer name + "— Проверен курсист в Google" badge.

Sample reviews (placeholder):
- "Взех изпита от първия опит! Инструкторът беше невероятно търпелив и ясен."
- "Онлайн записването е супер удобно. За 2 минути имах насрочен час."
- "Препоръчвам на всички! Страхотно отношение и модерни коли."
- "Гъвкавият график ми помогна да се уча дори с натоварена работа."

Navigation: dot indicators + prev/next arrows (orange).

---

### SECTION 9 — GALLERY
**Background: white**
Title: `Нашите моменти`

**Masonry grid, 3 columns desktop / 2 mobile:**
Use 8 images from Unsplash (driving, cars, roads, instructors):
- https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600
- https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600
- https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600
- https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600
- https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600
- https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600
- https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600
- https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600

Hover: slight zoom (scale 1.05) + orange overlay tint (opacity 0.15).
Click: Lightbox modal with overlay.

---

### SECTION 10 — ONLINE ENROLLMENT CTA BANNER
**Full-width section, `background: --clr-primary` (orange)**
Centered text:
- H2 (white, 48px, bold): `Готов ли си да тръгнеш?`
- Subtitle (white/semitransparent): `Записвай се онлайн — бързо, лесно, без чакане на опашка.`
- Big white button: "ЗАПИШИ СЕ СЕГА" → `color: --clr-primary`, `bg: white`

---

### SECTION 11 — CONTACT + OFFICES
**Background: `--clr-bg`**
Title: `Намери ни`

**Two-column layout:**
Left: Two office cards (white, rounded, bordered):
- Card includes: address, phone (clickable), email (clickable), "Виж на картата →" button

Right: Google Maps embed (iframe placeholder with orange border-radius frame).

**Below: Contact form (full-width card)**
Fields: Три * (Вашето Имe) · Телефон · Имейл · Категория (select dropdown) · Съобщение
Submit: "ИЗПРАТЕТЕ ЗАПИТВАНЕ" — orange button, full width

---

### SECTION 12 — FOOTER
**Background: `--clr-dark`**

Top: 4-column grid
- Col 1: Logo (white) + tagline + social icons (Facebook, Instagram) — orange on hover
- Col 2: `КУРСОВЕ` links (all categories)
- Col 3: `УСЛУГИ` links
- Col 4: `КОНТАКТИ` — addresses, phones, email, working hours

Bottom bar: `border-top: 1px solid rgba(255,255,255,0.1)`
- Left: `© 2025 Автошкола [ИМЕ]. Всички права запазени.`
- Right: `Политика за поверителност · Бисквитки`
- All text: white/muted

---

## ANIMATIONS & INTERACTIONS

### Scroll animations
Use `IntersectionObserver`. When section enters viewport:
- Cards: `opacity: 0 → 1` + `translateY(30px → 0)`, staggered 100ms per card
- Section titles: `opacity: 0 → 1` + `translateX(-20px → 0)`
- Stats numbers: Count-up animation (JS) when stats section enters viewport

### Navbar
```javascript
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
```

### Buttons
- All CTA buttons: `transition: all 0.2s ease`
- Hover: `transform: translateY(-2px)` + slightly darker bg
- Active: `transform: scale(0.97)`

### Category cards
- Hover: `transform: translateY(-6px)` + orange top border + shadow
- Transition: `0.25s cubic-bezier(0.4, 0, 0.2, 1)`

### Mobile menu
- Hamburger → X icon transition (CSS)
- Full-screen overlay: `transform: translateX(100%) → translateX(0)`
- Dark bg with orange accents

---

## TECHNICAL REQUIREMENTS

- **Output:** Single `index.html` file with all CSS and JS embedded (or 3 separate files)
- **Mobile-first:** Breakpoints at `640px`, `768px`, `1024px`, `1280px`
- **No frameworks:** Pure HTML5, CSS3, vanilla JS only (no React, no jQuery)
- **SEO meta tags:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Автошкола [ИМЕ] — [ГРАД]. Шофьорски курсове за категории A, B, C, D. Запиши се онлайн.">
<meta property="og:title" content="Автошкола [ИМЕ] | [ГРАД]">
<meta property="og:description" content="Шофирай с увереност. Запиши се онлайн.">
<title>Автошкола [ИМЕ] — [ГРАД] | Шофьорски курсове</title>
```
- **Accessibility:** Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<footer>`),
  `aria-label` on nav, `alt` on all images, focus rings on interactive elements
- **Performance:** `loading="lazy"` on all images below the fold
- **Smooth scroll:** `html { scroll-behavior: smooth; }` + JS for offset (navbar height)
- **Active nav link:** Highlight current section's nav link on scroll (IntersectionObserver)

---

## WHAT MAKES THIS BETTER THAN THE COMPETITOR

| Competitor (nikolov2011.com) | This Site |
|---|---|
| Red/navy — common, expected | Orange/white — energetic, distinctive |
| WordPress bloat, slow load | Clean vanilla HTML, instant load |
| Basic card grid | Staggered animations, premium interactions |
| Plain photo slider | Split hero with geometric image framing |
| Static page feel | Count-up stats, scroll reveals, hover magic |
| No clear conversion funnel | Prominent CTA in hero, mid-page, footer |
| Mobile: cramped | Mobile-first, full-screen drawer menu |
| Dense, overwhelming | Spacious, breathing room, modern whitespace |

---

## PLACEHOLDER CONTENT SUMMARY

All items marked `[...]` should be replaced by the client:
- `[АВТОШКОЛА ИМЕ]` — school name
- `[ГРАД]` — city name
- `[Адрес 1]` / `[Адрес 2]` — office addresses
- `+359 XXX XXX XXX` — phone numbers
- `info@avtoshkola.bg` — email
- Google Maps embed `src` — actual map link
- Facebook/Instagram URLs
- Real photos from school (replace Unsplash)
- Real testimonials from Google reviews

---

## DELIVERABLE CHECKLIST

- [ ] index.html (complete, valid HTML5)
- [ ] All 12 sections present and populated
- [ ] Fully responsive (test at 375px, 768px, 1280px)
- [ ] All hover/scroll animations working
- [ ] Mobile menu functional
- [ ] Dropdown menus working (click or hover)
- [ ] Gallery lightbox working
- [ ] Testimonials slider auto-playing
- [ ] Stats count-up animation on scroll
- [ ] Contact form UI (no backend needed, just UI)
- [ ] All placeholder text in Bulgarian
- [ ] Orange color palette applied consistently
- [ ] Smooth scroll to sections from nav links

---

*Prompt crafted for maximum AI agent clarity. Replace all `[...]` placeholders with real client data before launch.*
