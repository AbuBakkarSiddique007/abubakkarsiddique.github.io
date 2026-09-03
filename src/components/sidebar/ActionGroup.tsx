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
    <div className="flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:gap-3">
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 min-h-10 w-full min-w-0 shrink-0 flex-1 items-center justify-center gap-1.5 rounded-xl border border-border/40 bg-secondary px-3 text-xs font-medium text-foreground shadow-sm transition-all hover:border-sky-500/40 hover:text-sky-500 sm:h-11 sm:min-h-11 sm:gap-2 sm:px-4 sm:text-sm"
      >
        <FileText className="h-4 w-4 shrink-0 text-sky-500" />
        <span>Resume</span>
      </a>

      <Button
        onClick={scrollToContact}
        className="h-10 min-h-10 w-full min-w-0 shrink-0 flex-1 rounded-xl border-0 bg-sky-500 px-3 text-xs font-semibold text-black shadow-sm hover:bg-sky-600 sm:h-11 sm:min-h-11 sm:px-4 sm:text-sm"
      >
        <Send className="mr-1.5 h-4 w-4 shrink-0 sm:mr-2" />
        Contact Me
      </Button>
    </div>
  );
}
