import { Member, Team } from '@models/member.type'
import UserCode from '@models/user.type'
import ProjectCode from '@models/project.type'

type MilestoneCode = string

interface MilestoneSearch {
  q: string

  user_code: UserCode
  project_code: ProjectCode
  start_date: Date
  end_date: Date

  status: string
  members: string
  teams: string
}

interface MilestoneStore {
  user_code: UserCode
  project_code: ProjectCode

  name: string
  status: number
  description: string
  begin_date: Date
  due_date: Date

  members: Array<Member>
  teams: Array<Team>
}

interface MilestoneUpdate {
  name: string
  status: number
  description: string
  begin_date: Date
  due_date: Date

  members: Array<Member>
  teams: Array<Team>
}

export default MilestoneCode
export { MilestoneSearch, MilestoneStore, MilestoneUpdate }
