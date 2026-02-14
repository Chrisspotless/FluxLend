import Link from "next/link";

const industries = [
  {
    slug: "grocery-supermarkets",
    title: "Grocery & Supermarkets",
    description:
      "High-volume lanes with assisted mode, bagging checks, and fast payments.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "specialty-retail",
    title: "Specialty Retail",
    description:
      "Elevated customer experience with mobile scanning and digital receipts.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "convenience-fuel",
    title: "Convenience & Fuel",
    description:
      "Quick checkout for small baskets and time-sensitive visits.",
    image:
      "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "pharmacy",
    title: "Pharmacy",
    description:
      "Secure workflows for regulated items and age validation.",
    image:
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "hospitality-dining",
    title: "Hospitality & Dining",
    description:
      "Self-service kiosks for order, pay, and pickup queues.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "department-stores",
    title: "Department Stores",
    description:
      "Scale self-checkout across multiple floors and formats.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-gray-50">
      <section className="pt-28 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
            Designed for your business needs
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Industries we serve
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            NovaCheckout is built for modern retail operations. Explore
            industry-specific workflows, layouts, and self-service experiences.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-[#00a3a3]"></div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
