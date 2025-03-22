import { FC, PropsWithChildren, useLayoutEffect } from 'react'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const applyTheme = (flag: boolean): void => {
      const html = document.getElementById('html')

      if (!html) {
        return
      }

      if (flag) {
        html.classList.add('dark')

        return
      }

      html.classList.remove('dark')
    }

    applyTheme(mq.matches)

    mq.addEventListener('change', (evt) => applyTheme(evt.matches))
  }, [])

  return <>{children}</>
}

export default ThemeProvider
