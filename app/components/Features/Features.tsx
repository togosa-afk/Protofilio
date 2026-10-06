import { MoveRight } from "lucide-react";

export default function Features () {
    return (
        <>
            <section className="flex flex-col">
            <div className="mb-8">
              <h2
                className="font-headline-md text-headline-md text-primary tracking-tight"
              >
                Latest Articles &amp; Technical Insights
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Deep dives into software architecture, static typing, and
                scalable systems.
              </p>
            </div>
            <div className="flex flex-col space-y-8">
              {/* <!-- Article 1 --> */}
              <article
                className="group flex flex-col gap-2 p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-outline"
                    >Apr 23, 2025</span
                  >
                  <span className="text-outline">•</span>
                  <span
                    className="font-label-sm text-label-sm text-secondary font-medium"
                    >Type Safety</span
                  >
                </div>
                <h3
                  className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mt-1"
                >
                  Patientor: Runtime Data Validation at Scale with Zod &amp;
                  Discriminated Unions
                </h3>
                <p
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                >
                  How strict compile-time checks and runtime schemas eliminated
                  100% of data incompatibility errors across clinical healthcare
                  endpoints.
                </p>
                <a
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-medium mt-2 group/link"
                  href="#"
                >
                  <span>Read Case Study</span>
                  <span
                    className="material-symbols-outlined text-[1rem] group-hover/link:translate-x-1 transition-transform"
                    ><MoveRight /></span
                  >
                </a>
              </article>
              {/* <!-- Article 2 --> */}
              <article
                className="group flex flex-col gap-2 p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-outline"
                    >Mar 15, 2025</span
                  >
                  <span className="text-outline">•</span>
                  <span
                    className="font-label-sm text-label-sm text-secondary font-medium"
                    >GraphQL &amp; Performance</span
                  >
                </div>
                <h3
                  className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mt-1"
                >
                  Solving Over-Fetching with Federated GraphQL &amp; Apollo
                  Client
                </h3>
                <p
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                >
                  Architecting a sub-100ms multi-query data engine while
                  slashing payload overhead by 40% across distributed
                  microservices.
                </p>
                <a
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-medium mt-2 group/link"
                  href="#"
                >
                  <span>Read Specs</span>
                  <span
                    className="material-symbols-outlined text-[1rem] group-hover/link:translate-x-1 transition-transform"
                    ><MoveRight /></span
                  >
                </a>
              </article>
              {/* <!-- Article 3 --> */}
              <article
                className="group flex flex-col gap-2 p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-outline"
                    >Mar 5, 2025</span
                  >
                  <span className="text-outline">•</span>
                  <span
                    className="font-label-sm text-label-sm text-secondary font-medium"
                    >DevOps &amp; Testing</span
                  >
                </div>
                <h3
                  className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mt-1"
                >
                  Zero-Downtime Releases: Automated E2E Testing with Playwright
                  &amp; CI/CD
                </h3>
                <p
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                >
                  Building an infallible multi-stage testing pipeline with
                  Vitest, Supertest, and automated canary deployments on cloud
                  infrastructure.
                </p>
                <a
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-medium mt-2 group/link"
                  href="#"
                >
                  <span>Read Technical Guide</span>
                  <span
                    className="material-symbols-outlined text-[1rem] group-hover/link:translate-x-1 transition-transform"
                    ><MoveRight /></span
                  >
                </a>
              </article>
            </div>
          </section>
        </>
  )
}