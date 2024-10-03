import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { ProjectBoardIcon } from '@components/common/Icon'
import { cn } from '@utils/base'

const ProjectItem = ({ title }: { title: string }) => {
  return (
    <Button
      className='hover:text-text-active justify-start text-text-weak'
      variant={ButtonVariant.SQUARE}
      type={ButtonType.PRIMARY}
      icon={<ProjectBoardIcon />}
      size='small'
    >
      <span className='text-sm'>{title}</span>
    </Button>
  )
}

interface ProjectListProps {
  className?: string
  data: string[]
}

const ProjectList: React.FC<ProjectListProps> = ({ className, data }) => {
  return (
    <div className={cn('flex flex-col gap-2 pl-4', className)}>
      {data?.map((item, index) => <ProjectItem key={index} title={item} />)}
    </div>
  )
}
export default ProjectList
