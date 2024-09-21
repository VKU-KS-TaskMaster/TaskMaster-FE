import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import appRoute from '@configs/routes/appRoute'
import './App.css'

const router = createBrowserRouter(appRoute)

function App() {
    return (
        <Suspense>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App
