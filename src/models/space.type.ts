import UserCode from '@models/user.type'

type SpaceCode = string

interface SpaceSearch {
  q: string
  user_code: UserCode

  status: string
}

interface SpaceStore {
  user_code: UserCode

  name: string
  status: number
  description: string
}

interface SpaceUpdate {
  name: string
  status: number
  description: string
}

export default SpaceCode
export { SpaceSearch, SpaceStore, SpaceUpdate }
