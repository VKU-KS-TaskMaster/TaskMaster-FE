import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('theme')
    const osDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(savedMode === 'dark' || (savedMode !== 'light' && osDarkMode))
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return [darkMode, toggleTheme]
}
