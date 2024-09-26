import paths from '@constants/paths'
import Home from '@pages/Home'
import Logout from '@pages/Auth/Logout'
import AuthLayout from '@layouts/AuthLayout'
import MainLayout from '@layouts/MainLayout'
import ProjectList from '@pages/Project'
import ProjectMember from '@pages/Project/ProjectDetail/ProjectMember'
import RejectedRoute from './RejectedRoute'
import ProtectedRoute from './ProtectedRoute'
import ProjectDashboard from '@pages/Project/ProjectDetail/ProjectDashboard'
import { Login, Register } from '@pages/Auth'
import { ConfirmForgetPassword, ForgetPassword } from '@pages/Auth/ForgetPassword'
import ProjectDetail, { ProjectBoard, ProjectCalendar, ProjectFile, ProjectGantt, ProjectOverview, ProjectWorkflow } from '@pages/Project/ProjectDetail'
import Space from '@pages/Space'

const appRoute = [
  {
    path: '',
    // element: <ProtectedRoute />,
    children: [
      {
        path: paths.SPACE,
        element: <MainLayout />,
        children: [
          {
            path: '',
            element: <Space />
          },
          {
            path: paths.PROJECT_LIST,
            element: <ProjectList />,
          },
          {
            path: paths.PROJECT_DETAIL,
            element: <ProjectDetail />,
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
        path: paths.HOME,
        element: <Home />
      },
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
