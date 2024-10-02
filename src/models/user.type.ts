type UserCode = string

export type User = {
  code: UserCode

  avatar: string
  name: string
  authority: Array<string>
  email: string
}

export default UserCode
