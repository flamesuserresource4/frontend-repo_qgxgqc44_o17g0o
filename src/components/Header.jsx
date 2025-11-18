import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Header({ nav = [] }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-slate-900 font-semibold tracking-tight text-lg">pro-da</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {nav.slice(0,6).map((n, i) => (
            <a key={i} href={n.href || '#'} className="hover:text-slate-900 transition-colors">{n.label}</a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 hover:bg-black transition-colors">Связаться</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          <Menu className="w-6 h-6 text-slate-800" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200/70 bg-white/90">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 text-sm">
            {nav.slice(0,8).map((n, i) => (
              <a key={i} href={n.href || '#'} className="py-2 text-slate-700">{n.label}</a>
            ))}
            <a href="#contact" className="py-2 font-medium text-slate-900">Связаться</a>
          </div>
        </div>
      )}
    </header>
  )
}
