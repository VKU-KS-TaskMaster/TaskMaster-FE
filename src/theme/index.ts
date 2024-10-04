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
  components: componentToken('light')
}

export const darkTheme = {
  algorithm: darkAlgorithm,
  cssVar: true,
  token: {
    ...seedToken,
    ...mapToken,
    ...aliasToken
  },
  components: componentToken('dark')
}

console.log('====================================')
console.log(componentToken('dark'))
console.log('====================================')

export { aliasToken, componentToken, mapToken, seedToken }
