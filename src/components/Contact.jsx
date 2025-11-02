import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-0 opacity-50 [mask-image:radial-gradient(closest-side,black,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-emerald-500/10" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Let’s build something great</h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          I’m currently open to new opportunities, freelance work, and interesting collaborations. If you’ve got a project in mind, I’d love to hear about it.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-3 text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 px-5 py-3 text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-zinc-800"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 px-5 py-3 text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-zinc-800"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
}
