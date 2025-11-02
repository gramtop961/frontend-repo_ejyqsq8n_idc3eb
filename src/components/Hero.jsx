import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-zinc-900/70 dark:via-zinc-900/50 dark:to-zinc-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-24 sm:py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
            Frontend Developer • React • TypeScript • UI Engineering
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            I build fast, accessible and delightful web experiences.
          </h1>
          <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300">
            With 3 years of hands-on experience crafting robust interfaces, design systems, and performant SPAs. I care about clean code, DX, and polished UX.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-3 text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 px-5 py-3 text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-zinc-800"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
