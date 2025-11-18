import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, ctas = [] }) {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-lg text-slate-600"
              >
                {subtitle}
              </motion.p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {ctas.map((c, i) => (
                <a key={i} href={c.href || '#'} className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${i===0 ? 'bg-slate-900 text-white hover:bg-black' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  {c.label}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
