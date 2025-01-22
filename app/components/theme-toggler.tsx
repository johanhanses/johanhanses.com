import { useEffect, useState } from 'react'
import { Moon } from './moon'
import { Sun } from './sun'

export function ThemeToggler() {
  const [isDark, setIsDark] = useState(typeof window !== 'undefined' && window.localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    const htmlEl = document.documentElement

    if (isDark) {
      htmlEl.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      htmlEl.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex h-8 w-8 items-center justify-center rounded-md transition-all hover:bg-[#ccd0da] dark:hover:bg-[#414559]"
    >
      {isDark ? <Moon className="" /> : <Sun className="" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
