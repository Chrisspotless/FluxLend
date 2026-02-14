export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="pt-28 pb-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
            Request a demo
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            See NovaCheckout in action
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Tell us about your stores and we will tailor a walkthrough for your team.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <form className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Alex Johnson"
                  className="h-12 rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Nova Market Group"
                  className="h-12 rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="alex@company.com"
                  className="h-12 rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700" htmlFor="stores">
                  Number of locations
                </label>
                <input
                  id="stores"
                  type="text"
                  placeholder="25"
                  className="h-12 rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700" htmlFor="notes">
                What would you like to see?
              </label>
              <textarea
                id="notes"
                rows={4}
                placeholder="Kiosk workflows, Scan & Go, reporting, or integrations."
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#00a3a3] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00a3a3] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006b6b]"
            >
              Submit request
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
