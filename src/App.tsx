import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import appRoute from '@configs/routes/appRoute'
import { store } from '@features/store'
import './index.css'

const router = createBrowserRouter(appRoute)

function App() {
  return (
    <Suspense>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  )
}

export default App
