# Abu Bakkar Siddique | Developer Portfolio

A highly modular, performance-optimized, and fully responsive personal developer portfolio built with the modern React ecosystem. Setup with a Mobile-First layout methodology, the application elegantly showcases professional experience, technical stacks, and full-stack projects.

## 📐 Architecture & Modular Structure

I strongly believe in writing clean, scalable, and **highly modular code**. This project relies on a strictly decoupled folder structure ensuring rapid maintainability and component reusability:

- **`/src/app/`**: Next.js App Router endpoints, Layout foundations, and SEO Context.
- **`/src/components/sections/`**: Encapsulated layout chunks (Hero, Education, ProjectList, ContactForm) acting as standalone modules.
- **`/src/components/sidebar/`**: Isolated sidebar elements divided strictly by responsibility (ProfileCard, SocialSection, ActionGroup).
- **`/src/components/ui/`**: Reusable generic UI elements (Buttons, Icons) built with Tailwind & Lucide React.
- **`/src/lib/`**: Generic, disconnected utility logic ensuring separation of concerns.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router) + React
- **Styling**: Tailwind CSS (Utility-first, Mobile-first methodologies)
- **Email Delivery**: Resend SDK + Next.js Server API Routes (Serverless)
- **Analytics**: Vercel Analytics
- **Icons**: Lucide React
- **Language**: TypeScript (Strict Typing)

## ✨ Features

- **Responsive Design**: Full-fidelity experience from mobile phones to 4K desktop screens without fixed-width bottlenecks.
- **API Routing Integration**: A secure, server-side `.env` protected Next.js API route that handles form submissions and dispatches parsed HTML emails instantly via the Resend API.
- **UI/UX Polishing**: Graceful "Loading" states prevent double-submissions alongside a beautiful success modal for immediate user feedback.
- **SEO Optimized**: Deeply structured OpenGraph & Twitter metadata tailored for flawless social sharing integrations (LinkedIn, Discord).

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
