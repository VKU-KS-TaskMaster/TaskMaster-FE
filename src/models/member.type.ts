import UserCode from '@models/user.type'
import TeamCode from '@models/team.type'
import ProjectCode from '@models/project.type'
import MilestoneCode from '@models/milestone.type'
import TaskCode from '@models/task.type'

type MemberEntityCode = ProjectCode | MilestoneCode | TaskCode

export interface Member {
  code: UserCode
  status: number
  type: number
}

export interface MemberSearch {
  q: string
}

export interface Team {
  code: TeamCode
  status: number
  type: number
}

export interface MemberUpdate {
  members: Array<Member>
  teams: Array<Team>
}

export default MemberEntityCode
