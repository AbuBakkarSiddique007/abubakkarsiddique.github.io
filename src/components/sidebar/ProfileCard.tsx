import Link from "next/link";
import Image from "next/image";
import { StatusBadge } from "./StatusBadge";

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center w-full text-center">
      <Link
        href="https://www.linkedin.com/in/abubakkar-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-4 bg-[#1a1a1a] shadow-inner relative">
          <Image
            src="/abubakkar.png"
            alt="Abu Bakkar Siddique"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 320px"
          />
        </div>
      </Link>

      <StatusBadge />

      <div className="mt-3 space-y-1">
        <Link
          href="https://www.linkedin.com/in/abubakkar-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <h1 className="text-2xl font-bold tracking-tight">
            Abu Bakkar Siddique
          </h1>
        </Link>
        <p className="text-muted-foreground font-medium text-sm">
          Junior Full Stack Developer
        </p>
      </div>
    </div>
  );
}
