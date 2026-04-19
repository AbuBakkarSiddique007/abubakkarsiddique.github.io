import { Layers, Code2, Monitor, Server, Wrench, Users } from "lucide-react";

export function SkillsGrid() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-sky-500" />,
      skills: ["JavaScript (ES6+)", "TypeScript", "C"],
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-5 h-5 text-sky-500" />,
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "shadcn/ui",
        "TanStack Query",
        "Axios",
        "GSAP",
      ],
    },
    {
      title: "Backend & DB",
      icon: <Server className="w-5 h-5 text-sky-500" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Zod",
        "JWT Auth",
        "Better-Auth",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5 text-sky-500" />,
      skills: [
        "Git",
        "GitHub",
        "Stripe API",
        "Vercel",
        "Render",
        "Postman",
      ],
    },
    {
      title: "Interpersonal",
      icon: <Users className="w-5 h-5 text-sky-500" />,
      skills: ["Teamwork", "Problem Solving", "Communication"],
    },
  ];

  return (
    <section className="space-y-8 mt-16 pb-8">
      <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight pb-2 border-b border-border/40">
        <Layers className="w-6 h-6 text-sky-500" />
        <h2>Technical Stacks</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => (
          <div
            key={i}
            className="flex flex-col gap-5 p-6 bg-[#121212] border border-border/40 rounded-[28px] hover:border-sky-500/30 transition-all group shadow-sm hover:shadow-sky-500/5"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#1a1a1a] border border-border/20 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1.5 text-sm font-medium rounded-xl bg-[#1a1a1a] border border-border/30 text-muted-foreground hover:text-sky-500 hover:border-sky-500/40 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
