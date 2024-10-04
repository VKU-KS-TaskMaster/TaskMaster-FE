import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { ProjectBoardIcon } from '@components/common/Icon'
import { cn } from '@utils/base'

const ProjectItem = ({ title }: { title: string }) => {
  return (
    <Button className='group justify-start' variant={ButtonVariant.SQUARE} type={ButtonType.PRIMARY} size='small'>
      <ProjectBoardIcon className='mr-1 text-light-icon-weak group-hover:text-light-icon-active dark:text-light-icon-weak dark:group-hover:text-icon-active' />
      <span className='text-sm text-light-text-weak group-hover:text-light-text-active dark:text-text-weak dark:group-hover:text-text-active'>
        {title}
      </span>
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
