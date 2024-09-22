import paths from '@constants/paths'
import AuthLayout from '@layouts/AuthLayout'
import MainLayout from '@layouts/MainLayout'
import { Login, Register } from '@pages/Auth'
// import RejectedRoute from './RejectedRoute'
// import ProtectedRoute from './ProtectedRoute'

const appRoute = [
  {
    path: '',
    // element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />
        // loader: rootLoader,
        // children: [
        //     {
        //         path: '/',
        //         element: <Dashboard />
        //         // loader: rootLoader,
        //         // children: [],
        //     },
        //     {
        //         path: 'kanban',
        //         element: <KanbanBoard />
        //         // loader: teamLoader,
        //         // children: [],
        //     },
        //     {
        //         path: 'project',
        //         children: [
        //             {
        //                 path: '',
        //                 element: <ProjectList />
        //                 // loader: teamLoader,
        //                 // children: [],
        //             },
        //             {
        //                 path: 'create',
        //                 element: <ProjectCreate />
        //                 // loader: teamLoader,
        //                 // children: [],
        //             }
        //         ]
        //     }
        // ]
      }
    ]
  },
  {
    path: '',
    // element: <RejectedRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: paths.LOGIN,
            element: <Login />
          },
          {
            path: paths.REGISTER,
            element: <Register />
          }
        ]
      }
    ]
  }
]

export default appRoute
