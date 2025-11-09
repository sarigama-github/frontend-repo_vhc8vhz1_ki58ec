import { useState } from 'react';
import { CreditCard, User, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-md">
              <CreditCard size={18} />
            </div>
            <span className="text-xl font-semibold tracking-tight">CardFlow</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white text-sm font-medium shadow hover:bg-slate-800 active:scale-[0.99]">
              <User size={16} />
              Sign in
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" role="dialog" aria-modal>
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <h3 className="text-base font-semibold">Welcome back</h3>
              <button
                aria-label="Close sign in"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Simple demo: close modal on submit
                setOpen(false);
                alert('Signed in (demo)');
              }}
              className="space-y-4 px-5 py-5"
            >
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-violet-400 focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-violet-400 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-2 text-white font-medium shadow hover:opacity-95"
              >
                Sign in
              </button>
              <p className="text-center text-xs text-slate-500">Demo only • No account required</p>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
