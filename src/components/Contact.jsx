export default function Contact({ blocks = [] }) {
  if (!blocks || blocks.length === 0) return null
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Контакты</h2>
          <p className="text-slate-600 mt-2">Свяжитесь с нами</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {blocks.map((b, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">{b}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <form className="grid gap-4">
              <input className="border border-slate-300 rounded-lg px-3 py-2" placeholder="Имя" />
              <input className="border border-slate-300 rounded-lg px-3 py-2" placeholder="Email" />
              <textarea rows={5} className="border border-slate-300 rounded-lg px-3 py-2" placeholder="Сообщение" />
              <button type="button" className="rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
