import axios from 'axios'

import httpConfig from '@constants/httpConfig'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: httpConfig.baseUrl
    })

    this.instance.interceptors.request.use(
      (httpConfig) => {
        const token = localStorage.getItem('token')
        if (token) {
          httpConfig.headers.Authorization = `Bearer ${token}`
        }
        return httpConfig
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

export default new Http().instance
