# Exile OS

**The operating system for self-guided global student migration.**

Exile OS is a frontend-first web platform built for students who want to navigate international admissions, visa processes, and university selection without agents, without hidden fees, and without gatekeepers. The product surfaces country level intelligence, eligibility checking, visa blueprints, and strategic frameworks directly to the student.

---

## Table of Contents

- [Philosophy](#philosophy)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Homepage Sections](#homepage-sections)
- [Frontend Architecture](#frontend-architecture)
- [Animation System](#animation-system)
- [Static Data](#static-data)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Design System](#design-system)
- [Roadmap](#roadmap)


## Philosophy

Applying to universities abroad is a high-stakes transition. Students rely on consultants out of fear — fear of missing documents, eligibility mismatches, or visa rejections due to clerical errors.

Exile OS turns that fear into a verifiable, student-owned process. Three pillars:

- **Transparency** — every requirement and decision is visible. No hidden commissions, no biased recommendations.
- **Student Control** — automation assists, never replaces. The student always decides.
- **Verification** — errors are caught before submission, not at rejection.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | GSAP 3 + ScrollTrigger |
| Smooth Scroll | Lenis 1.3 |
| 3D / WebGL | React Three Fiber + Three.js + Drei |
| Motion | Framer Motion 12 |
| UI Primitives | Radix UI, Lucide React, React Icons |
| ORM | Prisma 7 (schema defined, not yet active) |
| Database | PostgreSQL via `pg` (not connected in frontend mode) |
| Auth | NextAuth v5 beta (scaffolded, not active) |
| Package Manager | npm |
| Deployment | Vercel |

---

## Project Structure

```
liminal/
├── app/                           # Next.js App Router
│   ├── page.tsx                   # Home (/)
│   ├── layout.tsx                 # Root layout — Lenis + ThemeProvider
│   ├── globals.css
│   ├── authentication/            # Login / Sign up page
│   │   └── page.tsx
│   ├── archive/                   # Archive index + country pages
│   │   ├── page.tsx
│   │   └── uk/
│   │       └── page.tsx
│   ├── blog/                      # Blog index + individual posts
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── profile/                   # User profile (UI shell)
│   │   └── page.tsx
│   └── vision/                    # Vision/philosophy page
│       └── page.tsx
│
├── frontend/
│   ├── components/
│   │   ├── home/                  # Landing page
│   │   │   ├── HomePage.tsx       # Page orchestrator
│   │   │   ├── HeroSection.tsx    # GSAP image slider + R3F overlay
│   │   │   ├── HeroShell.tsx      # Hero wrapper + navbar
│   │   │   ├── HeroGL.tsx         # React Three Fiber WebGL wave (SSR-disabled)
│   │   │   ├── SiteNavbar.tsx     # Transparent overlay navbar
│   │   │   ├── navigation/
│   │   │   └── sections/          # All homepage sections
│   │   ├── archive/
│   │   │   ├── EligibilityChecker.tsx
│   │   │   └── UniversityGrid.tsx
│   │   ├── blog/
│   │   │   └── BlogNavbar.tsx
│   │   ├── profile/
│   │   │   └── ProfileClient.tsx
│   │   ├── legacy/                # Adapted/older components
│   │   │   ├── Footer.tsx
│   │   │   ├── HireaPerson.tsx
│   │   │   └── PricingMenu.tsx
│   │   ├── ui/                    # Radix-based UI primitives
│   │   ├── LenisProvider.tsx      # Smooth scroll wrapper
│   │   └── theme-provider.tsx
│   └── lib/
│       ├── blog-posts.ts          # All blog post content (static)
│       ├── archive-data.ts        # University data + eligibility logic
│       └── utils.ts
│
├── prisma/
│   └── schema.prisma              # User model (ready for backend)
│
├── public/
│   ├── auth-bg.png                # Cathedral illustration — auth left panel
│   ├── hero-1.png                 # Frankfurt skyline
│   ├── hero-2.png                 # Český Krumlov, Czech Republic
│   ├── hero-3.png                 # Traveler with backpack
│   └── nav.png                    # Logo mark
│
├── proxy.ts                       # Next.js middleware (passthrough)
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Landing page — animated hero, all sections |
| `/authentication` | Login / sign up — UI only, split layout with cathedral illustration |
| `/archive` | Country index — UK live, others staged |
| `/archive/uk` | UK intelligence: eligibility checker, university grid, visa steps, timeline |
| `/blog` | Blog index listing all posts |
| `/blog/[slug]` | Individual blog post |
| `/profile` | User profile shell (frontend stub) |
| `/vision` | Vision / philosophy page |

---

## Homepage Sections

Composed in `frontend/components/home/HomePage.tsx`:

| Component | Description |
|---|---|
| `HeroShell` + `HeroSection` | Full-screen GSAP image slider (3 images, clipPath wipe) + R3F WebGL wave overlay |
| `DestinationsSection` | 3-card stagger reveal with per-card scroll parallax |
| `StatementSection` | White split: bold statement + body/CTA top half; impact snapshot panel bottom half |
| `AboutSection` | Mission / about |
| `HireExpertSection` | "The Expert Touch" — Tresmares-style editorial: huge overlapping type + angled geometric shape + tab nav + stats |
| `HowItWorksSection` | Numbered process steps |
| `FaqSection` | Accordion FAQ |
| `PricingSection` | 3-tier pricing: Free / Elite ($4,999) / Custom |
| `BlogHighlightsSection` | Latest 3 blog posts |
| `CallToActionSection` | Full-width CTA banner |
| `TestimonialsSection` | Student testimonials |
| `NewsletterSection` | Email capture |
| `JourneySection` | Full-screen "Navigate Your Future With Us" — hero-3.png parallax + GSAP word stagger |
| `FooterSection` | Wolverine-style editorial footer — black bg, nav links, social links, status dot |

---

## Frontend Architecture

### Routing
All pages use the Next.js App Router. Server components are used where possible. Client components are marked `"use client"` only when they require browser APIs, state, or animations.

### Auth state
Currently **frontend-only** — all pages pass `session={null}`. No routes are gated. When the backend is connected:
- `app/page.tsx` should call `auth()` and pass the real session to `HomePage`
- `app/archive/page.tsx` should redirect unauthenticated users
- `app/profile/page.tsx` should redirect unauthenticated users

### Middleware
`proxy.ts` (root-level Next.js middleware file) is a passthrough — `NextResponse.next()` on every request. Rename to `middleware.ts` and add logic when auth is active.

### Data flow
All content lives in `frontend/lib/` as static TypeScript:
- **`blog-posts.ts`** — 8 articles with full content, series metadata, excerpts, read times
- **`archive-data.ts`** — 23 UK universities, eligibility engine, visa steps, application timeline

---

## Animation System

### GSAP + ScrollTrigger
Scroll-triggered reveals, text stagger, and the hero image transition.

- `ScrollTrigger` registered at module level in each component that uses it
- Cleanup via `ScrollTrigger.getAll().forEach(t => t.kill())` in every `useEffect` return
- Hero image transitions use `clipPath: "inset(0 100% 0 0)"` → `"inset(0 0% 0 0)"` wipe

### Lenis
Initialized once in `LenisProvider` (wrapped at `app/layout.tsx`). Uses a RAF loop pattern so GSAP and Lenis stay in sync. Config:
```ts
{
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
}
```

### React Three Fiber (HeroGL)
`HeroGL.tsx` is a fullscreen `pointer-events-none` WebGL canvas loaded over the hero via `dynamic(() => import("./HeroGL"), { ssr: false })`. A custom GLSL shader draws animated ripple rings and sine-wave Z-displacement using a `uTime` uniform updated each frame.

### Framer Motion
Used in the auth page, some legacy sections, and micro-interactions.

---

## Static Data

### Blog Posts (`frontend/lib/blog-posts.ts`)
8 articles across 4 series:

| Series | Articles |
|---|---|
| The Expose Series | Hidden costs of consultancies; agentic visa processes |
| Building in Public | Rename story (Liminal → Exile OS); data architecture |
| Productivity & Strategy | SOP framework; first 30 days logistics |
| Counter-Intuitive Series | Why you need a system not a consultant; top 5 consultancy mistakes |

### Archive Data (`frontend/lib/archive-data.ts`)
- **23 UK universities** with: tier, city, acceptance rate, international fees, entry requirements (A-levels, IB, CGPA, IELTS), popular subjects
- **`evaluateMatch(profile)`** — eligibility engine that normalizes grades across qualification types (A-levels, IB, CGPA, percentage, GPA4) and returns a verdict: `eligible | borderline | reach | not-yet`
- **`ukAtAGlance`** — summary statistics
- **`ukVisaSteps`** — 5-step Student Visa guide with costs and common failure points
- **`ukTimeline`** — 11-point month-by-month application calendar

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install

```bash
git clone <repo-url>
cd liminal
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js dev server with Turbopack |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Environment Variables

No environment variables are required to run the frontend. When the backend is connected, create a `.env` file:

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# NextAuth
AUTH_SECRET=your-secret-here
AUTH_URL=http://localhost:3000

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Design System

### Color Tokens

| Token | Value | Usage |
|---|---|---|
| Brand warm | `#e8c4a0` | Accent, italic highlights |
| Brand dark | `#4b1227` | Geometric shape, hover accents |
| Background dark | `#080808` | Dark sections, footer |
| Background off-white | `#f0ede8` | Editorial sections (HireExpert) |

### Typography Patterns

```
font-black uppercase tracking-tighter        → section headings
text-[10px] font-black uppercase tracking-[0.3em]  → eyebrow labels
text-white/55                                → secondary text on dark
italic font-serif font-light lowercase       → brand voice moments ("os", "exile")
```

---

## Roadmap

### Phase 1 — Frontend (Current)
- [x] Animated landing page (GSAP / R3F / Lenis)
- [x] UK archive with eligibility checker and university grid
- [x] Blog with 8 articles
- [x] Authentication UI (split layout)
- [x] Profile UI shell
- [x] Pricing section (Free / Elite / Custom)
- [x] Editorial footer

### Phase 2 — Backend
- [ ] Connect PostgreSQL database
- [ ] Wire NextAuth credentials provider
- [ ] User registration and login
- [ ] Protected routes (archive, profile)
- [ ] Persist eligibility profiles per user

### Phase 3 — Product
- [ ] Canada archive page
- [ ] Germany archive page
- [ ] Australia archive page
- [ ] SOP builder tool
- [ ] Document checklist per country
- [ ] AI-powered eligibility recommendations
- [ ] Email deadline notifications

---

*Built by the Exile OS team. Autonomy in Education.*
