export function Hero() {
  return (
    <section className="flex flex-col items-start gap-8 mt-6 lg:mt-12 text-left">
      <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-transparent text-muted-foreground text-sm font-medium w-fit">
        <span className="text-2xl" aria-hidden>
          👋
        </span>
        <span className="text-base lg:text-lg font-medium">Hello</span>
      </div>

      <div className="space-y-5 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          I&apos;m Abu Bakkar
          <div className="mt-2 text-2xl lg:text-3xl text-sky-500 font-semibold">
            Full Stack Developer
          </div>
        </h1>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          I build{" "}
          <span className="font-semibold text-sky-500">
            scalable, user‑centric web applications
          </span>{" "}
          using
          <span className="font-medium text-foreground/90">
            {" "}
            TypeScript, React, Next.js, Node.js, Prisma, MongoDB, and PostgreSQL
          </span>
          . Based in Chattogram — open to Junior Full‑Stack Developer
          opportunities.
        </p>
      </div>
    </section>
  );
}
