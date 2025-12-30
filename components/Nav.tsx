import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-black/50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          John Kaschak
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-black/70 dark:text-white/70 md:flex">
          <Link className="hover:text-black dark:hover:text-white" href="/about">
            About
          </Link>
          <Link className="hover:text-black dark:hover:text-white" href="/deals">
            Deals
          </Link>
          <Link className="hover:text-black dark:hover:text-white" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-black dark:hover:text-white" href="/contact">
            Contact
          </Link>
          <a
            className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1.5 text-black hover:bg-black/[0.06]
                       dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.09]"
            href="https://www.linkedin.com/in/johnkaschak/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>

        <div className="text-sm text-black/60 dark:text-white/60 md:hidden">
          <a href="https://www.linkedin.com/in/johnkaschak/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
