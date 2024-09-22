import { Member, Team } from '@models/member.type'
import UserCode from '@models/user.type'
import SpaceCode from '@models/space.type'

type ProjectCode = string
type ProjectDate = string //Ex: '2024-08-27'

interface ProjectSearch {
  q: string

  user_code?: UserCode
  space_code: string
  start_date?: Date
  end_date?: Date

  status?: string
  members?: string
  teams?: string
}

interface ProjectStore {
  user_code: UserCode
  space_code: SpaceCode

  name: string
  status: number
  type: number
  is_status_custom: boolean
  has_element_status_custom: boolean
  description: string
  begin_date: ProjectDate
  due_date: ProjectDate

  members: Array<Member>
  teams: Array<Team>
}

interface ProjectUpdate {
  name: string
  status: number
  type: number
  is_status_custom: boolean
  has_element_status_custom: boolean
  description: string
  begin_date: ProjectDate
  due_date: ProjectDate

  members: Array<Member>
  teams: Array<Team>
}

export default ProjectCode
export { ProjectSearch, ProjectStore, ProjectUpdate }
