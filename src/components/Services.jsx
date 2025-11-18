export default function Services({ blocks = [] }) {
  if (!blocks || blocks.length === 0) return null
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Услуги</h2>
          <p className="text-slate-600 mt-2">Чем мы помогаем бизнесу</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
              <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
