"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";

export function ActionGroup() {
  const scrollToContact = useCallback(() => {
    const el = document.getElementById("contact");

    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="flex items-center gap-3 w-full">
      <a
        href="/abubakkar-resume.pdf"
        download
        className="flex-1 inline-flex items-center justify-center gap-2 px-3 h-[44px] rounded-[12px] bg-[#1a1a1a] border border-border/40 hover:bg-[#222] font-medium text-muted-foreground hover:text-foreground transition-colors text-sm whitespace-nowrap"
      >
        <Download className="w-4 h-4" />
        <span>Download CV</span>
      </a>

      <Button
        onClick={scrollToContact}
        className="flex-[2] bg-sky-500 text-black hover:bg-sky-600 font-medium h-[44px] rounded-[12px] border-0 px-4"
      >
        <Send className="w-4 h-4 mr-2" />
        Contact Me
      </Button>
    </div>
  );
}
