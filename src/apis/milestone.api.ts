import http from '@utils/http'
import APIPaths from '@constants/apiPaths'
import { MemberSearch, MemberUpdate } from '@models/member.type'
import MilestoneCode, { MilestoneSearch, MilestoneStore, MilestoneUpdate } from '@models/milestone.type'

const MilestoneAPI = {
  get: async (key: MilestoneCode) => {
    const apiPath = APIPaths.MILESTONE.GET.replace(':key', key)

    return http.get(apiPath)
  },
  search: async (data: MilestoneSearch) => {
    const apiPath = APIPaths.MILESTONE.SEARCH

    return http.get(apiPath, { params: data })
  },
  store: async (data: MilestoneStore) => {
    const apiPath = APIPaths.MILESTONE.STORE

    return http.post(apiPath, data)
  },
  update: async (key: MilestoneCode, data: MilestoneUpdate) => {
    const apiPath = APIPaths.MILESTONE.UPDATE.replace(':key', key)

    return http.put(apiPath, data)
  },
  destroy: async (key: MilestoneCode) => {
    const apiPath = APIPaths.MILESTONE.DESTROY.replace(':key', key)

    return http.delete(apiPath)
  },

  searchMembers: async (key: MilestoneCode, data: MemberSearch) => {
    const apiPath = APIPaths.MILESTONE.SEARCH_MEMBERS.replace(':key', key)

    return http.get(apiPath, { params: data })
  },
  updateMembers: async (key: MilestoneCode, data: MemberUpdate) => {
    const apiPath = APIPaths.MILESTONE.UPDATE_MEMBERS.replace(':key', key)

    return http.post(apiPath, { params: data })
  }
}

export default MilestoneAPI
