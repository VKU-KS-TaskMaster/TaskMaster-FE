import TaskCode from '@models/task.type'
import UserCode from '@models/user.type'
import SpaceCode from '@models/space.type'
import ProjectCode from '@models/project.type'
import MilestoneCode from '@models/milestone.type'

type CommentCode = string
type CommentEntityCode = SpaceCode | ProjectCode | MilestoneCode | TaskCode

interface CommentSearch {
  entity_code: CommentEntityCode
  parent_code: CommentCode
}

interface CommentStore {
  entity_code: CommentEntityCode

  user_code: UserCode
  tagged_user_code: UserCode
  parent_code: CommentCode
  status: string
  description: string
}

interface CommentUpdate {
  key: CommentCode
  entity_code: CommentEntityCode

  tagged_user_code: UserCode
  status: string
  description: string
}

export default CommentCode
export { CommentSearch, CommentStore, CommentUpdate }
