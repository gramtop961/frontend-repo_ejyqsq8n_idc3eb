import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Design System & Component Library',
    description:
      'Built a scalable, themeable component library with Storybook, Radix primitives, and strict a11y. Shipped to multiple products with zero regressions.',
    tech: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'High-performance Analytics Dashboard',
    description:
      'Real-time charts, virtualization, and complex filters. Reduced bundle size by 35% and achieved 90+ Lighthouse scores across the board.',
    tech: ['React', 'Vite', 'Zustand', 'Chart.js', 'Vitest'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Marketing Site + CMS',
    description:
      'Headless CMS integration with animated sections, SEO optimizations, and pristine page speed. Built for maintainability and content velocity.',
    tech: ['Next.js', 'Framer Motion', 'Headless CMS', 'SEO'],
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-0 opacity-50 [mask-image:radial-gradient(closest-side,black,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-cyan-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Selected work</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">A few projects that reflect how I think about performance, accessibility, and delightful interactions.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-6 sm:p-8 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a href={p.repo} className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={p.live} className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200" aria-label="Live">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
