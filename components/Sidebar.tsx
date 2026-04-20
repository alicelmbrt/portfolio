'use client'

import { NavTranslations, Section, sections } from '@/lib/i18n'

interface Props {
  activeSection: Section
  onNavigate: (section: Section) => void
  nav: NavTranslations
}

export default function Sidebar({ activeSection, onNavigate, nav }: Props) {
  return (
    <aside className="fixed left-0 top-0 bottom-0 z-40 w-48 flex flex-col justify-center pl-16">
      <nav>
        <ul className="flex flex-col gap-2">
          {sections.map((id) => (
            <li key={id}>
              <button
                onClick={() => onNavigate(id)}
                className={`text-sm transition-colors ${
                  activeSection === id
                    ? 'font-bold text-black'
                    : 'font-normal text-gray-400 hover:text-gray-600'
                }`}
              >
                {nav[id]}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
