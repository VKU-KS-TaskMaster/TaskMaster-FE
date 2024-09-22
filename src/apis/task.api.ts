import http from '@utils/http'
import APIPaths from '@constants/apiPaths'
import { MemberSearch, MemberUpdate } from '@models/member.type'
import TaskCode, { TaskSearch, TaskStore, TaskUpdate } from '@models/task.type'

const TaskAPI = {
  get: async (key: TaskCode) => {
    const apiPath = APIPaths.TASK.GET.replace(':key', key)

    return http.get(apiPath)
  },
  search: async (data: TaskSearch) => {
    const apiPath = APIPaths.TASK.SEARCH

    return http.get(apiPath, { params: data })
  },
  store: async (data: TaskStore) => {
    const apiPath = APIPaths.TASK.STORE

    return http.post(apiPath, data)
  },
  update: async (key: TaskCode, data: TaskUpdate) => {
    const apiPath = APIPaths.TASK.UPDATE.replace(':key', key)

    return http.put(apiPath, data)
  },
  destroy: async (key: TaskCode) => {
    const apiPath = APIPaths.TASK.DESTROY.replace(':key', key)

    return http.delete(apiPath)
  },
  updateByMember: async (key: TaskCode, data: TaskUpdate) => {
    const apiPath = APIPaths.TASK.UPDATE.replace(':key', key)

    return http.put(apiPath, data)
  },

  searchMembers: async (key: TaskCode, data: MemberSearch) => {
    const apiPath = APIPaths.TASK.SEARCH_MEMBERS.replace(':key', key)

    return http.get(apiPath, { params: data })
  },
  updateMembers: async (key: TaskCode, data: MemberUpdate) => {
    const apiPath = APIPaths.TASK.UPDATE_MEMBERS.replace(':key', key)

    return http.post(apiPath, { params: data })
  }
}

export default TaskAPI
