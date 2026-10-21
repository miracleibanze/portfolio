"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Github, Whatsapp, Instagram, Twitter } from "@/components/ui/Icons";
import { useState } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const revealTransition = {
  duration: 0.72,
  ease: smoothEase,
};

const socials = [
  { href: "https://github.com/miracleibanze", icon: Github, label: "GitHub" },
  {
    href: "https://www.instagram.com/miracle_ibanze/",
    icon: Instagram,
    label: "Instagram",
  },
  { href: "https://x.com/ibanzemiracle", icon: Twitter, label: "Twitter" },
  { href: "https://wa.me/+250794881466", icon: Whatsapp, label: "WhatsApp" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-12 pt-8 lg:pt-12 scroll-mt-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_top_right,rgba(11,28,44,0.06),transparent_42%)]" />
      <div className="mx-auto grid max-w-7xl px-6 md:px-12 lg:grid-cols-2 lg:items-center lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition}
          className="flex max-w-2xl flex-col items-start gap-5"
        >
          <div className="space-y-5 py-0">
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: 0.1 }}
              className="font-display text-balance text-[clamp(3rem,7vw,6rem)] font-bold uppercase leading-[0.9] px-0 "
            >
              <span className="block">IBANZE</span>
              <span className="block text-6xl text-primary">Miracle.</span>
            </motion.h1>
            <hr className="bg-secondary w-12 h-1 rounded-md border-0 -mt-3" />
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: 0.14 }}
              className="text-[20px] font-semibold uppercase tracking-[0.34em] text-darkPrimary sm:text-[18px]"
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: 0.18 }}
              className="max-w-md text-[13px] leading-6 text-darkPrimary/70 sm:text-[15px]"
            >
              I build scalable and user-focused web applications that solve real
              world problems.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: 0.24 }}
            className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <ButtonLink href="#projects">
              View Projects
              <ArrowRight className="size-4" />
            </ButtonLink>

            <ButtonLink
              href="/IBANZE_Miracle_Resume.pdf"
              variant="secondary"
              download
            >
              Download CV
              <Download className="size-4" />
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: 0.28 }}
            className="w-full sm:w-auto"
          >
            <p className="text-sm font-semibold text-darkPrimary mb-3">
              Connect with me!
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-11 rounded-full border-3 p-1 border-secondary/60 hover:bg-secondary/10 hover:border-secondary transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                  aria-label={label}
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...revealTransition, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[31rem]"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="relative overflow-hidden rounded-[2rem] mt-8 w-full flex items-center justify-center"
          >
            {/* <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_72%)]" /> */}
            <>
              <div id="shadow" className="translate-y-6" />
              <Image
                src="/profile.png"
                alt="Portrait of Ibanze Miracle"
                width={1600}
                height={1600}
                priority
                sizes="(min-width: 1024px) 38vw, 88vw"
                className="h-auto w-full object-cover mb-8"
              />
            </>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
