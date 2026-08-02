import { Send, Phone, Mail, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
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

                <Link
                  href="https://wa.me/8801719690669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#25D366]/10 via-[#128C7E]/5 to-transparent border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 shadow-sm hover:shadow-[#25D366]/10"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#25D366] text-black shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icons.whatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-[#25D366] transition-colors">
                          Quick WhatsApp Chat
                        </h4>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Direct messaging for inquiries (+880 1719690669)
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="https://github.com/AbuBakkarSiddique007"
                    target="_blank"
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border/40 hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" /> GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/abubakkar-dev"
                    target="_blank"
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border/40 hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium"
                  >
                    <Icons.linkedin className="w-4 h-4" />
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
