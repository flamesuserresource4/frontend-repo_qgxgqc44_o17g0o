import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  const [content, setContent] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        // Try to get latest imported content
        const res = await fetch(`${backend}/api/content?limit=1`)
        if (res.ok) {
          const data = await res.json()
          setContent(data && data.length > 0 ? data[0] : null)
        }
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  // Default placeholders before import
  const nav = content?.navigation || []
  const hero = {
    title: content?.sections?.hero?.[0] || 'pro-da — цифровые продукты и автоматизация',
    subtitle: content?.sections?.hero?.slice(1).join(' ') || 'Создание и развитие цифровых решений, которые двигают бизнес вперёд',
    ctas: [
      { label: 'Оставить заявку', href: '#contact' },
      { label: 'Кейсы', href: '#cases' },
    ],
  }

  const services = content?.sections?.services || []
  const testimonials = content?.sections?.testimonials || []
  const contactBlocks = content?.sections?.contact || []

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header nav={nav} />
      <main>
        <Hero title={hero.title} subtitle={hero.subtitle} ctas={hero.ctas} />
        <Services blocks={services} />
        <Testimonials items={testimonials} />
        <Contact blocks={contactBlocks} />
      </main>
      <footer className="border-t border-slate-200 py-10 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} pro-da</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="/test" className="hover:text-slate-900">Проверка бэкенда</a>
            <a href="#contact" className="hover:text-slate-900">Связаться</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
