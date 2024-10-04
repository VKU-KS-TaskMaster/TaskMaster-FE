import { useEffect, useState } from 'react'

export const useTheme = () => {
  const getInitialTheme = () => {
    const savedMode = localStorage.getItem('theme')
    const osDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedMode === 'dark' || (savedMode !== 'light' && osDarkMode)
  }

  const [darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue === 'dark'
        setDarkMode(newTheme)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  useEffect(() => {
    const handleThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches)
      }
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return [darkMode, toggleTheme]
}
