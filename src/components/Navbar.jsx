import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-zinc-900 dark:text-white text-lg">
            <span className="inline-block align-middle">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-700" />
            <div className="flex items-center gap-4">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href="#contact" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 px-2 pt-2">
                <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="text-zinc-700 dark:text-zinc-300">
                  <Github className="h-5 w-5" />
                </a>
                <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-zinc-700 dark:text-zinc-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a aria-label="Email" href="#contact" className="text-zinc-700 dark:text-zinc-300">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
