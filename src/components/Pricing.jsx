export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      period: '/mo',
      features: ['Up to 500 transactions', 'Basic analytics', 'Community support'],
      cta: 'Start for free',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$29',
      period: '/mo',
      features: ['10k transactions', 'Advanced analytics', 'Priority support'],
      cta: 'Upgrade',
      highlighted: true,
    },
    {
      name: 'Scale',
      price: '$99',
      period: '/mo',
      features: ['Unlimited transactions', 'Custom reports', 'Dedicated manager'],
      cta: 'Contact sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Pick a plan that scales with you. No hidden fees, cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-sm transition ${
                tier.highlighted
                  ? 'border-violet-300 bg-white shadow-violet-100/60 shadow-lg'
                  : 'border-slate-200 bg-white hover:shadow-md'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 right-6 rounded-full bg-violet-600 px-2 py-1 text-xs font-medium text-white shadow">Popular</span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{tier.price}</span>
                <span className="text-slate-500">{tier.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 font-medium shadow ${
                tier.highlighted
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
