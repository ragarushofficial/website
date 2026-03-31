import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Music2, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/pricing', 'Pricing'],
  ['/portfolio', 'Portfolio'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <Music2 className="h-5 w-5 text-primary" />
          <span className="font-display text-xl">Raga Rush</span>
        </Link>
        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2">
            {links.map(([to, label]) => (
              <NavItem key={to} to={to} label={label} />
            ))}
          </nav>
          <Link to="/contact">
            <Button>Order Now</Button>
          </Link>
        </div>
        <Button variant="ghost" className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-screen w-[84vw] max-w-sm flex-col border-l border-border/80 bg-card p-5 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="font-display text-xl text-foreground">Raga Rush</p>
                <Button variant="ghost" onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="grid gap-2">
                {links.map(([to, label]) => (
                  <NavItem key={to} to={to} label={label} onClick={() => setOpen(false)} />
                ))}
              </nav>

              <Link to="/contact" onClick={() => setOpen(false)} className="mt-6">
                <Button className="w-full">Order Now</Button>
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground',
          isActive && 'bg-primary/10 text-primary',
        )
      }
    >
      {label}
    </NavLink>
  )
}
