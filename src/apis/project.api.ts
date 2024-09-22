import http from '@utils/http'
import APIPaths from '@constants/apiPaths'
import { MemberSearch, MemberUpdate } from '@models/member.type'
import ProjectCode, { ProjectSearch, ProjectStore, ProjectUpdate } from '@models/project.type'

const ProjectAPI = {
  get: async (key: ProjectCode) => {
    const apiPath = APIPaths.PROJECT.GET.replace(':key', key)

    return http.get(apiPath)
  },
  search: async (data: ProjectSearch) => {
    const apiPath = APIPaths.PROJECT.SEARCH

    return http.get(apiPath, { params: data })
  },
  store: async (data: ProjectStore) => {
    const apiPath = APIPaths.PROJECT.STORE

    return http.post(apiPath, data)
  },
  update: async (key: ProjectCode, data: ProjectUpdate) => {
    const apiPath = APIPaths.PROJECT.UPDATE.replace(':key', key)

    return http.put(apiPath, data)
  },
  destroy: async (key: ProjectCode) => {
    const apiPath = APIPaths.PROJECT.DESTROY.replace(':key', key)

    return http.delete(apiPath)
  },

  searchMembers: async (key: ProjectCode, data: MemberSearch) => {
    const apiPath = APIPaths.PROJECT.SEARCH_MEMBERS.replace(':key', key)

    return http.get(apiPath, { params: data })
  },
  updateMembers: async (key: ProjectCode, data: MemberUpdate) => {
    const apiPath = APIPaths.PROJECT.UPDATE_MEMBERS.replace(':key', key)

    return http.post(apiPath, { params: data })
  }
}

export default ProjectAPI
