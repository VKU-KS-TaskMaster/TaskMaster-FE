import http from '../utils/http'

const authApi = {
  loginWithGoogle: async (token) => {
    return http.post('/auth/sign_in_google', { token })
  }
}

export default authApi
