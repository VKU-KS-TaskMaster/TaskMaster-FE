import UserCode from '@models/user.type'
import TeamCode from '@models/team.type'
import ProjectCode from '@models/project.type'
import MilestoneCode from '@models/milestone.type'
import TaskCode from '@models/task.type'

type MemberEntityCode = ProjectCode | MilestoneCode | TaskCode

interface Member {
  code: UserCode
  status: number
  type: number
}

interface MemberSearch {
  q: string
}

interface Team {
  code: TeamCode
  status: number
  type: number
}

interface MemberUpdate {
  members: Array<Member>
  teams: Array<Team>
}

export default MemberEntityCode
export { Member, MemberSearch, MemberUpdate, Team }
