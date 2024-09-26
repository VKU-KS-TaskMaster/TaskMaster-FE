const paths = {
  HOME: '/',
  USER: '/user/:',

  //AUTH
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot_password',
  CONFIRM_FORGOT_PASSWORD: '/confirm_forgot_password',
  LOGOUT: '/logout',

  
  //APPS
  SPACE: '/space/:spaceCode/',
  TEAM: '/team',
  
  CHAT: '/chat',

  PROJECT_LIST: 'project',

  PROJECT_DETAIL: 'project/:projectCode/',
  PROJECT_OVERVIEW: 'overview',
  PROJECT_BOARD: 'board',
  PROJECT_GANTT: 'gantt',
  PROJECT_WORKFLOW: 'workflow',
  PROJECT_CALENDAR: 'calendar',
  PROJECT_DASHBOARD: 'dashboard',
  PROJECT_FILE: 'file',
  PROJECT_MEMBER: 'member',
}

export default paths
