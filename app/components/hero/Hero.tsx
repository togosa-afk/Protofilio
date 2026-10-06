import { BriefcaseBusiness, Code, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* <!-- 1. Centered Hero Section --> */}
      <section className="flex flex-col items-center text-center">
        {/* <!-- Centered Avatar --> */}
        <div className="relative group cursor-pointer mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm p-1 bg-surface-container-lowest">
            <Image
              className="w-full h-full object-cover rounded-full"
              alt="Modern professional portrait of Alex Vance, full-stack software engineer in black minimalist knitwear smiling calmly against clean architectural backdrop, crisp neutral daylight"
              src={"/profile.png"}
              width={96}
              height={96}
            />
          </div>
        </div>
        {/* <!-- Clean Headline --> */}
        <h1 className="font-display text-headline-lg md:text-display text-primary tracking-tight max-w-3xl leading-[1.15]">
          Hey, I&apos;m Mohammed Alqadi <br className="hidden sm:inline" />
          <span className="text-on-surface">
            Full-Stack &amp; Mobile Engineer
          </span>
        </h1>
        {/* <!-- Subtitle --> */}
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-xl mt-4 text-balance">
          I build fast, type-safe, and scalable web &amp; mobile apps with
          React, Node.js, TypeScript, and GraphQL. Bridging architecture and
          modern interfaces.
        </p>
        {/* <!-- Pill Action Bar & Status --> */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-on-surface-variant transition-all duration-200 group"
            href="#featured-projects"
          >
            <span>Explore Projects</span>
            <span className="material-symbols-outlined text-[1.125rem] group-hover:translate-x-0.5 transition-transform">
              <MoveUpRight />
            </span>
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-lowest shadow-sm text-on-surface">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="font-label-sm text-label-sm font-medium text-on-surface">
              Available for new projects
            </span>
          </div>
        </div>
        {/* <!-- Social Icons Row --> */}
        <div className="flex items-center justify-center gap-4 mt-6 text-on-surface-variant">
          <a
            aria-label="GitHub"
            className="p-2 rounded-full hover:text-primary hover:bg-surface-container transition-colors"
            href="https://github.com/togosa-afk"
            target="blank"
          >
            <span className="material-symbols-outlined text-[1.25rem]">
              <Code />
            </span>
          </a>
          <a
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:text-primary hover:bg-surface-container transition-colors"
            href="https:www.linkedin.com/in/mohammed-alqadi-7141a5350"
            target="blank"
          >
            <span className="material-symbols-outlined text-[1.25rem]">
              <BriefcaseBusiness />
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
