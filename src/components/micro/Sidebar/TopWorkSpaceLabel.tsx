import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

const TopWorkspaceLabel: React.FC = () => (
  <div className='flex w-full items-center overflow-hidden'>
    <Avatar
      className='mr-3 flex-shrink-0'
      shape='square'
      size={32}
      style={{ backgroundColor: '#87d068' }}
      icon={<UserOutlined />}
    />
    <div className='flex-1 overflow-hidden'>
      <span className='text-text-light block w-40 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-snug'>
        Work Space
      </span>
      <span className='text-xs'>Free Forever</span>
    </div>
  </div>
)

export default TopWorkspaceLabel
