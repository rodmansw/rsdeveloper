import useDarkMode from 'use-dark-mode'
import ReactToggle from 'react-toggle'

import sun from 'content/assets/sun.png'
import moon from 'content/assets/moon.png'

export default function ThemeSwitcher() {
  const darkMode = useDarkMode(false)

  return (
    <ReactToggle
      checked={darkMode.value}
      onChange={darkMode.toggle}
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
