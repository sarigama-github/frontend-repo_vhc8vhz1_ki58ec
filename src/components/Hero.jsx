import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-xs text-white shadow">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            Live fintech demo
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Modern card payments for the next generation
          </h1>
          <p className="mt-4 max-w-xl text-slate-600">
            A sleek, glass-morphic experience for digital wallets, cards, and billing — built with 3D and motion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800">
              Get started
            </a>
            <a href="#about" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">
              Learn more
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-cyan-100/70 shadow-inner">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 via-transparent to-white/20"></div>
        </div>
      </div>
    </section>
  );
}
