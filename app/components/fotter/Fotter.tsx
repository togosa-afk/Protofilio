import { BriefcaseBusiness, Code, MessageCircleMore } from "lucide-react";

export default function Fotter() {
  return (
    <>
      <footer className="w-full border-t border-border-subtle bg-surface-container-lowest py-space-xl">
        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col items-center md:items-start gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              Designed with architectural precision
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              © 2025 Alex Rivera. Built with Nuxt &amp; Tailwind.
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <a
              aria-label="Source code repository"
              className="p-space-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors flex items-center justify-center"
              href="https://github.com/togosa-afk"
							target="blank"
            >
              <span className="material-symbols-outlined text-[1.25rem]"><Code /></span>
            </a>
            <a
              aria-label="Community chat"
              className="p-space-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors flex items-center justify-center"
              href="#"
            >
              <span className="material-symbols-outlined text-[1.25rem]">
                <MessageCircleMore />
              </span>
            </a>
            <a
              aria-label="Professional network"
              className="p-space-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors flex items-center justify-center"
              href="#"
            >
              <span className="material-symbols-outlined text-[1.25rem]"><BriefcaseBusiness /></span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
