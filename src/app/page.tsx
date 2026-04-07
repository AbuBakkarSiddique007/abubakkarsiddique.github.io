import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { ProjectList } from "@/components/sections/ProjectList";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="w-full space-y-16 lg:space-y-24">
      <Hero />
      <About />
      <ProjectList />
      <SkillsGrid />
      <Education />
      <ContactForm />
    </div>
  );
}
