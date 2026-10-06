



export default function AboutSection () {
    return(
        <>
        	<section
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4"
          >
            {/* <!-- Left: About Me --> */}
            <div className="flex flex-col justify-start">
              <h2
                className="font-headline-md text-headline-md text-primary tracking-tight mb-4"
              >
                About Me
              </h2>
              <p
                className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4"
              >
                As a Full-Stack &amp; Mobile Software Engineer with over 2 years
                of experience, I specialize in building robust production
                architectures and resilient user experiences. My engineering
                philosophy is rooted in clean code, static typing, and high test
                coverage.
              </p>
              <p
                className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
              >
                From architecting scalable GraphQL APIs to shipping fluid 60fps
                mobile applications, I translate complex backend realities into
                effortless client experiences.
              </p>
            </div>
            {/* <!-- Right: Work Experience --> */}
            <div className="flex flex-col justify-start">
              <h2
                className="font-headline-md text-headline-md text-primary tracking-tight mb-6"
              >
                Work Experience &amp; Track Record
              </h2>
              <div className="flex flex-col space-y-6">
                {/* <!-- Timeline Entry 1 --> */}
                <div
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group"
                >
                  <div className="flex flex-col">
                    <span
                      className="font-headline-sm text-body-lg font-semibold text-primary group-hover:text-secondary transition-colors"
                    >
                      Lead Full-Stack Engineer
                    </span>
                    <span
                      className="font-body-sm text-body-sm text-on-surface-variant"
                      >CloudScale</span
                    >
                  </div>
                  <span
                    className="font-label-sm text-label-sm text-outline shrink-0"
                  >
                    2023 — Present
                  </span>
                </div>
                {/* <!-- Timeline Entry 2 --> */}
                <div
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group"
                >
                  <div className="flex flex-col">
                    <span
                      className="font-headline-sm text-body-lg font-semibold text-primary group-hover:text-secondary transition-colors"
                    >
                      Senior Mobile &amp; React Developer
                    </span>
                    <span
                      className="font-body-sm text-body-sm text-on-surface-variant"
                      >HyperLink Studio</span
                    >
                  </div>
                  <span
                    className="font-label-sm text-label-sm text-outline shrink-0"
                  >
                    2021 — 2023
                  </span>
                </div>
                {/* <!-- Timeline Entry 3 --> */}
                <div
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group"
                >
                  <div className="flex flex-col">
                    <span
                      className="font-headline-sm text-body-lg font-semibold text-primary group-hover:text-secondary transition-colors"
                    >
                      Software Engineer
                    </span>
                    <span
                      className="font-body-sm text-body-sm text-on-surface-variant"
                      >CoreTech Systems</span
                    >
                  </div>
                  <span
                    className="font-label-sm text-label-sm text-outline shrink-0"
                  >
                    2019 — 2021
                  </span>
                </div>
              </div>
            </div>
          </section>

        </>
    )
}