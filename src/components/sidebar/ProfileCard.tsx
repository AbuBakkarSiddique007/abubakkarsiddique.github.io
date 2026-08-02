"use client";

import Link from "next/link";
import Image from "next/image";
import { StatusBadge } from "./StatusBadge";
import { motion } from "framer-motion";

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center w-full text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full"
      >
        <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-4 bg-secondary shadow-inner relative group border border-border/40 hover:border-sky-500/30 transition-all duration-300">
          <Image
            src="/abubakkar.png"
            alt="Abu Bakkar Siddique"
            fill
            priority
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 320px"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <StatusBadge />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-3 space-y-1"
      >
        <h1 className="text-2xl font-bold tracking-tight">
          Abu Bakkar Siddique
        </h1>
        <p className="text-muted-foreground font-medium text-sm">
          Full Stack Developer
        </p>
      </motion.div>
    </div>
  );
}
