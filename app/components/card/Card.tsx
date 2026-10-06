import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        id="featured-projects"
      >
        {/* <!-- Showcase Card 1 --> */}
        <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative h-48 w-full bg-surface-container overflow-hidden">
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              alt="Minimalist desktop UI preview of Patientor clinical diagnostics dashboard, showing structured EHR tables, clean medical telemetry widgets, subtle light slate tones and crisp typography"
              width={100}
              height={100}
              src={"/profile.png"}
            />
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-subtle font-label-sm text-label-sm text-on-surface-variant">
                  React + Node
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-subtle font-label-sm text-label-sm text-on-surface-variant">
                  Zod
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Patientor
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                Interactive clinical diagnosis platform featuring end-to-end
                static typing and runtime validation for patient health records.
              </p>
            </div>
            <div className="flex items-center text-primary font-label-sm text-label-sm gap-1 pt-1">
              <span>Inspect architecture</span>
              <span className="material-symbols-outlined text-[1rem] group-hover:translate-x-1 transition-transform">
                <MoveRight />
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Showcase Card 2 --> */}
        <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative h-48 w-full bg-surface-container overflow-hidden">
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              alt="Mobile app interface rendered in a sleek iPhone bezel showing Rate Repository App with dark subtle cards, Apollo GraphQL analytics telemetry, smooth repository stars sparkline, minimal layout"
              src={"/profile.png"}
              width={100}
              height={100}
            />
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-subtle font-label-sm text-label-sm text-on-surface-variant">
                  React Native
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-subtle font-label-sm text-label-sm text-on-surface-variant">
                  GraphQL
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Rate Repository
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                Cross-platform iOS and Android client powered by Apollo client
                caching, smooth infinite scroll lists, and 60fps animations.
              </p>
            </div>
            <div className="flex items-center text-primary font-label-sm text-label-sm gap-1 pt-1">
              <span>Explore repository</span>
              <span className="material-symbols-outlined text-[1rem] group-hover:translate-x-1 transition-transform">
                <MoveRight />
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Showcase Card 3 --> */}
        <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative h-48 w-full bg-surface-container overflow-hidden">
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              alt="Cloud CI/CD infrastructure diagram with clean node trees, automated GitHub Actions pipeline stages, zero-downtime container cluster monitors, sharp vector telemetry aesthetics"
              width={100}
              height={100}
              src={"/profile.png"}
            />
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-subtle font-label-sm text-label-sm text-on-surface-variant">
                  Vitest
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-subtle font-label-sm text-label-sm text-on-surface-variant">
                  Docker
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                HealthApp CI/CD
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                High-throughput continuous deployment pipeline featuring
                automated container audits, smoke tests, and zero-downtime
                rollouts.
              </p>
            </div>
            <div className="flex items-center text-primary font-label-sm text-label-sm gap-1 pt-1">
              {/* <Link to={'../'}>View pipeline spec</Link> */}
              <span className="material-symbols-outlined text-[1rem] group-hover:translate-x-1 transition-transform">
                <MoveRight />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
