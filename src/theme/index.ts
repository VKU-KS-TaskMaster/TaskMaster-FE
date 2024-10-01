import { theme } from 'antd'
import { aliasToken } from './aliasToken'
import { componentToken } from './componentToken'
import { mapToken } from './mapToken'
import { seedToken } from './seedToken'

const { defaultAlgorithm, darkAlgorithm } = theme

export const lightTheme = {
  algorithm: defaultAlgorithm,
  cssVar: true,
  token: {
    ...seedToken,
    ...mapToken,
    ...aliasToken
  },
  components: componentToken
}

export const darkTheme = {
  algorithm: darkAlgorithm,
  cssVar: true,
  token: {
    ...seedToken,
    ...mapToken,
    ...aliasToken
  },
  components: componentToken
}

export { aliasToken, componentToken, mapToken, seedToken }
