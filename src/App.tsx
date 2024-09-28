import { Suspense, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import i18n from '@utils/i18n'
import appRoute from '@configs/routes/appRoute'
import queryClient from '@core/queryClient'
import localStorageKeys, { themeValues } from '@constants/localStorageKeys'
import { store } from '@features/store'
import { ConfigProvider } from 'antd'
import { lightTheme, darkTheme } from './theme'

const router = createBrowserRouter(appRoute)

function App() {
  const [theme, setTheme] = useState(darkTheme)

  useEffect(() => {
    const language = localStorage.getItem(localStorageKeys.THEME) || themeValues.DARK

    if (language === themeValues.DARK) setTheme(darkTheme)
    else if (language === themeValues.LIGHT) setTheme(lightTheme)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <ConfigProvider theme={{ cssVar: true, ...theme }}>
              <RouterProvider router={router} />
            </ConfigProvider>
          </I18nextProvider>
        </Provider>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
