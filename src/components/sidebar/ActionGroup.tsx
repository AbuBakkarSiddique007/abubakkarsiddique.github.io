"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Send } from "lucide-react";

export function ActionGroup() {
  const scrollToContact = useCallback(() => {
    const el = document.getElementById("contact");

    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const RESUME_URL =
    "https://drive.google.com/file/d/1HLKrjRAHkUINhgrPk13WCxwbwjv26-oh/view?usp=sharing";

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-secondary border border-border/40 hover:border-sky-500/40 hover:text-sky-500 font-medium text-foreground transition-all text-sm shadow-sm"
      >
        <FileText className="w-4 h-4 text-sky-500" />
        <span>Resume</span>
      </a>

      <Button
        onClick={scrollToContact}
        className="w-full flex-1 bg-sky-500 text-black hover:bg-sky-600 font-semibold h-11 rounded-xl border-0 px-4 shadow-sm"
      >
        <Send className="w-4 h-4 mr-2" />
        Contact Me
      </Button>
    </div>
  );
}
