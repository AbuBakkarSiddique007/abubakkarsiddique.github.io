"use client";

import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  return (
    <section id="contact" className="mt-16 pb-24">
      <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight pb-6">
        <Send className="w-6 h-6 text-sky-500" />
        <h2>Contact</h2>
      </div>

      <div className="bg-[#121212] border border-border/40 rounded-[32px] p-8 lg:p-12">
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
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-border/40 text-sky-500">
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
                    className="text-sm font-semibold mt-0.5 hover:text-sky-500 transition-colors block"
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

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="https://github.com/AbuBakkarSiddique007"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a1a1a] border border-border/40 hover:border-sky-500/40 hover:text-sky-500 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" /> GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abubakkar-dev"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a1a1a] border border-border/40 hover:border-sky-500/40 hover:text-sky-500 transition-colors text-sm font-medium"
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

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const formData = new FormData(form);
              const data = Object.fromEntries(formData.entries());

              // Log submitted info and clear the form

              console.log("Contact form submitted:", data);

              form.reset();
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-muted-foreground ml-1"
                >
                  First Name
                </label>
                <input
                  id="name"
                  name="firstName"
                  type="text"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-border/40 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="lastname"
                  className="text-xs font-medium text-muted-foreground ml-1"
                >
                  Last Name
                </label>
                <input
                  id="lastname"
                  name="lastName"
                  type="text"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-border/40 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-muted-foreground ml-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-border/40 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm"
                placeholder="Enter your email address"
                suppressHydrationWarning
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-muted-foreground ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-4 rounded-xl bg-[#1a1a1a] border border-border/40 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all resize-none text-sm"
                placeholder="Enter a brief message describing your project or question"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-sky-500 text-black hover:bg-sky-600 rounded-xl font-semibold mt-2"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
