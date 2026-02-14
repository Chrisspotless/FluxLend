import Link from "next/link";

const solutions = [
  {
    slug: "kiosk",
    title: "Self-Checkout Kiosk",
    description:
      "Guided in-store checkout with bagging checks and assisted mode.",
    cta: "See Kiosk in Action",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "scan-go",
    title: "Scan & Go Mobile",
    description:
      "Mobile scanning and payment for fast exits and shorter queues.",
    cta: "See Scan & Go in Action",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-gray-50">
      <section className="pt-28 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
            Unified solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            A complete self-checkout suite
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Deploy kiosk and mobile checkout together to deliver a consistent,
            enterprise-grade experience across every store.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.slug}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-[#00a3a3]"></div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#00a3a3] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006b6b]"
                >
                  {solution.cta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
