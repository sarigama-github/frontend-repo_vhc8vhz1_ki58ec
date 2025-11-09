export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for clarity and speed</h2>
          <p className="mt-4 text-slate-600">
            We combine glass-morphic design with robust infrastructure so your payments feel instant, secure, and delightful. 
            Manage cards, track spending, and unlock insights without the clutter.
          </p>
        </div>
        <div id="features" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Instant Issuing',
              desc: 'Create virtual cards in seconds with programmable controls and real-time limits.'
            },
            {
              title: 'Advanced Security',
              desc: '3D Secure, tokenization, and risk checks keep every transaction protected.'
            },
            {
              title: 'Global Coverage',
              desc: 'Multi-currency support and worldwide acceptance for modern teams.'
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
