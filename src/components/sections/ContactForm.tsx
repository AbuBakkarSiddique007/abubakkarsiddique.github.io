import { Send, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ContactUsForm } from "@/components/forms/ContactUsForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactForm() {
  return (
    <section id="contact" className="mt-16 pb-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight pb-6">
          <Send className="w-6 h-6 text-primary" />
          <h2>Contact</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="bg-card border border-border/40 rounded-[32px] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-3">
                  Let&apos;s Get in Touch!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas,
                  or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary border border-border/40 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Phone
                    </p>
                    <p className="text-sm font-semibold mt-0.5">
                      +880 1719690669
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-border/40 text-sky-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Email
                    </p>
                    <a
                      href="mailto:abubakkar.cce25.iiuc@gmail.com"
                      className="text-sm font-semibold mt-0.5 hover:text-sky-500 transition-colors block break-all"
                    >
                      abubakkar.cce25.iiuc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-border/40 text-sky-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Location
                    </p>
                    <p className="text-sm font-semibold mt-0.5">
                      Chattogram, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Link
                    href="https://github.com/AbuBakkarSiddique007"
                    target="_blank"
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border/40 hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4" /> GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/abubakkar-dev"
                    target="_blank"
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border/40 hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium w-full sm:w-auto"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>

            <ContactUsForm />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
