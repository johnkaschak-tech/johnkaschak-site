export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10 text-sm text-black/60 dark:border-white/10 dark:text-white/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5">
        <div>© {new Date().getFullYear()} John Kaschak</div>
        <div>
          <a
            className="hover:text-black dark:hover:text-white"
            href="https://www.linkedin.com/in/johnkaschak/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
