import http from '@utils/http'
import APIPaths from '@constants/apiPaths'
import SpaceCode, { SpaceSearch, SpaceStore, SpaceUpdate } from '@models/space.type'
import { MemberSearch } from '@models/member.type'

const SpaceAPI = {
  get: async (key: SpaceCode) => {
    const apiPath = APIPaths.SPACE.GET.replace(':key', key)

    return http.get(apiPath)
  },
  search: async (data: SpaceSearch) => {
    const apiPath = APIPaths.SPACE.SEARCH

    return http.get(apiPath, { params: data })
  },
  store: async (data: SpaceStore) => {
    const apiPath = APIPaths.SPACE.STORE

    return http.post(apiPath, data)
  },
  update: async (key: SpaceCode, data: SpaceUpdate) => {
    const apiPath = APIPaths.SPACE.UPDATE.replace(':key', key)

    return http.put(apiPath, data)
  },
  destroy: async (key: SpaceCode) => {
    const apiPath = APIPaths.SPACE.DESTROY.replace(':key', key)

    return http.delete(apiPath)
  },

  searchMembers: async (key: SpaceCode, data: MemberSearch) => {
    const apiPath = APIPaths.SPACE.SEARCH_MEMBERS.replace(':key', key)

    return http.get(apiPath, { params: data })
  }
}

export default SpaceAPI
