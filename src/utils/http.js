import axios from 'axios'
import config from '../constants/config'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: config.baseUrl
    })

    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

export default new Http().instance
