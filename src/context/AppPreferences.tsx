import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type ThemeMode = 'light' | 'dark'
export type LanguageMode = 'tr' | 'en'

type PreferencesContextValue = {
  theme: ThemeMode
  language: LanguageMode
  setTheme: (value: ThemeMode) => void
  setLanguage: (value: LanguageMode) => void
  toggleTheme: () => void
}

const STORAGE_KEY = 'direksiyonplani.preferences'

const getInitialPreferences = (): { theme: ThemeMode; language: LanguageMode } => {
  if (typeof window === 'undefined') {
    return { theme: 'light', language: 'tr' }
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as Partial<{ theme: ThemeMode; language: LanguageMode }>
      const theme = parsed.theme === 'dark' || parsed.theme === 'light' ? parsed.theme : undefined
      const language = parsed.language === 'en' || parsed.language === 'tr' ? parsed.language : undefined

      if (theme || language) {
        return {
          theme: theme ?? 'light',
          language: language ?? 'tr',
        }
      }
    } catch {
      // Ignore invalid localStorage values.
    }
  }

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  return {
    theme: prefersDark ? 'dark' : 'light',
    language: 'tr',
  }
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null)

export function AppPreferencesProvider({ children }: { children: React.ReactNode }) {
  const initial = getInitialPreferences()
  const [theme, setTheme] = useState<ThemeMode>(initial.theme)
  const [language, setLanguage] = useState<LanguageMode>(initial.language)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.lang = language
    root.style.colorScheme = theme
  }, [theme, language])

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        theme,
        language,
      })
    )
  }, [theme, language])

  const value = useMemo<PreferencesContextValue>(
    () => ({
      theme,
      language,
      setTheme,
      setLanguage,
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [theme, language]
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function useAppPreferences() {
  const context = useContext(PreferencesContext)
  if (!context) {
    throw new Error('useAppPreferences must be used within AppPreferencesProvider')
  }
  return context
}

