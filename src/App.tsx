import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { I18nextProvider } from 'react-i18next'
import { QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import i18n from '@utils/i18n'
import appRoute from '@configs/routes/appRoute'
import queryClient from '@core/queryClient'
import { store } from '@features/store'
import { useTheme } from '@hooks/useTheme'
import { darkTheme, lightTheme } from '@theme/index'
import './index.css'

const router = createBrowserRouter(appRoute)

function App() {
  const [darkMode] = useTheme()
  console.log('🚀 ~ App ~ darkMode:', darkMode)

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
          <Provider store={store}>
            <I18nextProvider i18n={i18n}>
              <RouterProvider router={router} />
            </I18nextProvider>
          </Provider>
        </ConfigProvider>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
