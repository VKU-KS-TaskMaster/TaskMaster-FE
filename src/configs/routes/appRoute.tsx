import paths from '@constants/paths'
import AuthLayout from '@layouts/AuthLayout'
import MainLayout from '@layouts/MainLayout'
import { Login, Register } from '@pages/Auth'
import RejectedRoute from './RejectedRoute'
import ProtectedRoute from './ProtectedRoute'
import Home from '@pages/Home'
import { ConfirmForgetPassword, ForgetPassword } from '@pages/Auth/ForgetPassword'
import ProjectList from '@pages/Project'
import { ProjectBoard, ProjectCalendar, ProjectFile, ProjectGantt, ProjectOverview, ProjectWorkflow } from '@pages/Project/ProjectDetail'
import ProjectDashboard from '@pages/Project/ProjectDetail/ProjectDashboard'
import ProjectMember from '@pages/Project/ProjectDetail/ProjectMember'
import Logout from '@pages/Auth/Logout'

const appRoute = [
  {
    path: '',
    // element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: paths.HOME,
            element: <Home />
          },
          {
              path: paths.PROJECT_LIST,
              element: <ProjectList />,
          },
          {
            path: paths.PROJECT,
            element: <Home />,
            children: [
              {
                  path: paths.PROJECT_OVERVIEW,
                  element: <ProjectOverview />
              },
              {
                  path: paths.PROJECT_BOARD,
                  element: <ProjectBoard />
              },
              {
                  path: paths.PROJECT_GANTT,
                  element: <ProjectGantt />
              },
              {
                  path: paths.PROJECT_WORKFLOW,
                  element: <ProjectWorkflow />
              },
              {
                  path: paths.PROJECT_DASHBOARD,
                  element: <ProjectDashboard />
              },
              {
                  path: paths.PROJECT_CALENDAR,
                  element: <ProjectCalendar />
              },
              {
                  path: paths.PROJECT_FILE,
                  element: <ProjectFile />
              },
              {
                  path: paths.PROJECT_MEMBER,
                  element: <ProjectMember />
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '',
    element: <RejectedRoute />,
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
          },
          {
            path: paths.LOGOUT,
            element: <Logout />
          },
          {
            path: paths.FORGOT_PASSWORD,
            element: <ForgetPassword />
          },
          {
            path: paths.CONFIRM_FORGOT_PASSWORD,
            element: <ConfirmForgetPassword />
          }
        ]
      }
    ]
  }
]

export default appRoute
