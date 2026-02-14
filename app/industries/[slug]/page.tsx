import Link from "next/link";

const INDUSTRIES = [
  {
    slug: "grocery-supermarkets",
    title: "Grocery & Supermarkets",
    heroImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=80",
    summary:
      "High-volume lanes that need accuracy, speed, and smooth assisted workflows.",
    items: [
      {
        name: "Guided bagging checks",
        description:
          "Weight-aware prompts reduce mis-scans without stopping the flow.",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Assisted mode handoffs",
        description:
          "Instant attendant approvals for age-restricted items and overrides.",
        image:
          "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "High-volume payment lanes",
        description:
          "Fast tap, chip, and wallet payments built for peak traffic.",
        image:
          "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "specialty-retail",
    title: "Specialty Retail",
    heroImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Elevated customer journeys with mobile checkout and digital receipts.",
    items: [
      {
        name: "Mobile-first checkout",
        description:
          "Scan & Go keeps shoppers engaged without queueing.",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Digital receipt journeys",
        description:
          "Offer email or SMS receipts to keep the experience seamless.",
        image:
          "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Assisted high-value baskets",
        description:
          "Quick verification steps for high-value or regulated items.",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "convenience-fuel",
    title: "Convenience & Fuel",
    heroImage:
      "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Fast checkout for small baskets and time-sensitive visits.",
    items: [
      {
        name: "Small basket speed",
        description:
          "Self-checkout flows optimized for two-to-five item baskets.",
        image:
          "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Fuel + basket workflows",
        description:
          "Support mixed baskets for fuel, snacks, and essentials.",
        image:
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Quick cashless exit",
        description:
          "Tap and go with minimal prompts and instant receipts.",
        image:
          "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "pharmacy",
    title: "Pharmacy",
    heroImage:
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Secure flows for regulated items, age validation, and safety checks.",
    items: [
      {
        name: "Age and ID validation",
        description:
          "Attendant-assisted approvals for regulated items.",
        image:
          "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Prescription add-ons",
        description:
          "Flexible checkout for OTC items and related products.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Secure audit trails",
        description:
          "Centralized reporting for compliance and verification.",
        image:
          "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "hospitality-dining",
    title: "Hospitality & Dining",
    heroImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Self-service ordering, payment, and pickup workflows.",
    items: [
      {
        name: "Order ahead kiosks",
        description:
          "Let guests build orders with upsell prompts and quick edits.",
        image:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Pickup & receipt flow",
        description:
          "Digital receipts and pickup prompts keep lines moving.",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Table-service support",
        description:
          "Use mobile checkout for quick pay-at-table experiences.",
        image:
          "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "department-stores",
    title: "Department Stores",
    heroImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Scale self-checkout across multiple floors and formats.",
    items: [
      {
        name: "Multi-floor coverage",
        description:
          "Deploy kiosks and Scan & Go across departments consistently.",
        image:
          "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "High-value item checks",
        description:
          "Assisted mode and validations reduce shrink on premium items.",
        image:
          "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Unified reporting",
        description:
          "Track checkout KPIs across stores, floors, and formats.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
];

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find((item) => item.slug === params.slug);

  if (!industry) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 pt-28 pb-20">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Industry not found
          </h1>
          <p className="text-gray-600 mb-8">
            The industry page you requested does not exist.
          </p>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-full border border-[#00a3a3] px-5 py-2.5 text-sm font-semibold text-[#00a3a3] transition-all duration-300 hover:bg-[#00a3a3] hover:text-white"
          >
            Back to industries
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
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00a3a3] mb-6"
          >
            <svg className="h-4 w-4 rotate-180" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to industries
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
                Designed for your business needs
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                {industry.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                {industry.summary}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={industry.heroImage}
                alt={industry.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.items.map((item, index) => (
              <div
                key={`${industry.slug}-${index}`}
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
