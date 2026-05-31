# Artifx – Technical Documentation

## 1. Tech Stack

### Frontend
- Next.js (App Router)
- JSX (not TypeScript)
- Tailwind CSS
- Framer Motion
- Lucide Icons

### Backend (Phase 2)
- Supabase (Auth + DB)
- Edge Functions
- API Routes

### Deployment
- Vercel
- Custom domain

---

## 2. Project Structure

src/
├─ app/
│ ├─ page.jsx
│ ├─ about/
│ ├─ services/
│ ├─ solutions/
│ ├─ ai/
│ ├─ projects/
│ ├─ saas/
│ ├─ contact/
│
├─ components/
│ ├─ layout/
│ ├─ sections/
│ ├─ ui/
│
├─ data/
│ ├─ services.js
│ ├─ solutions.js
│ ├─ ai.js
│ ├─ projects.js
│
├─ lib/
│ ├─ constants.js
│
└─ styles/


---

## 3. Core Components

### Layout
- Header
- Footer
- CTA Banner

### UI
- Glass cards
- Animated buttons
- Gradient text
- System blocks

---

## 4. Animation Strategy
- Page transitions (Framer Motion)
- Scroll-based reveals
- Subtle micro-interactions
- No heavy animations

---

## 5. SEO Strategy
- Metadata per route
- Structured headings
- Clean URLs
- High intent keywords

---

## 6. Performance Rules
- Lazy load images
- Optimized fonts
- Minimal JS bundles
- Static rendering wherever possible

---

## 7. Security
- No public admin panels
- Environment variables via `.env`
- Supabase row-level security (future)

---

## 8. Future Expansion
- SaaS dashboards
- Client login
- Admin system
- Payment integration
