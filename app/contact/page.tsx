"use client";
import { ArrowRight, BriefcaseBusiness, CalendarDays, CalendarSync, Code, Copy, Mail, SquareArrowOutUpRight, Tickets } from "lucide-react";

export default function ContactMe () {
  return (
    <>
      <main className="w-full pt-16 min-h-screen bg-surface">
        <main className="flex flex-col w-full">
          {/* <!-- Top Ambient Glow Decorator --> */}
          <div className="relative w-full max-w-[72rem] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
            <div className="absolute -top-12 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            {/* <!-- Editorial Header Block --> */}
            <div className="max-w-[48rem]">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-subtle shadow-sm mb-space-md">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
                  Available for Q2/Q3 2025
                </span>
              </div>
              <h1 className="font-display text-display text-primary tracking-tight leading-none mb-space-md">
                Let’s build something exceptional together.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Whether you need end-to-end full-stack engineering, a
                high-performance React Native mobile app, or resilient CI/CD and
                GraphQL architecture consultation — let’s talk.
              </p>
            </div>
          </div>
          {/* <!-- Primary Interactive Dual-Column Canvas --> */}
          <section className="w-full max-w-[72rem] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* <!-- Left Column: Architectural Inquiry Form --> */}
              <div className="lg:col-span-7 bg-canvas rounded-xl shadow-sm p-space-lg lg:p-space-xl relative">
                <form className="space-y-space-lg" id="contact-inquiry-form">
                  {/* <!-- Identity Fields Grid --> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label
                        className="font-label-md text-label-md text-on-surface"
                        htmlFor="client-name"
                      >
                        Your Name <span className="text-secondary">*</span>
                      </label>
                      <input
                        className="w-full px-space-md py-space-sm bg-surface-subtle focus:bg-canvas rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-200 outline-none focus:shadow-md"
                        id="client-name"
                        placeholder="Elena Rostova"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label
                        className="font-label-md text-label-md text-on-surface"
                        htmlFor="client-email"
                      >
                        Work Email <span className="text-secondary">*</span>
                      </label>
                      <input
                        className="w-full px-space-md py-space-sm bg-surface-subtle focus:bg-canvas rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-200 outline-none focus:shadow-md"
                        id="client-email"
                        placeholder="elena@company.io"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  {/* <!-- Project Category Selector Chips --> */}
                  <div className="flex flex-col gap-space-sm">
                    <label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
                      <span>Project Type</span>
                      <span className="font-label-sm text-label-sm text-outline">
                        Select primary scope
                      </span>
                    </label>
                    <div
                      className="flex flex-wrap gap-space-xs"
                      id="scope-selector"
                    >
                      <button
                        className="scope-chip px-space-md py-space-xs rounded-full font-label-sm text-label-sm bg-primary text-on-primary transition-all duration-150"
                        data-value="Full-Stack Web App"
                        type="button"
                      >
                        Full-Stack Web App
                      </button>
                      <button
                        className="scope-chip px-space-md py-space-xs rounded-full font-label-sm text-label-sm bg-surface-subtle text-on-surface hover:bg-surface-container-high transition-all duration-150"
                        data-value="React Native Mobile"
                        type="button"
                      >
                        React Native Mobile
                      </button>
                      <button
                        className="scope-chip px-space-md py-space-xs rounded-full font-label-sm text-label-sm bg-surface-subtle text-on-surface hover:bg-surface-container-high transition-all duration-150"
                        data-value="GraphQL Architecture"
                        type="button"
                      >
                        GraphQL Architecture
                      </button>
                      <button
                        className="scope-chip px-space-md py-space-xs rounded-full font-label-sm text-label-sm bg-surface-subtle text-on-surface hover:bg-surface-container-high transition-all duration-150"
                        data-value="CI/CD &amp; DevOps"
                        type="button"
                      >
                        CI/CD &amp; DevOps
                      </button>
                      <button
                        className="scope-chip px-space-md py-space-xs rounded-full font-label-sm text-label-sm bg-surface-subtle text-on-surface hover:bg-surface-container-high transition-all duration-150"
                        data-value="Consultation"
                        type="button"
                      >
                        Consultation
                      </button>
                    </div>
                    <input
                      id="selected-scope"
                      name="scope"
                      type="hidden"
                      value="Full-Stack Web App"
                    />
                  </div>
                  {/* <!-- Target Budget Range Segmented Array --> */}
                  <div className="flex flex-col gap-space-sm">
                    <label
                      htmlFor="target-budget"
                      className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    >
                      <span>Target Budget (USD)</span>
                    </label>
                    <input
                      id="target-budget"
                      type="text"
                      name="target-budget"
                      required
                      className="w-full px-space-md py-space-sm bg-surface-subtle focus:bg-canvas rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-200 outline-none focus:shadow-md"
                    />
                  </div>
                  {/* <!-- Message Textarea --> */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <label
                        className="font-label-md text-label-md text-on-surface"
                        htmlFor="project-details"
                      >
                        Project Details &amp; Timeline
                        <span className="text-secondary">*</span>
                      </label>
                      <span
                        className="font-label-sm text-label-sm text-outline"
                        id="char-counter"
                      >
                        0/1000
                      </span>
                    </div>
                    <textarea
                      className="w-full px-space-md py-space-sm bg-surface-subtle focus:bg-canvas rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-200 outline-none focus:shadow-md resize-none"
                      id="project-details"
                      maxLength="1000"
                      placeholder="Tell me about the goals, existing system dependencies, target deliverables, or the core problem you need solved..."
                      required
                      rows="4"
                    ></textarea>
                  </div>
                  {/* <!-- Bottom Action Bar --> */}
                  <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-xs text-outline">
                      <span className="material-symbols-outlined text-[1.125rem] text-secondary">
                        <CalendarSync />
                      </span>
                      <span className="font-body-sm text-body-sm">
                        Average response time: within 12 hours.
                      </span>
                    </div>
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container shadow-sm hover:shadow-md transition-all duration-200 group"
                      id="submit-btn"
                      type="submit"
                    >
                      <span id="btn-text">Send Inquiry</span>
                      <span
                        className="material-symbols-outlined text-[1.125rem] transition-transform duration-200 group-hover:translate-x-1"
                        id="btn-icon"
                      >
                        <ArrowRight />
                      </span>
                      <span
                        className="hidden material-symbols-outlined text-[1.125rem] animate-spin"
                        id="btn-spinner"
                      >
                        progress_activity
                      </span>
                    </button>
                  </div>
                  {/* <!-- Feedback Status Alert Banner --> */}
                  <div
                    className="hidden p-space-md rounded-lg bg-surface-container-high transition-opacity"
                    id="form-feedback"
                  >
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-success">
                        check_circle
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                        Thank you! Your message has been routed to my personal
                        inbox. I&apos;ll get back to you shortly.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!-- Right Column: Direct Channels, Schedule, Verification & FAQ --> */}
              <div className="lg:col-span-5 flex flex-col gap-space-lg">
                {/* <!-- Live Calendar Card --> */}
                <div className="bg-canvas rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-xs font-semibold">
                        Priority Connect
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Direct 1-on-1 Consultation
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[1.25rem]">
                        <CalendarDays />
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Skip the inbox queue. Grab 30 minutes on my Cal.com to
                    review architectural schematics, codebases, or technical
                    feasibility.
                  </p>
                  <a
                    className="inline-flex items-center justify-between w-full px-space-md py-space-sm bg-surface-subtle hover:bg-surface-container-high rounded-lg text-primary font-label-md text-label-md transition-colors"
                    href="https://cal.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[1.125rem] text-secondary">
                        <Tickets />
                      </span>
                      Book 30-min Architecture Consultation
                    </span>
                    <span className="material-symbols-outlined text-[1.125rem]">
                      <SquareArrowOutUpRight />
                    </span>
                  </a>
                </div>
                {/* <!-- Direct Channels Details Panel --> */}
                <div className="bg-canvas rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                  <h3 className="font-label-md text-label-md uppercase tracking-wider text-outline">
                    Direct Channels
                  </h3>
                  {/* <!-- Fast Copy Email Row --> */}
                  <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-subtle">
                    <div className="flex items-center gap-space-sm min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-canvas flex items-center justify-center text-on-surface shadow-sm">
                        <span className="material-symbols-outlined text-[1.125rem]">
                          <Mail />
                        </span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm text-outline">
                          Email Address
                        </span>
                        <span className="font-body-md text-body-md text-primary font-medium truncate">
                          moh-a-a-alq123@outlook.sa
                        </span>
                      </div>
                    </div>
                    <button
                      aria-label="Copy Email"
                      className="px-space-sm py-space-xs rounded-md bg-canvas hover:bg-surface-container-high font-label-sm text-label-sm text-on-surface shadow-sm transition-all flex items-center gap-1"
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "moh-a-a-alq123@outlook.sa",
                        );
                      }}
                    >
                      <span className="material-symbols-outlined text-[0.875rem]">
                        <Copy />
                      </span>
                      <span>Copy</span>
                    </button>
                  </div>
                  {/* <!-- Location & Availability Grid --> */}
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="p-space-sm rounded-lg bg-surface-subtle flex flex-col gap-space-xs">
                      <div className="flex items-center gap-1 text-outline">
                        <span className="material-symbols-outlined text-[1rem]">
                          public
                        </span>
                        <span className="font-label-sm text-label-sm uppercase">
                          Timezone
                        </span>
                      </div>
                      <span className="font-body-md text-body-md text-on-surface font-medium">
                        Remote · EST (UTC-5)
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-subtle flex flex-col gap-space-xs">
                      <div className="flex items-center gap-1 text-outline">
                        <span className="material-symbols-outlined text-[1rem]">
                          bolt
                        </span>
                        <span className="font-label-sm text-label-sm uppercase">
                          Notice Period
                        </span>
                      </div>
                      <span className="font-body-md text-body-md text-on-surface font-medium">
                        1–2 Weeks Ahead
                      </span>
                    </div>
                  </div>
                  {/* <!-- Developer Hubs Grid --> */}
                  <div className="pt-space-xs">
                    <span className="font-label-sm text-label-sm text-outline mb-space-xs block">
                      Developer &amp; Social Profiles
                    </span>
                    <div className="grid grid-cols-2 gap-space-xs">
                      <a
                        className="flex items-center gap-space-xs p-space-xs rounded-lg hover:bg-surface-subtle text-on-surface-variant hover:text-primary transition-colors"
                        href="https://github.com/togosa-afk"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[1.125rem]">
                          <Code />
                        </span>
                        <span className="font-label-md text-label-md">
                          github/Mohammed-Alqadi
                        </span>
                      </a>
                      <a
                        className="flex items-center gap-space-xs p-space-xs rounded-lg hover:bg-surface-subtle text-on-surface-variant hover:text-primary transition-colors"
                        href="https://www.linkedin.com/in/mohammed-alqadi-7141a5350"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[1.125rem]">
                          <BriefcaseBusiness />
                        </span>
                        <span className="font-label-md text-label-md">
                          LinkedIn
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- Mini FAQ Accordion / Snippets --> */}
                <div className="bg-canvas rounded-xl shadow-sm p-space-lg flex flex-col gap-space-sm">
                  <h3 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-space-xs">
                    Prospective Client FAQ
                  </h3>
                  <div className="rounded-lg bg-surface-subtle p-space-sm">
                    <h4 className="font-label-md text-label-md text-primary font-semibold mb-1">
                      What is your typical engagement model?
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      I operate on either dedicated weekly sprint retainers or
                      fixed-scope milestone projects with clearly mapped specs,
                      test suites, and deliverables.
                    </p>
                  </div>
                  <div className="rounded-lg bg-surface-subtle p-space-sm">
                    <h4 className="font-label-md text-label-md text-primary font-semibold mb-1">
                      Can you embed directly into our existing engineering team?
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Yes. I frequently function as a high-velocity staff-level
                      force multiplier, mentoring junior peers, structuring PR
                      reviews, and unblocking core architectural pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
    </>
  );
}