export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-black/70 dark:text-white/70">
          For opportunities, partnerships, or deal discussions—send a note or connect on LinkedIn.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.06]">
          <div className="text-sm font-semibold">Direct</div>
          <div className="mt-3 space-y-2 text-sm text-black/70 dark:text-white/70">
            <a className="block hover:text-black dark:hover:text-white" href="https://www.linkedin.com/in/johnkaschak/" target="_blank" rel="noreferrer">
              LinkedIn → John Kaschak
            </a>
            <div className="text-xs text-black/60 dark:text-white/60">
              Add email + calendar later if you want (easy swap).
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.06]"
          action="https://formspree.io/f/xdaovrkv"
          method="POST"
        >
          <div className="text-sm font-semibold">Message</div>

          <label className="mt-4 block text-xs text-black/60 dark:text-white/60">Name</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10
                       dark:border-white/10 dark:bg-black dark:focus:ring-white/10"
          />

          <label className="mt-4 block text-xs text-black/60 dark:text-white/60">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10
                       dark:border-white/10 dark:bg-black dark:focus:ring-white/10"
          />

          <label className="mt-4 block text-xs text-black/60 dark:text-white/60">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10
                       dark:border-white/10 dark:bg-black dark:focus:ring-white/10"
          />

          <button
            type="submit"
            className="mt-5 rounded-2xl bg-black px-4 py-2 text-sm text-white hover:bg-black/90
                       dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
