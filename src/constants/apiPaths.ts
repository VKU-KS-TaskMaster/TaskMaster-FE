const SPACE_API_PATH = '/space'
const PROJECT_API_PATH = '/project'
const MILESTONE_API_PATH = '/milestone'
const TASK_API_PATH = '/milestone'
const COMMENT_API_PATH = '/comment'

const SEARCH_MEMBERS_PATH = 'search_members'
const UPDATE_MEMBERS_PATH = 'update_members'

const APIPaths = {
  //APP

  //PROJECT
  SPACE: {
    GET: `${SPACE_API_PATH}/:key`,
    SEARCH: `${SPACE_API_PATH}`,
    STORE: `${SPACE_API_PATH}`,
    UPDATE: `${SPACE_API_PATH}/:key`,
    DESTROY: `${SPACE_API_PATH}/:key`,

    SEARCH_MEMBERS: `${SPACE_API_PATH}/:key/${SEARCH_MEMBERS_PATH}`
  },
  PROJECT: {
    GET: `${PROJECT_API_PATH}/:key`,
    SEARCH: `${PROJECT_API_PATH}`,
    STORE: `${PROJECT_API_PATH}`,
    UPDATE: `${PROJECT_API_PATH}/:key`,
    DESTROY: `${PROJECT_API_PATH}/:key`,

    SEARCH_MEMBERS: `${PROJECT_API_PATH}/:key/${SEARCH_MEMBERS_PATH}`,
    UPDATE_MEMBERS: `${PROJECT_API_PATH}/:key/update_members`
  },
  MILESTONE: {
    GET: `${TASK_API_PATH}/:key`,
    SEARCH: `${TASK_API_PATH}`,
    STORE: `${TASK_API_PATH}`,
    UPDATE: `${TASK_API_PATH}/:key`,
    DESTROY: `${TASK_API_PATH}/:key`,

    SEARCH_MEMBERS: `${TASK_API_PATH}/:key/${SEARCH_MEMBERS_PATH}`,
    UPDATE_MEMBERS: `${TASK_API_PATH}/:key/${UPDATE_MEMBERS_PATH}`
  },
  TASK: {
    GET: `${MILESTONE_API_PATH}/:key`,
    SEARCH: `${MILESTONE_API_PATH}`,
    STORE: `${MILESTONE_API_PATH}`,
    UPDATE: `${MILESTONE_API_PATH}/:key`,
    DESTROY: `${MILESTONE_API_PATH}/:key`,

    SEARCH_MEMBERS: `${MILESTONE_API_PATH}/:key/${SEARCH_MEMBERS_PATH}`,
    UPDATE_MEMBERS: `${MILESTONE_API_PATH}/:key/${UPDATE_MEMBERS_PATH}`
  },

  COMMENT: {
    SEARCH: `${COMMENT_API_PATH}`,
    STORE: `${COMMENT_API_PATH}`,
    UPDATE: `${COMMENT_API_PATH}/:key`,
    DESTROY: `${COMMENT_API_PATH}/:key`
  }
}

export default APIPaths
