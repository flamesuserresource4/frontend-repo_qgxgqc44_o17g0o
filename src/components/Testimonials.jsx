export default function Testimonials({ items = [] }) {
  if (!items || items.length === 0) return null
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Отзывы</h2>
          <p className="text-slate-600 mt-2">Что говорят клиенты</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-5 bg-white">
              <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
