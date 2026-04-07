import { User } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="space-y-6 mt-16 pt-8 border-t border-border/40"
    >
      <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight pb-2">
        <User className="w-6 h-6 text-sky-500" />
        <h2>About Me</h2>
      </div>
      <div className="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-6">
        <p>
          I recently graduated in Computer and Communication Engineering from
          International Islamic University Chittagong and focus on building
          modern, scalable web applications using TypeScript, React, Next.js,
          Node.js, Prisma, MongoDB, and PostgreSQL.
        </p>

        <p>
          I have hands-on experience creating responsive user interfaces,
          RESTful APIs, and database-driven systems through several real
          projects. I am open to Junior Full‑Stack Developer opportunities (also
          interested in Frontend or Backend roles).
        </p>
      </div>
    </section>
  );
}
