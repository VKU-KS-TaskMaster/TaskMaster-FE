const paths = {
  HOME: '/:spaceCode/',

  USER: '/:spaceCode/user',
  TEAM: '/:spaceCode/team',

  CHAT: '/:spaceCode/chat',

  //AUTH
  LOGIN: '/login',
  REGISTER: '/register',
  LOGOUT: '/logout',

  //APPS
  PROJECT_LIST: '/project_list',

  PROJECT_BOARD: '/project/:code/board',
  PROJECT_CALENDAR: '/project/:code/calendar',
  PROJECT_GANTT: '/project/:code/gantt',
  PROJECT_FILE: '/project/:code/file',
  PROJECT_DASHBOARD: '/project/:code/dashboard',
  PROJECT_OVERVIEW: '/project/:code/overview',
  PROJECT_WORKFLOW: '/project/:code/workflow'
}

export default paths
