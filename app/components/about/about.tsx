



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
          </section>

        </>
    )
}