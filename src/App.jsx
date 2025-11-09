import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} CardFlow. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}
