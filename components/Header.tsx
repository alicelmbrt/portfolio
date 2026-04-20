'use client'

import { Lang } from '@/lib/i18n'

interface Props {
  lang: Lang
  setLang: (lang: Lang) => void
}

export default function Header({ lang, setLang }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-8 pt-6 pb-4 bg-white">
      <div className="text-3xl font-bold leading-none select-none">A</div>
      <div className="flex items-center gap-3 text-sm tracking-widest">
        <button
          onClick={() => setLang('en')}
          className={lang === 'en' ? 'font-bold underline underline-offset-4' : 'text-gray-400 hover:text-gray-600 transition-colors'}
        >
          EN
        </button>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => setLang('pt')}
          className={lang === 'pt' ? 'font-bold underline underline-offset-4' : 'text-gray-400 hover:text-gray-600 transition-colors'}
        >
          PT
        </button>
      </div>
    </header>
  )
}
