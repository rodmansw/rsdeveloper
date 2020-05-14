import { useState, useEffect } from 'react'
import lscache from 'lscache'
import ReactToggle from 'react-toggle'

import sun from 'content/assets/sun.png'
import moon from 'content/assets/moon.png'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(lscache.get('theme') || '')

  useEffect(() => {
    setTheme(lscache.get('theme') || '')
  }, [])

  useEffect(() => {
    const isDarkmode = theme === 'dark'
    document.documentElement.setAttribute('data-mode', isDarkmode ? 'dark' : '')
    lscache.set('theme', theme)
  }, [theme])

  function toggleDarkMode(event) {
    setTheme(event.target.checked ? 'dark' : '')
  }

  return (
    <ReactToggle
      checked={theme === 'dark'}
      onChange={toggleDarkMode}
      icons={{
        checked: (
          <img
            src={moon}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        ),
        unchecked: (
          <img
            src={sun}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        )
      }}
    />
  )
}
