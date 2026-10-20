# Protofilio — Mohammed Alqadi's Developer Portfolio

> **Live Demo:** [protofilio-35ma.vercel.app](https://protofilio-35ma.vercel.app)

A modern, production-grade personal portfolio and contact platform built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and a **Neon serverless PostgreSQL** database — deployed on **Vercel**.

---

## ✨ Features

### 🏠 Hero Section
- Centered profile avatar with smooth hover animation
- Clear headline introducing **Mohammed Alqadi — Full-Stack & Mobile Engineer**
- Subtitle highlighting the core tech stack: React, Node.js, TypeScript, GraphQL
- Animated **"Available for new projects"** badge with a pulsing green dot
- Quick-action buttons: **Explore Projects** and social links (GitHub & LinkedIn)

### 🗂️ Featured Projects Showcase
Three highlighted projects displayed in a responsive card grid, each with:
- Preview image with a **scale-on-hover** zoom effect
- Tech stack badge chips (e.g., React + Node, GraphQL, Docker)
- Project title and concise description
- Navigation link to the detailed `/projects` page

| Project | Stack | Description |
|---|---|---|
| **Patientor** | React, Node.js, Zod | Clinical diagnosis platform with end-to-end static typing and runtime validation |
| **Rate Repository** | React Native, GraphQL, Apollo | Cross-platform mobile app with infinite scroll and 60fps animations |
| **HealthApp CI/CD** | Vitest, Docker, GitHub Actions | Zero-downtime deployment pipeline with automated smoke tests |

### 👤 About Section
- Two-column responsive layout
- Professional bio covering 2+ years of Full-Stack & Mobile experience
- Philosophy rooted in clean code, static typing, and high test coverage

### 📰 Latest Articles & Technical Insights
Three technical articles showcasing engineering expertise:
- **Patientor: Runtime Data Validation at Scale with Zod & Discriminated Unions** — Type Safety
- **Solving Over-Fetching with Federated GraphQL & Apollo Client** — GraphQL & Performance
- **Zero-Downtime Releases: Automated E2E Testing with Playwright & CI/CD** — DevOps & Testing

### 📬 Contact / Inquiry Page (`/contact`)
A full-featured professional inquiry system:
- **Project type selector** — chip-style buttons (Full-Stack Web App, React Native Mobile, GraphQL Architecture, CI/CD & DevOps, Consultation)
- **Budget input** and **project details textarea** (up to 1,000 characters)
- **Server Actions** form submission powered by **Resend** email API
- **Neon PostgreSQL** persistence via **Drizzle ORM** + **Zod** validation
- Real-time **success / error feedback** banner
- **Priority Connect card** — direct booking link to [cal.com/mohammed-alqadi](https://cal.com/mohammed-alqadi) for 30-min architecture consultations
- **Direct channels panel** — one-click email copy, timezone info, GitHub & LinkedIn links
- **Prospective Client FAQ** section covering engagement model and team-embed info

### 🧭 Navigation Bar
- Fixed top navbar with frosted-glass `backdrop-blur` effect
- Brand monogram logo + profile photo thumbnail
- Navigation links: Home, Projects
- **"Get in touch"** CTA button routing to `/contact`

### 📁 Projects Page (`/projects`)
- Dedicated route for browsing all projects
- Dynamic detail pages at `/projects/[id]`

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Icons | Lucide React |
| Database | Neon Serverless PostgreSQL |
| ORM | Drizzle ORM + Drizzle Zod |
| Validation | Zod v4 |
| Email | Resend |
| Fonts | Geist Sans & Geist Mono (`next/font`) |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 20
- pnpm ≥ 10 (`npm i -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/togosa-afk/Protofilio.git
cd protofilio

# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env.local` file at the project root:

```env
# Neon PostgreSQL connection string
DATABASE_URL=your_neon_connection_string

# Resend API key for email sending
RESEND_API_KEY=your_resend_api_key
```

### Database Setup

```bash
pnpm drizzle-kit push
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
protofilio/
├── app/
│   ├── actions/          # Next.js Server Actions (contact form)
│   ├── api/              # API routes
│   ├── components/
│   │   ├── navbar/       # Fixed top navigation bar
│   │   ├── hero/         # Hero section with profile & CTA
│   │   ├── card/         # Featured projects card grid
│   │   ├── about/        # About Me section
│   │   ├── Features/     # Technical articles section
│   │   ├── main/         # Main layout wrapper
│   │   └── fotter/       # Footer component
│   ├── contact/          # Contact & inquiry page
│   ├── projects/         # Projects listing & detail pages
│   │   └── [id]/         # Dynamic project detail route
│   ├── layout.tsx        # Root layout with metadata & fonts
│   └── page.tsx          # Home page
├── db/                   # Drizzle database client
├── drizzle/              # Drizzle migration files
├── lib/                  # Shared utilities
├── schema/               # Zod + Drizzle schema definitions
├── public/               # Static assets (images)
├── drizzle.config.ts     # Drizzle Kit configuration
└── next.config.ts        # Next.js configuration
```

---

## 🌐 Deployment

Deployed on **Vercel** with zero-configuration Next.js support.

**Live:** [https://protofilio-35ma.vercel.app](https://protofilio-35ma.vercel.app)

To build for production:

```bash
pnpm build
```

Or push to `main` — Vercel auto-deploys on every commit.

---

## 📬 Contact

- **Email:** moh-a-a-alq123@outlook.sa
- **GitHub:** [github.com/togosa-afk](https://github.com/togosa-afk)
- **LinkedIn:** [linkedin.com/in/mohammed-alqadi-7141a5350](https://www.linkedin.com/in/mohammed-alqadi-7141a5350)
- **Book a call:** [cal.com/mohammed-alqadi](https://cal.com/mohammed-alqadi)
