import Link from "next/link";

const SOLUTIONS = [
  {
    slug: "kiosk",
    title: "Self-Checkout Kiosk",
    heroImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Guided in-store checkout with assisted mode, bagging checks, and fast payments.",
    intro:
      "A guided kiosk experience that reduces queues, improves scan accuracy, and keeps shoppers moving.",
    cta: "Request a Kiosk Demo",
    accent: "bg-[#361D5C]",
    visuals: [
      {
        label: "Kiosk home screen",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        label: "Assisted approval flow",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      },
      {
        label: "Bagging verification",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    items: [
      {
        name: "Assisted mode",
        description:
          "Instant handoffs for age-restricted items and override requests.",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Bagging validation",
        description:
          "Weight-aware prompts reduce shrink while keeping baskets moving.",
        image:
          "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Fast payments",
        description:
          "Support tap, chip, and mobile wallets for quick completion.",
        image:
          "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "scan-go",
    title: "Scan & Go Mobile",
    heroImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Mobile scanning and payment to reduce queues and improve customer flow.",
    intro:
      "A mobile-first checkout flow that lets shoppers scan, pay, and exit in seconds.",
    cta: "Request a Scan & Go Demo",
    accent: "bg-[#00a3a3]",
    visuals: [
      {
        label: "Scan in app",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
      },
      {
        label: "Mobile basket review",
        image:
          "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1400&q=80",
      },
      {
        label: "Digital receipt",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    items: [
      {
        name: "In-app scanning",
        description:
          "Let shoppers scan as they go to eliminate checkout bottlenecks.",
        image:
          "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Secure exit flow",
        description:
          "Verify baskets quickly with smart prompts and digital receipts.",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Real-time insights",
        description:
          "Track scan rates, completion times, and assistance events.",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
];

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .replace(/%20/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const resolveSlug = (value: string) => {
  const normalized = normalizeSlug(value);
  const aliasMap: Record<string, string> = {
    "scan-and-go": "scan-go",
    "scan-go-mobile": "scan-go",
    "scan-go-app": "scan-go",
    "self-checkout": "kiosk",
    "self-checkout-kiosk": "kiosk",
  };
  return aliasMap[normalized] ?? normalized;
};

export default async function SolutionPage({
  params,
}: {
  params: { slug: string | string[] } | Promise<{ slug: string | string[] }>;
}) {
  const resolvedParams =
    typeof (params as Promise<unknown>)?.then === "function"
      ? await params
      : (params as { slug: string | string[] });
  const rawSlug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams?.slug?.[0] ?? ""
    : resolvedParams?.slug ?? "";
  const resolvedSlug = resolveSlug(rawSlug);
  const solution = SOLUTIONS.find((item) => item.slug === resolvedSlug);

  if (!solution) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 pt-28 pb-20">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Solution not found
          </h1>
          <p className="text-gray-600 mb-8">
            The solution page you requested does not exist.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-[#00a3a3] px-5 py-2.5 text-sm font-semibold text-[#00a3a3] transition-all duration-300 hover:bg-[#00a3a3] hover:text-white"
          >
            Back to solutions
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50">
      <section className="pt-28 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00a3a3] mb-6"
          >
            <svg className="h-4 w-4 rotate-180" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to solutions
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
                Unified solutions
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                {solution.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                {solution.summary}
              </p>
              <p className="text-base text-gray-500 mt-4 max-w-xl">
                {solution.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00a3a3] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006b6b]"
                >
                  {solution.cta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-[#00a3a3] px-6 py-3 text-sm font-semibold text-[#00a3a3] transition-all duration-300 hover:bg-[#00a3a3] hover:text-white"
                >
                  View all solutions
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg relative">
              <div className={`absolute top-5 left-5 h-2 w-20 rounded-full ${solution.accent}`}></div>
              <img
                src={solution.heroImage}
                alt={solution.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
              Visual walkthrough
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Experience the interface shoppers see
            </h2>
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-16">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="relative aspect-[16/9] rounded-2xl border border-gray-200 bg-gradient-to-b from-slate-50 to-white p-4">
                <div className="absolute left-1/2 top-4 h-2 w-24 -translate-x-1/2 rounded-full bg-slate-300"></div>
                <div className="absolute right-6 top-5 h-2 w-2 rounded-full bg-slate-300"></div>
                <div className="h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img
                    src={solution.visuals[0].image}
                    alt={solution.visuals[0].label}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">
                  {solution.visuals[0].label}
                </span>
                <span className="text-xs font-semibold text-[#00a3a3]">
                  Primary UI
                </span>
              </div>
            </div>
            <div className="space-y-6">
              {solution.visuals.slice(1).map((visual, index) => (
                <div
                  key={`${solution.slug}-visual-${index}`}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="relative mx-auto w-full max-w-[260px] rounded-[34px] border border-slate-200 bg-slate-100 p-2 shadow-inner">
                    <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-300"></div>
                    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
                      <img
                        src={visual.image}
                        alt={visual.label}
                        className="h-[360px] w-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-900">
                    {visual.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.items.map((item, index) => (
              <div
                key={`${solution.slug}-${index}`}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-[#00a3a3]"></div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
