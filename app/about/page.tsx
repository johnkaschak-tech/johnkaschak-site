export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-black/70 dark:text-white/70">
          Background, focus, and how I approach deals.
        </p>
      </header>

      <section className="prose max-w-none prose-p:leading-relaxed dark:prose-invert">
        <p>
          <strong>John S. Kaschak</strong> heads American Ventures’ Acquisition and Entitlements Strategy based in
          Austin, Texas. John is responsible for identifying and sourcing land development opportunities by following
          growth patterns across Central Texas.
        </p>
        <p>
          Prior to American Ventures, John served as an advisor and Director of Acquisitions for a private family
          development firm based in Sugar Land. In that role, he expanded the firm’s Central Texas development pipeline
          while implementing asset management and development procedures for a retail development in the Houston MSA.
        </p>
        <p>
          John found early success by identifying and entitling two urban infill residential developments in Austin,
          then shifted focus toward lot development in the surrounding markets. He oversaw the identification and
          entitlement of residential development projects across Central Texas, including Elgin, Manor, Leander,
          Jarrell, and Georgetown, and partnered with Johnson Development Corp on their municipal utility district
          <em> Nolina</em>.
        </p>
        <p>
          Before his time in Sugar Land, John led the acquisitions team for a small private family office in Austin
          after advising landlords in San Antonio, Texas.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { k: "Focus", v: "Central Texas growth markets • land • entitlements • execution" },
          { k: "Style", v: "Operator-first underwriting • timeline discipline • risk clarity" },
          { k: "Partnerships", v: "Builders • landowners • capital partners • municipalities" },
        ].map((x) => (
          <div
            key={x.k}
            className="rounded-3xl border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/[0.06]"
          >
            <div className="text-sm font-semibold">{x.k}</div>
            <div className="mt-2 text-sm text-black/70 dark:text-white/70">{x.v}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
