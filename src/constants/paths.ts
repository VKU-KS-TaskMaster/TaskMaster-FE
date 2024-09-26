const paths = {
  HOME: '/:spaceCode/',

  USER: '/user',
  TEAM: '/team',

  CHAT: '/chat',

  //AUTH
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot_password',
  CONFIRM_FORGOT_PASSWORD: '/confirm_forgot_password',
  LOGOUT: '/logout',

  //APPS
  PROJECT_LIST: '/project',

  PROJECT: '/project/:code',
  PROJECT_OVERVIEW: '/overview',
  PROJECT_BOARD: '/board',
  PROJECT_GANTT: '/gantt',
  PROJECT_WORKFLOW: '/workflow',
  PROJECT_CALENDAR: '/calendar',
  PROJECT_DASHBOARD: '/dashboard',
  PROJECT_FILE: '/file',
  PROJECT_MEMBER: '/member',
}

export default paths
