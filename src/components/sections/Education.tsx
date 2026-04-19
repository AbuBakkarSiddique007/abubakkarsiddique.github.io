import { GraduationCap } from "lucide-react";
import Image from "next/image";

export function Education() {
  const education = [
    {
      degree: "B.Sc. in Computer and Communication Engineering",
      institution: "International Islamic University Chittagong",
      period: "Graduated 2025",
      description:
        "Graduated with a focus on core software engineering and communication principles, including programming, data structures, and network systems. Actively developed full-stack web applications and participated in technical projects.",
    },
  ];

  return (
    <section className="space-y-6 mt-16">
      <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight pb-2">
        <GraduationCap className="w-6 h-6 text-sky-500" />
        <h2>Education</h2>
      </div>

      <div className="space-y-4">
        {education.map((edu, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 p-6 lg:p-8 bg-[#121212] border border-border/40 rounded-[24px]"
          >
            <div className="w-12 h-12 shrink-0 rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src="/logo-iiuc.webp"
                alt="IIUC logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <a
                    href="https://www.iiuc.ac.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500/80 text-sm font-medium inline-block"
                  >
                    {edu.institution}
                  </a>
                  <div className="text-sm text-muted-foreground mt-1">
                    CGPA: 3.416
                  </div>
                </div>
                <div className="inline-flex shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-[#1a1a1a] border border-border/40 mt-1 sm:mt-0">
                  {edu.period}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
