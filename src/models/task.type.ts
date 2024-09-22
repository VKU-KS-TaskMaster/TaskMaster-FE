import { Member, Team } from '@models/member.type'
import UserCode from '@models/user.type'
import ProjectCode from '@models/project.type'
import MilestoneCode from '@models/milestone.type'

type TaskCode = string

interface TaskSearch {
  q: string

  user_code: UserCode
  project_code: ProjectCode
  milestone_code: MilestoneCode
  start_date: Date
  end_date: Date

  status: string
  members: string
  teams: string
}

interface TaskStore {
  user_code: UserCode
  project_code: ProjectCode
  milestone_code: MilestoneCode

  name: string
  status: number
  description: string
  begin_date: Date
  due_date: Date

  members: Array<Member>
  teams: Array<Team>
}

interface TaskUpdate {
  milestone_code: MilestoneCode

  name: string
  status: number
  description: string
  begin_date: Date
  due_date: Date

  members: Array<Member>
  teams: Array<Team>
}

export default TaskCode
export { TaskSearch, TaskStore, TaskUpdate }
