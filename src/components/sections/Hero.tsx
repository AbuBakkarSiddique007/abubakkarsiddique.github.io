"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-8 mt-6 lg:mt-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-transparent text-muted-foreground text-sm font-medium w-fit"
      >
        <span className="text-2xl" aria-hidden>
          👋
        </span>
        <span className="text-base lg:text-lg font-medium">Hello</span>
      </motion.div>

      <div className="space-y-5 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
        >
          I&apos;m Abu Bakkar
          <div className="mt-2 text-2xl lg:text-3xl text-sky-500 font-semibold">
            Full Stack Developer
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-base lg:text-lg text-muted-foreground leading-relaxed"
        >
          I build{" "}
          <span className="font-semibold text-sky-500">
            scalable, user‑centric web applications
          </span>{" "}
          using
          <span className="font-medium text-foreground/90">
            {" "}
            TypeScript, React, Next.js, Node.js, Prisma, MongoDB, and PostgreSQL
          </span>
          . Based in Chattogram — open to Full Stack Developer
          opportunities.
        </motion.p>
      </div>
    </section>
  );
}
