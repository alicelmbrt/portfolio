export type Lang = 'en' | 'pt'
export type Section = 'intro' | 'work' | 'about' | 'background'

export const sections: Section[] = ['intro', 'work', 'about', 'background']

export type NavTranslations = Record<Section, string>

export type SectionTranslations = {
  nav: NavTranslations
  intro: { greeting: string; tagline: string }
  work: { heading: string }
  about: { heading: string }
  background: { heading: string }
}

export const translations: Record<Lang, SectionTranslations> = {
  en: {
    nav: {
      intro: 'Intro',
      work: 'Work',
      about: 'About me',
      background: 'Background',
    },
    intro: {
      greeting: "Hi, I'm Alice.",
      tagline: "I'm a designer crafting interactions that connect people and drive impact.",
    },
    work: { heading: 'Work' },
    about: { heading: 'About me' },
    background: { heading: 'Background' },
  },
  pt: {
    nav: {
      intro: 'Intro',
      work: 'Trabalho',
      about: 'Sobre mim',
      background: 'Histórico',
    },
    intro: {
      greeting: 'Oi, sou a Alice.',
      tagline: 'Sou uma designer criando interações que conectam pessoas e geram impacto.',
    },
    work: { heading: 'Trabalho' },
    about: { heading: 'Sobre mim' },
    background: { heading: 'Histórico' },
  },
}
