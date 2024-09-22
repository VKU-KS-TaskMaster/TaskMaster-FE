import http from '@utils/http'

const AuthAPI = {
  loginWithGoogle: async (token: string) => {
    return http.post('/auth/sign_in_google', { token })
  }
}

export default AuthAPI
