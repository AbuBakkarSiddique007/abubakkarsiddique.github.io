import { ExternalLink, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function ProjectList() {
  const projects = [
    {
      title: "DevHuntr",
      subtitle: "Next.js • Express • PostgreSQL • Prisma • Stripe",
      description:
        "A community-driven marketplace to discover and upvote developer tools, with role-based dashboards, Stripe subscriptions, and JWT authentication.",
      image: "/projectOne.png",
      links: [
        { label: "Live", href: "https://devhuntrclient.vercel.app" },
        {
          label: "Client",
          href: "https://github.com/AbuBakkarSiddique007/DevHuntr_Client",
        },
        {
          label: "Server",
          href: "https://github.com/AbuBakkarSiddique007/DevHuntr_Server",
        },
      ],
    },
    {
      title: "BhojonBox",
      subtitle: "Next.js • Node.js • PostgreSQL • Prisma • JWT",
      description:
        "A full-stack food ordering platform where customers can browse meals, place orders, and track delivery, while providers manage menus and orders and admins oversee the entire system with role-based dashboards.",
      image: "/projectTwo.png",
      links: [
        { label: "Live", href: "https://bhojonbox-client.vercel.app/" },
        {
          label: "Client",
          href: "https://github.com/AbuBakkarSiddique007/bhojonbox_client",
        },
        {
          label: "Server",
          href: "https://github.com/AbuBakkarSiddique007/bhojonbox_server",
        },
      ],
    },
    {
      title: "ShareStep",
      subtitle: "React • Node.js • Express • MongoDB • Firebase • JWT",
      description:
        "A full-stack volunteer platform that connects users with community service opportunities. Features include authentication, volunteer post management, request handling, and secure role-based access with a responsive UI.",
      image: "/projectThree.png",
      links: [
        { label: "Live", href: "https://sharestep-d09c3.web.app" },
        {
          label: "Client",
          href: "https://github.com/AbuBakkarSiddique007/ShareStep-Client",
        },
        {
          label: "Server",
          href: "https://github.com/AbuBakkarSiddique007/ShareStep-Server",
        },
      ],
    },
  ];

  return (
    <section className="space-y-6 mt-16">
      <ScrollReveal>
        <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight pb-2">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2>Projects</h2>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
        {projects.map((project, i) => (
          <StaggerItem key={i}>
            <div
              className="group flex flex-col bg-card border border-border/40 rounded-[24px] overflow-hidden hover:border-primary/30 transition-all h-full"
            >
              <div className="w-full aspect-video bg-secondary overflow-hidden border-b border-border/20 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3 p-5">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-xs text-primary font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {project.links.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border/40 text-xs font-medium hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
