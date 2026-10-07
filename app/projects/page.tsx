import data from "../../asset/data.json";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto w-full px-margin-mobile md:px-margin py-12 md:py-16">
      <section aria-labelledby="projects-heading">
        <div className="mb-8">
          <h1
            id="projects-heading"
            className="font-headline-lg text-headline-lg text-primary tracking-tight"
          >
            Projects
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            A selection of projects showcasing my work in web development,
            interface design, and modern application architecture.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((project) => {
            const technologies = Object.values(project.techStack).flat();

            return (
              <li
                key={project.id}
                className="group flex flex-col rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col flex-1">
                  <span className="self-start px-2.5 py-1 rounded-full bg-surface-subtle font-label-sm text-label-sm text-on-surface-variant">
                    {project.category}
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mt-4">
                    {project.name}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>

                <ul
                  aria-label={`${project.name} technologies`}
                  className="flex flex-wrap gap-2 mt-5"
                >
                  {technologies.slice(0, 4).map((technology) => (
                    <li
                      key={technology}
                      className="px-2 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-medium mt-6 group/link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                >
                  View project details
                  <MoveRight
                    aria-hidden="true"
                    className="h-4 w-4 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
