import {
  ArrowLeft,
  ArrowUpRight,
  Blocks,
  Check,
  Code2,
  Database,
  Fingerprint,
  Layers3,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getById } from "@/app/services/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

const stackSections = [
  { key: "frontend", label: "Frontend", icon: Code2 },
  { key: "backend", label: "Backend", icon: Workflow },
  { key: "testing", label: "Testing", icon: Check },
  { key: "devOps", label: "DevOps", icon: Blocks },
] as const;

const architectureSections = [
  { key: "database", label: "Database", icon: Database },
  { key: "authentication", label: "Authentication", icon: Fingerprint },
  { key: "stateManagement", label: "State management", icon: Layers3 },
] as const;

export default async function Project({ params }: PageProps) {
  const { id } = await params;
  const project = getById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <div className="mx-auto w-full max-w-6xl px-margin-mobile py-8 md:px-margin md:py-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-lg py-2 pr-3 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
        >
          <ArrowLeft
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
          />
          All projects
        </Link>

        <section
          aria-labelledby="project-title"
          className="relative mt-6 overflow-hidden rounded-2xl bg-primary px-6 py-9 text-on-primary md:px-12 md:py-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10 md:right-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10"
          />
          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-label-sm text-label-sm text-white/80">
              {project.category}
            </span>
            <h1
              id="project-title"
              className="mt-6 break-words font-headline-lg text-headline-lg tracking-tight text-white md:text-5xl md:leading-tight"
            >
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl font-body-md text-body-md leading-relaxed text-white/75 md:text-body-lg">
              {project.description}
            </p>
            <Link
              href="#project-details"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-label-md text-label-md text-primary transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore project
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <span
            aria-hidden="true"
            className="absolute bottom-5 right-7 hidden font-mono text-7xl font-semibold text-white/10 md:block"
          >
            01
          </span>
        </section>

        <div
          id="project-details"
          className="grid gap-6 pb-12 pt-8 md:grid-cols-[minmax(0,1.6fr)_minmax(16rem,0.9fr)] md:gap-8 md:pt-10"
        >
          <section aria-labelledby="features-heading">
            <div className="mb-5">
              <p className="font-label-sm text-label-sm uppercase text-secondary">
                What it does
              </p>
              <h2
                id="features-heading"
                className="mt-2 font-headline-md text-headline-md text-primary"
              >
                Key features
              </h2>
            </div>
            <ul className="grid gap-3">
              {project.features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex gap-4 rounded-xl border border-border-subtle bg-surface-container-lowest p-4 md:p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary-fixed font-label-sm text-label-sm text-on-secondary-fixed-variant">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="self-center font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <aside className="grid content-start gap-6">
            <section
              aria-labelledby="stack-heading"
              className="rounded-xl border border-border-subtle bg-surface-container-lowest p-5 md:p-6"
            >
              <p className="font-label-sm text-label-sm uppercase text-secondary">
                Built with
              </p>
              <h2
                id="stack-heading"
                className="mt-2 font-headline-sm text-headline-sm text-primary"
              >
                Technology stack
              </h2>
              <div className="mt-5 space-y-5">
                {stackSections.map(({ key, label, icon: Icon }) => (
                  <div key={key}>
                    <div className="mb-2 flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                      <Icon aria-hidden="true" className="h-4 w-4 text-secondary" />
                      {label}
                    </div>
                    <ul aria-label={label} className="flex flex-wrap gap-2">
                      {project.techStack[key].map((technology) => (
                        <li
                          key={technology}
                          className="rounded-md bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="architecture-heading"
              className="rounded-xl border border-border-subtle bg-surface-container-lowest p-5 md:p-6"
            >
              <p className="font-label-sm text-label-sm uppercase text-secondary">
                Under the hood
              </p>
              <h2
                id="architecture-heading"
                className="mt-2 font-headline-sm text-headline-sm text-primary"
              >
                Architecture
              </h2>
              <dl className="mt-4 divide-y divide-border-subtle">
                {architectureSections.map(({ key, label, icon: Icon }) => (
                  <div
                    key={key}
                    className="flex items-start gap-3 py-3 first:pt-1 last:pb-0"
                  >
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                    />
                    <div className="min-w-0">
                      <dt className="font-label-sm text-label-sm text-on-surface-variant">
                        {label}
                      </dt>
                      <dd className="mt-1 break-words font-body-sm text-body-sm text-primary">
                        {project.architecture[key]}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
