import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import appRoute from '@configs/routes/appRoute'
import queryClient from '@core/queryClient'
import { store } from '@features/store'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'

const router = createBrowserRouter(appRoute)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
