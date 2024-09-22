import http from '@utils/http'
import APIPaths from '@constants/apiPaths'
import CommentCode, { CommentSearch, CommentStore, CommentUpdate } from '@models/comment.type'

const CommentAPI = {
  search: async (data: CommentSearch) => {
    const apiPath = APIPaths.COMMENT.SEARCH

    return http.get(apiPath, { params: data })
  },
  store: async (data: CommentStore) => {
    const apiPath = APIPaths.COMMENT.STORE

    return http.post(apiPath, data)
  },
  update: async (key: CommentCode, data: CommentUpdate) => {
    const apiPath = APIPaths.COMMENT.UPDATE.replace(':key', key)

    return http.put(apiPath, data)
  },
  destroy: async (key: CommentCode) => {
    const apiPath = APIPaths.COMMENT.DESTROY.replace(':key', key)

    return http.delete(apiPath)
  }
}

export default CommentAPI
