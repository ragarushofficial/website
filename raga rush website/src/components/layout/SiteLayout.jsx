import { AnimatePresence, motion } from 'framer-motion'
import { Camera, MessageCircle, Music2, Play } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/pricing', 'Pricing'],
  ['/portfolio', 'Portfolio'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
]

export function SiteLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="border-t border-border/80 bg-card/60">
        <div className="container space-y-6 py-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="flex items-center gap-2 text-base text-foreground">
                <Music2 className="h-4 w-4 text-primary" />
                <span className="font-display text-lg">Raga Rush</span>
              </p>
              <p className="mt-1">A Song That&apos;s Only Yours — Forever.</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border/70 p-2 transition hover:border-primary/50 hover:text-primary"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border/70 p-2 transition hover:border-primary/50 hover:text-primary"
                aria-label="YouTube"
              >
                <Play className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border/70 p-2 transition hover:border-primary/50 hover:text-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            {links.map(([to, label]) => (
              <Link key={to} to={to} className="transition hover:text-foreground">
                {label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground/90">© 2026 Raga Rush. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
