'use client'

import { useState, useEffect, useCallback } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import IntroSection from '@/components/sections/IntroSection'
import WorkSection from '@/components/sections/WorkSection'
import AboutSection from '@/components/sections/AboutSection'
import BackgroundSection from '@/components/sections/BackgroundSection'
import { Lang, Section, sections, translations } from '@/lib/i18n'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [activeSection, setActiveSection] = useState<Section>('intro')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = useCallback((section: Section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const t = translations[lang]

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Sidebar activeSection={activeSection} onNavigate={scrollTo} nav={t.nav} />
      <main className="ml-48">
        <IntroSection intro={t.intro} />
        <WorkSection />
        <AboutSection heading={t.about.heading} />
        <BackgroundSection heading={t.background.heading} />
      </main>
    </>
  )
}
