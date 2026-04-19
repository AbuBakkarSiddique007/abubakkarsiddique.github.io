# Abu Bakkar Siddique | Developer Portfolio

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-0284c7?style=for-the-badge&labelColor=0f172a)](https://abubakkar-portfolio-xi.vercel.app)

A highly modular, performance-optimized, and fully responsive personal developer portfolio built with the modern React ecosystem. Setup with a Mobile-First layout methodology, the application elegantly showcases professional experience, technical stacks, and full-stack projects.

## 📐 Architecture & Modular Structure

I strongly believe in writing clean, scalable, and **highly modular code**. This project relies on a strictly decoupled folder structure ensuring rapid maintainability and component reusability:

- **`/src/app/`**: Next.js App Router endpoints, Layout foundations, and Global SEO configuration.
- **`/src/components/forms/`**: Content-rich form components (e.g., ContactUsForm) with built-in validation logic.
- **`/src/components/sections/`**: Modular layout sections acting as standalone page components (Hero, Projects, etc.).
- **`/src/components/sidebar/`**: Isolated sidebar elements divided strictly by responsibility (ProfileCard, SocialSection).
- **`/src/components/ui/`**: Reusable atomic UI elements (Buttons, ScrollReveal) built with Tailwind & Framer Motion.
- **`/src/services/`**: Abstracted business logic (Email delivery, Contact services) separated from the UI layer.
- **`/src/lib/`**: Generic, disconnected utility logic ensuring strict separation of concerns.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router) + React
- **Styling**: Tailwind CSS (Utility-first, Mobile-first methodologies)
- **Email Delivery**: Resend SDK + Next.js Server API Routes (Serverless)
- **Analytics**: Vercel Analytics
- **Icons**: Lucide React
- **Language**: TypeScript (Strict Typing)

## ✨ Key Features & Technical Depth

- **Mobile-First Responsive Architecture**: Engineered for flawless resolution scaling from small mobile devices to 4K ultra-wide monitors, using a fluid layout methodology.
- **Secure Server-Side Contact Engine**: Implemented via Next.js API routes and the Resend SDK, ensuring that API keys and email logic remain strictly encapsulated on the server for security and performance.
- **Dynamic Asset Optimization**: Utilizes Next.js `Image` component with custom caching strategies for high-performance visual delivery.
- **Polished UI/UX**: Features global GSAP scroll-reveal animations, custom-themed Radix/Shadcn primitives, and a tailored "Obsidian" aesthetic with subtle noise textures for depth.
- **Professional SEO & Metadata**: Fully configured JSON-LD and social graph metadata (OpenGraph, Twitter) for consistent professional branding when shared across platforms.

## 💻 Running Locally

To clone and run this portfolio locally:

```bash
# Clone the repository
git clone https://github.com/AbuBakkarSiddique007/abubakkar-portfolio.git

# Install dependencies
pnpm install

# Setup Environment Variables (contact form requirement)
# Create a .env file and add your RESEND_API_KEY
RESEND_API_KEY=your_resend_api_key_here

# Run the development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

*Designed and Built by Abu Bakkar Siddique.*
