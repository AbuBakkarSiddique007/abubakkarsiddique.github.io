import { Mail } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export function SocialSection() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Link
        href="https://github.com/AbuBakkarSiddique007"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#1a1a1a] border border-border/40 hover:bg-sky-500 hover:text-black hover:border-sky-500 transition-all"
      >
        <Icons.github className="w-4 h-4" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/abubakkar-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#1a1a1a] border border-border/40 hover:bg-sky-500 hover:text-black hover:border-sky-500 transition-all"
      >
        <Icons.linkedin className="w-4 h-4" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="mailto:abubakkar.cce25.iiuc@gmail.com"
        className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#1a1a1a] border border-border/40 hover:bg-sky-500 hover:text-black hover:border-sky-500 transition-all"
      >
        <Mail className="w-4 h-4" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  );
}
