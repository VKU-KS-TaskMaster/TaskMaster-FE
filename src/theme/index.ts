import { theme } from 'antd'
import { aliasToken } from './aliasToken'
import { componentToken } from './componentToken.ts'
import { mapToken } from './mapToken'
import { seedToken } from './seedToken'

const { defaultAlgorithm, darkAlgorithm } = theme

export const lightTheme = {
  algorithm: defaultAlgorithm,
  token: {
    ...seedToken,
    ...mapToken,
    ...aliasToken
  },
  components: componentToken
}

export const darkTheme = {
  algorithm: darkAlgorithm,
  token: {
    ...seedToken,
    ...mapToken,
    ...aliasToken
  },
  components: componentToken
}

export { aliasToken, componentToken, mapToken, seedToken }
