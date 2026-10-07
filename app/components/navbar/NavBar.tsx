import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-border-subtle ">
        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin h-16 flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <a
              className="flex items-center gap-space-sm group"
              data-path="home"
              href="#"
            >
              <div className="w-8 h-8 mr-1.5 rounded-full bg-foreground flex items-center justify-center text-background font-headline-sm text-headline-sm">
                M
              </div>
              <span className="font-label-md text-label-md text-primary mr-1.5 tracking-tight font-semibold">
                Mohammed.dev
              </span>
            </a>
            <div className="hidden sm:inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-subtle border border-border-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Available for new projects
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <Link
              className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors"
              data-path="contact"
              href={'/contact'}
            >
              Get in touch
            </Link>
            <Image
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-border-subtle ml-space-xs"
              height={32}
              src={"/profile.png"}
              width={32}
            />
          </div>
        </div>
      </header>
    </>
  );
}
