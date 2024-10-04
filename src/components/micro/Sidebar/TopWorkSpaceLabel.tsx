import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

const TopWorkspaceLabel: React.FC = () => (
  <div className='flex w-full items-center overflow-hidden'>
    <Avatar className='mr-3 flex-shrink-0 bg-[#215256]' shape='square' size={32} icon={<UserOutlined />} />
    <div className='flex-1 overflow-hidden'>
      <span className='block w-40 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-snug text-light-text-active dark:text-text-active'>
        Work Space
      </span>
      <span className='text-xs text-light-text-weak dark:text-text-weak'>Free Forever</span>
    </div>
  </div>
)

export default TopWorkspaceLabel
